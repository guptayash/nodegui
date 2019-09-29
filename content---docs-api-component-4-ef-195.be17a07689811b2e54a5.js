(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,d=p[c+"."+u]||p[u]||l[u]||a;return n?o.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(0);var r=n(161);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={sidebar_label:"Component",title:"Component"},c=[{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[]}],s={rightToc:c},l="wrapper";function p(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(l,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Abstract class that is root most base class for all widgets and layouts in the NodeGui World.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This class is used to add core properties to all widgets, layouts etc in NodeGui world. Currently it helps us maintain references to the native C++ instance of the widget or layout. It also helps in preventing gc of child elements of a layout or widget")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Component")," is an abstract class and hence no instances of the same should be created. It exists so that we can add core functionalities to all widgets and layouts easily. This is an internal class."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Component is the base class for YogaWidget and NodeLayout which means all widgets and layouts inherit it aswell. Its the root base class in NodeGui world")),Object(r.b)("p",null,"To get a clearer picture you can take a look at the Component source code here: ",Object(r.b)("inlineCode",{parentName:"p"},"src/lib/core/Component/index.ts")),Object(r.b)("h2",{id:"static-methods"},"Static Methods"),Object(r.b)("p",null,"There are no public static methods for Component."),Object(r.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(r.b)("p",null,"There are no public instance properties for Component."),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("p",null,"There are no public instance methods for Component."))}p.isMDXComponent=!0}}]);