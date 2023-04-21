"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[4662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(y,s(s({ref:t},d),{},{components:a})):n.createElement(y,s({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},s=void 0,i={unversionedId:"korzh-easyquery-db-namespace/SqlUtils class",id:"korzh-easyquery-db-namespace/SqlUtils class",title:"SqlUtils class",description:"Assembly: Korzh.EasyQuery.Db.dll",source:"@site/docs/korzh-easyquery-db-namespace/SqlUtils class.md",sourceDirName:"korzh-easyquery-db-namespace",slug:"/korzh-easyquery-db-namespace/SqlUtils class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/SqlUtils class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SqlStatement class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/SqlStatement class"},next:{title:"Table class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/Table class"}},o={},p=[{value:"Static Methods",id:"static-methods",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Korzh.EasyQuery.Db.SqlUtils\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,r.kt)("h3",{id:"static-methods"},"Static Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ComposeTableAlias(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Table")," tbl, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContainsAggregateFunctions(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sqlExpr)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the SQL expression contains at aggregate function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataTypeToDbType(",(0,r.kt)("inlineCode",{parentName:"td"},"DataType")," dt)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DbType")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts DataType enum value to corresponding DbType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EdmxTypeToDataType(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," edmxType)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataType")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts type form EDMX file into ",(0,r.kt)("inlineCode",{parentName:"td"},"DataType")," enumeration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExcludeFieldsFromExpr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbmodel-class"},"DbModel")," model, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," expr)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtractTablesByExpr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbmodel-class"},"DbModel")," model, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," expr, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablelist-class"},"TableList")," tableList)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HasSelectStatement(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sqlExpr)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the SQL expression contains a SELECT statement inside it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReplaceTablesInExprWithAliases(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbmodel-class"},"DbModel")," model, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," expr, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SqlServerTypeToDataType(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sqlType)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataType")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts SQL Server data types to ",(0,r.kt)("inlineCode",{parentName:"td"},"DataType")," enumeration.")))))}c.isMDXComponent=!0}}]);