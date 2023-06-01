"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[3841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=n,m=c["".concat(i,".").concat(y)]||c[y]||d[y]||s;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},80701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={},l=void 0,o={unversionedId:"korzh-easyquery-services-namespace/easydbresultset-class",id:"korzh-easyquery-services-namespace/easydbresultset-class",title:"easydbresultset-class",description:"The result set.",source:"@site/docs/korzh-easyquery-services-namespace/easydbresultset-class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/easydbresultset-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/easydbresultset-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defaulteqauthprovider-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/defaulteqauthprovider-class"},next:{title:"easyobjectresultset-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/easyobjectresultset-class"}},i={},u=[{value:"Constructors",id:"constructors",level:3},{value:"Fields",id:"fields",level:3},{value:"Methods",id:"methods",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The result set."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.EasyDbResultSet\n    : EasyResultSet, IDbResultSet, IEqResultSet, IEasyDataResultSet, IDisposable\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EasyDbResultSet(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbquery-class"},"DbQuery")," query, ",(0,n.kt)("inlineCode",{parentName:"td"},"IDataReader")," dataReader = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),", [ResultSetOptions](/korzh-easyquery-services-namespace/resultsetoptions-class) options = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easydbresultset-class"},"Korzh.EasyQuery.Services.EasyDbResultSet")," class.")))),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataReader"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IDataReader")),(0,n.kt)("td",{parentName:"tr",align:null},"The data reader")))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CreateRow(",(0,n.kt)("inlineCode",{parentName:"td"},"IDataReader")," dataReader)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EasyDataRow")),(0,n.kt)("td",{parentName:"tr",align:null},"Creates a new row and fills its content from the data reader.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dispose(",(0,n.kt)("inlineCode",{parentName:"td"},"bool")," disposing)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Releases unmanaged and - optionally - managed resources.")))))}d.isMDXComponent=!0}}]);