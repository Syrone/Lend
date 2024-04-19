(()=>{var e={860:()=>{function e(e){var t=!0,r=!1,n=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function i(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(r){r.metaKey||r.altKey||r.ctrlKey||(l(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerdown",i,!0),document.addEventListener("touchstart",i,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(r&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var r,n,i;l(e.target)&&(t||(n=(r=e.target).type,"INPUT"===(i=r.tagName)&&o[n]&&!r.readOnly||"TEXTAREA"===i&&!r.readOnly||r.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;l(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(r=!0,window.clearTimeout(n),n=window.setTimeout((function(){r=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},130:function(e){var t;t=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e){return Array.isArray(e)?e:[e]},o=function(e){return e instanceof Node},l=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var r=0;r<e.length&&!0!==t(e[r],r,e.length);r++);}},a=function(e){return console.error("[scroll-lock] ".concat(e))},i=function(e){if(Array.isArray(e))return e.join(", ")},c=function(e){var t=[];return l(e,(function(e){return t.push(e)})),t},s=function(e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if((!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&-1!==c(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===c(r.querySelectorAll(t)).indexOf(e););return e},u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==c(r.querySelectorAll(t)).indexOf(e)},d=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!d(e)||e.scrollTop<=0},b=function(e){if(e){if(d(e))return!0;var t=e.scrollTop,r=e.scrollHeight;return t+e.offsetHeight>=r}},v=function(e){if(e)return!!d(e)||e.scrollLeft<=0},p=function(e){if(e){if(d(e))return!0;var t=e.scrollLeft,r=e.scrollWidth;return t+e.offsetWidth>=r}};function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"disablePageScroll",(function(){return y})),r.d(t,"enablePageScroll",(function(){return S})),r.d(t,"getScrollState",(function(){return w})),r.d(t,"clearQueueScrollLocks",(function(){return L})),r.d(t,"getTargetScrollBarWidth",(function(){return A})),r.d(t,"getCurrentTargetScrollBarWidth",(function(){return E})),r.d(t,"getPageScrollBarWidth",(function(){return k})),r.d(t,"getCurrentPageScrollBarWidth",(function(){return T})),r.d(t,"addScrollableTarget",(function(){return x})),r.d(t,"removeScrollableTarget",(function(){return P})),r.d(t,"addScrollableSelector",(function(){return _})),r.d(t,"removeScrollableSelector",(function(){return O})),r.d(t,"addLockableTarget",(function(){return q})),r.d(t,"addLockableSelector",(function(){return G})),r.d(t,"setFillGapMethod",(function(){return F})),r.d(t,"addFillGapTarget",(function(){return W})),r.d(t,"removeFillGapTarget",(function(){return N})),r.d(t,"addFillGapSelector",(function(){return B})),r.d(t,"removeFillGapSelector",(function(){return Y})),r.d(t,"refillGaps",(function(){return j}));var h=["padding","margin","width","max-width","none"],g={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:h[0],startTouchY:0,startTouchX:0},y=function(e){g.queue<=0&&(g.scroll=!1,C(),$()),x(e),g.queue++},S=function(e){g.queue>0&&g.queue--,g.queue<=0&&(g.scroll=!0,M(),X()),P(e)},w=function(){return g.scroll},L=function(){g.queue=0},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var r=e.style.overflowY;t?w()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var n=E(e);return e.style.overflowY=r,n}return 0},E=function(e){if(o(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var r=e.style.borderLeftWidth,n=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var l=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=r,e.style.borderRightWidth=n,l}return 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return A(document.body,e)},T=function(){return E(document.body)},x=function(e){e&&n(e).map((function(e){l(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-scrollable",""):a('"'.concat(e,'" is not a Element.'))}))}))},P=function(e){e&&n(e).map((function(e){l(e,(function(e){o(e)?e.removeAttribute("data-scroll-lock-scrollable"):a('"'.concat(e,'" is not a Element.'))}))}))},_=function(e){e&&n(e).map((function(e){g.scrollableSelectors.push(e)}))},O=function(e){e&&n(e).map((function(e){g.scrollableSelectors=g.scrollableSelectors.filter((function(t){return t!==e}))}))},q=function(e){e&&(n(e).map((function(e){l(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-lockable",""):a('"'.concat(e,'" is not a Element.'))}))})),w()||C())},G=function(e){e&&(n(e).map((function(e){g.lockableSelectors.push(e)})),w()||C(),B(e))},F=function(e){if(e)if(-1!==h.indexOf(e))g.fillGapMethod=e,j();else{var t=h.join(", ");a('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},W=function(e){e&&n(e).map((function(e){l(e,(function(e){o(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),g.scroll||H(e)):a('"'.concat(e,'" is not a Element.'))}))}))},N=function(e){e&&n(e).map((function(e){l(e,(function(e){o(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),g.scroll||I(e)):a('"'.concat(e,'" is not a Element.'))}))}))},B=function(e){e&&n(e).map((function(e){-1===g.fillGapSelectors.indexOf(e)&&(g.fillGapSelectors.push(e),g.scroll||Q(e))}))},Y=function(e){e&&n(e).map((function(e){g.fillGapSelectors=g.fillGapSelectors.filter((function(t){return t!==e})),g.scroll||z(e)}))},j=function(){g.scroll||$()},C=function(){var e=i(g.lockableSelectors);K(e)},M=function(){var e=i(g.lockableSelectors);U(e)},K=function(e){var t=document.querySelectorAll(e);l(t,(function(e){R(e)}))},U=function(e){var t=document.querySelectorAll(e);l(t,(function(e){D(e)}))},R=function(e){if(o(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},D=function(e){o(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},$=function(){g.fillGapSelectors.map((function(e){Q(e)}))},X=function(){g.fillGapSelectors.map((function(e){z(e)}))},Q=function(e){var t=document.querySelectorAll(e),r=-1!==g.lockableSelectors.indexOf(e);l(t,(function(e){H(e,r)}))},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var r;if(""===e.getAttribute("data-scroll-lock-lockable")||t)r=A(e,!0);else{var n=s(e,i(g.lockableSelectors));r=A(n,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&I(e);var l=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",g.fillGapMethod),"margin"===g.fillGapMethod){var a=parseFloat(l.marginRight);e.style.marginRight="".concat(a+r,"px")}else if("width"===g.fillGapMethod)e.style.width="calc(100% - ".concat(r,"px)");else if("max-width"===g.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(r,"px)");else if("padding"===g.fillGapMethod){var c=parseFloat(l.paddingRight);e.style.paddingRight="".concat(c+r,"px")}}},z=function(e){var t=document.querySelectorAll(e);l(t,(function(e){I(e)}))},I=function(e){if(o(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){j()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){g.scroll||(g.startTouchY=e.touches[0].clientY,g.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!g.scroll){var t=g.startTouchY,r=g.startTouchX,n=e.touches[0].clientY,o=e.touches[0].clientX;if(e.touches.length<2){var l=i(g.scrollableSelectors),a={up:t<n,down:t>n,left:r<o,right:r>o},c={up:t+3<n,down:t-3>n,left:r+3<o,right:r-3>o};!function t(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var o=s(r,l,!1);if(function(e){return u(e,'input[type="range"]')}(r))return!1;if(n||function(e){return u(e,'textarea, [contenteditable="true"]')}(r)&&s(r,l)||u(r,l)){var i=!1;v(r)&&p(r)?(a.up&&f(r)||a.down&&b(r))&&(i=!0):f(r)&&b(r)?(a.left&&v(r)||a.right&&p(r))&&(i=!0):(c.up&&f(r)||c.down&&b(r)||c.left&&v(r)||c.right&&p(r))&&(i=!0),i&&(o?t(o,!0):e.cancelable&&e.preventDefault())}else t(o)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){g.scroll||(g.startTouchY=0,g.startTouchX=0)})));var V={hide:function(e){a('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),y(e)},show:function(e){a('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),S(e)},toggle:function(e){a('"toggle" is deprecated! Do not use it.'),w()?y():S(e)},getState:function(){return a('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),w()},getWidth:function(){return a('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),k()},getCurrentWidth:function(){return a('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),T()},setScrollableTargets:function(e){a('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),x(e)},setFillGapSelectors:function(e){a('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),B(e)},setFillGapTargets:function(e){a('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),W(e)},clearQueue:function(){a('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),L()}},J=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({disablePageScroll:y,enablePageScroll:S,getScrollState:w,clearQueueScrollLocks:L,getTargetScrollBarWidth:A,getCurrentTargetScrollBarWidth:E,getPageScrollBarWidth:k,getCurrentPageScrollBarWidth:T,addScrollableSelector:_,removeScrollableSelector:O,addScrollableTarget:x,removeScrollableTarget:P,addLockableSelector:G,addLockableTarget:q,addFillGapSelector:B,removeFillGapSelector:Y,addFillGapTarget:W,removeFillGapTarget:N,setFillGapMethod:F,refillGaps:j,_state:g},V);t.default=J}]).default},e.exports=t()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(860),window,document,document.documentElement,document.body;const e=()=>{const e=document?.querySelector(".header").offsetHeight;document.querySelector(":root").style.setProperty("--header-height",`${e}px`)};window.onload=function(){let t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=!1,n=null,o=null;return function l(){for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];if(r)return n=i,void(o=this);e.apply(this,i),r=!0,setTimeout((()=>{r=!1,o&&(l.apply(o,n),o=null,n=null)}),t)}}(e);window.addEventListener("resize",t),e()};var t=r(130),n=r.n(t);!function(){const e=document?.querySelector("[data-burger]"),t=document?.querySelector("[data-menu]"),r=document?.querySelectorAll("[data-menu-close]"),o=document?.querySelectorAll("[data-menu-item]"),l=document?.querySelector("[data-menu-overlay]");e?.addEventListener("click",(r=>{e?.classList.toggle("burger--active"),l?.setAttribute("data-menu-overlay","true"),t?.classList.toggle("menu--active"),t?.classList.contains("menu--active")?(e?.setAttribute("aria-expanded","true"),l?.setAttribute("data-menu-overlay","true"),e?.setAttribute("aria-label","Закрыть меню"),n().disablePageScroll(t)):(e?.setAttribute("aria-expanded","false"),l?.setAttribute("data-menu-overlay","false"),e?.setAttribute("aria-label","Открыть меню"),n().enablePageScroll(t))})),l?.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),l?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),t.classList.remove("menu--active"),n().enablePageScroll(t)})),o?.forEach((r=>{r.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),l?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),t.classList.remove("menu--active"),n().enablePageScroll(t)}))})),r?.forEach((r=>{r.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),l?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),t.classList.remove("menu--active"),n().enablePageScroll(t)}))}))}(),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"max";const t="_dynamic_adapt_",r="data-da",n=function(){const t=[];return[...document.querySelectorAll(`[${r}]`)].forEach((e=>{const n=e.getAttribute(r),[o,l,a]=n.split(",").map((e=>e.trim())),i=document.querySelector(o);var c;i&&t.push({parent:e.parentElement,element:e,to:i,breakpoint:l??"767",order:void 0!==a?(c=a,isNaN(c)?a:Number(a)):"last",index:-1})})),function(t){const r="min"===e?1:0;return[...t].sort(((e,t)=>e.breakpoint===t.breakpoint?e.order===t.order?0:"first"===e.order||"last"===t.order?-1*r:"last"===e.order||"first"===t.order?1*r:0:(e.breakpoint-t.breakpoint)*r))}(t)}();[...new Set(n.map((t=>{let{breakpoint:r}=t;return`(${e}-width: ${r}px),${r}`})))].map((e=>{const[t,r]=e.split(",");return{query:t,breakpoint:r}})).forEach((e=>{const r=window.matchMedia(e.query),o=function(e,r){return function(){e.matches?(r.forEach((e=>{!function(e){const{to:r,element:n,order:o}=e;e.index=function(e,t){return[...t.children].indexOf(e)}(e.element,e.element.parentElement),n.classList.add(t),"last"===o||o>=r.children.length?r.append(n):"first"!==o?r.children[o].before(n):r.prepend(n)}(e)})),r.reverse()):(r.forEach((e=>{e.element.classList.contains(t)&&function(e){const{parent:r,element:n,index:o}=e;n.classList.remove(t),o>=0&&r.children[o]?r.children[o].before(n):r.append(n)}(e)})),r.reverse())}}(r,n.filter((t=>{let{breakpoint:r}=t;return r===e.breakpoint})));r.addEventListener("change",o),o()}))}();class o{constructor(e,t){this.options=Object.assign({isChanged:()=>{}},t),this.selector=e,this.tabs=document.querySelector(`[data-tabs="${e}"]`),this.tabs?(this.tabList=this.tabs.querySelector(".tabs__nav"),this.tabsBtns=this.tabList.querySelectorAll(".tabs__nav-btn"),this.tabsPanels=this.tabs.querySelectorAll(".tabs__panel"),this.check(),this.init(),this.events()):console.error("Селектор data-tabs не существует!")}check(){document.querySelectorAll(`[data-tabs="${this.selector}"]`).length>1?console.error("Количество элементов с одинаковым data-tabs больше одного!"):this.tabsBtns.length===this.tabsPanels.length||console.error("Количество кнопок и элементов табов не совпадает!")}init(){this.tabList.setAttribute("role","tablist"),this.tabsBtns.forEach(((e,t)=>{e.setAttribute("role","tab"),e.setAttribute("tabindex","-1"),e.setAttribute("id",`${this.selector}${t+1}`),e.classList.remove("tabs__nav-btn--active")})),this.tabsPanels.forEach(((e,t)=>{e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-labelledby",this.tabsBtns[t].id),e.classList.remove("tabs__panel--active")})),this.tabsBtns[0].classList.add("tabs__nav-btn--active"),this.tabsBtns[0].removeAttribute("tabindex"),this.tabsBtns[0].setAttribute("aria-selected","true"),this.tabsPanels[0].classList.add("tabs__panel--active")}events(){this.tabsBtns.forEach(((e,t)=>{e.addEventListener("click",(e=>{let t=this.tabList.querySelector("[aria-selected]");e.currentTarget!==t&&this.switchTabs(e.currentTarget,t)})),e.addEventListener("keydown",(e=>{let r=Array.prototype.indexOf.call(this.tabsBtns,e.currentTarget),n=null;n=37===e.which?r-1:39===e.which?r+1:40===e.which?"down":null,null!==n&&("down"===n?this.tabsPanels[t].focus():this.tabsBtns[n]&&this.switchTabs(this.tabsBtns[n],e.currentTarget))}))}))}switchTabs(e,t=this.tabs.querySelector("[aria-selected]")){e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),t.removeAttribute("aria-selected"),t.setAttribute("tabindex","-1");let r=Array.prototype.indexOf.call(this.tabsBtns,e),n=Array.prototype.indexOf.call(this.tabsBtns,t);this.tabsPanels[n].classList.remove("tabs__panel--active"),this.tabsPanels[r].classList.add("tabs__panel--active"),this.tabsBtns[n].classList.remove("tabs__nav-btn--active"),this.tabsBtns[r].classList.add("tabs__nav-btn--active"),this.options.isChanged(this)}}document.querySelector('[data-tabs="categoryTabs"]')&&new o("categoryTabs")})()})();