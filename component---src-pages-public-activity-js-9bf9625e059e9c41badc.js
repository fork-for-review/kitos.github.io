(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m});var r=n(37),a=n.n(r),o=n(2),i=(n(21),n(0)),c=n.n(i),l=n(11),s=n(341);function u(){var e=a()(["",""]);return u=function(){return e},e}var d=function(e){return function(){return[{"@context":"http://schema.org","@type":"CollectionPage",mainEntity:{"@type":"ItemList",name:"Videos",itemListOrder:"http://schema.org/ItemListOrderDescending",itemListElement:e.map(function(e){var t=e.title,n=e.url,r=e.snippet,a=e.contentDetails;return{"@type":"VideoObject",name:t,contentUrl:n,uploadDate:r.publishedAt,duration:a.duration,thumbnailUrl:r.thumbnails.maxres.url}})}}]}},m="3829654637";t.default=function(e){var t=e.data,n=(t=void 0===t?{}:t).resp,r=(n=void 0===n?{}:n).edges,a=void 0===r?[]:r;return a=a.map(function(e){return Object.assign({},e.node,e.node.fields.snippet,{slug:e.node.fields.slug})}),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.c,{title:"Public activity",schemaOrgItems:d(a)}),c.a.createElement("h2",null,"Talks"),c.a.createElement(f,{as:"ul",m:"0 -20px",flexWrap:"wrap",_css:{listStyle:"none"}},a.map(function(e){return c.a.createElement(l.Box,{as:"li",id:e.slug,key:e.id,width:[1,"calc(50% - 20px)"],m:10},c.a.createElement(s.e,{video:e}))})))};var f=Object(o.default)(l.Flex)(u(),function(e){return e._css})},331:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n(2),a=r.default.div.withConfig({displayName:"popover__Popover",componentId:"gecdzj-0"})(["border-radius:4px;border:1px solid rgba(27,31,35,0.15);background:#fff;box-shadow:0 3px 12px rgba(27,31,35,0.15);padding:10px;"]),o=r.default.header.withConfig({displayName:"popover__Header",componentId:"gecdzj-1"})(["background:#f6f8fa;border-bottom:1px solid #e1e4e8;padding:0 10px;margin:-10px -10px 10px -10px;line-height:32px;font-size:14px;font-weight:bold;"]),i=r.default.footer.withConfig({displayName:"popover__Footer",componentId:"gecdzj-2"})(["border-top:1px solid #e1e4e8;padding:10px;margin:10px -10px -10px;"]);t.d=a},332:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(2),a=r.default.button.withConfig({displayName:"button__Button",componentId:"sc-1404prl-0"})(["border:1px solid rgba(27,31,35,0.2);border-radius:4px;cursor:pointer;font-size:14px;line-height:20px;font-weight:600;padding:6px 12px;outline:0;&:hover{background-color:#e6ebf1;background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);background-position:-0.5em;border-color:rgba(27,31,35,0.35);}&:active{background-color:#e9ecef;background-image:none;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15);}&:focus{box-shadow:0 0 0 0.2em rgba(3,102,214,0.3);}background-color:#28a745;background-image:linear-gradient(-180deg,#34d058,#28a745 90%);color:#fff;&:hover{background-color:#269f42;background-image:linear-gradient(-180deg,#2fcb53,#269f42 90%);background-position:-0.5em;border-color:rgba(27,31,35,0.5);}&:active{background-color:#279f43;background-image:none;border-color:rgba(27,31,35,0.5);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15);}&:focus{box-shadow:0 0 0 0.2em rgba(52,208,88,0.4);}"]),o=r.default.button.withConfig({displayName:"button__UnstyledButton",componentId:"sc-1404prl-1"})(["border:none;background:none;outline:none;padding:0;cursor:pointer;"]);t.b=a},333:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(2).default.span.withConfig({displayName:"badge__Badge",componentId:"sc-3q6c1o-0"})(["white-space:nowrap;color:#2369cf;background:#ecf5fe;border-radius:4px;padding:5px 10px;&:hover{background:#def;}"]);t.b=r},334:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(0),a=function(e,t,n){void 0===n&&(n=[]),Object(r.useEffect)(function(){var n=function(n){n.target.closest(t)||e()};return document.addEventListener("mouseup",n,!0),function(){return document.removeEventListener("mouseup",n,!0)}},n)};t.a=a},336:function(e,t,n){"use strict";n.d(t,"b",function(){return b}),n.d(t,"a",function(){return h});n(21);var r=n(38),a=n.n(r),o=n(0),i=n.n(o),c=n(2),l=n(11),s=n(340),u=n(353),d=n(50),m=(n(347),n(331)),f=n(332),p=Object(c.default)(f.a).withConfig({displayName:"dialog__CloseButton",componentId:"sc-2jirej-0"})(["font-size:20px;color:gray;&:hover{color:#000;}"]),g=Object(c.default)(u.b).withConfig({displayName:"dialog__StyledOverlay",componentId:"sc-2jirej-1"})(["display:flex;align-items:center;justify-content:center;"]),b=function(e){var t=e.isOpen,n=e.onDismiss,r=e.initialFocusRef,o=e.title,c=e.children;return i.a.createElement(s.b,{items:t,from:{transform:"translateY(-30px) scale(0.9)",opacity:0},enter:{transform:"translateY(0) scale(1)",opacity:1},leave:{transform:"translateY(-30px) scale(0.9)",opacity:0}},function(e){return e&&function(e){var s=e.opacity,f=a()(e,["opacity"]);return i.a.createElement(g,{style:{opacity:s},isOpen:t,onDismiss:n,initialFocusRef:r},i.a.createElement(m.c,{as:u.a,style:Object.assign({},f,{opacity:s,padding:10})},i.a.createElement(l.Flex,{as:m.b,justifyContent:"space-between",alignItems:"center"},i.a.createElement("span",null,o),i.a.createElement(p,{onClick:n},i.a.createElement(d.a,null,"Close dialog"),i.a.createElement("span",{"aria-hidden":!0},"×"))),c))}})},h=function(e){var t=e.title,n=e.buttonText,r=void 0===n?"Ok!":n,a=e.isOpen,c=e.onDismiss,s=e.children,u=Object(o.useRef)(null);return i.a.createElement(b,Object.assign({initialFocusRef:u},{title:t,isOpen:a,onDismiss:c}),s,i.a.createElement(l.Flex,{as:m.a,justifyContent:"flex-end"},i.a.createElement(f.b,{ref:u,onClick:c},r)))}},337:function(e,t,n){"use strict";var r=n(2).default.input.withConfig({displayName:"input__Input",componentId:"sc-14zyg9-0"})(["background-color:#fafbfc;border:1px solid #d1d5da;border-radius:3px;padding:4px 10px;"]);t.a=r},338:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(116);var r=n(0),a=function(){return Object(r.useEffect)(function(){var e=new IntersectionObserver(function(t){t.filter(function(e){return e.isIntersecting}).forEach(function(t){var n=t.target;n.setAttribute("src",n.getAttribute("data-src")),e.unobserve(n)})},{rootMargin:"10%"});return document.querySelectorAll("iframe[data-src]").forEach(function(t){return e.observe(t)}),function(){return e.disconnect()}},[])}},339:function(e,t,n){"use strict";n(344);var r=n(2).default.small.withConfig({displayName:"tag__Tag",componentId:"sc-1of2opv-0"})(["text-decoration:underline;color:grey;&:hover{color:#4078c0;}",""],function(e){return e.active?"color: #4078c0;":""});t.a=r},341:function(e,t,n){"use strict";var r=n(333),a=n(0),o=n.n(a),i=(n(332),n(336),n(2)),c=n(340),l=i.default.div.withConfig({displayName:"drawer__Container",componentId:"n2xd01-0"})(["position:fixed;top:0;right:0;height:100%;width:60%;background:#fff;will-change:transform;"]),s=Object(i.default)(l).withConfig({displayName:"drawer__Overlay",componentId:"n2xd01-1"})(["width:100%;background:#141a28a8;"]),u=function(e){var t=e.open,n=e.children,r=e.onOuterClick;return o.a.createElement(c.b,{items:t,from:{transform:"translateX(100%)",opacity:0},enter:{transform:"translateX(0)",opacity:1},leave:{transform:"translateX(100%)",opacity:0}},function(e){return e&&function(e){var t=e.transform,a=e.opacity;return o.a.createElement(s,{style:{opacity:a},onClick:r},o.a.createElement(l,{style:{transform:t},onClick:function(e){return e.stopPropagation()}},n))}})},d=(n(120),n(117),n(337),n(174),n(338),n(118),n(334),n(331),function(e){var t=void 0===e?{}:e,n=t.shadowColor,r=void 0===n?"rgba(20, 26, 40, 0.25)":n,o=t.shadowK,i=void 0===o?5:o,c=t.rotationK,l=void 0===c?7:c,s=[0,0],u=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)({}),r=n[0],o=n[1];return Object(a.useEffect)(function(){var n=e||t.current,r=function(){return o(n.getBoundingClientRect())},a=function(){return requestAnimationFrame(r)};return r(),window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}},[e]),[r,t]}(),d=u[0],m=u[1],f=Object(a.useState)(s),p=f[0],g=p[0],b=p[1],h=f[1];return Object(a.useEffect)(function(){var e=m.current,t=d.left,n=d.top,r=d.width,a=d.height,o=function(e){var o=2*((e.clientX-t)/r-.5),i=2*((e.clientY-n)/a-.5);h([o,i])},i=function(){h(s)};return e.addEventListener("mousemove",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mousemove",o),e.removeEventListener("mouseout",i)}},[d]),{ref:m,style:{willChange:"transform",boxShadow:r+" "+-g*i+"px "+-b*i+"px 30px",transform:"perspective(1000px) "+("rotateX("+-b*l+"deg)")+" "+("rotateY("+g*l+"deg)")}}}),m=n(343),f=n(348),p=n.n(f),g=n(23),b=function(e){var t=e.title,n=e.isBlogPost,r=e.schemaOrgItems,a=void 0===r?function(){return[]}:r;return o.a.createElement(g.StaticQuery,{query:"2644843236",render:function(e){var r=e.site.siteMetadata,i=r.siteUrl,c={"@context":"http://schema.org","@type":"WebSite",url:i,name:t};return o.a.createElement(p.a,null,o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,(t?t+" | ":"")+r.title),o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("meta",{name:"image",content:r.img}),o.a.createElement("meta",{name:"keywords",content:r.keywords.join(", ")}),o.a.createElement("meta",{property:"og:url",content:i}),n?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:r.description}),o.a.createElement("meta",{property:"og:image",content:r.img}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:r.social.twitter}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:r.description}),o.a.createElement("meta",{name:"twitter:image",content:r.img}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify([c].concat(a({url:i,author:{"@type":"Person",name:"Nikita Kirsanov"}})))))},data:m})},h=n(11),v=i.default.span.withConfig({displayName:"shield__Label",componentId:"sc-1kyh6no-0"})(["background:#555;color:#fff;padding:5px 10px;font-size:12px;"]),x=Object(i.default)(v).withConfig({displayName:"shield__Value",componentId:"sc-1kyh6no-1"})(["background:#a2c63e;"]),y=function(e){var t=e.label,n=e.value;return o.a.createElement(h.Flex,null,o.a.createElement(v,null,t),o.a.createElement(x,null,n))},w=(n(119),n(339),n(37)),E=n.n(w),k=(n(21),n(116),n(81),n(349),n(175),n(345),n(350)),_=n.n(k),O=n(351),j=n.n(O),C=new _.a(j.a);C.rhythm;var I=C.scale,N=i.default.button.withConfig({displayName:"youtube-play-button__YouTubePlayButton",componentId:"ff68p8-0"})(["position:relative;font-size:1em;width:4em;height:3em;padding:0;background:#000;border-radius:50% / 10%;color:#fff;text-align:center;text-indent:0.1em;transition:all 150ms ease-out;border:none;&:hover{background:#ff0000;}&::before{position:absolute;background:inherit;border-radius:5% / 50%;bottom:9%;content:'';left:-5%;right:-5%;top:9%;}&::after{position:absolute;border-style:solid;border-width:1em 0 1em 1.732em;border-color:transparent transparent transparent rgba(255,255,255,0.75);content:' ';font-size:0.75em;height:0;margin:-1em 0 0 -0.75em;top:50%;width:0;}"]);function L(){var e=E()(["",""]);return L=function(){return e},e}var S=i.default.a.withConfig({displayName:"video-card__VideoLink",componentId:"sc-1t2xide-0"})(["display:block;position:relative;","{opacity:0.8;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}"],N),z=i.default.img.withConfig({displayName:"video-card__Img",componentId:"sc-1t2xide-1"})(["width:100%;object-fit:cover;@media screen and (min-width:40em){height:178px;}"]),F=function(e){var t,n=e.video,a=(n.id,n.title),i=n.url,c=n.tags,l=n.snippet,s=l.thumbnails,u=l.tags,m=e.className,f=d(),p=s.medium,g=s.high,b=s.maxres;return t=[].concat(c||[],u||[]),c=Array.from(new Set(t)),o.a.createElement("section",{className:m},o.a.createElement(S,Object.assign({},f,{href:i,target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(z,{src:p.url,srcSet:p.url+", "+g.url+" 1.5x, "+b.url+" 3x",alt:a}),o.a.createElement(N,null)),o.a.createElement("h3",{style:I(.1)},o.a.createElement("a",{href:i},a)),c.length>0&&o.a.createElement(B,{as:"ul",flexWrap:"wrap",mx:"-5px",_css:{listStyle:"none"}},c.map(function(e){return o.a.createElement(h.Box,{as:"li",key:e,m:"5px 2px",fontSize:"12px"},o.a.createElement(r.b,null,"#",e))})))},B=Object(i.default)(h.Flex)(L(),function(e){return e._css});n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return y}),n.d(t,"e",function(){return F})},343:function(e){e.exports={data:{site:{siteMetadata:{title:"Nikita Kirsanov",description:"Personal blog of software engineer - Nikita Kirsanov",siteUrl:"https://www.nikitakirsanov.com",img:"https://www.nikitakirsanov.com/icons/icon-512x512.png",keywords:["blog","personal","software engineer","CV","portfolio"],social:{twitter:"@kitos_kirsanov"}}}}}}}]);
//# sourceMappingURL=component---src-pages-public-activity-js-9bf9625e059e9c41badc.js.map