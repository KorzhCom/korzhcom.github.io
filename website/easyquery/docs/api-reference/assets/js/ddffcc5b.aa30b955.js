"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[1329],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,N=m["".concat(d,".").concat(u)]||m[u]||k[u]||l;return n?a.createElement(N,i(i({ref:e},s),{},{components:n})):a.createElement(N,i({ref:e},s))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89470:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"korzh-easyquery-namespace/condition-class",id:"korzh-easyquery-namespace/condition-class",title:"condition-class",description:"Represents one condition in the query.",source:"@site/docs/korzh-easyquery-namespace/condition-class.md",sourceDirName:"korzh-easyquery-namespace",slug:"/korzh-easyquery-namespace/condition-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/condition-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"commonextensions-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/commonextensions-class"},next:{title:"conditionexprlist-class",permalink:"/easyquery/docs/api-reference/korzh-easyquery-namespace/conditionexprlist-class"}},d={},p=[{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Static Fields",id:"static-fields",level:3},{value:"Static Methods",id:"static-methods",level:3}],s={toc:p},m="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents one condition in the query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Korzh.EasyQuery.Condition\n\n")),(0,r.kt)("p",null,"Assembly: ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.dll")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseAttr"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the base entity attribute for this condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseExpr"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/eqexpression-class"},"EqExpression")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the base expression of the condtion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Conditions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/conditionsstore-class"},"ConditionsStore")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DefaultOperand"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operand-class"},"Operand")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the default operand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expressions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/conditionexprlist-class"},"ConditionExprList")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of all expressions used in condition.  First expression in the list is base expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FullNum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the full number of condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HasEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this group has at least one enabled condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the index in the parent's list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsEmpty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this condition is empty (zero conditions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Korzh.EasyQuery.Condition")," is enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsGroup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this instance is a group of conditions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsHaving"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this condition must be placed into HAVING clause in result SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsInJoin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this condition must be placed into JOIN clause in result SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsParameterized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Korzh.EasyQuery.Condition")," is parameterized.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsReadOnly"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether this ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Korzh.EasyQuery.Condition")," is read-only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsRoot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this condition is the root condition of the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsUpdating"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this instance is updating.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Level"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the level of this condition in query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linking"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Condition.LinkType")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the linking type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkingStr"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the text representation of linking type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/datamodel-class"},"DataModel")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operator-class"},"Operator")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the operator used in this condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the parent ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Korzh.EasyQuery.Condition")," which this condition is included to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the query which this condition belongs to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UseDefaultValues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether condition expressions should get default values after creation")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddConditionGroup(",(0,r.kt)("inlineCode",{parentName:"td"},"LinkType")," lnkType = 99)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates and adds a new group of conditions into the current one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddConditionWithExpr(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," attrId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," operatorId, ",(0,r.kt)("inlineCode",{parentName:"td"},"EqExpression[]")," values)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a simple condition by the entity attribute's ID, the operator's ID and the list of values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddCustomCondition(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," operatorId, ",(0,r.kt)("inlineCode",{parentName:"td"},"EqExpression[]")," expressions)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddSimpleCondition(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," attrId, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," operatorId = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"String[]")," values)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a simple condition by attribute ID, operator ID and a list of values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddSimpleCondition(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")," attr, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operator-class"},"Operator")," op, ",(0,r.kt)("inlineCode",{parentName:"td"},"EqExpression[]")," exprs)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a simple condition by attribute ID, operator ID and a list of values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AdjustOperator()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjusts the operator by base expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BeginUpdate()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts the update process.  OnConditionsChanged event of corresponding Query object is not raised while condition is in update state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckDataModel()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks DataModel property. Generates an exception if it is null.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CheckQuery()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks Query property. Generates an exception if it is null.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Clone()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a duplicate of the current condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ContainsGhosts(",(0,r.kt)("inlineCode",{parentName:"td"},"Condition&")," outCond)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},'Determines whether this condition group contains a condition with a "ghost" attribute.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateValueExpr(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," index)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/eqexpression-class"},"EqExpression")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates the value expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateValueExprByOperand(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operand-class"},"Operand")," opnd)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/eqexpression-class"},"EqExpression")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a value expression by operand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoExprContentChanged(",(0,r.kt)("inlineCode",{parentName:"td"},"object")," sender, ",(0,r.kt)("inlineCode",{parentName:"td"},"EventArgs")," e)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Does the expr changed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EndUpdate()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Ends the update process.  Raises ConditionsChange event if some modification(s) was(were) made during update process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Find(",(0,r.kt)("inlineCode",{parentName:"td"},"Func"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"bool"),">"," conditionPredicate, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," processGroup = True)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Search all sub-conditions of this condition and returns the first condition  for which conditionPredicate function returns ",(0,r.kt)("c",null,"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FindCondByAttr(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")," attr)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the condition the by entity attribute set in the left part of this condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetBaseAttr()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the base entity attribute for this condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetConditionGroupHeader()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the condition group header text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetConditionText(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querytextformats-class"},"QueryTextFormats")," formats, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," levelSpace, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," prefix)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns text representation of the search condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetHaving()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets a value indicating whether this condition must be placed into HAVING clause in result SQL.  Must be overriden in the inherited classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetOffspringCount()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the number of all offspings of the condition group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetOldClassName()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the old name of the condition class (PDCT or SMPL).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetOperand(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," index)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operand-class"},"Operand")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the condition operand based on its index. Index 0 stands for an attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetSimpleConditionText(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querytextformats-class"},"QueryTextFormats")," formats, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," levelSpace, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," prefix)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns text representation of thesimple condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetText(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querytextformats-class"},"QueryTextFormats")," formats)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns text representation of condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetText()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns text representation of condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetText(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/querytextformats-class"},"QueryTextFormats")," formats, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," levelSpace, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," prefix)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns text representation of condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetUsedEntities()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IEnumerable"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entity-class"},"Entity"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the list of entities that are used in conditions of this group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InsertSimpleCondition(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," index, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/entityattr-class"},"EntityAttr")," attr, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operator-class"},"Operator")," op, ",(0,r.kt)("inlineCode",{parentName:"td"},"EqExpression[]")," exprs)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition")),(0,r.kt)("td",{parentName:"tr",align:null},"Inserts a simple condition by the attribute, the operator and the list of expressions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsGhostBaseExpr()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadFromXmlReader(",(0,r.kt)("inlineCode",{parentName:"td"},"XmlReader")," reader)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads the propertis of the ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Korzh.EasyQuery.Condition")," from the XML reader.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadXmlAttributes(",(0,r.kt)("inlineCode",{parentName:"td"},"XmlReader")," reader)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads conditions node attributes from XML reader.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MoveDown()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves the condition to one position down (taking into account the level of other conditions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MoveUp()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves the condition to one position up (taking into account the level of other conditions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadFromJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Reads the content of the condition from JSON  (asynchronous way).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadOnePropFromJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonReader")," reader, ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," propName, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Reads one property of the condition from JSON  (asynchronous way).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RecreateValueExpr(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," index)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/eqexpression-class"},"EqExpression")),(0,r.kt)("td",{parentName:"tr",align:null},"Recreates the value expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Refresh()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Refreshes this instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveThis()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes this condition from the query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reset()"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the condition list and resets linking type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveToXmlWriter(",(0,r.kt)("inlineCode",{parentName:"td"},"XmlWriter")," writer)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Saves condition object to XML writer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scan(",(0,r.kt)("inlineCode",{parentName:"td"},"Action"),"<",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/condition-class"},"Condition"),">"," conditionHandler, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," processGroup = True)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Scans all sub-conditions of this condition group and calls a handler for each of them")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetEnabled(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," newValue, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," updateChildren = True, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," silent = False)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the Enabled property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetOperator(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operator-class"},"Operator")," newOperator)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetOperatorSilent(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/operator-class"},"Operator")," newOperator)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},'Sets the operator in "silent" mode (no event is raised, no expression is adjusted).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetQuery(",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/query-class"},"Query")," newQuery)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetReadOnly(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," newValue, ",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," silent = False)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the ReadOnly property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetValueExpr(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," index, ",(0,r.kt)("a",{parentName:"td",href:"/korzh-easyquery-namespace/eqexpression-class"},"EqExpression")," expr)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the value expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShiftLevel(",(0,r.kt)("inlineCode",{parentName:"td"},"bool")," up)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Shifts the row level (taking into account the level of other rows)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteContentToXml(",(0,r.kt)("inlineCode",{parentName:"td"},"XmlWriter")," writer)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes the content of condition to the XmlWriter object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WritePropertiesToJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonWriter")," writer, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes all condition properties to JSON (asynchronous way).  (this method can be overriden in inherited classes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteToJsonAsync(",(0,r.kt)("inlineCode",{parentName:"td"},"JsonWriter")," writer, ",(0,r.kt)("inlineCode",{parentName:"td"},"CancellationToken")," ct = ",(0,r.kt)("span",{style:{color:"blue"}},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Task")),(0,r.kt)("td",{parentName:"tr",align:null},"Writes the content of the condition to JSON (asynchronous way).")))),(0,r.kt)("h3",{id:"static-fields"},"Static Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GroupTag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The tag (condition class) which represents a group of conditions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SimpleConditionTag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The tag (condition class) which represents a simple condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XmlTagName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tag which used when we serialize condition to XML")))),(0,r.kt)("h3",{id:"static-methods"},"Static Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkTypeToStr(",(0,r.kt)("inlineCode",{parentName:"td"},"LinkType")," lt)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts LinkType value to its string representation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StrToLinkType(",(0,r.kt)("inlineCode",{parentName:"td"},"string")," s)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Condition.LinkType")),(0,r.kt)("td",{parentName:"tr",align:null},"Convert string representation to LinkType value.")))))}k.isMDXComponent=!0}}]);