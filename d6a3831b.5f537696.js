(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return i})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(2),o=r(9),u=(r(0),r(159)),a=r(164),c={id:"estrutura",slug:"estrutura",title:"Estrutura"},i={id:"Projeto/Estrutura/estrutura",isDocsHomePage:!1,title:"Estrutura",description:"Estrutura",source:"@site/docs/Projeto/Estrutura/Estrutura.mdx",permalink:"/docs/docs/Projeto/Estrutura/estrutura",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Projeto/Estrutura/Estrutura.mdx"},s=[],f={rightToc:s};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(u.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Estrutura"),Object(u.b)("img",{alt:"Estrutura Geral",src:Object(a.a)("estrutura/Structure.svg")}))}p.isMDXComponent=!0},159:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),f=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=f(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,u=t.originalType,a=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=f(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||l[d]||u;return r?o.a.createElement(b,c(c({ref:e},s),{},{components:r})):o.a.createElement(b,c({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var u=r.length,a=new Array(u);a[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var s=2;s<u;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},160:function(t,e,r){"use strict";var n=r(0),o=r(63);e.a=function(){return Object(n.useContext)(o.a)}},164:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(76);var n=r(160),o=r(166);function u(t,e){var r=void 0===e?{}:e,u=r.forcePrependBaseUrl,a=void 0!==u&&u,c=r.absolute,i=void 0!==c&&c,s=Object(n.a)().siteConfig,f=(s=void 0===s?{}:s).baseUrl,p=void 0===f?"/":f,l=s.url;if(!t)return t;if(a)return p+t;if(!Object(o.a)(t))return t;var d=p+t.replace(/^\//,"");return i?l+d:d}},166:function(t,e,r){"use strict";function n(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}r.d(e,"a",(function(){return n}))}}]);