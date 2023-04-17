"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[4169],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=n,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?r.createElement(c,i(i({ref:e},d),{},{components:a})):r.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14158:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"korzh-easyquery-namespace/EntityAttr class",id:"korzh-easyquery-namespace/EntityAttr class",title:"EntityAttr class",description:"Represents one entity attribute of data model.",source:"@site/docs/korzh-easyquery-namespace/EntityAttr class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/EntityAttr class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/EntityAttr class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/Entity class"},next:{title:"EntityAttrDescriptor class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/EntityAttrDescriptor class"}},s={},p=[{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}],d={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents one entity attribute of data model."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.EntityAttr\n    : MetaEntityAttr, IComparable<EntityAttr>\n\n")),(0,n.kt)("p",null,"Assembly: ",(0,n.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CustomFunc"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the custom function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Editors"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/editorsmap-class"},"EditorsMap")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the editors map.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Entity"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/entity-class"},"Entity")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HasSubQuery"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this attribute includes a sub-query in its expression.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IsAggregate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this attribute represents some aggregate column.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IsGhost"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},'Gets a value indicating whether this is a "ghost attribute" - an attribute which was not found in the model.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LookupAttr"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")),(0,n.kt)("td",{parentName:"tr",align:null},"The lookup attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Model"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/datamodel-class"},"DataModel")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/operatorlist-class"},"OperatorList")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the list of operators which can be applied for this attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/queryparamlist-class"},"QueryParamList")),(0,n.kt)("td",{parentName:"tr",align:null},"The parameters associated with this entity attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UseInConditions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the attribute can be used in query conditions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UseInResult"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the attribute can be used in result columns (SELECT clause).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UseInSorting"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the attribute can be used in sorting.")))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AddParamsTo(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/queryparamlist-class"},"QueryParamList")," paramList)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Adds all query parameters used in this attribute to the list passed via paramList.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CopyFrom(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")," attr)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Copies all attribute's properties from another entity attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExtractParamsFromExpr()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Parse attribute's expression and extract all parameters (like @Param1) used there.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FillOperatorsWithDefaults(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/datamodel-class"},"DataModel")," model = ",(0,n.kt)("span",{style:{color:"blue"}},"null"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Fills the operators list with default operators depending of attribute type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetDefaultOperator()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/operator-class"},"Operator")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the default operator (usually it is first operator in Operations list).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetValueEditor(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/operator-class"},"Operator")," op, ",(0,n.kt)("inlineCode",{parentName:"td"},"int")," operandIndex)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ValueEditor")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the most suitable value editor for this attribute and operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HasParams()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines whether this attribute has parameters in its expression.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hide()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Hides this entity attribute.  It means that this function just sets all UseInResult, UseInConditions and UseInSorting properties to ",(0,n.kt)("c",null,"false"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OnModelAssignment()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Called when model is assigned.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ProcessVirtualExpr()"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Scans attribute's expression for new parameters, tables, etc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ReadPropertyFromJsonAsync(",(0,n.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," propName, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task")),(0,n.kt)("td",{parentName:"tr",align:null},"Reads one attribute's property from JSON (asynchronous way).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SetDefaultOperator(",(0,n.kt)("a",{parentName:"td",href:"api-reference/korzh-easyquery-namespace/operator-class"},"Operator")," op)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the default operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WritePropertiesToJsonAsync(",(0,n.kt)("inlineCode",{parentName:"td"},"JsonWriter")," writer, ",(0,n.kt)("inlineCode",{parentName:"td"},"BitOptions")," rwOptions, ",(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Task")),(0,n.kt)("td",{parentName:"tr",align:null},"Writes attribute properties to JSON (asynchronous way).")))))}u.isMDXComponent=!0}}]);