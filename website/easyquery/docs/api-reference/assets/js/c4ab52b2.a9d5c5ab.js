"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[5363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(u,".").concat(m)]||p[m]||y[m]||l;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={},o=void 0,s={unversionedId:"korzh-easyquery-namespace/querycolumnchangingeventargs-class",id:"korzh-easyquery-namespace/querycolumnchangingeventargs-class",title:"querycolumnchangingeventargs-class",description:"Provides data for Korzh.EasyQuery.Query.ColumnsChanging event",source:"@site/docs/korzh-easyquery-namespace/querycolumnchangingeventargs-class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/querycolumnchangingeventargs-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/querycolumnchangingeventargs-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"querycolumn-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/querycolumn-class"},next:{title:"querycolumnlist-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/querycolumnlist-class"}},u={},c=[{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3}],i={toc:c},p="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides data for ",(0,a.kt)("a",{parentName:"p",href:"/korzh-easyquery-namespace/query-class"},"Korzh.EasyQuery.Query.ColumnsChanging")," event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.QueryColumnChangingEventArgs\n    : QueryColumnsChangeEventArgs\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"QueryColumnChangingEventArgs(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/changetype-enum"},"ChangeType")," what, ",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querycolumn-class"},"QueryColumn")," column, ",(0,a.kt)("inlineCode",{parentName:"td"},"int")," info, ",(0,a.kt)("inlineCode",{parentName:"td"},"int")," part = 0)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querycolumnchangingeventargs-class"},"Korzh.EasyQuery.QueryColumnChangingEventArgs")," class.")))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Accepted"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the change represented by this event is accepted.")))))}y.isMDXComponent=!0}}]);