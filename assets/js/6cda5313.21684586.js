"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[835],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>l,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(t),l=o,m=c["".concat(a,".").concat(l)]||c[l]||h[l]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:4},a="Usage with Next.js",s={unversionedId:"introduction/nextjs-usage",id:"introduction/nextjs-usage",title:"Usage with Next.js",description:"react-py is not Server-Side Rendering (SSR) friendly, due to client only APIs such as web workers. To use this package with Next.js, ensure it is loaded on the client side only.",source:"@site/docs/introduction/nextjs-usage.md",sourceDirName:"introduction",slug:"/introduction/nextjs-usage",permalink:"/react-py/docs/introduction/nextjs-usage",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/react-py/docs/introduction/api-reference"},next:{title:"Usage with Docusaurus",permalink:"/react-py/docs/introduction/docusaurus-usage"}},p={},d=[{value:"Adding the <code>PythonProvider</code>",id:"adding-the-pythonprovider",level:2},{value:"Using the <code>usePython</code> hook",id:"using-the-usepython-hook",level:2}],c={toc:d},u="wrapper";function l(e){let{components:n,...t}=e;return(0,o.mdx)(u,(0,r.default)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"usage-with-nextjs"},"Usage with Next.js"),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("inlineCode",{parentName:"p"},"react-py")," is not Server-Side Rendering (SSR) friendly, due to client only APIs such as web workers. To use this package with ",(0,o.mdx)("a",{parentName:"p",href:"https://nextjs.org"},"Next.js"),", ensure it is loaded on the client side only.")),(0,o.mdx)("p",null,"These docs are current as of Next 13. In the future, this will become easier with ",(0,o.mdx)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components"},"Client Components"),"."),(0,o.mdx)("h2",{id:"adding-the-pythonprovider"},"Adding the ",(0,o.mdx)("inlineCode",{parentName:"h2"},"PythonProvider")),(0,o.mdx)("p",null,"The provider needs to be imported dynamically using ",(0,o.mdx)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/dynamic-import"},"Dynamic Import")," without SSR. Add the following to ",(0,o.mdx)("inlineCode",{parentName:"p"},"_app.tsx"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import type { AppProps } from 'next/app'\n\nimport dynamic from 'next/dynamic'\n\nconst PythonProvider = dynamic(\n  () => import('react-py').then((module) => module.PythonProvider),\n  {\n    ssr: false\n  }\n)\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <PythonProvider>\n      <Component {...pageProps} />\n    </PythonProvider>\n  )\n}\n")),(0,o.mdx)("h2",{id:"using-the-usepython-hook"},"Using the ",(0,o.mdx)("inlineCode",{parentName:"h2"},"usePython")," hook"),(0,o.mdx)("p",null,"Ensure that components using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePython")," hook are loaded on the client side only. For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.tsx")," may look like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import dynamic from 'next/dynamic'\n\nconst Codeblock = dynamic(() => import('../components/Codeblock'), {\n  ssr: false\n})\n\nexport default function Home() {\n  return <Codeblock />\n}\n")),(0,o.mdx)("p",null,"As long as the component is imported as shown in the previous step, hooks can be used in ",(0,o.mdx)("inlineCode",{parentName:"p"},"components/Codeblock.tsx")," as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react'\nimport { usePython } from 'react-py'\n\nexport default function Codeblock() {\n  const [input, setInput] = useState('')\n\n  // Use the usePython hook to run code and access both stdout and stderr\n  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()\n\n  return (\n    <>\n      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}\n      <form>\n        <textarea\n          onChange={(e) => setInput(e.target.value)}\n          placeholder=\"Enter your code here\"\n        />\n        <input\n          type=\"submit\"\n          value={!isRunning ? 'Run' : 'Running...'}\n          disabled={isLoading || isRunning}\n          onClick={(e) => {\n            e.preventDefault()\n            runPython(input)\n          }}\n        />\n      </form>\n      <p>Output</p>\n      <pre>\n        <code>{stdout}</code>\n      </pre>\n      <p>Error</p>\n      <pre>\n        <code>{stderr}</code>\n      </pre>\n    </>\n  )\n}\n")))}l.isMDXComponent=!0}}]);