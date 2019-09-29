(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{161:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},d=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=i(a),s=n,p=u[d+"."+s]||u[s]||c[s]||r;return a?o.a.createElement(p,Object.assign({},{ref:t},l,{components:a})):o.a.createElement(p,Object.assign({},{ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[l]="string"==typeof e?e:n,i[1]=d;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));a(0);var n=a(161);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i={sidebar_label:"QGridLayout",title:"QGridLayout"},d=[{value:"Example",id:"example",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"layout.addWidget(childWidget)",id:"layoutaddwidgetchildwidget",children:[]},{value:"layout.removeWidget(childWidget)",id:"layoutremovewidgetchildwidget",children:[]}]}],l={rightToc:d},c="wrapper";function u(e){var t=e.components,a=r(e,["components"]);return Object(n.b)(c,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The QGridLayout class lays out widgets in a grid.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(n.b)("a",o({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qgridlayout.html"}),"QGridLayout"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"QGridLayout inherits from ",Object(n.b)("a",o({parentName:"strong"},{href:"/docs/api/NodeLayout"}),"NodeLayout"))),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'const { QGridLayout, QWidget, QLabel } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\nconst layout = new QGridLayout();\nview.setLayout(layout);\n\nconst label = new QLabel();\nlabel.setText("label1");\nconst label2 = new QLabel();\nlabel2.setText("label2");\n\nlayout.addWidget(label);\nlayout.addWidget(label2);\n')),Object(n.b)("h2",{id:"static-methods"},"Static Methods"),Object(n.b)("p",null,"QGridLayout can access all the static methods defined in ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/api/NodeLayout"}),"NodeLayout")),Object(n.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(n.b)("p",null,"QGridLayout can access all the instance properties defined in ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/api/NodeLayout"}),"NodeLayout")),Object(n.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(n.b)("p",null,"QGridLayout can access all the instance methods defined in ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/api/NodeLayout"}),"NodeLayout")),Object(n.b)("p",null,"Additionally it also has the following instance methods:"),Object(n.b)("h3",{id:"layoutaddwidgetchildwidget"},Object(n.b)("inlineCode",{parentName:"h3"},"layout.addWidget(childWidget)")),Object(n.b)("p",null,"Adds the childWidget to the layout. It calls the native method QGridLayout ",Object(n.b)("a",o({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#show"}),"QGridLayout: addWidget"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"childWidget")," NodeWidget - child widget that needs to be added to the layout.")),Object(n.b)("h3",{id:"layoutremovewidgetchildwidget"},Object(n.b)("inlineCode",{parentName:"h3"},"layout.removeWidget(childWidget)")),Object(n.b)("p",null,"Removes the childWidget from the layout. It calls the native method of custom QGridLayout. ",Object(n.b)("a",o({parentName:"p"},{href:"https://doc.qt.io/qt-5/qlayout.html#removeWidget"}),"QGridLayout: removeWidget"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"childWidget")," NodeWidget - child widget that needs to be added to the layout.")))}u.isMDXComponent=!0}}]);