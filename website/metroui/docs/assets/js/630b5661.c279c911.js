"use strict";(self.webpackChunkmetro_5_docs=self.webpackChunkmetro_5_docs||[]).push([[848],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=m(n),N=r,c=u["".concat(o,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},2563:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,sidebar_label:"Static Methods"},i="Query Static Methods",d={unversionedId:"modules/query/static-methods",id:"modules/query/static-methods",title:"Query Static Methods",description:"Query container a lot of useful static methods to facilitate interaction with various objects:",source:"@site/docs/modules/query/static-methods.md",sourceDirName:"modules/query",slug:"/modules/query/static-methods",permalink:"/metroui/docs/docs/modules/query/static-methods",draft:!1,editUrl:"https://github.com/olton/metro5-docs/docs/modules/query/static-methods.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Static Methods"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/metroui/docs/docs/modules/query/overview"},next:{title:"Internal Methods",permalink:"/metroui/docs/docs/modules/query/internal-methods"}},o={},m=[{value:"Utils",id:"utils",level:2},{value:"Document elements",id:"document-elements",level:2},{value:"Function",id:"function",level:2},{value:"Device",id:"device",level:2},{value:"Element",id:"element",level:2}],p={toc:m},u="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-static-methods"},"Query Static Methods"),(0,r.kt)("p",null,"Query container a lot of useful static methods to facilitate interaction with various objects:"),(0,r.kt)("h2",{id:"utils"},"Utils"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.dataset")),(0,r.kt)("td",{parentName:"tr",align:null},"access to internal dataset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.matches")),(0,r.kt)("td",{parentName:"tr",align:null},"wrapper for ",(0,r.kt)("inlineCode",{parentName:"td"},"matches")," function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.script")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if current host is localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.dark")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if current theme is ",(0,r.kt)("inlineCode",{parentName:"td"},"dark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.undef(val)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if value is ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.iif(condition, value_true, value_false)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"value_true")," if condition is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"value_false")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.nvl(val, ifNullValue)")),(0,r.kt)("td",{parentName:"tr",align:null},"if ",(0,r.kt)("inlineCode",{parentName:"td"},"val")," is null or undefined, will return ",(0,r.kt)("inlineCode",{parentName:"td"},"ifNullValue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.coalesce(val, ifNullValue, ...)")),(0,r.kt)("td",{parentName:"tr",align:null},"function return first not null argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.serialize(form or object)")),(0,r.kt)("td",{parentName:"tr",align:null},"function for serializing form or object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.script(val)")),(0,r.kt)("td",{parentName:"tr",align:null},"inject javasctip into page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.global()")),(0,r.kt)("td",{parentName:"tr",align:null},"Setup global to $")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.noConflict()")),(0,r.kt)("td",{parentName:"tr",align:null},"Setup global to $")))),(0,r.kt)("h2",{id:"document-elements"},"Document elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Preparing"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.html")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("html")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"html")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.doctype")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("doctype")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"doctype")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.head")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("head")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"head")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("body")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"body")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.document")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("document")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"document")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.window")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$("window")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"window")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.meta(name)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'!name ? $("meta") : $("meta[name=$name]")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"meta")," elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.metaBy(name)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'!name ? $.meta : $("meta[$name]")')),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"meta")," element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.charset(val)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"access to ",(0,r.kt)("inlineCode",{parentName:"td"},"charset")," or set new value")))),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.each(context, callback)")),(0,r.kt)("td",{parentName:"tr",align:null},"function to iteration on array or object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.bind(function, context)")),(0,r.kt)("td",{parentName:"tr",align:null},"change context for function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.proxy(target, handler)")),(0,r.kt)("td",{parentName:"tr",align:null},"create proxy element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.noop")),(0,r.kt)("td",{parentName:"tr",align:null},"empty function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.noop_true")),(0,r.kt)("td",{parentName:"tr",align:null},"empty function, return ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.noop_false")),(0,r.kt)("td",{parentName:"tr",align:null},"empty function, return ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.exec(context, callback)")),(0,r.kt)("td",{parentName:"tr",align:null},"execute any type of code")))),(0,r.kt)("h2",{id:"device"},"Device"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.device")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if this is mobile device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.localhost(host)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if host is localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.isLocalhost")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if current host is localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.isPrivateAddress(ip_address)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if value is private IP address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.privateAddress()")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if value is private IP address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.touchable")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if current device is touchable")))),(0,r.kt)("h2",{id:"element"},"Element"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.isVisible(el)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if element is ",(0,r.kt)("inlineCode",{parentName:"td"},"visible"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.isHidden(el)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if element is ",(0,r.kt)("inlineCode",{parentName:"td"},"hidden"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.inViewport(el)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if element in ",(0,r.kt)("inlineCode",{parentName:"td"},"viewport"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$.isSelector(val)")),(0,r.kt)("td",{parentName:"tr",align:null},"return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if value is valid selector")))))}k.isMDXComponent=!0}}]);