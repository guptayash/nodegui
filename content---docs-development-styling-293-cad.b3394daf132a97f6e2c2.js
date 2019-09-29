(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));n(0);var a=n(161);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={},r=[{value:"Painting",id:"painting",children:[]},{value:"Layout",id:"layout",children:[{value:"Implementation",id:"implementation",children:[]},{value:"FlexItem",id:"flexitem",children:[]},{value:"YogaWidget",id:"yogawidget",children:[]},{value:"NodeWidget",id:"nodewidget",children:[]}]}],s={rightToc:r},c="wrapper";function d(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(c,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-styling-works"},"How styling works?"),Object(a.b)("p",null,"There are two parts to styling."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Layout"),Object(a.b)("li",{parentName:"ol"},"Painting : Colors, text color, etc")),Object(a.b)("h2",{id:"painting"},"Painting"),Object(a.b)("p",null,"The regular styles such as text color, font-size, font weight etc are achieved using Qt's stylesheet.\nWe just call Qt's setStyleSheet method on the native widget and pass in the styles as a string."),Object(a.b)("p",null,"This method is implemented as part of ",Object(a.b)("inlineCode",{parentName:"p"},"QWIDGET_WRAPPED_METHODS_DECLARATION")," in ",Object(a.b)("inlineCode",{parentName:"p"},"qwidget_macro.h"),".\nSo all widgets using this macro will get the setStyleSheet method."),Object(a.b)("h2",{id:"layout"},"Layout"),Object(a.b)("p",null,"Layouting is basically positioning widgets on the screen. It takes into account everything from margins, paddings, positions etc. Our main focus will be Flex layouting. For flex layout we are using yoga library from facebook. This is the same library used by React Native. Before looking at flaxlayout in this libarary I recommend browsing Yoga's C API doc here: ",Object(a.b)("inlineCode",{parentName:"p"},"deps/yoga/doc.md")),Object(a.b)("p",null,"In case ",Object(a.b)("inlineCode",{parentName:"p"},"nodegui"),". I have implemented a custom Qt layout by extending ",Object(a.b)("inlineCode",{parentName:"p"},"QLayout"),", hence Qt is able to take over automagically when window is resized or any other layouting event occurs.\nYou can find the implementation at ",Object(a.b)("inlineCode",{parentName:"p"},"src/cpp/core/FlexLayout/flexlayout.h"),"."),Object(a.b)("p",null,"The c++ api provided by this custom layout looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-cpp"}),"    // FlexLayout is a custom Layout built for QT. This layout will be used to layout qt widgets using facebook's yoga library.\n    // Thus giving ability to layout Qt Widgets using Flexbox.\n    // Usage:\n    QWidget *container = new QWidget();\n    YGNodeRef root = YGNodeNew();\n    YGNodeRef child1 = YGNodeNew();\n    YGNodeRef child2 = YGNodeNew();\n    FlexLayout * flayout = new FlexLayout(container,root);\n// or  FlexLayout * flayout = new FlexLayout(container);\n// or  FlexLayout *flayout = new FlexLayout();\n\n    flayout->addWidget(btn1, child1);\n    flayout->addWidget(btn2, child2);\n\n")),Object(a.b)("p",null,"This layout is exported to Javascript side via ",Object(a.b)("inlineCode",{parentName:"p"},"src/cpp/core/FlexLayout/flexlayout_wrap.h")),Object(a.b)("p",null,"The JS Api looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),'const view = new QWidget(rootView);\n\nconst flayout = new FlexLayout(); // Create layout\nflayout.setFlexNode(view.getFlexNode()); // Set widget\'s flex as layout\'s flex node.\n\nview.setLayout(flayout); // set layout as view\'s layout\n\nconst label = new QLabel(view);\nlabel.setText("Hello12321");\n\nconst label2 = new QLabel(view);\nlabel2.setText("SECOND LABEL");\n\nflayout.addWidget(label2, label2.getFlexNode()); // Add child to layout\nflayout.addWidget(label, label.getFlexNode()); // Add child to layout\n')),Object(a.b)("h3",{id:"implementation"},"Implementation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Every widget that wants to use flex layout should extend from ",Object(a.b)("inlineCode",{parentName:"p"},"flexItem")," found at ",Object(a.b)("inlineCode",{parentName:"p"},"src/cpp/core/FlexLayout/flexitem.h"),".\nFor example, see ",Object(a.b)("inlineCode",{parentName:"p"},"nlabel.h")," at ",Object(a.b)("inlineCode",{parentName:"p"},"src/cpp/QtWidgets/QLabel/nlabel.h")),Object(a.b)("p",{parentName:"li"},"NLabel inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"NodeWidget")," which inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"YogaWidget")," which inturn inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"FlexItem")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FlexItem")," adds a YogaNode to every widget."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"YogaWidget")," adds Yoga specific q-properties to the widget, which is useful to assign yoga properties via qstylesheet. More on this below."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"NodeWidget")," adds layout support via ",Object(a.b)("inlineCode",{parentName:"li"},"YogaWidget")," and event handling support via ",Object(a.b)("inlineCode",{parentName:"li"},"EventWidget"))))),Object(a.b)("h3",{id:"flexitem"},"FlexItem"),Object(a.b)("p",null,"FlexItem : ",Object(a.b)("inlineCode",{parentName:"p"},"src/cpp/core/FlexLayout/flexitem.h")," add flexnode to each widget.\nFlexItem adds methods like getFlexNode."),Object(a.b)("h3",{id:"yogawidget"},"YogaWidget"),Object(a.b)("p",null,"Qt StyleSheet allows you to specify style properties just like in web. You could specify font-size, margin, padding, etc. Qt StyleSheet also allows custom style properties via Qt's q-property system."),Object(a.b)("p",null,"So in order to enable yoga based properties like alignItems, justifyContent, flex, etc via qt's stylesheet we\ndeclare and define q properties for each of those custom properties we want.\nThis allows us to use something like:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"view.setStyleSheet(`\n    background-color:green;\n    qproperty-flex: 1;\n    qproperty-alignItems: 'center';\n`);\n")),Object(a.b)("p",null,"Notice ",Object(a.b)("inlineCode",{parentName:"p"},"qproperty-")," prefix? These are the custom q-properties we defined in ",Object(a.b)("inlineCode",{parentName:"p"},"YogaWidget.h"),". We do not need to prefix ",Object(a.b)("inlineCode",{parentName:"p"},"qproperty-")," if a stylehsheet string is passed through ",Object(a.b)("inlineCode",{parentName:"p"},"StyleSheet.create()"),". StyleSheet.create has an autoprefixer which will do the right thing."),Object(a.b)("h3",{id:"nodewidget"},"NodeWidget"),Object(a.b)("p",null,"Every widget we implement should inherit from NodeWidget. This helps us add all the properties we want in the widgets via a single class. NodeWidget is the class that contains properties and methods shared by all widgets. This class allows us to add features to all widgets easily."))}d.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a),o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,b=d[r+"."+p]||d[p]||c[p]||o;return n?i.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(b,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);