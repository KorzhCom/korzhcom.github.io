"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[7062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},14897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"korzh-easyquery-services-namespace/iquerystore-interface",id:"korzh-easyquery-services-namespace/iquerystore-interface",title:"iquerystore-interface",description:"Defines the basic operations of a query store.",source:"@site/docs/korzh-easyquery-services-namespace/iquerystore-interface.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/iquerystore-interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/iquerystore-interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ipaging-interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/ipaging-interface"},next:{title:"ivaluelistresolver-interface",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/ivaluelistresolver-interface"}},s={},u=[{value:"Methods",id:"methods",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Defines the basic operations of a query store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface Korzh.EasyQuery.Services.IQueryStore\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AddQueryAsync(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,a.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Adds a new query to the storage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GetAllQueriesAsync(",(0,a.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,a.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Gets the list of all queries available in the storage for the specified model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LoadQueryAsync(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,a.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Loads the query from the storage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RemoveQueryAsync(",(0,a.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,a.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Removes from the storage the query specified by model ID and query ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SaveQueryAsync(",(0,a.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,a.kt)("inlineCode",{parentName:"td"},"bool")," createIfNotExists = True, ",(0,a.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Saves the query passed in the parameter.")))))}d.isMDXComponent=!0}}]);