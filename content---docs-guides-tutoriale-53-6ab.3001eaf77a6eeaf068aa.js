(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));t(0);var a=t(161);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r={sidebar_label:"Learn the Basics",title:"Learn the Basics"},s=[{value:"NodeGui development in a nutshell",id:"nodegui-development-in-a-nutshell",children:[]},{value:"What's going on here?",id:"whats-going-on-here",children:[]},{value:"Trying out the starter project",id:"trying-out-the-starter-project",children:[]},{value:"What else other than a basic window?",id:"what-else-other-than-a-basic-window",children:[]}],l={rightToc:s},c="wrapper";function u(e){var n=e.components,t=i(e,["components"]);return Object(a.b)(c,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NodeGui uses native components instead of web based components as building blocks. So to understand the basic structure of a NodeGui app, you need to be familiar with Javascript or Typescript. This tutorial is aimed at everyone who has some web experience with web development."),Object(a.b)("h2",{id:"nodegui-development-in-a-nutshell"},"NodeGui development in a nutshell"),Object(a.b)("p",null,"As far as development is concerned, an NodeGui application is essentially a Node.js application. The starting point is a ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," that is identical to that of a Node.js module. A most basic NodeGui app would have the following\nfolder structure:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-text"}),"your-app/\n├── package.json\n├── index.js\n")),Object(a.b)("p",null,"All APIs and features found in NodeGui are accessible through the ",Object(a.b)("inlineCode",{parentName:"p"},"@nodegui/nodegui")," module, which can be required like any other Node.js module. Additionally you have access to all Node.js apis and node modules."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'require("@nodegui/nodegui");\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nodegui/nodegui")," module exports features in namespaces. As an example, a window can be created\nusing the ",Object(a.b)("inlineCode",{parentName:"p"},"QMainWindow")," class. A simple ",Object(a.b)("inlineCode",{parentName:"p"},"main.js")," file might open a window:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'const { QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\nwin.show();\n\nglobal.win = win; // To prevent win from being garbage collected.\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," should create windows and handle all the system events your\napplication might encounter."),Object(a.b)("h2",{id:"whats-going-on-here"},"What's going on here?"),Object(a.b)("p",null,"Firstly, we are running a regular Node.js app. This means that we are not running in a browser environment. The window you see is actually a native widget created by Qt. QMainWindow is essentially a lightweight javascript wrapper over Qt's QMainWindow. Hence every method you call on QMainWindow instance is actually affecting a native window widget. This is very light weight as compared to browser based solutions and hence is more closer to the Operating system.s"),Object(a.b)("h2",{id:"trying-out-the-starter-project"},"Trying out the starter project"),Object(a.b)("p",null,"Clone and run the code by using the\n",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/nodegui/nodegui-starter"}),Object(a.b)("inlineCode",{parentName:"a"},"nodegui/nodegui-starter"))," repository."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": Running this requires ",Object(a.b)("a",o({parentName:"p"},{href:"https://git-scm.com"}),"Git")," and ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sh"}),"# Clone the repository\n$ git clone https://github.com/nodegui/nodegui-starter\n# Go into the repository\n$ cd nodegui-starter\n# Install dependencies\n$ npm install\n# Run the app\n$ npm start\n")),Object(a.b)("h2",{id:"what-else-other-than-a-basic-window"},"What else other than a basic window?"),Object(a.b)("p",null,"NodeGui has support for basic widgets like QWidget (similar to div), QCheckBox, QPushButton and many more.\nYou can take a look at the list of native widgets that NodeGui currently supports here : ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/api/QWidget"}),"Native widgets in NodeGui"),".\nWith time more widgets and APIs will be added to NodeGui. Apart from modules in NodeGui, you also have access to the entire node modules ecosystem. Thus, any node module that you can use with Node.js, can be used with NodeGui. This makes it extremely powerful."),Object(a.b)("p",null,"Fine, I want something more custom and beautiful than just native looking widgets. What do I do?"),Object(a.b)("p",null,"To make things more beautiful, you will have to ",Object(a.b)("a",o({parentName:"p"},{href:"styling"}),"learn about styling"),". Lets take a look at that next."))}u.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a),i=o.a.createContext({}),r=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=r(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=r(t),d=a,p=u[s+"."+d]||u[d]||c[d]||i;return t?o.a.createElement(p,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(p,Object.assign({},{ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);