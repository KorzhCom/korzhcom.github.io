"use strict";(self.webpackChunkmetro_5_docs=self.webpackChunkmetro_5_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,slug:"intro",sidebar_label:"Getting Started"},a="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Welcome to Metro 5. Metro 5 is a component library in the style of Windows Metro (new name Widows Fluent Design).",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/metroui/docs/docs/intro",draft:!1,editUrl:"https://github.com/olton/metro5-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"intro",sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Intro to Modules",permalink:"/metroui/docs/docs/modules/intro"}},s={},u=[{value:"Modules",id:"modules",level:2},{value:"Application level",id:"application-level",level:2},{value:"User level",id:"user-level",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Welcome to Metro 5. Metro 5 is a component library in the style of Windows Metro (new name Widows Fluent Design). "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metro 5 includes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modules that facilitate work with DOM, strings, dates, color, and animation."),(0,o.kt)("li",{parentName:"ul"},"More than 100 ready to use components in the style of Windows Metro"),(0,o.kt)("li",{parentName:"ul"},"A set of additional CSS styles for quick manipulation of HTML elements"),(0,o.kt)("li",{parentName:"ul"},"A set of additional useful JavaScript functions")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The general structure of Metro 5 is presented in the figure below.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Metro5 Structure",src:n(7614).Z,width:"668",height:"584"})),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Metro 5 contains 6 common modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query")," is a jQuery analog module, has almost all the necessary methods, with the same names and the same action as the mentioned jQuery."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Datetime")," - the module contains functions for convenient work with dates"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"String")," - the module contains functions for convenient work with strings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTML")," - the module contains JS projection functions on HTML elements, you can easily and simply write HTML code without going beyond JavaScript code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Animation")," - the module contains functions for animation of HTML elements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Color")," - the module contains functions for convenient work with colors")),(0,o.kt)("h2",{id:"application-level"},"Application level"),(0,o.kt)("p",null,"At the application level, Metro 5 includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Common CSS")," - additional styles for quick manipulation of HTML elements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Components")," - a set of ready-to-use components"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Routines")," - useful JS functions")),(0,o.kt)("h2",{id:"user-level"},"User level"),(0,o.kt)("p",null,"At the user code layer, you can interact with Metro 5 using HTML and JavaScript code."))}m.isMDXComponent=!0},7614:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metro5-struct-7da0ae6dcc0d238eb2ff763f86830155.png"}}]);