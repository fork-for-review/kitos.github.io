(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(393),o=r(335),u=r(355);function c(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=Object(o.a)(e,t);return r.setHours(0,0,0,0),r}var i=864e5;function s(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(o.a)(e,r),a=Object(o.a)(t,r),l=n.getTime()-a.getTime();return l<0?-1:l>0?1:l}function h(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(o.a)(e,r),a=Object(o.a)(t,r),l=s(n,a,r),h=Math.abs(function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=c(e,r),a=c(t,r),l=n.getTime()-Object(u.a)(n),o=a.getTime()-Object(u.a)(a);return Math.round((l-o)/i)}(n,a,r));n.setDate(n.getDate()-l*h);var g=l*(h-(s(n,a,r)===-l));return 0===g?0:g}var g=r(361),d=Object(g.a)(function(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=h(e,t,r)/7;return n>0?Math.floor(n):Math.ceil(n)},2),m=r(11),p=r(136),f=r(366),b=r(341);r.d(t,"query",function(){return E});var w=Object(l.a)("MMMM dd, yyyy"),y=function(e){var t=e.title,r=e.createdAt,n=e.updatedAt,a=e.tags;return function(e){var l=e.author;return[{"@context":"http://schema.org","@type":"BlogPosting",dateModified:n,datePublished:r,headline:t,keywords:a.join(", "),author:l}]}},E=(t.default=function(e){var t=e.pageContext.slug,r=e.data,n=r.post,l=n.title,o=n.createdAt,u=n.updatedAt,c=n.tags,i=n.content,s=r.site.meta.siteUrl+"/blog/"+t+"/";return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.c,{title:l,isBlogPost:!0,schemaOrgItems:y({title:l,createdAt:o,updatedAt:u,tags:c})}),a.a.createElement("h1",null,l),a.a.createElement("small",null,w(o)),d(o,u)>1&&a.a.createElement("small",null," (Last update at ",w(u),")"),a.a.createElement(f.c,{tags:c}),a.a.createElement(f.a,{post:{title:l,postUrl:s,html:i.childContentfulRichText.html}}),a.a.createElement(m.Box,{mt:20},a.a.createElement(p.Like,{href:s,colorScheme:"dark",showFaces:!0,share:!0})))},"3778903859")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-53d8dd20c15fa04c8149.js.map