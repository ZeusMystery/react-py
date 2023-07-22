/*! For license information please see 343.ffe75c8a.js.LICENSE.txt */
(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},gca:function(t){return t={}[t]||t,e.p+e.u(t)}};e.r({});const t=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),i=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:e=>a(e)&&e[t],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize(e){return e.start(),y(e,[],t);var t}}],["throw",{canHandle:e=>a(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,n=globalThis,r=["*"]){n.addEventListener("message",(function a(s){if(!s||!s.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(r,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:u,type:p,path:d}=Object.assign({path:[]},s.data),f=(s.data.argumentList||[]).map(g);let y;try{const n=d.slice(0,-1).reduce(((e,t)=>e[t]),e),r=d.reduce(((e,t)=>e[t]),e);switch(p){case"GET":y=r;break;case"SET":n[d.slice(-1)[0]]=g(s.data.value),y=!0;break;case"APPLY":y=r.apply(n,f);break;case"CONSTRUCT":y=function(e){return Object.assign(e,{[t]:!0})}(new r(...f));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;l(e,n),y=function(e,t){return h.set(e,t),e}(t,[t])}break;case"RELEASE":y=void 0;break;default:return}}catch(m){y={value:m,[i]:0}}Promise.resolve(y).catch((e=>({value:e,[i]:0}))).then((t=>{const[r,i]=_(t);n.postMessage(Object.assign(Object.assign({},r),{id:u}),i),"RELEASE"===p&&(n.removeEventListener("message",a),c(n),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[t,r]=_({value:new TypeError("Unserializable return value"),[i]:0});n.postMessage(Object.assign(Object.assign({},t),{id:u}),r)}))})),n.start&&n.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e){return b(e,{type:"RELEASE"}).then((()=>{c(e)}))}const d=new WeakMap,f="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(d.get(e)||0)-1;d.set(e,t),0===t&&p(e)}));function y(e,t=[],o=function(){}){let i=!1;const a=new Proxy(o,{get(n,o){if(u(i),o===r)return()=>{!function(e){f&&f.unregister(e)}(a),p(e),i=!0};if("then"===o){if(0===t.length)return{then:()=>a};const n=b(e,{type:"GET",path:t.map((e=>e.toString()))}).then(g);return n.then.bind(n)}return y(e,[...t,o])},set(n,r,o){u(i);const[a,s]=_(o);return b(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:a},s).then(g)},apply(r,o,a){u(i);const s=t[t.length-1];if(s===n)return b(e,{type:"ENDPOINT"}).then(g);if("bind"===s)return y(e,t.slice(0,-1));const[l,c]=m(a);return b(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:l},c).then(g)},construct(n,r){u(i);const[o,a]=m(r);return b(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},a).then(g)}});return function(e,t){const n=(d.get(t)||0)+1;d.set(t,n),f&&f.register(e,t,e)}(a,e),a}function m(e){const t=e.map(_);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function _(e){for(const[t,n]of s)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},h.get(e)||[]]}function g(e){switch(e.type){case"HANDLER":return s.get(e.name).deserialize(e.value);case"RAW":return e.value}}function b(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}var v,w=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(l){s=[6,l],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},S=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},P=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.3/full/pyodide.js"),"localhost"!==self.location.hostname&&(console.log=function(){},console.error=function(){});var k={getInput:function(e,t){var n=new XMLHttpRequest;return n.open("GET","/get_input/?id=".concat(e,"&prompt=").concat(t),!1),n.send(null),n.responseText}};l({init:function(e,t,n){return w(this,void 0,void 0,(function(){var r,o,i,a,s,l,c,u,p,d;return E(this,(function(f){switch(f.label){case 0:return r=self,[4,self.loadPyodide({})];case 1:return r.pyodide=f.sent(),[4,self.pyodide.loadPackage(["pyodide-http"])];case 2:return f.sent(),n[0].length>0?[4,self.pyodide.loadPackage(n[0])]:[3,4];case 3:f.sent(),f.label=4;case 4:return n[1].length>0?[4,self.pyodide.loadPackage(["micropip"])]:[3,7];case 5:return f.sent(),[4,self.pyodide.pyimport("micropip").install(n[1])];case 6:f.sent(),f.label=7;case 7:return o=self.crypto.randomUUID(),i=self.pyodide.version,self.pyodide.registerJsModule("react_py",k),a=self.pyodide.globals.get("dict")(),'\nimport pyodide_http\npyodide_http.patch_all()\n\nimport sys\nfrom pyodide.ffi import to_js\nfrom pyodide.console import PyodideConsole, repr_shorten, BANNER\nimport __main__\nBANNER = "Welcome to the Pyodide terminal emulator \ud83d\udc0d\\n" + BANNER\npyconsole = PyodideConsole(__main__.__dict__)\nimport builtins\nasync def await_fut(fut):\n  res = await fut\n  if res is not None:\n    builtins._ = res\n  return to_js([res], depth=1)\ndef clear_console():\n  pyconsole.buffer = []\n',[4,self.pyodide.runPythonAsync('\nimport pyodide_http\npyodide_http.patch_all()\n\nimport sys\nfrom pyodide.ffi import to_js\nfrom pyodide.console import PyodideConsole, repr_shorten, BANNER\nimport __main__\nBANNER = "Welcome to the Pyodide terminal emulator \ud83d\udc0d\\n" + BANNER\npyconsole = PyodideConsole(__main__.__dict__)\nimport builtins\nasync def await_fut(fut):\n  res = await fut\n  if res is not None:\n    builtins._ = res\n  return to_js([res], depth=1)\ndef clear_console():\n  pyconsole.buffer = []\n',{globals:a})];case 8:return f.sent(),s='\nimport sys, builtins\nimport react_py\n__saved_input__ = input\n__prompt_str__ = ""\ndef input(prompt = ""):\n  global __prompt_str__\n  __prompt_str__ = prompt\n  print(prompt, end="")\n  s = __saved_input__()\n  print()\n  return s\nbuiltins.input = input\nsys.stdin.readline = lambda: react_py.getInput("'.concat(o,'", __prompt_str__)\n'),[4,self.pyodide.runPythonAsync(s,{globals:a})];case 9:return f.sent(),l=a.get("repr_shorten"),c=a.get("BANNER"),u=a.get("await_fut"),p=a.get("pyconsole"),d=a.get("clear_console"),a.destroy(),p.stdout_callback=e,v={reprShorten:l,awaitFut:u,pyconsole:p,clearConsole:d},t({id:o,version:i,banner:c}),[2]}}))}))},run:function(e){return w(this,void 0,void 0,(function(){var t,n,r,o,i,a,s,l,c,u,p,d,f;return E(this,(function(y){switch(y.label){case 0:if(!v)throw new Error("Console has not been initialised");if(void 0===e)throw new Error("No code to push");y.label=1;case 1:y.trys.push([1,9,10,11]),n=S(e.split("\n")),r=n.next(),y.label=2;case 2:if(r.done)return[3,8];o=r.value,i=v.pyconsole.push(o),t=i.syntax_check,a=v.awaitFut(i),y.label=3;case 3:return y.trys.push([3,5,6,7]),[4,a];case 4:return s=P.apply(void 0,[y.sent(),1]),l=s[0],self.pyodide.isPyProxy(l)&&l.destroy(),[3,7];case 5:if("PythonError"===(c=y.sent()).constructor.name)return u=i.formatted_error||c.message,[2,{state:t,error:u.trimEnd()}];throw c;case 6:return i.destroy(),a.destroy(),[7];case 7:return r=n.next(),[3,2];case 8:return[3,11];case 9:return p=y.sent(),d={error:p},[3,11];case 10:try{r&&!r.done&&(f=n.return)&&f.call(n)}finally{if(d)throw d.error}return[7];case 11:return[2,{state:t}]}}))}))},readFile:function(e){return self.pyodide.FS.readFile(e,{encoding:"utf8"})},writeFile:function(e,t){return self.pyodide.FS.writeFile(e,t,{encoding:"utf8"})},mkdir:function(e){self.pyodide.FS.mkdir(e)},rmdir:function(e){self.pyodide.FS.rmdir(e)}})})();