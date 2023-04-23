"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[4526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=o(a),N=r,u=p["".concat(s,".").concat(N)]||p[N]||k[N]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},9209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,d={unversionedId:"korzh-easyquery-db-namespace/DbGate class",id:"korzh-easyquery-db-namespace/DbGate class",title:"DbGate class",description:"Represents base class which allows to get DB structure information availble for some connection",source:"@site/docs/korzh-easyquery-db-namespace/DbGate class.md",sourceDirName:"korzh-easyquery-db-namespace",slug:"/korzh-easyquery-db-namespace/DbGate class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/DbGate class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DbFieldInfoList class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/DbFieldInfoList class"},next:{title:"DbGateException class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/DbGateException class"}},s={},o=[{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3},{value:"Static Fields",id:"static-fields",level:3},{value:"Static Methods",id:"static-methods",level:3}],m={toc:o},p="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents base class which allows to get DB structure information availble for some connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Korzh.EasyQuery.Db.DbGate\n    : IDisposable\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DbGate()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate")," class.")))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this ",(0,r.kt)("inlineCode",{parentName:"td"},"DbGate")," is connected.  When this property is assigned to ",(0,r.kt)("c",null,"true")," then the object tries to connect to database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DbConnection")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionIsInternalSetted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionString"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the connection string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionStringBuilderDlg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/iconnectionstringbuilderdlg-interface"},"IConnectionStringBuilderDlg")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the connection string builder dialog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FinalConnectionString"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoginPrompt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate")," object should ask user for login and password when connect to database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Gets or sets the "Password" parameter of database connection.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProgressIndicator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/iprogressindicator-interface"},"IProgressIndicator")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the progress indicator object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Gets or sets the "User ID" parameter of database connection.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UseViews"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate")," will add views in the list of tables returned by ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the version of the current ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate")," implementation")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoginRequest"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoginRequestEventHandler")),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate")," objects needs to get ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.UserID")," and ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.Password")," to connect to some database.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AssembleConnectionString()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the final connection string based on the string defined in ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.ConnectionString")," property,  current environment variables and the parameters defined in UserID and Password properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckConnection()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks the connection. Calls CoreCheckConnection() method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreCheckConnection()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"When overriden in derived class, performs the actual connection checking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreGetDatabases(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbinfolist-class"},"DbInfoList")," databases)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetDatabases")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreGetFields(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," tableName, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList")," fields)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreGetFieldsBySQL(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sql, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList")," fields)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreGetLinks(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dblinkinfolist-class"},"DbLinkInfoList")," links)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreGetTables(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbtableinfolist-class"},"DbTableInfoList")," tables)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreLoadParams(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbparameters-class"},"DbParameters")," dbParams)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.LoadParams(Korzh.EasyQuery.Db.DbParameters)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CoreSaveParams(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbparameters-class"},"DbParameters")," dbParams)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implementation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.SaveParams(Korzh.EasyQuery.Db.DbParameters)")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dispose(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," disposing)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Releases unmanaged and - optionally - managed resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dispose()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Releases unmanaged and - optionally - managed resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetConnected()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},'Core implemenation of "get" method of ',(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.Connected")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetConnection()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DbConnection")),(0,r.kt)("td",{parentName:"tr",align:null},"When overriden in derived class, returns the connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetDataAdapter(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sqlText)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DbDataAdapter")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the data adapter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetDatabases()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbinfolist-class"},"DbInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of available databases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFields(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," tableName)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the fields by table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFieldsBySQL(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," sql)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the fields of result set of some SQL statement execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFieldsEx(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," tableName, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," sortByOriginalPosition)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the fields by table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetFormatType()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/formattype-enum"},"FormatType")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the format type for this DB gate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetGateId()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the id of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate"),". Must be overrided in inherited classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetLinks(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dblinkinfolist-class"},"DbLinkInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of available tables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the name of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate"),". Must be overrided in inherited classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetPwdName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Gets the name of "password" attribute in connection string.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetSqlDialect()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the name of default SQL dialect. Can be overrided in inherited classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetTableFieldsMap(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dictionary"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbfieldinfolist-class"},"DbFieldInfoList"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all table fields map for the particular DB and schema. Called in ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.CoreGetFields(System.String,System.String,System.String,Korzh.EasyQuery.Db.DbFieldInfoList)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetTables(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," dbName, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," schemaName)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbtableinfolist-class"},"DbTableInfoList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of available tables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetUidName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the name of User ID attribute in connection string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetVersion()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Core implemenation of ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.Version")," property. Must be overrided in descendants.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadParams(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbparameters-class"},"DbParameters")," dbParams)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads the connection parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogDebug(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," message, ",(0,r.kt)("inlineCode",{parentName:"td"},"Object[]")," args)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Formats and writes a debug log message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogError(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," message, ",(0,r.kt)("inlineCode",{parentName:"td"},"Object[]")," args)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Formats and writes an error log message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogInfo(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," message, ",(0,r.kt)("inlineCode",{parentName:"td"},"Object[]")," args)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Formats and writes an informational log message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnLoginRequest()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Raises the ",(0,r.kt)("inlineCode",{parentName:"td"},"LoginRequest")," event and filled UserID and Password by values returned in event arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveParams(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbparameters-class"},"DbParameters")," dbParams)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Saves the connection parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetConnected(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," connected)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},'Core implemenation of "set" method of ',(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbgate-class"},"Korzh.EasyQuery.Db.DbGate.Connected")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetConnection(",(0,r.kt)("inlineCode",{parentName:"td"},"DbConnection")," value)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetLogger(",(0,r.kt)("inlineCode",{parentName:"td"},"ILogger")," logger)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a logger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetProgress(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," pos)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Set the progress to the specified position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetProgressMinMax(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," min, ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," max)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the minimum and maximum of progress indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ToString()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a ",(0,r.kt)("inlineCode",{parentName:"td"},"System.String")," that represents the current ",(0,r.kt)("inlineCode",{parentName:"td"},"System.Object"),".")))),(0,r.kt)("h3",{id:"static-fields"},"Static Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the type of the connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DbGateTypes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Collection"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Type"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all registered DbGate types (descendants of DbGate)")))),(0,r.kt)("h3",{id:"static-methods"},"Static Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DbTypeByDataType(",(0,r.kt)("inlineCode",{parentName:"td"},"DataType")," dt)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SqlDbType")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets SqlDbType object which coressponds to DataType object specified in  parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Register(",(0,r.kt)("inlineCode",{parentName:"td"},"Type")," gateType)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers the specified gate type.")))))}k.isMDXComponent=!0}}]);