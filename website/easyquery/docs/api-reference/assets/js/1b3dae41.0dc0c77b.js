"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[1836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,c=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"korzh-easyquery-namespace/TypeExtensions class",id:"korzh-easyquery-namespace/TypeExtensions class",title:"TypeExtensions class",description:"Contains several useful extensions for reflection types and structures.",source:"@site/docs/korzh-easyquery-namespace/TypeExtensions class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/TypeExtensions class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/TypeExtensions class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextValueEditorXmlSerializer class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/TextValueEditorXmlSerializer class"},next:{title:"Utils class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/Utils class"}},p={},s=[{value:"Static Methods",id:"static-methods",level:3}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains several useful extensions for reflection types and structures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Korzh.EasyQuery.TypeExtensions\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,a.kt)("h3",{id:"static-methods"},"Static Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GetMappedProperties(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"PropertyInfo"),">"," source)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"PropertyInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},'Filters the list of properties (defined by source parameter) to return only those which does not have "NotMapped" attribute.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsAttributeDefined(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"PropertyInfo")," pi, ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," attrName)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the attribute with specified name is defined for the property.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsComplexType(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," typeToCheck)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the specified type is complex type (marked by ComplexType attribute).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnum(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," typeToCheck)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the specified type is an enumeration.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsGenericType(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," typeToCheck)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the specified type is generic type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsInheritedFrom(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," type, ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," fullTypeName)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the type is inherited from another type specified by the specified full type name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsInheritedFrom(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," type, ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," baseType)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the type is inherited from another type specified by the specified full type name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsInheritedFromGeneric(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," type, ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," baseType)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the type is inherited from generic type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsNullable(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," typeToCheck)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the specified type is a nullable type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsPrimaryKey(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"PropertyInfo")," pi)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether specified property is a primary key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsSimpleType(",(0,a.kt)("span",{style:{color:"blue"}},"this")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Type")," t)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Checks if the type can be used in columns and conditions")))))}u.isMDXComponent=!0}}]);