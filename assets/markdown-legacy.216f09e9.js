!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,u=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(u.push(e.value),!r||u.length!==r);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}System.register(["./index-legacy.67405198.js"],(function(r){"use strict";var n,e,o,u,i,a;return{setters:[function(t){n=t.d0,e=t.e,o=t.a8,u=t.cm,i=t.a0,a=t.a7}],execute:function(){r("default",(function(){var r=t(n(),1)[0];return e(a,{get loading(){return r.loading},get children(){return e(o,{get children(){var t;return null===(t=r())||void 0===t?void 0:t.content},get ext(){return u(i.obj.name)},toc:!0})}})}))}}}))}();
