"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89],{9928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(7294),n=a(6010),l=a(9962),i=a(5463),s=a(3702),m=a(6489),c=a(2568),o=a(3647),b=a(8389);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:n,blogTitle:s,permalink:m}=t,c="/"===m?a:s;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:c,description:n}),r.createElement(o.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:n}=e;return r.createElement(m.Z,{sidebar:n},r.createElement(b.Z,{items:a}),r.createElement(c.Z,{metadata:t}))}function u(e){return r.createElement(i.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},r.createElement(d,e),r.createElement(p,e))}},2568:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(7325),l=a(3672);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(9107),l=a(2064);function i(e){let{items:t,component:a=l.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(a,null,r.createElement(t,null)))})))}},264:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010),l=a(3699),i=a(7325);const s={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var m=a(748);const c=()=>{const[e,t]=(0,r.useState)(""),a=t=>{t.preventDefault(),e.trim()?alert("Your subscriptions complete!"):alert("Please enter your email!")};return r.createElement("div",{id:"subsribe-form-wrapper",className:"subscribe-form-wrapper"},r.createElement(m.Z,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(r.Fragment,null,r.createElement("h3",null,"Subscribe for updates"),r.createElement("form",{onSubmit:a},r.createElement("input",{type:"email",value:e,placeholder:"Your email address",onChange:e=>t(e.target.value)}),r.createElement("input",{type:"submit",value:"Subscribe"}))))))};function o(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,n.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))),r.createElement(c,null)))}}}]);