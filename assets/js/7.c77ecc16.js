(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{405:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"authoring-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authoring-templates"}},[e._v("#")]),e._v(" Authoring templates")]),e._v(" "),a("p",[e._v("Tenpureto tries to make template authoring as easy as possible. You don't need to learn any new templating language, a\ntemplate is just a regular Git repository, that you can build and test as you would usually do. Every template feature\nis a branch in the template repository, and the only special thing you need to do is to add a "),a("code",[e._v(".template.yaml")]),e._v(" file to\ntell Tenpureto how to use the template.")]),e._v(" "),a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),a("p",[e._v("One of the big advantages of Tenpureto is that the templates are composable. This allows starting projects with a\ntemplate that is as close as possible to the desired set of features while keeping template maintenance manageable. When\nyou create a template think of the options you want to provide. The examples of template features you might think of\nare:")]),e._v(" "),a("ul",[a("li",[e._v("Programming languages (e.g. JavaScript and TypeScript flavors of the same template),")]),e._v(" "),a("li",[e._v("Project types (e.g. a library, a pure backend service, or a service that has both a backend and a frontend),")]),e._v(" "),a("li",[e._v("Service deployment alternatives (e.g. different cloud providers, Kubernetes, or serverless),")]),e._v(" "),a("li",[e._v("CI services.")])]),e._v(" "),a("p",[e._v('You will create a template branch for each of the features you want to provide, and Tenpureto will take care of merging\nthem. Note that some features can be built on top of others. For example, a "full-stack service" will be an extension to\nthe "pure backend service".')]),e._v(" "),a("p",[e._v("The second aspect you need to think of when you create a template is variables. Tenpureto templates don't have any\nspecial syntax to mark the variables to be replaced. All you need is to define the variables in "),a("code",[e._v(".template.yaml")]),e._v(", and\nTenpureto will replace all occurrences. It will also take care of using the correct style of the variable value:\n"),a("code",[e._v("template-project")]),e._v(" will be replaced with "),a("code",[e._v("my-cool-service")]),e._v(", while "),a("code",[e._v("Template Project")]),e._v(" will become "),a("code",[e._v("My Cool Service")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"template-descriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-descriptor"}},[e._v("#")]),e._v(" Template descriptor")]),e._v(" "),a("p",[e._v("Every branch of the template needs to have a "),a("code",[e._v(".template.yaml")]),e._v(" file describing the feature this branch provides and\nrelations to other features and template variables. The file format is the following:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("variables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("<variable name>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <value used in the template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("features")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("<feature name>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <feature description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("stability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" stable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" experimental "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" deprecated\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hidden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" false\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("conflicts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" <feature name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("excludes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" <exclude pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("variables")]),e._v(" section defines all template variables relevant to the template feature. It is a dictionary, with\nhuman-friendly variable names as keys, and default variable values as dictionary values. Every occurence of a default\nvariable value in the template (both in a file content and in a file path) will be replaced with a value provided by a\nuser. Tenpureto will match the style of the value when doing a replacement. In the "),a("code",[e._v(".template.yaml")]),e._v(" try to use the most\nnatural value style. For example, the project description will probably be just a text, and for a Java package name, it\nmakes sense to use a dot-separated value.")]),e._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("features")]),e._v(" section you describe the template features provided by the template branch. The feature names must\nmatch the Git branch names. You need to list all features provided by this template branch, including the ones coming\nfrom the parent branches. For each feature you may provide some additional information:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("description")]),e._v(" — human-friendly feature description that will be shown by the "),a("code",[e._v("tenpureto")]),e._v(" CLI when using the template,")]),e._v(" "),a("li",[a("code",[e._v("stability")]),e._v(" — how mature the feature is, all features that are not marked as "),a("code",[e._v("stable")]),e._v(" will have a corresponding note\nin the CLI,")]),e._v(" "),a("li",[a("code",[e._v("hidden")]),e._v(" — whether the feature should be available for selection in the CLI. In some cases, it is convenient to have a\nfeature branch that is not directly available for selection, but that template authors can use to share code between\nother branches.")])]),e._v(" "),a("h3",{attrs:{id:"conflicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conflicts"}},[e._v("#")]),e._v(" Conflicts")]),e._v(" "),a("p",[e._v("In some cases, you may want to mark features as conflicting with each other. For example, you probably don't want to\nhave a project built by two different CI services simultaneously. You can list the features that conflict with the\ncurrent one in the "),a("code",[e._v("conflicts")]),e._v(" section.")]),e._v(" "),a("h3",{attrs:{id:"excludes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excludes"}},[e._v("#")]),e._v(" Excludes")]),e._v(" "),a("p",[e._v("Sometimes you want to have files in the template repository that shouldn't end up in generated projects. The typical\nexamples are README files, or a CI pipeline definition (if the template uses a different CI system than the target\nprojects). You can list these files in the "),a("code",[e._v("excludes")]),e._v(" section using the same pattern format as is used for\n"),a("a",{attrs:{href:"https://git-scm.com/docs/gitignore#_pattern_format",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitignore"),a("OutboundLink")],1),e._v(" files.")])])}),[],!1,null,null,null);t.default=n.exports}}]);