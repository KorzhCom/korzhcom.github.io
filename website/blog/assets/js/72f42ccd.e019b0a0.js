"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4555],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const r={title:"Dependency Injection Put Simply",tags:["PROGRAMMING","DEPENDENCY-INJECTION"],authors:["korzh","melnalex"],slug:"dependency-injection-explanation-in-simple-words"},i="Dependency Injection Put Simply",s={permalink:"/blog/dependency-injection-explanation-in-simple-words",source:"@site/blog/2020-01-08-dependency-injection-explanation-in-simple-words/index.md",title:"Dependency Injection Put Simply",description:"The concept of Dependency Injection can look over complicated especially for beginners.",date:"2020-01-08T00:00:00.000Z",formattedDate:"January 8, 2020",tags:[{label:"PROGRAMMING",permalink:"/blog/tags/programming"},{label:"DEPENDENCY-INJECTION",permalink:"/blog/tags/dependency-injection"}],readingTime:4.435,hasTruncateMarker:!0,authors:[{name:"Serhii Korzh",title:"Team Lead & Maintainer of EasyQuery",url:"https://github.com/korzh",imageURL:"https://github.com/korzh.png",key:"korzh"},{name:"Oleksandr Melnychenko",title:"Maintainer of EasyQuery & Localizer",url:"https://github.com/melnalex",imageURL:"https://github.com/melnalex.png",key:"melnalex"}],frontMatter:{title:"Dependency Injection Put Simply",tags:["PROGRAMMING","DEPENDENCY-INJECTION"],authors:["korzh","melnalex"],slug:"dependency-injection-explanation-in-simple-words"},prevItem:{title:".NET vs. Java - Which Platform Is Better for Your Software Developer Career?",permalink:"/blog/dotnet-vs-java-what-development-platform-better"},nextItem:{title:"Add extra user claims in ASP.NET Core webapp",permalink:"/blog/add-extra-user-claims-aspnet-core-webapp"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Menu (interfaces)",id:"menu-interfaces",level:2},{value:"Actual snacks (implementations)",id:"actual-snacks-implementations",level:2},{value:"Delivery (injection)",id:"delivery-injection",level:2},{value:"Providers",id:"providers",level:2},{value:"Wrapping up",id:"wrapping-up",level:2},{value:"Conclusions",id:"conclusions",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9990).Z,width:"1000",height:"553"})),(0,o.kt)("p",null,"The concept of Dependency Injection can look over complicated especially for beginners.\nHere, I have tried to explain it by using a very simple example from the real world: a food delivery app on your mobile phone."),(0,o.kt)("p",null,"So, imagine you open such an app on your smartphone. Let\u2019s see what we have here:"),(0,o.kt)("h2",{id:"menu-interfaces"},"Menu (interfaces)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DI concepts: intefaces are like items in a cafe menu",src:n(9802).Z,width:"1200",height:"675"})),(0,o.kt)("p",null,"Photo by ",(0,o.kt)("a",{href:"https://unsplash.com/@elizagalevi23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Levi Elizaga")," on ",(0,o.kt)("a",{href:"https://unsplash.com/s/photos/menu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")),(0,o.kt)("p",null,"Obviously, this app has a menu with a description of each item available there. To make it more similar to the Dependency Injection (DI) container let\u2019s suppose all items on the menu are more or less generic. So, you have such options as a burger, chips, green salad, a soda drink, coffee, etc. However, you don\u2019t know what meat is used for that burger, how exactly those chips are cooked, and what is the exact soda drink you will get.\nThese menu items are your ",(0,o.kt)("strong",{parentName:"p"},"interfaces"),". They describe the main characteristics of each snack but don\u2019t bother you with the exact implementation."),(0,o.kt)("h2",{id:"actual-snacks-implementations"},"Actual snacks (implementations)"),(0,o.kt)("p",null,"Then, you have the actual snacks which are delivered to you when you place an order. These are the ",(0,o.kt)("strong",{parentName:"p"},"implementations")," of your interfaces.\nObviously, the implementations can differ depending on which particular restaurant they are delivered from."),(0,o.kt)("h2",{id:"delivery-injection"},"Delivery (injection)"),(0,o.kt)("p",null,"Now, let\u2019s suppose that your app, in some magical way, has a zero-time delivery function (OK, almost zero-time).\nSo, at whatever place you are now (whatever part of your project), you select the items you need, press the \u201cOrder\u201d button, and the chosen snacks instantly appear in your hands.\nWe can say that they are ",(0,o.kt)("strong",{parentName:"p"},"injected")," to the place where you are now :)\nMoreover, if a snack (like breakfast or combo-meal) depends on other snacks, those dependant snacks are created automatically and also \u201cinjected\u201d into your combo-meal.\nFor example, a Big Mac Combo Meal includes a BigMac burger, some fries, and a drink. You don\u2019t need to order them separately. They will all be created and delivered to you automatically."),(0,o.kt)("h2",{id:"providers"},"Providers"),(0,o.kt)("p",null,"Now let\u2019s suppose you can choose which restaurant will deliver your snacks.\nYou can choose either it will be a McDonald\u2019s or Burger King or your favorite cafe nearby."),(0,o.kt)("p",null,"Moreover, you can also choose the type of food (with meat, fish only, vegetarian, kosher, etc).\nSo, now you can still order a burger but if you selected \u201cvegetarian\u201d,\nour magical app will deliver to you a burger with soy meat or a burger made from that cultured meat popular nowadays."),(0,o.kt)("p",null,"The main point here is this: with this app, you can easily change the actual provider (so, the implementation)\nof your snacks without changing the simplicity and convenience of the whole process."),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dependency Injection Schema",src:n(9833).Z,width:"821",height:"391"})),(0,o.kt)("p",null,"Your food delivery app here is a ",(0,o.kt)("strong",{parentName:"p"},"Dependency Injection (DI) Container"),". The menu items are ",(0,o.kt)("strong",{parentName:"p"},"interfaces")," of the services you might need somewhere in your project.\nThe actual snacks are the ",(0,o.kt)("strong",{parentName:"p"},"implementations")," (actual classes that implement those services).\nWhen you need your some snacks (",(0,o.kt)("strong",{parentName:"p"},"services"),") you tell your app (",(0,o.kt)("strong",{parentName:"p"},"DI container"),") what you need and they are delivered (",(0,o.kt)("strong",{parentName:"p"},"injected")," in the place you are now) to you immediately."),(0,o.kt)("p",null,"You may ask, why DI does matter? What is so special about this concept that has made it so popular?"),(0,o.kt)("p",null,"As you can see from this real-word example, dependency injection has a lot of benefits.\nLet\u2019s list the most important ones (again, with a real-world example for each of them):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simplicity"),(0,o.kt)("br",{parentName:"p"}),"\n","With DI, you don\u2019t need to write a lot of code just to create an object of a particular class.\nEspecially when this object requires several other objects for its work (like a combo-meal in our example).\nYou just \u201ctell\u201d your DI container (your food delivery app) what you need and it\u2019s delivered to you right away.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Maintainability"),(0,o.kt)("br",{parentName:"p"}),"\n","n terms of code, your classes become loosely coupled (each of the classes is less dependent on the concrete implementations of other classes),\nso your code will be easier to maintain.\nIn terms of our food delivery app, it\u2019s easier to maintain one app and order (inject) necessary snacks,\ninstead of thinking where to buy all the ingredients for each of them and then cook everything yourself.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Flexibility"),(0,o.kt)("br",{parentName:"p"}),"\n","With DI, your code becomes loosely coupled and so, more flexible, since you depend on interfaces and it\u2019s very easy to replace the implementation.\nFor example, you have a repository interface for storing data about users.\nThe initial implementation of this repository will save the data to files. After that, you can decide to use the database.\nThe implementation of the repository is changed but all the code that uses it remains the same.",(0,o.kt)("br",{parentName:"p"}),"\n","It\u2019s similar to how you switch the provider of the snacks (or the preferred type of food) in your app. The process of order and delivery remains the same, you just start getting other snacks."))),(0,o.kt)("h2",{id:"conclusions"},"Conclusions"),(0,o.kt)("p",null,"As you can see, Dependency Injection is a very useful and convenient technique,\nthe main principles of which can be applied not only in coding but in some real-world situations.\nIn terms of programming, you get more maintainable, more readable, more flexible, and more extensible code.\nThese are good enough reasons to get better acquainted with this technology and start using it in your projects."))}m.isMDXComponent=!0},9990:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dependency-injection-food-app-d23496c67203b37028801d53bc2ab88b.png"},9833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dependency-injection-schema-401653f67386295e83a91127391480fa.png"},9802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/di-interfaces-as-menu-50acc859ddc628cbf48a572460110880.png"}}]);