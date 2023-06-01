"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[5893],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(a),u=r,N=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54308:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,s={unversionedId:"korzh-easyquery-db-namespace/table-class",id:"korzh-easyquery-db-namespace/table-class",title:"table-class",description:"Table class represents one table in a Korzh.EasyQuery.Db.DbModel object",source:"@site/docs/korzh-easyquery-db-namespace/table-class.md",sourceDirName:"korzh-easyquery-db-namespace",slug:"/korzh-easyquery-db-namespace/table-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/table-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sqlutils-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/sqlutils-class"},next:{title:"tablecategory-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/tablecategory-class"}},o={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Static Methods",id:"static-methods",level:3}],p={toc:d},m="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Table class represents one table in a ",(0,r.kt)("a",{parentName:"p",href:"/korzh-easyquery-db-namespace/dbmodel-class"},"Korzh.EasyQuery.Db.DbModel")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Korzh.EasyQuery.Db.Table\n    : IComparable<Table>\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Default constructor of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Korzh.EasyQuery.Db.Table")," class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Table")," source)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Default constructor of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Korzh.EasyQuery.Db.Table")," class")))),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/queryparamlist-class"},"QueryParamList")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of parameters associated with this table.")))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alias"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the alias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablecategory-class"},"TableCategory")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the table category.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the name of the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DesignLayout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the design layout (left, top and width, height of the table window in Data Model Editor).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtraCondition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the extra condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FullName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the full name of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IDictionary"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"object"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Stores additional information associated with this entity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Links"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablelinklist-class"},"TableLinkList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the links.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Priority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the table's priority. The default value is 0.  The table with the biggest priority (among all tables used in this query) will be placed at beginning of FROM clause in the result SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SchemaName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the name of the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Store"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablestore-class"},"TableStore")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the table store of the table.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompareToTable(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Table")," tbl)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Compares the current table with another table alphabetically.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ComposeAlias(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Composes the alias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFromExpr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the full name of the table which is used in FROM clause.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFullName(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," includeDbName)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the full name of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetPrimalExpr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the \"primal\" table expression.  Usually it's the name this table is referenced by in the DB.  However, for a virtual table it's simply its expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetRank()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets table's rank. It represents the number of links which come out from this table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetSchemaName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the schema of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetSqlExpr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the SQL expression that represents the table in WHERE clause.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetSqlName(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the name that represents the table in SQL expressions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetTableName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the name of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetTableTag()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the table Tag (class): DB or virtual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetWeight()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NeedQuote(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," s)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether string should be quoted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QuoteIfNecessary(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," s, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlformats-class"},"SqlFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Puts quotes around identifier if necessary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadFromJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Reads the content of the table from JSON (asynchronous way).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadOnePropFromJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," propName, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Reads one table's property from JSON (asynchronous way).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ToString()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a ",(0,r.kt)("see",{cref:"T:System.String"})," that represents the current ",(0,r.kt)("see",{cref:"T:System.Object"}),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WritePropertiesToJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonWriter")," writer, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes table's properties to JSON .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteToJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonWriter")," writer, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes table properties to ",(0,r.kt)("inlineCode",{parentName:"td"},"Newtonsoft.Json.JsonWriter")," object. Calls ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Korzh.EasyQuery.Db.Table.WritePropertiesToJsonAsync(Newtonsoft.Json.JsonWriter,System.Threading.CancellationToken)"),"procedure to do the job (asynchronous way).")))),(0,r.kt)("h3",{id:"static-methods"},"Static Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateByClass(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," className)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Table")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/table-class"},"Korzh.EasyQuery.Db.Table")," object the by table class name (db or virtual).")))))}k.isMDXComponent=!0}}]);