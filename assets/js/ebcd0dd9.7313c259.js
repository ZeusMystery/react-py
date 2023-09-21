"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[533],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>l,withMDXComponents:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){return function(t){var n=l(t.components);return r.createElement(e,o({},t,{components:n}))}},l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,d=c["".concat(i,".").concat(m)]||c[m]||f[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},i="User Input",s={unversionedId:"examples/user-input",id:"examples/user-input",title:"User Input",description:"A patch for stdin has been provided to allow for user input. This is done by using a service worker to intercept fetch requests from the web worker instances.",source:"@site/docs/examples/user-input.mdx",sourceDirName:"examples",slug:"/examples/user-input",permalink:"/react-py/docs/examples/user-input",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Making API Calls",permalink:"/react-py/docs/examples/making-api-calls"},next:{title:"Data Visualisation",permalink:"/react-py/docs/examples/data-visualisation"}},p={},u=[],c={toc:u},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.mdx)(l,(0,r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"user-input"},"User Input"),(0,a.mdx)("p",null,"A patch for ",(0,a.mdx)("inlineCode",{parentName:"p"},"stdin")," has been provided to allow for user input. This is done by using a service worker to intercept ",(0,a.mdx)("inlineCode",{parentName:"p"},"fetch")," requests from the web worker instances."),(0,a.mdx)("admonition",{type:"caution"},(0,a.mdx)("p",{parentName:"admonition"},"This is a recently added feature and may not work as expected. If you encounter any issues, please ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/elilambnz/react-py/issues/new?labels=bug"},"create an issue"),".")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'num1 = int(input("Enter first number "))\nnum2 = int(input("Enter second number "))\n\nresult = num1 + num2\nprint(f"The sum of {num1} and {num2} is: {result}")\n')),(0,a.mdx)("p",null,"You can find the source code for this example ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/elilambnz/react-py/blob/main/website/src/components/Input.tsx"},"here"),"."))}m.isMDXComponent=!0}}]);