"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[228],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>l,withMDXComponents:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){return function(t){var r=l(t.components);return n.createElement(e,i({},t,{components:r}))}},l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(a,".").concat(d)]||p[d]||y[d]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3},a="Usage with Vite",c={unversionedId:"introduction/vite-usage",id:"introduction/vite-usage",title:"Usage with Vite",description:"Calls to react-py hooks will not work with Vite during dev mode due to web workers not being included in the dev build. To view your site with react-py enabled, you must build your site and serve it.",source:"@site/docs/introduction/vite-usage.md",sourceDirName:"introduction",slug:"/introduction/vite-usage",permalink:"/react-py/docs/introduction/vite-usage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/react-py/docs/introduction/usage"},next:{title:"Usage with Next.js",permalink:"/react-py/docs/introduction/nextjs-usage"}},s={},u=[{value:"Service worker",id:"service-worker",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.mdx)(l,(0,n.default)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"usage-with-vite"},"Usage with Vite"),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"Calls to ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-py")," hooks will not work with ",(0,o.mdx)("a",{parentName:"p",href:"https://vitejs.dev"},"Vite")," during dev mode due to web workers not being included in the dev build. To view your site with ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-py")," enabled, you must build your site and serve it.")),(0,o.mdx)("h2",{id:"service-worker"},"Service worker"),(0,o.mdx)("p",null,"The service worker that handles ",(0,o.mdx)("inlineCode",{parentName:"p"},"stdin")," must be accessible from the root of your site to handle incoming fetch requests. By default, Vite will place the ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-py")," service worker in a subdirectory of your build directory."),(0,o.mdx)("p",null,"To register the service worker, first copy the service worker to your public directory:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cp node_modules/react-py/dist/workers/service-worker.js public/react-py-sw.js\n")),(0,o.mdx)("p",null,"Then, register the service worker in the entrypoint of your app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  navigator.serviceWorker\n    .register('/react-py-sw.js')\n    .then((registration) =>\n      console.log(\n        'Service Worker registration successful with scope: ',\n        registration.scope\n      )\n    )\n    .catch((err) => console.log('Service Worker registration failed: ', err))\n}, [])\n")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"You will need to copy the service worker to the root of your build directory if you update ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-py")," to a new version.")))}d.isMDXComponent=!0}}]);