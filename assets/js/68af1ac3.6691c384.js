"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),y=o,m=l["".concat(c,".").concat(y)]||l[y]||d[y]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},7771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="Usage",p={unversionedId:"introduction/usage",id:"introduction/usage",title:"Usage",description:"How to use react-py in your project.",source:"@site/docs/introduction/usage.md",sourceDirName:"introduction",slug:"/introduction/usage",permalink:"/react-py/docs/introduction/usage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-py/docs/introduction/getting-started"},next:{title:"Basic Example",permalink:"/react-py/docs/examples/basic-example"}},c={},u=[{value:"<code>PythonProvider</code> Provider",id:"pythonprovider-provider",level:2},{value:"<code>usePython</code> Hook",id:"usepython-hook",level:2}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"How to use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-py")," in your project."),(0,o.kt)("h2",{id:"pythonprovider-provider"},(0,o.kt)("inlineCode",{parentName:"h2"},"PythonProvider")," Provider"),(0,o.kt)("p",null,"First, wrap your app in a ",(0,o.kt)("inlineCode",{parentName:"p"},"PythonProvider")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PythonProvider } from "react-py";\n\nfunction App() {\n  return (\n    // Add the provider to your app\n    <PythonProvider>\n      <Codeblock />\n    </PythonProvider>\n  );\n}\n\nrender(<App />, document.getElementById("root"));\n')),(0,o.kt)("h2",{id:"usepython-hook"},(0,o.kt)("inlineCode",{parentName:"h2"},"usePython")," Hook"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePython")," hook to run code and access both stdout and stderr."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { usePython } from "react-py";\n\nfunction Codeblock() {\n  const [input, setInput] = useState("");\n\n  // Use the usePython hook to run code and access both stdout and stderr\n  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();\n\n  return (\n    <>\n      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}\n      <form>\n        <textarea\n          onChange={(e) => setInput(e.target.value)}\n          placeholder="Enter your code here"\n        />\n        <input\n          type="submit"\n          value={!isRunning ? "Run" : "Running..."}\n          disabled={isLoading || isRunning}\n          onClick={(e) => {\n            e.preventDefault();\n            runPython(input);\n          }}\n        />\n      </form>\n      <p>Output</p>\n      <pre>\n        <code>{stdout}</code>\n      </pre>\n      <p>Error</p>\n      <pre>\n        <code>{stderr}</code>\n      </pre>\n    </>\n  );\n}\n')))}d.isMDXComponent=!0}}]);