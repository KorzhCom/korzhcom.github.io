"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[7094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={},o=void 0,s={unversionedId:"korzh-easyquery-services-namespace/filemodelloader-class",id:"korzh-easyquery-services-namespace/filemodelloader-class",title:"filemodelloader-class",description:"Represents a IModelLoader implemenation  which allows to load data model definitions (either XML or JSON) from the file system.  Implements the Korzh.EasyQuery.Services.IModelLoader",source:"@site/docs/korzh-easyquery-services-namespace/filemodelloader-class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/filemodelloader-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/filemodelloader-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"exportextensions-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/exportextensions-class"},next:{title:"filemodelloadersettings-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/filemodelloadersettings-class"}},i={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a IModelLoader implemenation  which allows to load data model definitions (either XML or JSON) from the file system.  Implements the ",(0,n.kt)("a",{parentName:"p",href:"/korzh-easyquery-services-namespace/imodelloader-interface"},"Korzh.EasyQuery.Services.IModelLoader")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.FileModelLoader\n    : IModelLoader\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FileModelLoader(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," dataPath)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filemodelloader-class"},"Korzh.EasyQuery.Services.FileModelLoader")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FileModelLoader(",(0,n.kt)("inlineCode",{parentName:"td"},"IOptions"),"<",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filemodelloadersettings-class"},"FileModelLoaderSettings"),">"," options)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filemodelloader-class"},"Korzh.EasyQuery.Services.FileModelLoader")," class.")))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadModelAsync(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Loads the model by its ID.")))))}m.isMDXComponent=!0}}]);