"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(y,l(l({ref:t},c),{},{components:r})):a.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,s={unversionedId:"korzh-easyquery-namespace/EditorsMap class",id:"korzh-easyquery-namespace/EditorsMap class",title:"EditorsMap class",description:"Represents editors map - the list which defines what editor will be used for a particular data type and operator.",source:"@site/docs/korzh-easyquery-namespace/EditorsMap class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/EditorsMap class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/EditorsMap class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EdgeInfo class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/EdgeInfo class"},next:{title:"EmptyQueryBuilderResult class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/EmptyQueryBuilderResult class"}},i={},p=[{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents editors map - the list which defines what editor will be used for a particular data type and operator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.EditorsMap\n    : Collection<ValueEditorEntry>\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EditorsMap()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AddEditor(",(0,n.kt)("inlineCode",{parentName:"td"},"ValueEditor")," editor)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Adds the editor with empty list of operators")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FindEditor(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/operator-class"},"Operator")," op, ",(0,n.kt)("inlineCode",{parentName:"td"},"DataType")," type)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ValueEditor")),(0,n.kt)("td",{parentName:"tr",align:null},"Finds the editor by operator and data type.")))))}u.isMDXComponent=!0}}]);