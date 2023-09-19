"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[2469],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),f=a,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={},l=void 0,s={unversionedId:"korzh-easyquery-winforms-namespace/icolumnrowcreator-interface",id:"korzh-easyquery-winforms-namespace/icolumnrowcreator-interface",title:"icolumnrowcreator-interface",description:"Represents special interface used for definition of new (custom) types of row",source:"@site/docs/korzh-easyquery-winforms-namespace/icolumnrowcreator-interface.md",sourceDirName:"korzh-easyquery-winforms-namespace",slug:"/korzh-easyquery-winforms-namespace/icolumnrowcreator-interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-winforms-namespace/icolumnrowcreator-interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"filteroptions-enum",permalink:"/easyquery/docs/api-reference/korzh-easyquery-winforms-namespace/filteroptions-enum"},next:{title:"labelxelement-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-winforms-namespace/labelxelement-class"}},c={},i=[{value:"Methods",id:"methods",level:3}],u={toc:i},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents special interface used for definition of new (custom) types of row"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface Korzh.EasyQuery.WinForms.IColumnRowCreator\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.WinForms.dll")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Create(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-winforms-namespace/columnspanel-class"},"ColumnsPanel")," panel, ",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querycolumn-class"},"QueryColumn")," column, ",(0,a.kt)("inlineCode",{parentName:"td"},"bool")," useCheckBox)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-winforms-namespace/columnrow-class"},"ColumnRow")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates an instance of ",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-winforms-namespace/columnrow-class"},"Korzh.EasyQuery.WinForms.ColumnRow"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GetCaption(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-winforms-namespace/columnspanel-class"},"ColumnsPanel")," panel)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the caption for button menu.")))))}m.isMDXComponent=!0}}]);