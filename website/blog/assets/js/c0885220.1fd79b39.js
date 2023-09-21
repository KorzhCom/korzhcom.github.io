"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3896],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={title:"ASP.NET Identity - Use claims to store additional user's data",tags:["ASP-NET-CORE","ASP-NET-IDENTITY","CLAIMS"],authors:["korzh","melnalex"],slug:"aspnet-identity-store-user-data-in-claims"},i="ASP.NET Identity: Use claims to store additional user's data",l={permalink:"/blog/aspnet-identity-store-user-data-in-claims",source:"@site/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data/index.md",title:"ASP.NET Identity - Use claims to store additional user's data",description:"NB: The solution presented in this article will work in version 2.0 of ASP.NET Core only!",date:"2018-01-22T00:00:00.000Z",formattedDate:"January 22, 2018",tags:[{label:"ASP-NET-CORE",permalink:"/blog/tags/asp-net-core"},{label:"ASP-NET-IDENTITY",permalink:"/blog/tags/asp-net-identity"},{label:"CLAIMS",permalink:"/blog/tags/claims"}],readingTime:4.765,hasTruncateMarker:!0,authors:[{name:"Serhii Korzh",title:"Team Lead & Maintainer of EasyQuery",url:"https://github.com/korzh",imageURL:"https://github.com/korzh.png",key:"korzh"},{name:"Oleksandr Melnychenko",title:"Maintainer of EasyQuery & Localizer",url:"https://github.com/melnalex",imageURL:"https://github.com/melnalex.png",key:"melnalex"}],frontMatter:{title:"ASP.NET Identity - Use claims to store additional user's data",tags:["ASP-NET-CORE","ASP-NET-IDENTITY","CLAIMS"],authors:["korzh","melnalex"],slug:"aspnet-identity-store-user-data-in-claims"},prevItem:{title:"ASP.NET Identity - Weakening password policies",permalink:"/blog/aspnet-identity-weakening-password-policies"},nextItem:{title:"Welcome",permalink:"/blog/Welcome"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"Introduction",id:"introduction",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8517).Z,width:"1280",height:"671"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NB"),": The solution presented in this article will work in version 2.0 of ASP.NET Core only!",(0,o.kt)("br",{parentName:"p"}),"\n","If you use a newer version of ASP.NET Core (e.g. 2.2) - here is a ","[new post on the same topic]","({{ 'ancid05' | internal_path}}).")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"With this post, we start a series of articles that describe the different aspects of using ASP.NET Identity in your ASP.NET (Core) applications.\nAll the code in the following articles was built for and tested with ASP.NET Core 2.0. However, in most cases, it will work well in earlier versions of .NET framework (4.x) and ASP.NET Identity library (2.x)"),(0,o.kt)("p",null,"One more note. We are NOT going to do an introduction to or describe the basic principles of ASP.NET Core in general or APS.NET Identity in particular. The following material is more for the developers who already have some experience with both of them. If you don't - please start by reading the tutorials on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/"},"ASP.NET Core documentation")," website and creating your first web app with it."))}d.isMDXComponent=!0},8517:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/auth-claims-01-93567628ad95a0df58d965e5619e2166.png"}}]);