"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[3282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"korzh-easyquery-namespace/IDataModelSerializer interface",id:"korzh-easyquery-namespace/IDataModelSerializer interface",title:"IDataModelSerializer interface",description:"Assembly: Korzh.EasyQuery.dll",source:"@site/docs/korzh-easyquery-namespace/IDataModelSerializer interface.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/IDataModelSerializer interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IDataModelSerializer interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IColumnDescriptor interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IColumnDescriptor interface"},next:{title:"IExpressionCreator interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/IExpressionCreator interface"}},p={},d=[{value:"Methods",id:"methods",level:3}],s={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface Korzh.EasyQuery.IDataModelSerializer\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadFromFile(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," filePath, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadFromStream(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"Stream")," stream, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadFromString(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," content, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SaveToFile(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," filePath, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SaveToStream(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"Stream")," stream, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SaveToString(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);