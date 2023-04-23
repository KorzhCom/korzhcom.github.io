"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[1685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),y=n,k=p["".concat(o,".").concat(y)]||p[y]||m[y]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={},i=void 0,s={unversionedId:"korzh-easyquery-services-namespace/FileQueryStore class",id:"korzh-easyquery-services-namespace/FileQueryStore class",title:"FileQueryStore class",description:"Represents the implementation of IQueryStore which store queries on the file system.  Implements the Korzh.EasyQuery.Services.IQueryStore",source:"@site/docs/korzh-easyquery-services-namespace/FileQueryStore class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/FileQueryStore class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/FileQueryStore class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FileModelLoaderSettings class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/FileModelLoaderSettings class"},next:{title:"FileQueryStoreSettings class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/FileQueryStoreSettings class"}},o={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents the implementation of IQueryStore which store queries on the file system.  Implements the ",(0,n.kt)("a",{parentName:"p",href:"/korzh-easyquery-services-namespace/iquerystore-interface"},"Korzh.EasyQuery.Services.IQueryStore")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Services.FileQueryStore\n    : IQueryStore\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FileQueryStore(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystoresettings-class"},"FileQueryStoreSettings")," settings)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystore-class"},"Korzh.EasyQuery.Services.FileQueryStore")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FileQueryStore(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," dataPath)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystore-class"},"Korzh.EasyQuery.Services.FileQueryStore")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FileQueryStore(",(0,n.kt)("inlineCode",{parentName:"td"},"IOptions"),"<",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystoresettings-class"},"FileQueryStoreSettings"),">"," options)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystore-class"},"Korzh.EasyQuery.Services.FileQueryStore")," class.")))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Settings"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/filequerystoresettings-class"},"FileQueryStoreSettings")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AddQueryAsync(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Adds a new query to the storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FilterFileNames(",(0,n.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),">"," fileNames)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Filters files on ",(0,n.kt)("see",{cref:"!:FileQueryStore.GetAllQueriesAsync(string)"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FilterQueryItems(",(0,n.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">"," queries)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Filters queries on ",(0,n.kt)("see",{cref:"!:FileQueryStore.GetAllQueriesAsync(string)"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetAllQueriesAsync(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the list of all queries for specified model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetFileNameByQueryId(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," queryId)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the file name by queryId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetModelFolderPath(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetQueryFilePathById(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," format = json)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetQueryFileText(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," queryId)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Read the content of the query file and returns it as a string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetQueryFolderPath(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetQueryIdByFileName(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," fileName)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets queryId by file name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LoadQueryAsync(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Loads the query's content from the storage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RemoveQueryAsync(",(0,n.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Removes from the storage the query specified by model ID and query ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SaveQueryAsync(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,n.kt)("inlineCode",{parentName:"td"},"bool")," createIfNotExists = True, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Saves the query to the storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TuneQuery(",(0,n.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," query, ",(0,n.kt)("inlineCode",{parentName:"td"},"bool")," isNew)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Tunes query before adding or saving")))))}m.isMDXComponent=!0}}]);