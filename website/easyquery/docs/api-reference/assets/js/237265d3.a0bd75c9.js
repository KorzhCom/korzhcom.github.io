"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[9803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,y=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},84338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,s={unversionedId:"korzh-easyquery-services-namespace/EasyQueryManager class",id:"korzh-easyquery-services-namespace/EasyQueryManager class",title:"EasyQueryManager class",description:"Provides basic functionality for managing different EasyQuery operations and to process the AJAX requests from EasyQuery JavaScript widgets.  This class is abstract and it implements only the most common features.  The descendants of this class provides more concrete implementation of the model loading and query generation",source:"@site/docs/korzh-easyquery-services-namespace/EasyQueryManager class.md",sourceDirName:"korzh-easyquery-services-namespace",slug:"/korzh-easyquery-services-namespace/EasyQueryManager class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/EasyQueryManager class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EasyObjectResultSet class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/EasyObjectResultSet class"},next:{title:"EasyQueryManagerException class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-services-namespace/EasyQueryManagerException class"}},o={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Static Methods",id:"static-methods",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides basic functionality for managing different EasyQuery operations and to process the AJAX requests from EasyQuery JavaScript widgets.  This class is abstract and it implements only the most common features.  The descendants of this class provides more concrete implementation of the model loading and query generation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Korzh.EasyQuery.Services.EasyQueryManager\n    : IDisposable\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EasyQueryManager()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EasyQueryManager(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyqueryoptions-class"},"EasyQueryOptions")," options)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EasyQueryManager(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyqueryoptions-class"},"EasyQueryOptions")," options, ",(0,r.kt)("inlineCode",{parentName:"td"},"IServiceProvider")," services)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager")," class.")))),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PreFetchTuners"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ieasyquerymanagertuner-interface"},"IEasyQueryManagerTuner"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of tuners which are called before the query execution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Services"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IServiceProvider")),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to the ",(0,r.kt)("inlineCode",{parentName:"td"},"System.IServiceProvider")," object which allows you to access the DI container")))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AuxData"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains additinal data that should be passed to the client with response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CachingService"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ieqcachingservice-interface"},"IEqCachingService")),(0,r.kt)("td",{parentName:"tr",align:null},"Get or sets a caching service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chunk"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/chunksettings-class"},"ChunkSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Holds different pagination settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClientData"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dictionary"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a dictionary which contains all the data received from the client-side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DefaultModelId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the default name of the model.  This model will loaded automatically if the name was not indicated explicitly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExportRowLimit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsAuxiliary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether this copy of manager is an auxiliary one (created for an auxiliary request).  We don't call some tuners for auxiliary requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/datafetchmeta-class"},"DataFetchMeta")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines some meta-data collected on query processing/execution (like like Total Number of Records).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the current model.  The value of this property is set on the first call of GetModel method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ModelIsLoaded"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines wether model is loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ModelLoader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/imodelloader-interface"},"IModelLoader")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the model loader - an implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/imodelloader-interface"},"Korzh.EasyQuery.Services.IModelLoader")," inteface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ModelTuner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Action"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"EasyQueryManager"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the model tuner - a function which allows you to make some changes in the model after its loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyqueryoptions-class"},"EasyQueryOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the manager's options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the current query.  The value of this property is set on the first call of GetQueryAsync method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QueryBuilder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerybuilder-interface"},"IQueryBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns QueryBuilder associated with current Query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QueryStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/iquerystore-interface"},"IQueryStore")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the query store - an object which covers all saving/loading operations for queries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QueryTuner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Action"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"EasyQueryManager"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the query tuner - a function which allows you to make some changes in the query after its loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResultSetOptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/resultsetoptions-class"},"ResultSetOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"The global settings for fetching data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveNewQueryToStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the manager should save a new query into the storage right after the creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Settings"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dictionary"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a dictionary which contains all the settings received from the client-side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the user ID.  This value is used to build the path to the folder where model and query files are stored.  By default it's App_Data/{UserId}/ and App_Data/{UserId}/Queries")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ValueListResolvers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ivaluelistresolver-interface"},"IValueListResolver"),">"),(0,r.kt)("td",{parentName:"tr",align:null},'Gets the list of "value list" resolvers.')))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddValueListResolver(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ivaluelistresolver-interface"},"IValueListResolver")," valueListResolver)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds the value list resolver to the internal list of list resolvers  which will be used during GetList request processing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApplyBuilderOptions(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerybuilder-interface"},"IQueryBuilder")," builder)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApplyPreFetchTuners()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Applys all pre execute tuners")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildQuery(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querybuilderoptions-class"},"QueryBuilderOptions")," options = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerystatement-interface"},"IQueryStatement")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds a ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerystatement-interface"},"Korzh.EasyQuery.IQueryStatement")," object by the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager.Query")," and returns the built statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckModel()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if the current Model is not null and throws an exception otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckQuery()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if the current Query is not null and throws an exception otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateModelCore(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates the new DataModel object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateQuery()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates and initializes a new Query object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),", `CancellationToken` ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new Query object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateQueryBuilderCore()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerybuilder-interface"},"IQueryBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates an instance of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerybuilder-interface"},"Korzh.EasyQuery.IQueryBuilder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateQueryCore()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new Query object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dispose(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," disposing)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Releases unmanaged and - optionally - managed resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dispose()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Releases unmanaged and - optionally - managed resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExportResultSetAsync(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ieqresultset-interface"},"IEqResultSet")," data, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," format, ",(0,r.kt)("inlineCode",{parentName:"td"},"Stream")," stream, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Executes the query and exports the result to a specified format.  To run this operation we need to register an appropriate exporter first.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FetchDataAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ieqresultset-interface"},"IEqResultSet"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Executes the query and returns an object which implments IEqResultSet interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FetchDataCoreAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/ieqresultset-interface"},"IEqResultSet"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"The actual implemenation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager.FetchDataAsync(System.Threading.CancellationToken)")," function.  This method is overridden in EasyQueryManager descendants like EasyQueryManagerSql or EasyQueryManagerLinq.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GenerateQueryId(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," name)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates the query identifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetContentTypeByExportFormat(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the content type by export format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetDataExportSettings(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IDataExportSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the data export settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetDataExportTuners()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/idataexporttuner-interface"},"IDataExportTuner"),">"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetListCoreAsync(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/listrequestoptions-class"},"ListRequestOptions")," options, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/listitem-class"},"ListItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"The basic implemenation of GetList action handler. Can be overrided in the derived classes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetModelAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the DbModel object by ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the Query object by name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetQueryListAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of available queries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetQueryListCoreAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/querylistitem-class"},"QueryListItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager.GetQueryListAsync(System.String,System.Threading.CancellationToken)")," method.  This method just calls corresponding function of the QueryStore. Can be overriden in derived classes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetValueFromCache(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," key)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets some string value from session by its key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetValueListAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," editorId, ",(0,r.kt)("inlineCode",{parentName:"td"},"IDictionary"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," options = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),", `CancellationToken` ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/listitem-class"},"ListItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns custom list of values by editorId. This method is usually called by GetList action of EasyQueryController.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InitQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes the new query and saves it to the storage (if SaveNewQueryToStore is turned on).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InitQueryCoreAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes the new query. Does nothing in the base class. Can be overriden in the derived classes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JsonToListRequestOptions(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," optionsJson)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/listrequestoptions-class"},"ListRequestOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts JsonDict object to ListRequestOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadModelAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads model by its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadModelFromCacheAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Loads DataModel from cache by ID (name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadQueryFromCacheAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Loads Query from cache by ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QueryUpdated()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Calls ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-services-namespace/easyquerymanager-class"},"Korzh.EasyQuery.Services.EasyQueryManager.QueryTuner"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadClientOptions(",(0,r.kt)("inlineCode",{parentName:"td"},"JObject")," clientOptions)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadOneRequestPropertyAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," propName, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Read one property from a request's JSON object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadRequestContentFromJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Reads the content of the client-side request from a JsonReader object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadRequestContentFromTextReaderAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"TextReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads all reaquest's data (like query, options, etc) from the text reader.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," modelId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," queryId, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the query. This method uses the functionality provided by the current query store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveModelInCacheAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Saves model into cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveQueryInCacheAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Saves query into cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveQueryToStoreAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," createIfNotExist = True, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Saves the current query to the query store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveValueInCache(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," key, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," value)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Stores some string value in cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SyncQueryAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronizes the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SyncQueryCoreAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronizes the query. This is the default implementation which can be ovverride in derived classes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TuneBuilder(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iquerybuilder-interface"},"IQueryBuilder")," builder)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows to tune the formats of the query builder. The default implementation calls all builder tuners defined in _builderTuners list.  You can override this function in your sub-class to implement some custom behavior.")))),(0,r.kt)("h3",{id:"static-methods"},"Static Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegisterExporter(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," format, ",(0,r.kt)("inlineCode",{parentName:"td"},"IDataExporter")," exporter)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers ResultSet exporter for current format.")))))}u.isMDXComponent=!0}}]);