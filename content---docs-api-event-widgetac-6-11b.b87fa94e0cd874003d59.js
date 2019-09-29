(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a),r=i.a.createContext({}),l=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,b=d[o+"."+p]||d[p]||c[p]||r;return n?i.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(b,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));n(0);var a=n(161);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={sidebar_label:"EventWidget",title:"EventWidget"},o=[{value:"Example",id:"example",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"widget.addEventListener(eventType, callback)",id:"widgetaddeventlistenereventtype-callback",children:[]},{value:"widget.removeEventListener(eventType, callback?)",id:"widgetremoveeventlistenereventtype-callback",children:[]}]}],s={rightToc:o},c="wrapper";function d(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(c,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Abstract class that adds event handling support to all widgets.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This class implements an event emitter and merges it with Qt's event and signal system. It allows us to register and unregister event and signal listener at will from javascript")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"EventWidget")," is an abstract class and hence no instances of the same should be created. It exists so that we can add event handling functionalities to all widget's easily. This is an internal class."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"EventWidget is the base class for NodeWidget which means all widgets inherit it aswell. It inherits from another abstract class ",Object(a.b)("a",i({parentName:"strong"},{href:"/docs/api/YogaWidget"}),"YogaWidget"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'const { QWidget, QWidgetEvents } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\n// addEventListener is a method from EventWidget\nview.addEventListener("MouseMove", () => {\n  console.log("mouse moved");\n});\n\nor;\n\n// addEventListener is a method from EventWidget\nview.addEventListener(QWidgetEvents.MouseMove, () => {\n  console.log("mouse moved");\n});\n')),Object(a.b)("p",null,"EventWidget will contain all methods and properties that are useful to handle events and signals of widgets in the NodeGui world."),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("p",null,"EventWidget can access all the static methods defined in ",Object(a.b)("a",i({parentName:"p"},{href:"/docs/api/YogaWidget"}),"YogaWidget")),Object(a.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(a.b)("p",null,"EventWidget can access all the instance properties defined in ",Object(a.b)("a",i({parentName:"p"},{href:"/docs/api/YogaWidget"}),"YogaWidget")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("p",null,"EventWidget can access all the instance methods defined in ",Object(a.b)("a",i({parentName:"p"},{href:"/docs/api/YogaWidget"}),"YogaWidget")),Object(a.b)("p",null,"Additionally it also has the following instance methods:"),Object(a.b)("h3",{id:"widgetaddeventlistenereventtype-callback"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.addEventListener(eventType, callback)")),Object(a.b)("p",null,"Adds an event listener to the widget to listen to events that occur on a widget."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"eventType")," string - The event or signal you wish to listen to for the widget. Every widget exports its own enum of all possible events and signal types it can take. For example: ",Object(a.b)("inlineCode",{parentName:"p"},"QWidget")," exports ",Object(a.b)("inlineCode",{parentName:"p"},"QWidgetEvents"),", ",Object(a.b)("inlineCode",{parentName:"p"},"QPushButton")," exports ",Object(a.b)("inlineCode",{parentName:"p"},"QPushButtonEvents"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"callback")," (payload?: NativeEvent | any) => void - A callback function to invoke when an event occurs. Usually you receive a nativeEvent or a string as argument."))),Object(a.b)("h3",{id:"widgetremoveeventlistenereventtype-callback"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.removeEventListener(eventType, callback?)")),Object(a.b)("p",null,"Removes the specified event listener from the widget."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"eventType")," string - The event or signal for which you wish to remove the listener.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"callback")," Function (",Object(a.b)("em",{parentName:"p"},"Optional"),") - If specified the removeEventListener will remove the specified listener only, otherwise all eventlisteners of the eventType on the widget will be removed."))))}d.isMDXComponent=!0}}]);