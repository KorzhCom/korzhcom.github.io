"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[6542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,N=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(N,i(i({ref:t},p),{},{components:a})):n.createElement(N,i({ref:t},p))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},65782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,d={unversionedId:"korzh-easyquery-db-namespace/sqlquerybuilder-class",id:"korzh-easyquery-db-namespace/sqlquerybuilder-class",title:"sqlquerybuilder-class",description:"Lets you build SQL commands based on Korzh.EasyQuery.Db.DbQuery object",source:"@site/docs/korzh-easyquery-db-namespace/sqlquerybuilder-class.md",sourceDirName:"korzh-easyquery-db-namespace",slug:"/korzh-easyquery-db-namespace/sqlquerybuilder-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/sqlquerybuilder-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sqlformats-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/sqlformats-class"},next:{title:"sqlquerybuilderextensions-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-db-namespace/sqlquerybuilderextensions-class"}},s={},o=[{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3}],p={toc:o},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lets you build SQL commands based on ",(0,r.kt)("a",{parentName:"p",href:"/korzh-easyquery-db-namespace/dbquery-class"},"Korzh.EasyQuery.Db.DbQuery")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Db.SqlQueryBuilder\n    : DbQueryBuilder\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.Db.dll")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SqlQueryBuilder(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/dbquery-class"},"DbQuery")," query)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Initializes a new instance of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlquerybuilder-class"},"Korzh.EasyQuery.Db.SqlQueryBuilder")," class.")))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CanBuild"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether the query can be built.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Portion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resultsetportion-class"},"ResultSetPortion")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlstatement-class"},"SqlStatement")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the result.")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CondSqlGen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConditionSqlGeneratedEventHandler")),(0,r.kt)("td",{parentName:"tr",align:null},"This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Build()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the query and stores the result in the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlquerybuilder-class"},"Korzh.EasyQuery.Db.SqlQueryBuilder.Result")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildFromClause()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildGroupClause()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildOrderClause()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildParamSQL()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"The same as ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlquerybuilder-class"},"Korzh.EasyQuery.Db.SqlQueryBuilder.BuildSQL")," method but generates parametrized SQL expression where all values are replaced by parameters (e.g. @param1).  You can access full list of parameters used in generated SQL statement through ",(0,r.kt)("inlineCode",{parentName:"td"},"Query.Params")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildSelectClause()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildSQL()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the SQL statement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BuildSQLEx(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," extraColumns, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," extraConditions)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the SQL with some additional columns and conditions which can be passed in parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateSqlStatement()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/sqlstatement-class"},"SqlStatement")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GenerateTableJoins(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resulttablenode-class"},"ResultTableNode")," node, ",(0,r.kt)("inlineCode",{parentName:"td"},"List"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablelink-class"},"TableLink"),">"," linksToParents, ",(0,r.kt)("inlineCode",{parentName:"td"},"StringBuilder")," leftBrackets)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetDefaultSelectStatement()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetParamExpr(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," id)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the parameter expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkResultNode(",(0,r.kt)("inlineCode",{parentName:"td"},"List"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resulttablenode-class"},"ResultTableNode"),">"," resultNodes, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resulttablenode-class"},"ResultTableNode")," node)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnCondSqlGen(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/conditionsqlgeneratedeventargs-class"},"ConditionSqlGeneratedEventArgs")," e)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Raises the ",(0,r.kt)("inlineCode",{parentName:"td"},"CondSqlGen")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OuterLinkTypeIfNecessary(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/tablelink-class"},"TableLink")," link, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resulttablenode-class"},"ResultTableNode")," node1, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-db-namespace/resulttablenode-class"},"ResultTableNode")," node2)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProcessColumns()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProcessConditionGroup(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")," group, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," processHavingRows, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ident)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProcessScalarValue(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")," cnd, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," value, ",(0,r.kt)("inlineCode",{parentName:"td"},"DataType")," dataType, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/scalarexproptions-enum"},"ScalarExprOptions")," exprOptions)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Processes scalar value and returns SQL (or some other query language) expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResetSqlBuilder()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Resets the SQL builder.")))))}m.isMDXComponent=!0}}]);