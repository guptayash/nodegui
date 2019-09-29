(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));t(0);var o=t(161);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={sidebar_label:"Native Node Modules",title:"Using native Node Modules"},l=[{value:"How to install native modules",id:"how-to-install-native-modules",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Modules that rely on node-pre-gyp",id:"modules-that-rely-on-node-pre-gyp",children:[]}],u={rightToc:l},d="wrapper";function s(e){var n=e.components,t=a(e,["components"]);return Object(o.b)(d,r({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Native Node modules are supported by NodeGui, but since NodeGui is very\nlikely to use a different V8 version from the Node binary installed on your\nsystem, the modules you use will need to be recompiled for NodeGui's node/v8 version. Otherwise,\nyou will get the following class of error when you try to run your app:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-sh"}),"Error: The module '/path/to/native/module.node'\nwas compiled against a different Node.js version using\nNODE_MODULE_VERSION $XYZ. This version of Node.js requires\nNODE_MODULE_VERSION $ABC. Please try re-compiling or re-installing\nthe module (for instance, using `npm rebuild` or `npm install`).\n")),Object(o.b)("h2",{id:"how-to-install-native-modules"},"How to install native modules"),Object(o.b)("p",null,"To compile native Node modules against a build of NodeGui that doesn't\nmatch a public release, instruct ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," to use the version of Qode (NodeJs) you have bundled\nwith your custom build."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm rebuild --nodedir=/path/to/nodegui/vendor/qode\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-sh"}),"qode /path/to/npm rebuild\n")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"If you installed a native module and found it was not working, you need to check\nthe following things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When in doubt, rebuild native modules with qode first."),Object(o.b)("li",{parentName:"ul"},"Make sure the native module is compatible with the target platform and\narchitecture for your NodeGui app."),Object(o.b)("li",{parentName:"ul"},"After you upgrade NodeGui, you usually need to rebuild the modules.")),Object(o.b)("h2",{id:"modules-that-rely-on-node-pre-gyp"},"Modules that rely on ",Object(o.b)("inlineCode",{parentName:"h2"},"node-pre-gyp")),Object(o.b)("p",null,"The ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/mapbox/node-pre-gyp"}),Object(o.b)("inlineCode",{parentName:"a"},"node-pre-gyp")," tool")," provides a way to deploy native Node\nmodules with prebuilt binaries, and many popular modules are using it."),Object(o.b)("p",null,"Usually those modules work fine under NodeGui, but sometimes when NodeGui uses\na newer version of V8 than Node and/or there are ABI changes, bad things may\nhappen. So in general, it is recommended to always build native modules from\nsource code."))}s.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o),a=r.a.createContext({}),i=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return r.a.createElement(a.Provider,{value:n},e.children)};var u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),p=o,c=s[l+"."+p]||s[p]||d[p]||a;return t?r.a.createElement(c,Object.assign({},{ref:n},u,{components:t})):r.a.createElement(c,Object.assign({},{ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);