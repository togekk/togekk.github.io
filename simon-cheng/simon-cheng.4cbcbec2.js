parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"cTZV":[function(require,module,exports) {

},{}],"jDie":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(t){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"5DPZ":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return e.exec(r).slice(1)};function s(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i=o>=0?arguments[o]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return(n?"/":"")+(e=t(s(e.split("/"),function(r){return!!r}),!n).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),n="/"===o(r,-1);return(r=t(s(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(s(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),o=Math.min(n.length,s.length),i=o,u=0;u<o;u++)if(n[u]!==s[u]){i=u;break}var l=[];for(u=i;u<n.length;u++)l.push("..");return(l=l.concat(s.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=n(r),e=t[0],s=t[1];return e||s?(s&&(s=s.substr(0,s.length-1)),e+s):"."},exports.basename=function(r,t){var e=n(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return n(r)[3]};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"jDie"}],"8uEt":[function(require,module,exports) {
var define;
var process = require("process");
var __dirname = "C:\\Users\\togekk\\Documents\\web\\simon-cheng\\target\\deploy";
var e,_=require("process"),r="C:\\Users\\togekk\\Documents\\web\\simon-cheng\\target\\deploy",t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if(void 0===n)var n={};!function(_,r){"function"==typeof e&&e.amd?e([],r):"object"===("undefined"==typeof module?"undefined":t(module))&&module.exports?module.exports=r():n.simon_cheng=r()}(0,function(){return function(e){var n=function(){var e={STDWEB_PRIVATE:{}};e.STDWEB_PRIVATE.to_utf8=function(e,_){for(var r=0;r<e.length;++r){var t=e.charCodeAt(r);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++r)),t<=127?n[_++]=t:t<=2047?(n[_++]=192|t>>6,n[_++]=128|63&t):t<=65535?(n[_++]=224|t>>12,n[_++]=128|t>>6&63,n[_++]=128|63&t):t<=2097151?(n[_++]=240|t>>18,n[_++]=128|t>>12&63,n[_++]=128|t>>6&63,n[_++]=128|63&t):t<=67108863?(n[_++]=248|t>>24,n[_++]=128|t>>18&63,n[_++]=128|t>>12&63,n[_++]=128|t>>6&63,n[_++]=128|63&t):(n[_++]=252|t>>30,n[_++]=128|t>>24&63,n[_++]=128|t>>18&63,n[_++]=128|t>>12&63,n[_++]=128|t>>6&63,n[_++]=128|63&t)}},e.STDWEB_PRIVATE.noop=function(){},e.STDWEB_PRIVATE.to_js=function(T){var f=n[T+12];if(0!==f){if(1===f)return null;if(2===f)return t[T/4];if(3===f)return E[T/8];if(4===f){var i=a[T/4],s=a[(T+4)/4];return e.STDWEB_PRIVATE.to_js_string(i,s)}if(5===f)return!1;if(6===f)return!0;if(7===f){for(var i=e.STDWEB_PRIVATE.arena+a[T/4],s=a[(T+4)/4],u=[],d=0;d<s;++d)u.push(e.STDWEB_PRIVATE.to_js(i+16*d));return u}if(8===f){for(var l=e.STDWEB_PRIVATE.arena,A=l+a[T/4],s=a[(T+4)/4],S=l+a[(T+8)/4],u={},d=0;d<s;++d){var R=a[(S+8*d)/4],W=a[(S+4+8*d)/4],I=e.STDWEB_PRIVATE.to_js_string(R,W),P=e.STDWEB_PRIVATE.to_js(A+16*d);u[I]=P}return u}if(9===f)return e.STDWEB_PRIVATE.acquire_js_reference(t[T/4]);if(10===f){var D=a[T/4],i=a[(T+4)/4],B=a[(T+8)/4],u=function(){if(0===i)throw new ReferenceError("Already dropped Rust function called!");var _=e.STDWEB_PRIVATE.alloc(16);e.STDWEB_PRIVATE.serialize_array(_,arguments),e.STDWEB_PRIVATE.dyncall("vii",D,[i,_]);var r=e.STDWEB_PRIVATE.tmp;return e.STDWEB_PRIVATE.tmp=null,r};return u.drop=function(){u.drop=e.STDWEB_PRIVATE.noop;var _=i;i=0,e.STDWEB_PRIVATE.dyncall("vi",B,[_])},u}if(13===f){var D=a[T/4],i=a[(T+4)/4],B=a[(T+8)/4],u=function _(){if(0===i)throw new ReferenceError("Already called or dropped FnOnce function called!");_.drop=e.STDWEB_PRIVATE.noop;var r=i;i=0;var t=e.STDWEB_PRIVATE.alloc(16);e.STDWEB_PRIVATE.serialize_array(t,arguments),e.STDWEB_PRIVATE.dyncall("vii",D,[r,t]);var n=e.STDWEB_PRIVATE.tmp;return e.STDWEB_PRIVATE.tmp=null,n};return u.drop=function(){u.drop=e.STDWEB_PRIVATE.noop;var _=i;i=0,e.STDWEB_PRIVATE.dyncall("vi",B,[_])},u}if(14===f){var i=a[T/4],s=a[(T+4)/4],V=a[(T+8)/4],b=i+s;switch(V){case 0:return n.subarray(i,b);case 1:return _.subarray(i,b);case 2:return o.subarray(i,b);case 3:return r.subarray(i,b);case 4:return a.subarray(i,b);case 5:return t.subarray(i,b);case 6:return c.subarray(i,b);case 7:return E.subarray(i,b)}}else if(15===f)return e.STDWEB_PRIVATE.get_raw_value(a[T/4])}},e.STDWEB_PRIVATE.serialize_object=function(_,r){var t=Object.keys(r),o=t.length,c=e.STDWEB_PRIVATE.alloc(8*o),E=e.STDWEB_PRIVATE.alloc(16*o);n[_+12]=8,a[_/4]=E,a[(_+4)/4]=o,a[(_+8)/4]=c;for(var T=0;T<o;++T){var f=t[T],i=e.STDWEB_PRIVATE.utf8_len(f),s=e.STDWEB_PRIVATE.alloc(i);e.STDWEB_PRIVATE.to_utf8(f,s);var u=c+8*T;a[u/4]=s,a[(u+4)/4]=i,e.STDWEB_PRIVATE.from_js(E+16*T,r[f])}},e.STDWEB_PRIVATE.serialize_array=function(_,r){var t=r.length,o=e.STDWEB_PRIVATE.alloc(16*t);n[_+12]=7,a[_/4]=o,a[(_+4)/4]=t;for(var c=0;c<t;++c)e.STDWEB_PRIVATE.from_js(o+16*c,r[c])},e.STDWEB_PRIVATE.from_js=function(_,r){var o=Object.prototype.toString.call(r);if("[object String]"===o){var c=e.STDWEB_PRIVATE.utf8_len(r),T=0;c>0&&(T=e.STDWEB_PRIVATE.alloc(c),e.STDWEB_PRIVATE.to_utf8(r,T)),n[_+12]=4,a[_/4]=T,a[(_+4)/4]=c}else if("[object Number]"===o)r===(0|r)?(n[_+12]=2,t[_/4]=r):(n[_+12]=3,E[_/8]=r);else if(null===r)n[_+12]=1;else if(void 0===r)n[_+12]=0;else if(!1===r)n[_+12]=5;else if(!0===r)n[_+12]=6;else if("[object Symbol]"===o){var f=e.STDWEB_PRIVATE.register_raw_value(r);n[_+12]=15,t[_/4]=f}else{var i=e.STDWEB_PRIVATE.acquire_rust_reference(r);n[_+12]=9,t[_/4]=i}},e.STDWEB_PRIVATE.to_js_string=function(e,_){for(var r=(0|(e|=0))+(0|(_|=0)),t="";e<r;){var o=n[e++];if(o<128)t+=String.fromCharCode(o);else{var a=31&o,c=0;e<r&&(c=n[e++]);var E=a<<6|63&c;if(o>=224){var T=0;e<r&&(T=n[e++]);var f=(63&c)<<6|63&T;if(E=a<<12|f,o>=240){var i=0;e<r&&(i=n[e++]),E=(7&a)<<18|f<<6|63&i,t+=String.fromCharCode(55232+(E>>10)),E=56320+(1023&E)}}t+=String.fromCharCode(E)}}return t},e.STDWEB_PRIVATE.id_to_ref_map={},e.STDWEB_PRIVATE.id_to_refcount_map={},e.STDWEB_PRIVATE.ref_to_id_map=new WeakMap,e.STDWEB_PRIVATE.ref_to_id_map_fallback=new Map,e.STDWEB_PRIVATE.last_refid=1,e.STDWEB_PRIVATE.id_to_raw_value_map={},e.STDWEB_PRIVATE.last_raw_value_id=1,e.STDWEB_PRIVATE.acquire_rust_reference=function(_){if(null==_)return 0;var r=e.STDWEB_PRIVATE.id_to_refcount_map,t=e.STDWEB_PRIVATE.id_to_ref_map,n=e.STDWEB_PRIVATE.ref_to_id_map,o=e.STDWEB_PRIVATE.ref_to_id_map_fallback,a=n.get(_);if(void 0===a&&(a=o.get(_)),void 0===a){a=e.STDWEB_PRIVATE.last_refid++;try{n.set(_,a)}catch(e){o.set(_,a)}}return a in t?r[a]++:(t[a]=_,r[a]=1),a},e.STDWEB_PRIVATE.acquire_js_reference=function(_){return e.STDWEB_PRIVATE.id_to_ref_map[_]},e.STDWEB_PRIVATE.increment_refcount=function(_){e.STDWEB_PRIVATE.id_to_refcount_map[_]++},e.STDWEB_PRIVATE.decrement_refcount=function(_){var r=e.STDWEB_PRIVATE.id_to_refcount_map;if(0==--r[_]){var t=e.STDWEB_PRIVATE.id_to_ref_map,n=e.STDWEB_PRIVATE.ref_to_id_map_fallback,o=t[_];delete t[_],delete r[_],n.delete(o)}},e.STDWEB_PRIVATE.register_raw_value=function(_){var r=e.STDWEB_PRIVATE.last_raw_value_id++;return e.STDWEB_PRIVATE.id_to_raw_value_map[r]=_,r},e.STDWEB_PRIVATE.unregister_raw_value=function(_){delete e.STDWEB_PRIVATE.id_to_raw_value_map[_]},e.STDWEB_PRIVATE.get_raw_value=function(_){return e.STDWEB_PRIVATE.id_to_raw_value_map[_]},e.STDWEB_PRIVATE.alloc=function(_){return e.web_malloc(_)},e.STDWEB_PRIVATE.dyncall=function(_,r,t){return e.web_table.get(r).apply(null,t)},e.STDWEB_PRIVATE.utf8_len=function(e){for(var _=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++r)),t<=127?++_:_+=t<=2047?2:t<=65535?3:t<=2097151?4:t<=67108863?5:6}return _},e.STDWEB_PRIVATE.prepare_any_arg=function(_){var r=e.STDWEB_PRIVATE.alloc(16);return e.STDWEB_PRIVATE.from_js(r,_),r},e.STDWEB_PRIVATE.acquire_tmp=function(_){var r=e.STDWEB_PRIVATE.tmp;return e.STDWEB_PRIVATE.tmp=null,r};var _=null,r=null,t=null,n=null,o=null,a=null,c=null,E=null;function T(){var T=e.instance.exports.memory.buffer;_=new Int8Array(T),r=new Int16Array(T),t=new Int32Array(T),n=new Uint8Array(T),o=new Uint16Array(T),a=new Uint32Array(T),c=new Float32Array(T),E=new Float64Array(T)}return Object.defineProperty(e,"exports",{value:{}}),{imports:{env:{__extjs_69920acb495ef5b5f2a2907f2b2109c50f25a632:function(_){return e.STDWEB_PRIVATE.acquire_js_reference(_)instanceof HTMLCanvasElement|0},__extjs_9f22d4ca7bc938409787341b7db181f8dd41e6df:function(_){e.STDWEB_PRIVATE.increment_refcount(_)},__extjs_20ad46df0c338e20bd94061cd656da90c3ba5ba5:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.getContext("2d"))},__extjs_050e3f8fd41b9411cfd3fd413ce036926ced0f94:function(_){return e.STDWEB_PRIVATE.acquire_js_reference(_)instanceof CanvasRenderingContext2D|0},__extjs_6c47cfe7b20d140c462be80002863de205806d99:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.width)},__extjs_be62a332d41ddd62b4b77feacf9ec13c7ccb1191:function(_,r){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),_.font=r},__extjs_5b06766e9b8fe7f9a78694fbeb8578c5da969c0f:function(_,r){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),_.textBaseline=r},__extjs_6cbcfe66c0ba4caf569853396b7e9ecc6c99ec90:function(_,r,t,n,o){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),n=e.STDWEB_PRIVATE.to_js(n),o=e.STDWEB_PRIVATE.to_js(o),_.clearRect(r,t,n,o)},__extjs_bf4a1d0ebf8d0a83d15d3c9334ad2fcafbd5b71e:function(_,r,t,n){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),n=e.STDWEB_PRIVATE.to_js(n),_.fillText(r,t,n)},__extjs_897ff2d0160606ea98961935acb125d1ddbf4688:function(_){var r=e.STDWEB_PRIVATE.acquire_js_reference(_);return r instanceof DOMException&&"SecurityError"===r.name},__extjs_1ebe82d2f7ba33fa5bebad1af9e9174bfdfeb4d4:function(_,r,t){r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),e.STDWEB_PRIVATE.from_js(_,function(){try{return{value:r.measureText(t),success:!0}}catch(e){return{error:e,success:!1}}}())},__extjs_5e381f0731318b6102e342d680feb03420437174:function(_){return e.STDWEB_PRIVATE.acquire_js_reference(_)instanceof TextMetrics|0},__extjs_052eb90e4be7830195f8967b85b711a37cf0626c:function(_){(_=e.STDWEB_PRIVATE.to_js(_)).restore()},__extjs_de08a566f88f5ce4582cd2816abf86f3c7a86f56:function(_,r){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),_.rotate(r)},__extjs_304c4a1c2f732cddb1e7923aa13a2f36e90e8d0f:function(_){(_=e.STDWEB_PRIVATE.to_js(_)).save()},__extjs_4995242ea68f8ee70dc2ea0a987f8c3fefcb1273:function(_,r,t){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),_.translate(r,t)},__extjs_1c8769c3b326d77ceb673ada3dc887cf1d509509:function(_){e.STDWEB_PRIVATE.from_js(_,document)},__extjs_a8e1d9cfe0b41d7d61b849811ad1cfba32de989b:function(_,r,t){r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),e.STDWEB_PRIVATE.from_js(_,r.createElement(t))},__extjs_74d5764ddc102a8d3b6252116087a68f2db0c9d4:function(_){e.STDWEB_PRIVATE.from_js(_,window)},__extjs_ae3cbd224f9d5c5e82750fd6b9d46fd91b2f397a:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.innerWidth)},__extjs_66cd7b3158f81a269e6c4e919e80a10441401908:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.innerHeight)},__extjs_db0226ae1bbecd407e9880ee28ddc70fc3322d9c:function(_){_=e.STDWEB_PRIVATE.to_js(_),e.STDWEB_PRIVATE.unregister_raw_value(_)},__extjs_4cc2b2ed53586a2bd32ca2206724307e82bb32ff:function(_,r){_=e.STDWEB_PRIVATE.to_js(_),r=e.STDWEB_PRIVATE.to_js(r),_.appendChild(r)},__extjs_be46082601410ad79cc753a1f76169475e7c6f74:function(_,r,t,n){var o;r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),n=e.STDWEB_PRIVATE.to_js(n),e.STDWEB_PRIVATE.from_js(_,(o=r,{request:t.requestAnimationFrame(o),callback:o,window:n}))},__extjs_96678b29fcb2679e8c7142021ee69d3644214f9f:function(_,r,t,n){r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),n=e.STDWEB_PRIVATE.to_js(n),e.STDWEB_PRIVATE.from_js(_,function(){try{return{value:r.setAttribute(t,n),success:!0}}catch(e){return{error:e,success:!1}}}())},__extjs_a3b76c5b7916fd257ee3f362dc672b974e56c476:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.success)},__extjs_a342681e5c1e3fb0bdeac6e35d67bf944fcd4102:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.value)},__extjs_5ecfd7ee5cecc8be26c1e6e3c90ce666901b547c:function(_,r){r=e.STDWEB_PRIVATE.to_js(r),e.STDWEB_PRIVATE.from_js(_,r.error)},__extjs_0e54fd9c163fcf648ce0a395fde4500fd167a40b:function(_){var r=e.STDWEB_PRIVATE.acquire_js_reference(_);return r instanceof DOMException&&"InvalidCharacterError"===r.name},__extjs_ff5103e6cc179d13b4c7a785bdce2708fd559fc0:function(_){e.STDWEB_PRIVATE.tmp=e.STDWEB_PRIVATE.to_js(_)},__extjs_496ebd7b1bc0e6eebd7206e8bee7671ea3b8006f:function(_,r,t){r=e.STDWEB_PRIVATE.to_js(r),t=e.STDWEB_PRIVATE.to_js(t),e.STDWEB_PRIVATE.from_js(_,r.querySelector(t))},__extjs_80d6d56760c65e49b7be8b6b01c1ea861b046bf0:function(_){e.STDWEB_PRIVATE.decrement_refcount(_)},__web_on_grow:T}},initialize:function(_){return Object.defineProperty(e,"instance",{value:_}),Object.defineProperty(e,"web_malloc",{value:e.instance.exports.__web_malloc}),Object.defineProperty(e,"web_free",{value:e.instance.exports.__web_free}),Object.defineProperty(e,"web_table",{value:e.instance.exports.__web_table}),T(),e.instance.exports.main(),e.exports}}}();if("undefined"==typeof window&&"object"===(void 0===_?"undefined":t(_))){var o=require("fs"),a=require("path").join(r,"simon-cheng.wasm"),c=o.readFileSync(a),E=new WebAssembly.Module(c),T=new WebAssembly.Instance(E,n.imports);return n.initialize(T)}return fetch("simon-cheng.wasm",{credentials:"same-origin"}).then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.compile(e)}).then(function(e){return WebAssembly.instantiate(e,n.imports)}).then(function(e){var _=n.initialize(e);return console.log("Finished loading Rust wasm module 'simon_cheng'"),_}).catch(function(e){throw console.log("Error loading Rust wasm module 'simon_cheng':",e),e})}()});
},{"fs":"cTZV","path":"5DPZ","process":"jDie"}]},{},["8uEt"], null)
//# sourceMappingURL=simon-cheng.e9d04afc.map