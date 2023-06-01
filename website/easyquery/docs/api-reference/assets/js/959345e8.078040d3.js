"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[2003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"korzh-easyquery-services-namespace/dbconnectionmodelloader-class",id:"korzh-easyquery-services-namespace/dbconnectionmodelloader-class",title:"dbconnectionmodelloader-class",description:"Represents a IModelLoader implementation which allows to load the model directly from a connection (using DB meta data)",source:"@site/docs/korzh-easyquery-services-namespace/dbconnectionmodelloader-class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/dbconnectionmodelloader-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/dbconnectionmodelloader-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"datafetchmeta-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/datafetchmeta-class"},next:{title:"dbcontextmodelloader-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/dbcontextmodelloader-class"}},c={},i=[{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3}],d={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a IModelLoader implementation which allows to load the model directly from a connection (using DB meta data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.DbConnectionModelLoader\n    : IModelLoader\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DbConnectionModelLoader(",(0,r.kt)("inlineCode",{parentName:"td"},"DbConnection")," connection, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class"},"DbConnectionModelLoaderOptions")," options)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/dbconnectionmodelloader-class"},"Korzh.EasyQuery.Services.DbConnectionModelLoader")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DbConnectionModelLoader(",(0,r.kt)("inlineCode",{parentName:"td"},"Func"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"DbConnection"),">"," connectionResolver, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class"},"DbConnectionModelLoaderOptions")," options)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/dbconnectionmodelloader-class"},"Korzh.EasyQuery.Services.DbConnectionModelLoader")," class.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadModelAsync(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Loads the model from the connection passed in the loader's constructor.  NB: The model ID is not actually taking into account.")))))}m.isMDXComponent=!0}}]);