(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{161:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n),l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p[o+"."+d]||p[d]||s[d]||l;return r?a.a.createElement(b,Object.assign({},{ref:t},i,{components:r})):a.a.createElement(b,Object.assign({},{ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[i]="string"==typeof e?e:n,c[1]=o;for(var d=2;d<l;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));r(0);var n=r(161);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c={sidebar_label:"QScrollArea",title:"QScrollArea"},o=[{value:"Example",id:"example",children:[]},{value:"new QScrollArea(parent?)",id:"new-qscrollareaparent",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"scrollArea.setWidget(widget)",id:"scrollareasetwidgetwidget",children:[]}]}],i={rightToc:o},s="wrapper";function p(e){var t=e.components,r=l(e,["components"]);return Object(n.b)(s,a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A ",Object(n.b)("inlineCode",{parentName:"p"},"QScrollArea")," provides a scrolling view onto another widget.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(n.b)("a",a({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qscrollarea.html"}),"QScrollArea class"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"QScrollArea inherits from ",Object(n.b)("a",a({parentName:"strong"},{href:"/docs/api/QAbstractScrollArea"}),"QAbstractScrollArea"))),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'const { QScrollArea } = require("@nodegui/nodegui");\n\nconst scrollArea = new QScrollArea();\nscrollArea.setInlineStyle("flex: 1; width:\'100%\';");\n\nconst imageLabel = new QLabel();\nconst pixmap = new QPixmap(\n  path.resolve(__dirname, "../extras/assets/kitchen.png")\n);\nimageLabel.setPixmap(pixmap);\n\nscrollArea.setWidget(imageLabel);\n')),Object(n.b)("h3",{id:"new-qscrollareaparent"},Object(n.b)("inlineCode",{parentName:"h3"},"new QScrollArea(parent?)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"parent")," NodeWidget (",Object(n.b)("em",{parentName:"li"},"optional"),"). Any widget inheriting from NodeWidget can be passed as a parent. This will make this widget, the child of the parent widget.")),Object(n.b)("h2",{id:"static-methods"},"Static Methods"),Object(n.b)("p",null,"QScrollArea can access all the static methods defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/QAbstractScrollArea"}),"QAbstractScrollArea")),Object(n.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(n.b)("p",null,"QScrollArea can access all the instance properties defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/QAbstractScrollArea"}),"QAbstractScrollArea")),Object(n.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(n.b)("p",null,"QScrollArea can access all the instance methods defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/QAbstractScrollArea"}),"QAbstractScrollArea"),". Additionally it also has the following instance methods:"),Object(n.b)("h3",{id:"scrollareasetwidgetwidget"},Object(n.b)("inlineCode",{parentName:"h3"},"scrollArea.setWidget(widget)")),Object(n.b)("p",null,"Sets the scroll area's widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qscrollarea.html#setWidget"}),"QScrollArea: setWidget"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"widget")," NodeWidget - Any widget you want to enclose in a scroll area.")))}p.isMDXComponent=!0}}]);