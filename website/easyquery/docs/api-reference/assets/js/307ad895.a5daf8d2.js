"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[2667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"microsoft-aspnetcore-builder-namespace/easyquerymiddlewareextensions-class",id:"microsoft-aspnetcore-builder-namespace/easyquerymiddlewareextensions-class",title:"easyquerymiddlewareextensions-class",description:"Contains the method which adds EasyQueryMiddleware to the pipeline.",source:"@site/docs/microsoft-aspnetcore-builder-namespace/easyquerymiddlewareextensions-class.md",sourceDirName:"microsoft-aspnetcore-builder-namespace",slug:"/microsoft-aspnetcore-builder-namespace/easyquerymiddlewareextensions-class",permalink:"/easyquery/docs/api-reference/microsoft-aspnetcore-builder-namespace/easyquerymiddlewareextensions-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"easyqueryendpointroutebuilderextensions-class",permalink:"/easyquery/docs/api-reference/microsoft-aspnetcore-builder-namespace/easyqueryendpointroutebuilderextensions-class"},next:{title:"$index",permalink:"/easyquery/docs/api-reference/microsoft-aspnetcore-http-namespace/$index"}},l={},c=[{value:"Static Methods",id:"static-methods",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains the method which adds EasyQueryMiddleware to the pipeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Microsoft.AspNetCore.Builder.EasyQueryMiddlewareExtensions\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.AspNetCore.dll")),(0,a.kt)("h3",{id:"static-methods"},"Static Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UseEasyQuery(",(0,a.kt)("span",{style:{color:"blue"}},"this")," `IApplicationBuilder` appBuilder, `Action`<[EasyQueryOptions](/korzh-easyquery-services-namespace/easyqueryoptions-class)> optionsAction = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IApplicationBuilder")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds the EasyQueryMiddleware to the middleware pipeline.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UseEasyQuery(",(0,a.kt)("span",{style:{color:"blue"}},"this")," `IApplicationBuilder` appBuilder, `Action`<[EasyQueryOptions](/korzh-easyquery-services-namespace/easyqueryoptions-class)> optionsAction = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IApplicationBuilder")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds the EasyQueryMiddleware to the middleware pipeline.")))))}d.isMDXComponent=!0}}]);