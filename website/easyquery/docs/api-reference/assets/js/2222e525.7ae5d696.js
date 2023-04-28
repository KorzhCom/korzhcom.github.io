"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[8762],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>m});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),y=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},u=function(e){var r=y(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=y(a),f=t,m=l["".concat(i,".").concat(f)]||l[f]||p[f]||s;return a?n.createElement(m,o(o({ref:r},u),{},{components:a})):n.createElement(m,o({ref:r},u))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=a.length,o=new Array(s);o[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[l]="string"==typeof e?e:t,o[1]=c;for(var y=2;y<s;y++)o[y]=a[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},57668:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>y});var n=a(87462),t=(a(67294),a(3905));const s={},o=void 0,c={unversionedId:"korzh-easyquery-services-namespace/IEasyQueryManagerResolver interface",id:"korzh-easyquery-services-namespace/IEasyQueryManagerResolver interface",title:"IEasyQueryManagerResolver interface",description:"Interface IEasyQueryManagerResolver  Contains only one function: GetManager which returns an instance of EasyQueryManagerBase descendant (like EasyQueryManagerSql or EasyQueryManagerLinq)  by DI services and options (an instance of Korzh.EasyQuery.Services.EasyQueryOptions object)",source:"@site/docs/korzh-easyquery-services-namespace/IEasyQueryManagerResolver interface.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/IEasyQueryManagerResolver interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/IEasyQueryManagerResolver interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IEasyQueryConfigurator interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/IEasyQueryConfigurator interface"},next:{title:"IEasyQueryManagerTuner interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/IEasyQueryManagerTuner interface"}},i={},y=[{value:"Methods",id:"methods",level:3}],u={toc:y},l="wrapper";function p(e){let{components:r,...a}=e;return(0,t.kt)(l,(0,n.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Interface IEasyQueryManagerResolver  Contains only one function: GetManager which returns an instance of EasyQueryManagerBase descendant (like EasyQueryManagerSql or EasyQueryManagerLinq)  by DI services and options (an instance of ",(0,t.kt)("a",{parentName:"p",href:"/korzh-easyquery-services-namespace/easyqueryoptions-class"},"Korzh.EasyQuery.Services.EasyQueryOptions")," object)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface Korzh.EasyQuery.Services.IEasyQueryManagerResolver\n\n")),(0,t.kt)("p",null,"Assembly: ",(0,t.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,t.kt)("h3",{id:"methods"},"Methods"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Name"),(0,t.kt)("th",{parentName:"tr",align:null},"Type"),(0,t.kt)("th",{parentName:"tr",align:null},"Description"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"GetManager(",(0,t.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyqueryoptions-class"},"EasyQueryOptions")," options, ",(0,t.kt)("inlineCode",{parentName:"td"},"IServiceProvider")," services)"),(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"EasyQueryManager")),(0,t.kt)("td",{parentName:"tr",align:null},"Gets the EasyQuery manager.")))))}p.isMDXComponent=!0}}]);