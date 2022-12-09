"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[237],{8072:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(7294),r=t(1262),i=t(2949),o=t(6010);const l={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,highlightActiveLine:!1,showPrintMargin:!1},d=e=>{e.renderer.setScrollMargin(10,10,0,0),e.moveCursorTo(0,0)};function m(e){const{code:n}=e,[o,m]=(0,a.useState)(n.trimEnd()),[c,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m(n.trimEnd()),u(!1)}),[n]);const{colorMode:f}=(0,i.useColorMode)();function p(){u(!0)}function h(){u(!1)}function g(){u(!1),m(n.trimEnd())}return a.createElement("div",{className:"relative mb-10"},a.createElement(r.default,{fallback:a.createElement("div",null,"Loading...")},(()=>{const e=t(4981).default;return t(4007),t(2777),t(3783),t(2679),a.createElement(e,{value:o,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"min-h-[3.5rem] overflow-clip rounded shadow-md",theme:"dark"===f?"idle_fingers":"textmate",onChange:e=>m(e),width:"100%",maxLines:1/0,onLoad:d,editorProps:{$blockScrolling:!0},setOptions:l})})),a.createElement(r.default,{fallback:a.createElement("div",null,"Loading...")},(()=>a.createElement(s,{input:o,showOutput:c,onRun:p,onStop:h,onReset:g}))))}function s(e){const{input:n,showOutput:r,onRun:i,onStop:l,onReset:d}=e,{usePython:m}=t(2334),{runPython:s,stdout:c,stderr:u,isLoading:f,isRunning:p,interruptExecution:h}=m({lazy:!0});return a.createElement(a.Fragment,null,a.createElement("span",{className:"absolute top-2 right-2 z-10 inline-flex rounded-md shadow-sm"},p?a.createElement("button",{onClick:function(){h(),l&&l()},type:"button",className:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100"},"Stop"):a.createElement("button",{onClick:function(){s(n),i&&i()},type:"button",disabled:f||p,className:(0,o.default)("relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",f?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Run"),a.createElement("button",{onClick:function(){d&&d()},type:"button",disabled:p,className:(0,o.default)("relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",p?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Reset")),r&&a.createElement("pre",{className:"mt-4 text-left"},a.createElement("code",null,c),a.createElement("code",{className:"text-red-500"},u)))}},3652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(7294),r=t(9960),i=t(2263),o=t(3285),l=t(8072);const d=["import random;\n\ndef bogo_sort(data):\n  while not is_sorted(data):\n      random.shuffle(data)\n\n\ndef is_sorted(data):\n  for i in range(len(data) - 1):\n      if data[i] > data[i + 1]:\n          return False\n  return True\n\n\ndata = [4, 2, 3, 1]\nbogo_sort(data)\nprint(data) ","import math\n\ndef jump_search(data, item):\n  step = round(math.sqrt(len(data)))\n  i = 0\n  while i < len(data) and data[i] <= item:\n      i += step\n  for i in range(i - step, i):\n      if data[i] == item:\n          return i\n  return -1\n\n\ndata = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]\nprint(jump_search(data, 55))","import random\n\ndef shuffle(data):\n  for i in range(len(data) - 1):\n      j = random.randrange(i, len(data))\n      data[i], data[j] = data[j], data[i]\n\n\ndata = [0, 1, 2, 3, 4, 5]\nshuffle(data)\nprint(data)","def star(size):\n  size //= 2\n  for i in range(-size, size + 1):\n      for j in range(-size, size + 1):\n          if abs(i) == abs(j) or i == 0 or j == 0:\n              print('*', end='')\n          else:\n              print(' ', end='')\n      print()\n\n\nstar(7)","def is_palindrome(sentence):\n  sentence = sentence.replace(' ', '')\n  for i in range(len(sentence) // 2):\n      if sentence[i] != sentence[-i - 1]:\n          return False\n  return True\n\n\nprint(is_palindrome('taco cat'))\nprint(is_palindrome('taco the cat'))","def fizzbuzz(n):\n  for i in range(1, n + 1):\n      if i % 3 == 0:\n          print('fizz', end='')\n      if i % 5 == 0:\n          print('buzz', end='')\n      if i % 3 != 0 and i % 5 != 0:\n          print(i, end='')\n      print()\n\n\nfizzbuzz(15)","import math\n\ndef draw_line_graph(data):\n  max_value = math.ceil(max(data))\n  min_value = math.floor(min(data))\n  for y in range(max_value, min_value - 1, -1):\n      print('{:<3}|'.format(y), end='')\n      for x in range(len(data)):\n          if round(data[x]) == y:\n              print('*', end='')\n          elif y == 0:\n              print('-', end='')\n          else:\n              print(' ', end='')\n      print()\n\n\nfidelity = 60\nheight = 5\ndata = [height * math.sin(math.pi * x / fidelity * 2) for x in range(fidelity)]\ndraw_line_graph(data)","def merge(list1, list2):\n  result = []\n  i, j = 0, 0\n  while i < len(list1) and j < len(list2):\n      if list1[i] < list2[j]:\n          result.append(list1[i])\n          i += 1\n      else:\n          result.append(list2[j])\n          j += 1\n  result += list1[i:] + list2[j:]\n  return result\n\n\nprint(merge([1, 2, 3, 7], [4, 5, 6, 8]))","def get_change(amount):\n  denominations = [1, 2, 5, 10]\n  change = [None] * (amount + 1)\n  change[0] = ()\n  for coin in denominations:\n      for i in range(coin, amount + 1):\n          known_change = change[i - coin]\n          if known_change is not None and change[i] is not None:\n              change[i] = min(change[i], known_change + (coin,), key=len)\n          elif known_change is not None:\n              change[i] = known_change + (coin,)\n  return change[amount]\n\n\namount = 24\nchange = get_change(amount)\nprint('The change to give for ${} is {}'.format(amount, change))"];const m=a.forwardRef((function(e,n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),a.createElement("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),a.createElement("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}))}));const s=a.forwardRef((function(e,n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),a.createElement("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}))}));var c=t(2949);function u(){const[e,n]=(0,a.useState)(!1),{siteConfig:t}=(0,i.default)(),{colorMode:o}=(0,c.useColorMode)();return(0,a.useEffect)((()=>{n("dark"===o)}),[o]),a.createElement("header",{className:"mx-auto mt-8 max-w-7xl px-4 sm:mt-16"},a.createElement("div",{className:"text-center"},a.createElement("img",{className:"mx-auto h-16 w-auto",src:e?"img/logo-dark.png":"img/logo-light.png",alt:t.title}),a.createElement("p",{className:"mx-auto mt-3 flex max-w-md items-center justify-center text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"},t.tagline),a.createElement("div",{className:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"},a.createElement("div",{className:"rounded-md shadow"},a.createElement(r.default,{to:"/docs/introduction/getting-started",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 hover:text-white hover:no-underline md:py-4 md:px-10 md:text-lg"},"Get started")),a.createElement("div",{className:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3"},a.createElement(r.default,{to:"https://github.com/elilambnz/react-py",target:"_blank",rel:"noopener noreferrer",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-600 hover:bg-gray-50 hover:text-cyan-600 hover:no-underline md:py-4 md:px-10 md:text-lg"},"View on GitHub",a.createElement(m,{className:"ml-2 -mr-1 h-5 w-5"}))))))}function f(){const e=e=>e[Math.floor(Math.random()*e.length)],[n,t]=(0,a.useState)(e(d));function r(){const t=e(d);return t!==n?t:r()}const{siteConfig:m}=(0,i.default)();return a.createElement(o.default,{title:`${m.title}`,description:"Description will go into a meta tag in <head />"},a.createElement(u,null),a.createElement("main",{className:"mx-auto mt-4 max-w-7xl px-4 text-center sm:mt-8"},a.createElement("p",{className:"mt-0"},"Or, try it out with some code!"),a.createElement("button",{type:"button",onClick:()=>t(r()),className:"inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:cursor-pointer hover:bg-cyan-700"},"Randomise example",a.createElement(s,{className:"ml-2 -mr-0.5 h-4 w-4"})),a.createElement("div",{className:"mx-auto mt-4 max-w-80ch"},a.createElement(l.default,{code:n}))))}}}]);