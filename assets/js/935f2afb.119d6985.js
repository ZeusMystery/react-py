"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/react-py/docs/introduction/getting-started","docId":"introduction/getting-started"},{"type":"link","label":"Usage","href":"/react-py/docs/introduction/usage","docId":"introduction/usage"},{"type":"link","label":"Usage with Vite","href":"/react-py/docs/introduction/vite-usage","docId":"introduction/vite-usage"},{"type":"link","label":"Usage with Next.js","href":"/react-py/docs/introduction/nextjs-usage","docId":"introduction/nextjs-usage"},{"type":"link","label":"Usage with Docusaurus","href":"/react-py/docs/introduction/docusaurus-usage","docId":"introduction/docusaurus-usage"},{"type":"link","label":"API Reference","href":"/react-py/docs/introduction/api-reference","docId":"introduction/api-reference"},{"type":"link","label":"Troubleshooting","href":"/react-py/docs/introduction/troubleshooting","docId":"introduction/troubleshooting"}]},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Example","href":"/react-py/docs/examples/basic-example","docId":"examples/basic-example"},{"type":"link","label":"REPL","href":"/react-py/docs/examples/repl","docId":"examples/repl"},{"type":"link","label":"Interrupting Execution","href":"/react-py/docs/examples/interrupting-execution","docId":"examples/interrupting-execution"},{"type":"link","label":"Using Packages","href":"/react-py/docs/examples/using-packages","docId":"examples/using-packages"},{"type":"link","label":"File System","href":"/react-py/docs/examples/file-system","docId":"examples/file-system"},{"type":"link","label":"Custom Modules","href":"/react-py/docs/examples/custom-modules","docId":"examples/custom-modules"},{"type":"link","label":"Making API Calls","href":"/react-py/docs/examples/making-api-calls","docId":"examples/making-api-calls"},{"type":"link","label":"User Input","href":"/react-py/docs/examples/user-input","docId":"examples/user-input"},{"type":"link","label":"Matplotlib","href":"/react-py/docs/examples/matplotlib","docId":"examples/matplotlib"}]}]},"docs":{"examples/basic-example":{"id":"examples/basic-example","title":"Basic Example","description":"This is a basic example of using the usePython hook and react-ace to render an interactive code block.","sidebar":"tutorialSidebar"},"examples/custom-modules":{"id":"examples/custom-modules","title":"Custom Modules","description":"By default, Python modules are cached. If you intend to make changes to an imported module, it needs to be watched and reloaded.","sidebar":"tutorialSidebar"},"examples/file-system":{"id":"examples/file-system","title":"File System","description":"Some internal Pyodide file system methods are exposed.","sidebar":"tutorialSidebar"},"examples/interrupting-execution":{"id":"examples/interrupting-execution","title":"Interrupting Execution","description":"Execution can be interrupted at any time by calling the interruptExecution method. This will terminate the running worker and spawn a new one.","sidebar":"tutorialSidebar"},"examples/making-api-calls":{"id":"examples/making-api-calls","title":"Making API Calls","description":"Due to sockets being unavailable in Pyodide, http libraries are currently unsupported out of the box.","sidebar":"tutorialSidebar"},"examples/matplotlib":{"id":"examples/matplotlib","title":"Matplotlib","description":"By default, matplotlib relies on the import statement from js import document, which does not work from within a web worker.","sidebar":"tutorialSidebar"},"examples/repl":{"id":"examples/repl","title":"REPL","description":"This is an example of using the usePythonConsole hook to render an interactive console.","sidebar":"tutorialSidebar"},"examples/user-input":{"id":"examples/user-input","title":"User Input","description":"A patch for stdin has been provided to allow for user input. This is done by using a service worker to intercept fetch requests from the web worker instances.","sidebar":"tutorialSidebar"},"examples/using-packages":{"id":"examples/using-packages","title":"Using Packages","description":"Packages can be installed using the following Packages object and can be imported either globally through the provider, or per instance. For props, see the API reference docs.","sidebar":"tutorialSidebar"},"introduction/api-reference":{"id":"introduction/api-reference","title":"API Reference","description":"``","sidebar":"tutorialSidebar"},"introduction/docusaurus-usage":{"id":"introduction/docusaurus-usage","title":"Usage with Docusaurus","description":"react-py is not Server-Side Rendering (SSR) friendly, due to client only APIs such as web workers. To use this package with Docusaurus, ensure it is loaded on the client side only.","sidebar":"tutorialSidebar"},"introduction/getting-started":{"id":"introduction/getting-started","title":"Getting Started","description":"Run Python (3.11) code directly in the browser using Pyodide.","sidebar":"tutorialSidebar"},"introduction/nextjs-usage":{"id":"introduction/nextjs-usage","title":"Usage with Next.js","description":"react-py is not Server-Side Rendering (SSR) friendly, due to client only APIs such as web workers. To use this package with Next.js, ensure it is loaded on the client side only.","sidebar":"tutorialSidebar"},"introduction/troubleshooting":{"id":"introduction/troubleshooting","title":"Troubleshooting","description":"usePythonConsole messages out of order","sidebar":"tutorialSidebar"},"introduction/usage":{"id":"introduction/usage","title":"Usage","description":"How to use react-py in your project. For framework specific guides, see the sidebar.","sidebar":"tutorialSidebar"},"introduction/vite-usage":{"id":"introduction/vite-usage","title":"Usage with Vite","description":"Calls to react-py hooks will not work with Vite during dev mode due to web workers not being included in the dev build. To view your site with react-py enabled, you must build your site and serve it.","sidebar":"tutorialSidebar"}}}')}}]);