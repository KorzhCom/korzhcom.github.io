"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[9115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(y,s(s({ref:t},d),{},{components:r})):a.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"korzh-easyquery-services-namespace/DbContextModelLoaderT class",id:"korzh-easyquery-services-namespace/DbContextModelLoaderT class",title:"DbContextModelLoaderT class",description:"Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the Korzh.EasyQuery.Services.IModelLoader",source:"@site/docs/korzh-easyquery-services-namespace/DbContextModelLoaderT class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/DbContextModelLoaderT class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DbContextModelLoaderT class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DbContextModelLoader class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DbContextModelLoader class"},next:{title:"DefaultEqAuthProvider class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/DefaultEqAuthProvider class"}},c={},i=[{value:"Constructors",id:"constructors",level:3}],d={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the ",(0,n.kt)("a",{parentName:"p",href:"/korzh-easyquery-services-namespace/imodelloader-interface"},"Korzh.EasyQuery.Services.IModelLoader")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.DbContextModelLoader<T>\n    : DbContextModelLoader\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.EntityFrameworkCore.Relational.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DbContextModelLoader(",(0,n.kt)("inlineCode",{parentName:"td"},"IServiceProvider")," services)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class"},"Korzh.EasyQuery.Services.DbContextModelLoader`1")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DbContextModelLoader(",(0,n.kt)("inlineCode",{parentName:"td"},"IServiceProvider")," services, ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class"},"DbContextModelExtractorOptions")," options)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class"},"Korzh.EasyQuery.Services.DbContextModelLoader`1")," class.")))))}u.isMDXComponent=!0}}]);