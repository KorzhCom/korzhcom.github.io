"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8698],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const o={title:"ASP.NET Core default project structure explained (part 2)",tags:["ASP-NET-CORE","PROJECT-TEMPLATE"],authors:["korzh","melnalex"],slug:"asp-net-core-project-structure-explained-part2"},r="ASP.NET Core default project structure explained (part 2)",s={permalink:"/blog/asp-net-core-project-structure-explained-part2",source:"@site/blog/2020-08-10-asp-net-core-project-structure-explained-part2/index.md",title:"ASP.NET Core default project structure explained (part 2)",description:"This is the second part of the article, where we take apart the default ASP.NET Core solution template piece by piece and try to explain the purpose of each part and how exactly it works. You can consider it as a reference where you can check why a particular part was added to your project and find a link to the relevant documentation that explains it in detail.",date:"2020-08-10T00:00:00.000Z",formattedDate:"August 10, 2020",tags:[{label:"ASP-NET-CORE",permalink:"/blog/tags/asp-net-core"},{label:"PROJECT-TEMPLATE",permalink:"/blog/tags/project-template"}],readingTime:10.075,hasTruncateMarker:!0,authors:[{name:"Serhii Korzh",title:"Team Lead & Maintainer of EasyQuery",url:"https://github.com/korzh",imageURL:"https://github.com/korzh.png",key:"korzh"},{name:"Oleksandr Melnychenko",title:"Maintainer of EasyQuery & Localizer",url:"https://github.com/melnalex",imageURL:"https://github.com/melnalex.png",key:"melnalex"}],frontMatter:{title:"ASP.NET Core default project structure explained (part 2)",tags:["ASP-NET-CORE","PROJECT-TEMPLATE"],authors:["korzh","melnalex"],slug:"asp-net-core-project-structure-explained-part2"},prevItem:{title:"CRUD operations in ASP.NET Core with EasyData library",permalink:"/blog/crud-asp-net-core-with-easydata"},nextItem:{title:".NET vs. Java - Which Platform Is Better for Your Software Developer Career?",permalink:"/blog/dotnet-vs-java-what-development-platform-better"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Startup class",id:"startup-class",level:2},{value:"Startup class constructor",id:"startup-class-constructor",level:3},{value:"ConfigureServices method",id:"configureservices-method",level:3},{value:"AddDbContext",id:"adddbcontext",level:4},{value:"A few words about the \u201cBuilder\u201d pattern",id:"a-few-words-about-the-builder-pattern",level:5},{value:"AddDefaultIdentity",id:"adddefaultidentity",level:4},{value:"AddRazorPages",id:"addrazorpages",level:3},{value:"Configure method",id:"configure-method",level:2},{value:"Exception handling and security transport",id:"exception-handling-and-security-transport",level:4},{value:"Processing static files (UseStaticFiles)",id:"processing-static-files-usestaticfiles",level:4},{value:"Routing (UseRouting and UseEndpoints)",id:"routing-userouting-and-useendpoints",level:4},{value:"Authentication/Authorization (UseAuthentication, UseAuthorization)",id:"authenticationauthorization-useauthentication-useauthorization",level:4},{value:"Wrapping Up",id:"wrapping-up",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1696).Z,width:"1920",height:"1442"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is the second part of the article, where we take apart the default ASP.NET Core solution template piece by piece and try to explain the purpose of each part and how exactly it works. You can consider it as a reference where you can check why a particular part was added to your project and find a link to the relevant documentation that explains it in detail.")),(0,i.kt)("h2",{id:"startup-class"},"Startup class"),(0,i.kt)("p",null,"As we already mentioned in the first article, the Startup class is the entry point for all initialization codes in your application.\nLong story short, the Startup defines what your application will do and how exactly it will work."),(0,i.kt)("p",null,"By default, any Startup class in the ASP.NET Core application includes three main parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The constructor")," where you can define some internal variables, set up some configuration settings, or perform application-wide initializations. For example, we suggest our users set here their license keys for our EasyQuery library.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ConfigureServices")," method. Here we register all necessary services in the DI (dependency injection) container and define the configuration settings for some of them. In case you are not aware of what Dependency Injection is, here is an article on our blog that explains this concept in simple words.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure")," method. This is the stage when you set up the middleware pipeline for your project."))),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," methods are called automatically while the application starts. You just need to define the services and the middlewares there correspondingly."),(0,i.kt)("p",null,"Now, let\u2019s take a look at each of these sections more in detail."),(0,i.kt)("h3",{id:"startup-class-constructor"},"Startup class constructor"),(0,i.kt)("p",null,"The default ASP.NET Core project template contains only the following one line of code in the constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n")),(0,i.kt)("p",null,"It just saves in the class property the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1"},"configuration object"),"\npassed here by the DI container, so we can use it in other methods.\nIn the ",(0,i.kt)("a",{parentName:"p",href:"https://korzh.com/blog/asp-net-core-project-structure-explained-part1"},"first article"),",\nwe have already considered the configuration mechanism used in ASP.NET Core applications."),(0,i.kt)("h3",{id:"configureservices-method"},"ConfigureServices method"),(0,i.kt)("p",null,"As it was mentioned before, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method contains the function calls that register different application services in the DI container.\nThese can be authentication/authorization services, MVC or Razor Pages engine, the classes for working with DB, or any other possible services."),(0,i.kt)("p",null,"The only parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method has ",(0,i.kt)("inlineCode",{parentName:"p"},"IServiceCollection")," type that represents a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceDescriptor")," items.\nEach of those items maps some type (usually an interface) to a particular implementation of this type."),(0,i.kt)("p",null,"According to the interface, we can use only usual ",(0,i.kt)("inlineCode",{parentName:"p"},"IList")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ICollection")," functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"Add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AddRange"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Remove"),", and other methods.\nHowever, as you have already noticed, ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," contains such calls as ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddDbContext"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddRazorPages"),", and similar.\nYou may ask, \u201cHow is it possible?\u201d The answer is ",(0,i.kt)("strong",{parentName:"p"},"extension methods"),". Each sub-system used in our project (like Entity Framework Core or MVC engine) defines an extension method (sometimes even a few) for the ",(0,i.kt)("inlineCode",{parentName:"p"},"IServiceCollection")," interface to simplify the registration in the DI and configuration of the services available in that sub-system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NB"),": Please note that the order of the services you register in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method is not important.\nThis method is executed only once upon your application start."),(0,i.kt)("p",null,"So, let's take a closer look at the default ConfigureServices\u2019 content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public void ConfigureServices(IServiceCollection services)\n{\n    services.AddDbContext<ApplicationDbContext>(options =>\n        options.UseSqlServer(\n            Configuration.GetConnectionString("DefaultConnection")));\n    services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)\n        .AddEntityFrameworkStores<ApplicationDbContext>();\n    services.AddRazorPages();\n}\n')),(0,i.kt)("p",null,"So, there are only three calls there: ",(0,i.kt)("inlineCode",{parentName:"p"},"AddDbContext"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AddDefaultIdentity"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"AddRazorPages"),". Let\u2019s inspect each of them separately."),(0,i.kt)("h4",{id:"adddbcontext"},"AddDbContext"),(0,i.kt)("p",null,"This method is provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/"},"Entity Framework Core")," framework. It registers and configures our database context. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Action"),"delegate passed in the parameter allows us to define the parameters of this DbContext. For example, with ",(0,i.kt)("inlineCode",{parentName:"p"},"UseSqlServer")," call, we tell our DbContext to use a particular type of connection (",(0,i.kt)("inlineCode",{parentName:"p"},"SqlConnection"),") with a particular connection string. The connection string itself is taken from the configuration so it can be easily changed in Development or Production environments. You can find the default connection string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," configuration file, which we already analyzed in the ",(0,i.kt)("a",{parentName:"p",href:"https://korzh.com/blog/asp-net-core-project-structure-explained-part1"},"first article"),"."),(0,i.kt)("h5",{id:"a-few-words-about-the-builder-pattern"},"A few words about the \u201cBuilder\u201d pattern"),(0,i.kt)("p",null,"You may have noticed an interesting way of passing settings for DbContext.\nInstead of sending an object with options, we use a procedure (Action) with one-parameter options of the DbContextOptionsBuilder type."),(0,i.kt)("p",null,"That's because, to construct the DbContext settings properly, Entity Framework Core uses the ",(0,i.kt)("strong",{parentName:"p"},"Builder Pattern"),".\nThis pattern is helpful when you need to perform several steps to construct some complex objects and simply defining a class or structure is not enough. For example, when you need to call some methods depending on the settings in the configuration.\nAs it happens in our case with ",(0,i.kt)("inlineCode",{parentName:"p"},"UseSqlServer()"),"."),(0,i.kt)("p",null,"There is one more reason why we use a delegate (function) instead of a plain object.\nThere may be a situation when you don't need that service (DbContext) at all.\nFor example, your web app has some actions that do not require database access.\nThe DbContext object will never be created for such requests, and so, we will not need to set its options.\nThe good thing about a delegate is that it can be called exactly when you need to construct the necessary object."),(0,i.kt)("p",null,"I paid so much attention to this pattern because it is used quite often,\nespecially in the process of registering services in DI (and we will use that for the next function call as well)."),(0,i.kt)("h4",{id:"adddefaultidentity"},"AddDefaultIdentity"),(0,i.kt)("p",null,"The second function call in the ConfigureServices was added here because of the Authentication option we turned on when creating our project.\nIt registers a bunch of services for authentication and authorization tasks such as ",(0,i.kt)("inlineCode",{parentName:"p"},"IUserStore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IRoleStore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IPasswordHasher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UserManager"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SignInManager"),", and many others.\nThe are all part of the ASP.NET Core Identity sub-system."),(0,i.kt)("p",null,"This method also uses the Builder Pattern, but in a slightly different way. Instead of passing the builder in the delegate\u2019s parameter, this function returns an IdentityBuilder object, so you can call other functions with simple chaining."),(0,i.kt)("p",null,"The only function called there is ",(0,i.kt)("inlineCode",{parentName:"p"},"AddEntityFrameworkStores"),".\nIt tells ASP.NET Identity where to store all the entities required for auth tasks (users, roles, claims, etc.).\nAs the name of the method suggests, we will use our Entity Framework services for these tasks.\nThe type of parameter in this method (between ",(0,i.kt)("inlineCode",{parentName:"p"},"< .. >"),") defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," class used to store all auth objects."),(0,i.kt)("h3",{id:"addrazorpages"},"AddRazorPages"),(0,i.kt)("p",null,"The last function call in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," adds the services necessary for Razor Pages engine.\nIt appears here because of the template we chose at the beginning.\nIf we had selected a template with Model-View-Controller approach at that point, we would have had something like ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddMvc()")," here."),(0,i.kt)("h2",{id:"configure-method"},"Configure method"),(0,i.kt)("p",null,"The last method in the Startup class defines the middleware pipeline of our ASP.NET Core program.\nIf you don't know what a middleware pipeline is, you might want to learn more about it because it determines how your web application handles HTTP requests."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ASP.NET Core middleware pipeline",src:n(5293).Z,width:"600",height:"384"})),(0,i.kt)("p",null,"Unlike the services registered in ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," (remember, their order is not important), the order of middlewares defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," has crucial significance. As you can see from the picture above, the first defined middleware is called for each request while every next one in the pipeline processes only those requests that were not processed by the middlewares defined before it."),(0,i.kt)("p",null,"So at the beginning of the pipeline, we need to place the middlewares that are necessary for auxiliary tasks (like logging or authentication) and that don\u2019t consume a lot of memory and processing time."),(0,i.kt)("p",null,"Let\u2019s take a look at the default implementation of this method for the chosen project template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment()) {\n                app.UseDeveloperExceptionPage();\n                app.UseDatabaseErrorPage();\n            }\n            else {\n                app.UseExceptionHandler("/Error");\n                app.UseHsts();\n            }\n\n            app.UseHttpsRedirection();\n            app.UseStaticFiles();\n\n            app.UseRouting();\n\n            app.UseAuthentication();\n            app.UseAuthorization();\n\n            app.UseEndpoints(endpoints => {\n                endpoints.MapRazorPages();\n            });\n        }\n')),(0,i.kt)("p",null,"So, let\u2019s go through the middlewares defined here one by one."),(0,i.kt)("h4",{id:"exception-handling-and-security-transport"},"Exception handling and security transport"),(0,i.kt)("p",null,"The first lines define different middlewares for Development and Production modes.\nIf we are in the Development mode, we define the middlewares that catch all exceptions in the pipeline\nand show a special page with extra information about the error (exception message, stack trace, etc.)."),(0,i.kt)("p",null,"It's possible to do because (as you can see from the image above) the processing of the request is returned to the first middleware\nin the pipeline before being sent back to the client."),(0,i.kt)("p",null,"In the Production mode, we also catch all exceptions and then re-execute the request with the specified path (\u2018/Error\u2019 in our case)."),(0,i.kt)("p",null,"The second call executed only in Production is ",(0,i.kt)("inlineCode",{parentName:"p"},"UseHsts"),". It adds a middleware that implements HTTP Strict Transport Security Protocol."),(0,i.kt)("p",null,"The next in the pipeline is HTTPS redirection middleware (",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection"),").\nThe name is self-explanatory. It just redirects all HTTP requests to HTTPS ones.\nThese two middlewares (",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHsts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection")," calls) are added because of the ",(0,i.kt)("strong",{parentName:"p"},"Configure for HTTPS")," option we turned on (actually, it was turned on by default) during the project creation."),(0,i.kt)("h4",{id:"processing-static-files-usestaticfiles"},"Processing static files (UseStaticFiles)"),(0,i.kt)("p",null,"The next middleware (added by the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseStaticFiles()")," call) takes care of all static files.\nSimply put, if the application gets a request for some .js, .css, or an image file (.png, .jpg, etc.),\nthis middleware looks for a file with the requested name inside ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder and returns it in response (if the file was found).\nIf not, it sends back a response with a 404 status code (\u201cnot found\u201d)."),(0,i.kt)("p",null,"There are overloads of ",(0,i.kt)("inlineCode",{parentName:"p"},"UseStaticFiles")," that allow us to define another root folder for static files and set some other options."),(0,i.kt)("h4",{id:"routing-userouting-and-useendpoints"},"Routing (UseRouting and UseEndpoints)"),(0,i.kt)("p",null,"The next pair of middlewares are, maybe, the most important ones in the pipeline, since they define the routing for all other endpoints in your web app."),(0,i.kt)("p",null,"In simple words, they match a particular request to a particular endpoint, a piece of executable code that handles the request."),(0,i.kt)("p",null,"So, how exactly does it work?"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," method, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseRouting()")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"EndpointRoutingMiddleware")," to our pipeline."),(0,i.kt)("p",null,"After that, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseEndpoints()")," to add ",(0,i.kt)("inlineCode",{parentName:"p"},"EndpointMiddleware")," to the pipeline and define the endpoints. Each endpoint is an object that contains (as mentioned above) a delegate (so, a piece of code) that actually handles the request, plus some metadata (like an authorization policy)."),(0,i.kt)("p",null,"We can use such extension methods as ",(0,i.kt)("inlineCode",{parentName:"p"},"MapGet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MapPost"),", and others to add an endpoint that matches a particular request path or a path template. For example, the following pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"/something/{path*}"),", will be matched for all requests started with ",(0,i.kt)("inlineCode",{parentName:"p"},"/something/"),"."),(0,i.kt)("p",null,"Additionally, other services can define their own extension functions that are used to create necessary endpoints. For example, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MapRazorPages")," function for Razor Pages or ",(0,i.kt)("inlineCode",{parentName:"p"},"MapHub")," for SingleR. In our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KorzhCom/EasyData"},"EasyData library")," we defined ",(0,i.kt)("inlineCode",{parentName:"p"},"MapEasyData")," function that adds an endpoint for the API that processes all CRUD operations."),(0,i.kt)("p",null,"When our web app gets a new request (and it\u2019s not processed by any middleware defined before ",(0,i.kt)("inlineCode",{parentName:"p"},"UseRouting"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"EndpointRoutingMiddleware")," matches it to some endpoint. So, one endpoint among all defined at the application start is becoming selected at that moment."),(0,i.kt)("p",null,"Then ",(0,i.kt)("inlineCode",{parentName:"p"},"EndpointMiddleware")," actually calls the endpoint\u2019s delegate to handle the request.\nOther middlewares that are added after ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseRouting()")," but before ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseEnpoints()")," can see which endpoint is selected\nand can change something (e.g., to apply an authorization policy) before ",(0,i.kt)("inlineCode",{parentName:"p"},"EndpointMiddleware")," dispatches to the selected endpoint."),(0,i.kt)("h4",{id:"authenticationauthorization-useauthentication-useauthorization"},"Authentication/Authorization (UseAuthentication, UseAuthorization)"),(0,i.kt)("p",null,"These two middlewares are added in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," because of the Authentication option we turned on when we created our project.\nAs already mentioned above, they already know which endpoint is selected and so can add some additional identity-related information to the request\u2019s context (like filling its ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," property) or redirect to the \u201csign-in/sign up\u201d pages if the current request is anonymous but the selected endpoint requires authorization."),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,i.kt)("p",null,"So, in this article, I tried to cover all pieces of one of the most-used ASP.NET Core application templates and figure out why they are used and how they work (from a very general point of view)."),(0,i.kt)("p",null,"I hope this information will help you better understand the internal mechanism of the ASP.NET Core framework and make your code more clear and efficient."),(0,i.kt)("p",null,"Thanks for the reading, and take care!"))}u.isMDXComponent=!0},5293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aspnetcore-middleware-pipeline-87128c7f53aac03d773e86a0c4903c4c.png"},1696:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/computer-coffee-02-3db0865179d3b5ebf4e4295b5b74d3ca.jpg"}}]);