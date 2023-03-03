"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[327],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),y=r,h=c["".concat(s,".").concat(y)]||c[y]||d[y]||n;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7599:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=o(7462),r=(o(7294),o(3905));const n={},i="Getting started for ASP.NET 4",l={unversionedId:"easyquery/getting-started/getting-started--asp-net-4",id:"easyquery/getting-started/getting-started--asp-net-4",title:"Getting started for ASP.NET 4",description:"NB: The fastest way to apply EasyQuery to your ASP.NET 4 project is to clone the whole EasyQuery samples Git repository, play with the demo project for MVC or WebForms from that repository and then copy necessary parts from that project to your own one.",source:"@site/docs/easyquery/getting-started/getting-started--asp-net-4.md",sourceDirName:"easyquery/getting-started",slug:"/easyquery/getting-started/getting-started--asp-net-4",permalink:"/docs/docs/easyquery/getting-started/getting-started--asp-net-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/easyquery/getting-started/getting-started--asp-net-4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/docs/category/getting-started"},next:{title:"Getting started for WPF",permalink:"/docs/docs/easyquery/getting-started/getting-started-for-wpf"}},s={},p=[{value:"0. Prerequisites",id:"0-prerequisites",level:2},{value:"0.1 Register your trial version",id:"01-register-your-trial-version",level:3},{value:"0.2 Choose the way you will work with your data model",id:"02-choose-the-way-you-will-work-with-your-data-model",level:3},{value:"1. Install EasyQuery packages",id:"1-install-easyquery-packages",level:2},{value:"Step 2: Setup WebAPI controller",id:"step-2-setup-webapi-controller",level:2},{value:"2.1 Install WebAPI NuGet packages",id:"21-install-webapi-nuget-packages",level:3},{value:"2.2 Add WebApiConfig.cs",id:"22-add-webapiconfigcs",level:3},{value:"2.3 Modify Global.asax.cs",id:"23-modify-globalasaxcs",level:3},{value:"2.4 Add new API controller",id:"24-add-new-api-controller",level:3},{value:"3. Add a new view/page",id:"3-add-a-new-viewpage",level:2},{value:"3.1 For MVC projects",id:"31-for-mvc-projects",level:3},{value:"3.2 For WebForms",id:"32-for-webforms",level:3},{value:"Build. Run. Enjoy!",id:"build-run-enjoy",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-for-aspnet-4"},"Getting started for ASP.NET 4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NB: The fastest way to apply EasyQuery to your ASP.NET 4 project is to clone the whole ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples"},"EasyQuery samples Git repository"),", play with the demo project for MVC or WebForms from that repository and then copy necessary parts from that project to your own one.")),(0,r.kt)("p",null,"Below you will find the steps you need to do if you are going to add EasyQuery to your ASP.NET application from the scratch. The instructions are applied both for MVC and WebForms projects (with few little differences). It might look odd (since these two frameworks are tootally different) but it stems from how our demo projects are built."),(0,r.kt)("p",null,"The main work on the client-side is done by our EasyQuery JavaScript library, so the view engine (Razor in MVC or .aspx in WebForms) is responsible only for the plain HTML rendering in this case and the sever-side part is covered by WebAPI library which is the same on both platforms."),(0,r.kt)("p",null,"So, let's start."),(0,r.kt)("h2",{id:"0-prerequisites"},"0. Prerequisites"),(0,r.kt)("h3",{id:"01-register-your-trial-version"},"0.1 Register your trial version"),(0,r.kt)("p",null,"To start using EasyQuery trial you need to ",(0,r.kt)("a",{parentName:"p",href:"https://korzh.com/easyquery#get-started"},"register and get your trial version keys")," first.",(0,r.kt)("br",{parentName:"p"}),"\n",'It will take 1-2 minutes of your time. On registration you will get access to a special "Client\'s Area" of our web-site where you can see available licenses, get the keys, and submit a support request if necessary.'),(0,r.kt)("h3",{id:"02-choose-the-way-you-will-work-with-your-data-model"},"0.2 Choose the way you will work with your data model"),(0,r.kt)("p",null,"Data model - is a user-friendly representation of your project's database which is used by different EasyQuery components to show available entities, their attributes, conditional operators and the lists of available values during the query building process. So, first of all, you will need to choose the way you create your data model and/or load it in your application. There are several different ways of doing this."),(0,r.kt)("p",null,"For more information please read ",(0,r.kt)("a",{parentName:"p",href:"/$aid/d3296080-f7cd-4e32-b6ea-1e5319948c82"},"Working with data model in EasyQuery")," article first."),(0,r.kt)("p",null,"In this article, we assume that you use Entity Framework in your project and so, load your model directly from DbContext."),(0,r.kt)("h2",{id:"1-install-easyquery-packages"},"1. Install EasyQuery packages"),(0,r.kt)("p",null,"Obviously, first thing you will need to do - is to add EasyQuery NuGet packages to your project. You can use whatever way you prefer to do it: via NuGet Package Manager UI, using Package Manager Console or manually editing .csproj file and adding necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"<PackageReference ...")," nodes into it."),(0,r.kt)("p",null,"The only package which is absolutely required to apply EasyQuery to ASP.NET is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Korzh.EasyQuery.AspNet4/"},"Korzh.EasyQuery.AspNet4"))),(0,r.kt)("p",null,"In some cases you might also need to add the following packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Korzh.EasyQuery.EntityFramework6/"},"Korzh.EasyQuery.EntityFramework6")," - if your project uses Entity Framework 6.x."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Korzh.EasyQuery.DataExport/"},"Korzh.EasyQuery.DataExport"),"   - if you want to add some data exporting functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Korzh.EasyQuery.Linq/"},"Korzh.EasyQuery.Linq"),"  - if you want to implement a ",(0,r.kt)("a",{parentName:"li",href:"https://korzh.com/demo/easyquery-asp-net-core-razor/data-filtering"},"data filtering scenario")," in your project.")),(0,r.kt)("h2",{id:"step-2-setup-webapi-controller"},"Step 2: Setup WebAPI controller"),(0,r.kt)("p",null,"Server-side part of EasyQuery works via a WebAPI controller which handles all AJAX requests from the JS widgets placed on the view.\nWhile this is a usual thing for ASP.NET MVC / WebAPI applications, for a WebForms project it might look quite odd. But don't worry, it works well, we tried!"),(0,r.kt)("h3",{id:"21-install-webapi-nuget-packages"},"2.1 Install WebAPI NuGet packages"),(0,r.kt)("p",null,"EasyQuery's server-side part is implemented as a WebAPI controller. So, if you don't use WebAPI in your web-application yet - you will need to add some NuGet packages to your project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNet.WebApi.Core")," (it must be installed together with ",(0,r.kt)("inlineCode",{parentName:"li"},"Korzh.EasyQuery.AspNet4")," but you might want to update it to the latest version)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNet.WebApi.WebHost"))),(0,r.kt)("h3",{id:"22-add-webapiconfigcs"},"2.2 Add WebApiConfig.cs"),(0,r.kt)("p",null,"After installing WebAPI package you will also need to add a special configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"App_Start/WebApiConfig.cs"),") and modify your ",(0,r.kt)("inlineCode",{parentName:"p"},"Global.asax.cs"),"."),(0,r.kt)("p",null,"The simplest way will be to get that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/App_Start/WebApiConfig.cs"},"file from our sample project on GitHub")," and copy it to ",(0,r.kt)("inlineCode",{parentName:"p"},"App_Start")," folder in your project (or to merge with the one you are using now)."),(0,r.kt)("p",null,"Please note, we have re-configured the default WebAPI routing mechanism to make it use the attributes from the base controller classes (because they are not taken into the account by default). It is necessary for a proper work of the new WebAPI controller you will add on the next step. The routes for all controller's actions are defined in the base class - that's why we need that routing inheritance to be turned on."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NB1"),": The last solution about enabling the routing inheritance attributes works only with WebAPI version 2.2 or higher.  So, if your project uses an older version of WebAPI packages - please upgrade them first.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NB2"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebApiConfig.cs")," from our sample contains also 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterExporter")," calls which register the exporters for CSV and HTML formats. You can comment those two lines for the moment. If you want to add the exporting functionality - you can later install ",(0,r.kt)("inlineCode",{parentName:"p"},"Korzh.EasyQuery.DataExport")," package and uncomment those two lines back.")),(0,r.kt)("h3",{id:"23-modify-globalasaxcs"},"2.3 Modify Global.asax.cs"),(0,r.kt)("p",null,"After that we need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"Global.asax.cs")," file in your project to register WebAPI services and routes. Here is an example of this file from our samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Global.asax.cs"},"for MVC project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/blob/master/EqWebFormsDemo/Global.asax.cs"},"for WebForms project"))),(0,r.kt)("p",null,"Merge the content of one of these files (depending on what type of project you have) with ",(0,r.kt)("inlineCode",{parentName:"p"},"Global.asax.cs")," in your project."),(0,r.kt)("p",null,"Additionally ",(0,r.kt)("inlineCode",{parentName:"p"},"Application_Start")," method of Global.asax.cs file is a good place to set your trial license keys for EasyQuery that you got on the Step 0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nprotected void Application_Start()\n{\n    Korzh.EasyQuery.AspNet.License.Key = "Your license key for EasyQuery ASP.NET goes here";\n    Korzh.EasyQuery.AspNet.JsLicense.Key = "Your license key for EasyQuery.JS goes here";\n    .    .    .    .    .\n}\n\n')),(0,r.kt)("h3",{id:"24-add-new-api-controller"},"2.4 Add new API controller"),(0,r.kt)("p",null,"To simplify the task we prepare a base class for such controller from which you can derive your own one.\nAll necessary endpoints (actions) are already defined and properly handled in that basic class. So, all you need to do is to set some options in the overridden virtual method ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureEasyQueryOptions"),"."),(0,r.kt)("p",null,"Here are the controllers you can use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/tree/master/EqAspNet4Demo/Controllers/EasyQuery"},"For MVC project"),": AdvancedSearchController or EasyReportController"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/tree/master/EqWebFormsDemo/Controllers"},"For WebForms project"),": AdvancedSearchController")),(0,r.kt)("p",null,"Just download the controller of your choice and place it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Controllers/EasyQuery")," folder in your MVC project (or to ",(0,r.kt)("inlineCode",{parentName:"p"},"Controllers")," folder for WebForms one). Obviously, you will also need to change the namespace ID from ",(0,r.kt)("inlineCode",{parentName:"p"},"EqAspNet4Demo.Controllers")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"YourProjectDefaultNamespace.Controllers"),"."),(0,r.kt)("p",null,'For "EasyReportController" you will also need to copy to your project ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/tree/master/EqAspNet4Demo/Services"},"the service classes")," which is used for caching and query(reports) saving."),(0,r.kt)("p",null,"As it was mentioned above, to adjust the new contoller for your application you just need to modify a few lines in ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureEasyQueryOptions")," procedure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First of all, change the ID of the data model in  ",(0,r.kt)("inlineCode",{parentName:"li"},"options.DefaultModelId = ...")," line or remove it completely if you plan to load your model from DbContext"),(0,r.kt)("li",{parentName:"ol"},"Modify the name of your connection string parameter (if it's not ",(0,r.kt)("inlineCode",{parentName:"li"},"DefaultConnection")," as in example)"),(0,r.kt)("li",{parentName:"ol"},"Change the way you are going to load your data model. In our sample we are using the model created with Data Model Editor and saved as NWindSQL.xml file in App_Data folder. If you plan to load your model directly from your DbContext - then remove ",(0,r.kt)("inlineCode",{parentName:"li"},"options.UseModelLoader(...);")," line and replace it with the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"var dbContext = ApplicationDbContext.Create();\noptions.UseDbContext(dbContext);\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, you might want to change the type of the connection in ",(0,r.kt)("inlineCode",{parentName:"li"},"options.UseDbConnection<..>()")," call if you use another than SQL Server database (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"MySqlConnection")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"OracleConnection"),")")),(0,r.kt)("h2",{id:"3-add-a-new-viewpage"},"3. Add a new view/page"),(0,r.kt)("p",null,"The next step will be to add a page which introduces an advanced search or ad-hoc reporting functionality in your project. This is the part which differs for MVC and WebForms projects.\nIn case of MVC project you will need to add a new view and a corresponding controller's action. In WebForms - it will be an ",(0,r.kt)("inlineCode",{parentName:"p"},".aspx")," file with a code-behind ",(0,r.kt)("inlineCode",{parentName:"p"},".aspx.cs")),(0,r.kt)("p",null,"We are going to cover both those cases below."),(0,r.kt)("h3",{id:"31-for-mvc-projects"},"3.1 For MVC projects"),(0,r.kt)("p",null,"The simplest way to do it - is to copy the page you need from our sample project. Here are the direct links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Views/Home/AdvancedSearch.cshtml"},"Advanced search view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Views/Home/AdHocReporting.cshtml"},"Ad-hoc reporting"))),(0,r.kt)("p",null,"Of course, you will need to add a corresponding controller action for the new view so it will be accessible by some URL. In our sample we add those actions to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Controllers/HomeController.cs"},"Home controller")," but it can be any other controller in your own project of course."),(0,r.kt)("p",null,"Here is how such new action can look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public class HomeController : Controller\n{\n        .     .     .     . \n    public ActionResult AdvancedSearch()\n    {\n        return View();\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NB"),": About ",(0,r.kt)("inlineCode",{parentName:"p"},"Styles")," section\nPlease note that some styles in our advanced-search view are placed into ",(0,r.kt)("inlineCode",{parentName:"p"},"Styles")," section. So, you will either need to add ",(0,r.kt)("inlineCode",{parentName:"p"},'@RenderSection("Styles", required: false)')," line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Shared/_Layout.chstml")," or to move those stylesheet links outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Styles")," secition in your AdvancedSearch.cshtml")),(0,r.kt)("h3",{id:"32-for-webforms"},"3.2 For WebForms"),(0,r.kt)("p",null,"As for MVC you can just take the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/blob/master/EqWebFormsDemo/EasyQuery.aspx"},"page from our sample"),". Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/blob/master/EqWebFormsDemo/EasyQuery.aspx.cs"},"code behind class")," for that page as well."),(0,r.kt)("h2",{id:"build-run-enjoy"},"Build. Run. Enjoy!"),(0,r.kt)("p",null,"That's it. If everything was done right on the previous steps - your application will be built and run sucessfully and you can open and you will be able to open new page by the path you specified on the step 3.1 (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/Home/AdvancedSearch")," if you leave it as it's listed there)."),(0,r.kt)("p",null,"If something goes wrong - feel free to contact us: you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/issues"},"create an issue on GitHub")," or ",(0,r.kt)("a",{parentName:"p",href:"https://korzh.com/support"},"submit a support request")," on our website."))}d.isMDXComponent=!0}}]);