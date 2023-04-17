"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(9460),n=a(8047);function s(e){let{items:t,component:a=n.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(r.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),r=a(6010),n=a(5999),s=a(8824),i=a(1944),m=a(5281),o=a(9960),c=a(2599),g=a(9703),u=a(197),d=a(9985);function b(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function p(e){let{tag:t}=e;const a=b(t);return l.createElement(l.Fragment,null,l.createElement(i.d,{title:a}),l.createElement(u.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:r,listMetadata:s}=e;const i=b(t);return l.createElement(c.Z,{sidebar:r},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(o.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(d.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function h(e){return l.createElement(i.FG,{className:(0,r.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},l.createElement(p,e),l.createElement(E,e))}},3702:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(6010),n=a(9960),s=a(5999);const i={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var m=a(1262);const o=()=>{const[e,t]=(0,l.useState)(""),a=t=>{t.preventDefault(),e.trim()?alert("Your subscriptions complete!"):alert("Please enter your email!")};return l.createElement("div",{id:"subsribe-form-wrapper",className:"subscribe-form-wrapper"},l.createElement(m.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(l.Fragment,null,l.createElement("h3",null,"Subscribe for updates"),l.createElement("form",{onSubmit:a},l.createElement("input",{type:"email",value:e,placeholder:"Your email address",onChange:e=>t(e.target.value)}),l.createElement("input",{type:"submit",value:"Subscribe"}))))))};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))),l.createElement(o,null)))}}}]);