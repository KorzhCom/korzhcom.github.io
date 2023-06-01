"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[1475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},i=void 0,o={unversionedId:"korzh-easyquery-namespace/stringextensions-class",id:"korzh-easyquery-namespace/stringextensions-class",title:"stringextensions-class",description:"Useful extension methods for strings",source:"@site/docs/korzh-easyquery-namespace/stringextensions-class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/stringextensions-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/stringextensions-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sqlsyntax-enum",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/sqlsyntax-enum"},next:{title:"stringtokenizer-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/stringtokenizer-class"}},l={},p=[{value:"Static Methods",id:"static-methods",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Useful extension methods for strings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Korzh.EasyQuery.StringExtensions\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,a.kt)("h3",{id:"static-methods"},"Static Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CompareToCI(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s1, ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s2)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"Compares two strings case-insatively .")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GetSecondPart(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s, ",(0,a.kt)("inlineCode",{parentName:"td"},"Char")," sep)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets the second part of the string divided by separator. If the separator is not included - the whole string is returned.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RemoveSymbols(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," str, ",(0,a.kt)("inlineCode",{parentName:"td"},"Char[]")," symbolsToRemove)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Removes the characters specified in the ",(0,a.kt)("inlineCode",{parentName:"td"},"symbolsToRemove")," parameter and returns the modified string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SplitBy(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s, ",(0,a.kt)("inlineCode",{parentName:"td"},"Char")," sep, ",(0,a.kt)("inlineCode",{parentName:"td"},"String&")," key, ",(0,a.kt)("inlineCode",{parentName:"td"},"String&")," val)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Split the string on 2 parts by some separator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ToInt(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s, ",(0,a.kt)("inlineCode",{parentName:"td"},"int")," defValue = 0)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ToLong(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," s, ",(0,a.kt)("inlineCode",{parentName:"td"},"long")," defValue = 0)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"long")),(0,a.kt)("td",{parentName:"tr",align:null},"Converts the string representation of a number to its 64-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions.")))))}c.isMDXComponent=!0}}]);