"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},o=void 0,l={unversionedId:"microsoft-aspnetcore-http-namespace/HttpResponseExtensions class",id:"microsoft-aspnetcore-http-namespace/HttpResponseExtensions class",title:"HttpResponseExtensions class",description:"Class HttpResponseExtensions.",source:"@site/docs/microsoft-aspnetcore-http-namespace/HttpResponseExtensions class.md",sourceDirName:"microsoft-aspnetcore-http-namespace",slug:"/microsoft-aspnetcore-http-namespace/HttpResponseExtensions class",permalink:"/easyquery/docs/api-reference/microsoft-aspnetcore-http-namespace/HttpResponseExtensions class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$index",permalink:"/easyquery/docs/api-reference/microsoft-aspnetcore-http-namespace/$index"},next:{title:"$index",permalink:"/easyquery/docs/api-reference/microsoft-extensions-dependencyinjection-namespace/$index"}},i={},p=[{value:"Static Methods",id:"static-methods",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Class HttpResponseExtensions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Microsoft.AspNetCore.Http.HttpResponseExtensions\n\n")),(0,a.kt)("p",null,"Assembly: ",(0,a.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.AspNetCore.dll")),(0,a.kt)("h3",{id:"static-methods"},"Static Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WriteJsonAsync(",(0,a.kt)("span",{style:{color:"blue"}},"this")," `HttpResponse` response, `object` data, `CancellationToken` ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task")),(0,a.kt)("td",{parentName:"tr",align:null},"Serializes and object to JSON and writes it to the HTTP response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WriteObjectAsync(",(0,a.kt)("span",{style:{color:"blue"}},"this")," `JsonWriter` jsonWriter, `object` data, `CancellationToken` ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task")),(0,a.kt)("td",{parentName:"tr",align:null},"Serializes and object to JSON and writes it to the JsonWriter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WriteResultSetAsync(",(0,a.kt)("span",{style:{color:"blue"}},"this")," `JsonWriter` jsonWriter, [IEqResultSet](api-reference/korzh-easyquery-services-namespace/ieqresultset-interface) resultSet, `CancellationToken` ct = ",(0,a.kt)("span",{style:{color:"blue"}},"null"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Task")),(0,a.kt)("td",{parentName:"tr",align:null},"Serializes result set to JSON and writes it to the JsonWriter.")))))}d.isMDXComponent=!0}}]);