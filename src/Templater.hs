{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveAnyClass #-}

module Templater where

import           Data.Text                      ( Text )
import qualified Data.Text                     as T
import qualified Data.ByteString.Lazy          as Lazy
import           Data.Set                       ( Set )
import           Data.Map                       ( Map )
import qualified Data.Map                      as Map
import           Data.Maybe
import           Data.Foldable
import           Control.Monad.IO.Class
import           Control.Monad.Catch
import           Logging
import           Path
import           Path.IO
import qualified Data.Text.ICU                 as ICU
import           Data.Text.ICU.Replace
import           Templater.CaseConversion

data TemplaterSettings = TemplaterSettings
    { templaterVariables :: Map Text Text
    , templaterExcludes :: Set Text
    }

data CompiledTemplaterSettings = CompiledTemplaterSettings
    { translate :: Text -> Text
    }

data TemplaterException = TemplaterException
    deriving (Show, Exception)

expandReplacement :: (Text, Text) -> [(Text, Text)]
expandReplacement (a, b) = [(a, b)]

expandReplacements :: Map Text Text -> [(Text, Text)]
expandReplacements = concatMap expandReplacement . Map.toList

compileSettings :: TemplaterSettings -> CompiledTemplaterSettings
compileSettings TemplaterSettings { templaterVariables = tv, templaterExcludes = _ }
    = CompiledTemplaterSettings
        { translate = replaceVariables (expandReplacements tv)
        }

replaceVariables :: [(Text, Text)] -> Text -> Text
replaceVariables rules = replaceAll regex replace
  where
    rulesMap = Map.fromList rules
    quote text = "\\Q" <> T.replace "\\E" "\\\\E" text <> "\\E"
    regex = ICU.regex [] $ T.intercalate "|" $ fmap (quote . fst) rules
    findReplacement match = fromMaybe matchText (Map.lookup matchText rulesMap)
        where matchText = fold $ ICU.group 0 match
    replace = rtfn findReplacement

translateFile
    :: MonadThrow m
    => CompiledTemplaterSettings
    -> Path Rel File
    -> m (Path Rel File)
translateFile settings =
    parseRelFile . T.unpack . translate settings . T.pack . fromRelFile

copyAbsFile
    :: (MonadIO m, MonadLog m)
    => CompiledTemplaterSettings
    -> Path Abs File
    -> Path Abs File
    -> m ()
copyAbsFile settings src dst = do
    logDebug $ "Copying" <+> pretty src <+> "to" <+> pretty dst
    content <- liftIO $ Lazy.readFile (toFilePath src)
    ensureDir (parent dst)
    liftIO $ Lazy.writeFile (toFilePath dst) content

copyRelFile
    :: (MonadIO m, MonadThrow m, MonadLog m)
    => CompiledTemplaterSettings
    -> Path Abs Dir
    -> Path Abs Dir
    -> Path Rel File
    -> m ()
copyRelFile settings src dst srcFile = do
    dstFile <- translateFile settings srcFile
    copyAbsFile settings (src </> srcFile) (dst </> dstFile)

copy
    :: (MonadIO m, MonadThrow m, MonadLog m)
    => TemplaterSettings
    -> Path Abs Dir
    -> Path Abs Dir
    -> m ()
copy settings src dst =
    let compiledSettings = compileSettings settings
        dirWalker dir subdirs files = do
            traverse_ (\f -> fileWalker (dir </> f)) files
            return $ WalkExclude (exclude subdirs)
        fileWalker = copyRelFile compiledSettings src dst
        exclude    = filter ((==) ".git/" . fromRelDir)
    in  walkDirRel dirWalker src
