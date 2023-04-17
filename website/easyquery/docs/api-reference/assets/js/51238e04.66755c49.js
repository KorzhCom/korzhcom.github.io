"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[2147],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,s={unversionedId:"korzh-easyquery-services-namespace/DbContextModelLoader class",id:"korzh-easyquery-services-namespace/DbContextModelLoader class",title:"DbContextModelLoader class",description:"Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the Korzh.EasyQuery.Services.IModelLoader",source:"@site/docs/korzh-easyquery-services-namespace/DbContextModelLoader class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/DbContextModelLoader class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DbContextModelLoader class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DbConnectionModelLoader class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DbConnectionModelLoader class"},next:{title:"DbContextModelLoaderT class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DbContextModelLoaderT class"}},c={},i=[{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3}],d={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the ",(0,n.kt)("a",{parentName:"p",href:"/korzh-easyquery-services-namespace/imodelloader-interface"},"Korzh.EasyQuery.Services.IModelLoader")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.DbContextModelLoader\n    : IModelLoader\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.EntityFramework6.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DbContextModelLoader(",(0,n.kt)("inlineCode",{parentName:"td"},"DbContext")," dbContext, ",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class"},"DbContextModelExtractorOptions")," options)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/dbcontextmodelloader-class"},"Korzh.EasyQuery.Services.DbContextModelLoader")," class.")))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadModelAsync(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Loads the model from the DbContext object.  NB: The model ID is not actually taking into account  since the model is defined by a concrete DbContext type.")))))}u.isMDXComponent=!0}}]);