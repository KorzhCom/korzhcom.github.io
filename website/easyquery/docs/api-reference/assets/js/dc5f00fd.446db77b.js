"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[6944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,m=c["".concat(o,".").concat(d)]||c[d]||y[d]||l;return r?a.createElement(m,u(u({ref:t},s),{},{components:r})):a.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,u[1]=i;for(var p=2;p<l;p++)u[p]=r[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},u=void 0,i={unversionedId:"korzh-easyquery-namespace/IQueryBuilder interface",id:"korzh-easyquery-namespace/IQueryBuilder interface",title:"IQueryBuilder interface",description:"Interface IQueryBuilder - represents general-purpose query builder",source:"@site/docs/korzh-easyquery-namespace/IQueryBuilder interface.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/IQueryBuilder interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IQueryBuilder interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IProgressIndicator interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IProgressIndicator interface"},next:{title:"IQueryStatement interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IQueryStatement interface"}},o={},p=[{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}],s={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Interface IQueryBuilder - represents general-purpose query builder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface Korzh.EasyQuery.IQueryBuilder\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querybuilderoptions-class"},"QueryBuilderOptions")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the builder's options.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the query this builder is defined for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerystatement-interface"},"IQueryStatement")),(0,n.kt)("td",{parentName:"tr",align:null},"The query builder result.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"StatementType"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Type")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the the result type.")))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Build()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the query statement.  It could be some SQL statement or and an IQueryable object created by LINQ query builder.")))))}y.isMDXComponent=!0}}]);