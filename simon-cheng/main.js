var c;c||(c=typeof Module !== 'undefined' ? Module : {});var p={},q;for(q in c)c.hasOwnProperty(q)&&(p[q]=c[q]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var r=!1,t=!1,u=!1,aa=!1;
if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)r=!0;else if("WORKER"===c.ENVIRONMENT)t=!0;else if("NODE"===c.ENVIRONMENT)u=!0;else if("SHELL"===c.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else r="object"===typeof window,t="function"===typeof importScripts,u="object"===typeof process&&"function"===typeof require&&!r&&!t,aa=!r&&!u&&!t;
if(u){var ba,ca;c.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});c.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(c.read=function(a){return read(a)}),c.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)});else if(r||t)c.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(c.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),c.readAsync=function(a,b,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=typeof arguments&&(c.arguments=arguments),c.setWindowTitle=
function(a){document.title=a};c.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;c.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||c.print;c.print=c.print;c.printErr=c.printErr;for(q in p)p.hasOwnProperty(q)&&(c[q]=p[q]);p=void 0;function da(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ea(a){fa||(fa={});fa[a]||(fa[a]=1,c.printErr(a))}var fa,w=0;
function assert(a,b){a||x("Assertion failed: "+b)}function ha(a){var b;if(0===b||!a)return"";for(var d=0,e,f=0;;){e=y[a+f>>0];d|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>d){for(;0<b;)d=String.fromCharCode.apply(String,y.subarray(a,a+Math.min(b,1024))),e=e?e+d:d,a+=1024,b-=1024;return e}return ia(y,a)}var ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ia(a,b){for(var d=b;a[d];)++d;if(16<d-b&&a.subarray&&ja)return ja.decode(a.subarray(b,d));for(d="";;){var e=a[b++];if(!e)return d;if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;if(224==(e&240))e=(e&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|h;else{var k=a[b++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|h<<6|k;else{var l=a[b++]&63;e=(e&1)<<30|f<<24|g<<18|h<<12|k<<6|l}}}65536>e?d+=String.fromCharCode(e):(e-=
65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function ka(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}var f=b+1;b=la(f);d=b;e=ma;if(0<f){f=d+f-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(d>=f)break;e[d++]=h}else{if(2047>=h){if(d+1>=f)break;e[d++]=192|h>>6}else{if(65535>=h){if(d+2>=f)break;e[d++]=224|h>>
12}else{if(2097151>=h){if(d+3>=f)break;e[d++]=240|h>>18}else{if(67108863>=h){if(d+4>=f)break;e[d++]=248|h>>24}else{if(d+5>=f)break;e[d++]=252|h>>30;e[d++]=128|h>>24&63}e[d++]=128|h>>18&63}e[d++]=128|h>>12&63}e[d++]=128|h>>6&63}e[d++]=128|h&63}}e[d]=0}return b}var buffer,ma,y,na,oa,z,A,pa,qa;
function ra(){c.HEAP8=ma=new Int8Array(buffer);c.HEAP16=na=new Int16Array(buffer);c.HEAP32=z=new Int32Array(buffer);c.HEAPU8=y=new Uint8Array(buffer);c.HEAPU16=oa=new Uint16Array(buffer);c.HEAPU32=A=new Uint32Array(buffer);c.HEAPF32=pa=new Float32Array(buffer);c.HEAPF64=qa=new Float64Array(buffer)}var sa,B,ta,ua,va,wa,xa,ya;sa=B=ua=va=wa=xa=ya=0;ta=!1;
function za(){x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+C+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Aa=c.TOTAL_STACK||5242880,C=c.TOTAL_MEMORY||16777216;C<Aa&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+C+"! (TOTAL_STACK="+Aa+")");
c.buffer?buffer=c.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(c.wasmMemory=new WebAssembly.Memory({initial:C/65536,maximum:C/65536}),buffer=c.wasmMemory.buffer):buffer=new ArrayBuffer(C),c.buffer=buffer);ra();z[0]=1668509029;na[1]=25459;if(115!==y[2]||99!==y[3])throw"Runtime error: expected the system to be little-endian!";
function D(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.g;"number"===typeof d?void 0===b.c?c.dynCall_v(d):c.dynCall_vi(d,b.c):d(void 0===b.c?null:b.c)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[],Ga=!1;function Ha(){var a=c.preRun.shift();Ba.unshift(a)}var E=0,Ia=null,F=null;c.preloadedImages={};c.preloadedAudios={};
function Ja(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(c.wasmBinary)return new Uint8Array(c.wasmBinary);if(c.readBinary)return c.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(m){x(m)}}function b(){return c.wasmBinary||!r&&!t||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function d(a){function e(a){k=a.exports;if(k.memory){a=k.memory;var b=c.buffer;a.byteLength<b.byteLength&&c.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);c.buffer=buffer=a;ra()}c.asm=k;c.usingWasm=!0;E--;c.monitorRunDependencies&&c.monitorRunDependencies(E);0==E&&(null!==Ia&&(clearInterval(Ia),Ia=null),F&&(a=F,F=null,a()))}
function d(a){e(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){c.printErr("failed to asynchronously prepare wasm: "+a);x(a)})}if("object"!==typeof WebAssembly)return c.printErr("no native wasm support detected"),!1;if(!(c.wasmMemory instanceof WebAssembly.Memory))return c.printErr("no native wasm Memory in use"),!1;a.memory=c.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;E++;c.monitorRunDependencies&&c.monitorRunDependencies(E);
if(c.instantiateWasm)try{return c.instantiateWasm(h,e)}catch(Gb){return c.printErr("Module.instantiateWasm callback failed with error: "+Gb),!1}c.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ja(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){c.printErr("wasm streaming compile failed: "+a);c.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var e="main.wast",f="main.wasm",
g="main.temp.asm.js";"function"===typeof c.locateFile&&(Ja(e)||(e=c.locateFile(e)),Ja(f)||(f=c.locateFile(f)),Ja(g)||(g=c.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:c},k=null;c.asmPreload=c.asm;var l=c.reallocBuffer;c.reallocBuffer=function(a){if("asmjs"===n)var b=l(a);else a:{var e=c.usingWasm?65536:16777216;0<a%e&&(a+=e-a%e);e=c.buffer.byteLength;if(c.usingWasm)try{b=-1!==c.wasmMemory.grow((a-e)/65536)?c.buffer=
c.wasmMemory.buffer:null;break a}catch(bc){b=null;break a}b=void 0}return b};var n="";c.asm=function(a,b){if(!b.table){a=c.wasmTableSize;void 0===a&&(a=1024);var e=c.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);c.wasmTable=b.table}b.memoryBase||(b.memoryBase=c.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=d(b))||x("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return b}})();sa=1024;B=sa+7408;Ca.push({g:function(){Ka()}},{g:function(){La()}});c.STATIC_BASE=sa;c.STATIC_BUMP=7408;B+=16;var G=0;function H(){G+=4;return z[G-4>>2]}var Ma={};
function I(a,b){G=b;try{var d=H(),e=H(),f=H();a=0;I.a||(I.a=[null,[],[]],I.s=function(a,b){var e=I.a[a];assert(e);0===b||10===b?((1===a?c.print:c.printErr)(ia(e,0)),e.length=0):e.push(b)});for(b=0;b<f;b++){for(var g=z[e+8*b>>2],h=z[e+(8*b+4)>>2],k=0;k<h;k++)I.s(d,y[g+k]);a+=h}return a}catch(l){return"undefined"!==typeof FS&&l instanceof FS.i||x(l),-l.j}}function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}
var Oa=void 0;function J(a){for(var b="";y[a];)b+=Oa[y[a++]];return b}var Pa={},Qa={},Ra={};function Sa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ta(a,b){a=Sa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ua(a){var b=Error,d=Ta(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(b.prototype);d.prototype.constructor=d;d.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}var Va=void 0;function K(a){throw new Va(a);}
function L(a,b,d){d=d||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||K('type "'+e+'" must have a positive integer typeid pointer');if(Qa.hasOwnProperty(a)){if(d.A)return;K("Cannot register type '"+e+"' twice")}Qa[a]=b;delete Ra[a];Pa.hasOwnProperty(a)&&(b=Pa[a],delete Pa[a],b.forEach(function(a){a()}))}var Wa=[],M=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Xa(a){4<a&&0===--M[a].h&&(M[a]=void 0,Wa.push(a))}function N(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Wa.length?Wa.pop():M.length;M[b]={h:1,value:a};return b}}function Ya(a){return this.fromWireType(A[a>>2])}function Za(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function $a(a,b){switch(b){case 2:return function(a){return this.fromWireType(pa[a>>2])};case 3:return function(a){return this.fromWireType(qa[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function ab(a,b,d){switch(b){case 0:return d?function(a){return ma[a]}:function(a){return y[a]};case 1:return d?function(a){return na[a>>1]}:function(a){return oa[a>>1]};case 2:return d?function(a){return z[a>>2]}:function(a){return A[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var bb={};function cb(a){var b=bb[a];return void 0===b?J(a):b}var db=[];function O(a){a||K("Cannot use deleted val. handle = "+a);return M[a].value}function eb(a){var b=db.length;db.push(a);return b}
function fb(a,b){var d=Qa[a];if(void 0===d){a=gb(a);var e=J(a);P(a);K(b+" has unknown type "+e)}return d}function hb(a,b){for(var d=Array(a),e=0;e<a;++e)d[e]=fb(z[(b>>2)+e],"parameter "+e);return d}function ib(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var d=Ta(b.name||"unknownFunctionName",function(){});d.prototype=b.prototype;d=new d;a=b.apply(d,a);return a instanceof Object?a:d}var jb=B;B+=16;
function kb(a,b){lb=a;mb=b;if(Q)if(0==a)R=function(){var a=Math.max(0,nb+b-S())|0;setTimeout(U,a)},V="timeout";else if(1==a)R=function(){ob(U)},V="rAF";else if(2==a){if("undefined"===typeof setImmediate){var d=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),d.shift()()},!0);setImmediate=function(a){d.push(a);t?(void 0===c.setImmediates&&(c.setImmediates=[]),c.setImmediates.push(a),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}R=function(){setImmediate(U)};V="immediate"}}function S(){x()}
function pb(a){var b=qb;c.noExitRuntime=!0;assert(!Q,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Q=a;qb=b;var d="undefined"!==typeof b?function(){c.dynCall_vi(a,b)}:function(){c.dynCall_v(a)};var e=W;U=function(){if(!w)if(0<rb.length){var a=Date.now(),b=rb.shift();b.g(b.c);if(sb){var h=sb,k=0==h%1?h-1:Math.floor(h);sb=b.F?k:(8*h+(k+.5))/9}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");c.setStatus&&(a=c.statusMessage||"Please wait...",b=sb,h=tb.G,b?b<h?c.setStatus(a+" ("+(h-b)+"/"+h+")"):c.setStatus(a):c.setStatus(""));e<W||setTimeout(U,0)}else if(!(e<W))if(ub=ub+1|0,1==lb&&1<mb&&0!=ub%mb)R();else{0==lb&&(nb=S());"timeout"===V&&c.f&&(c.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
V="");a:if(!(w||c.preMainLoop&&!1===c.preMainLoop())){try{d()}catch(l){if(l instanceof v)break a;l&&"object"===typeof l&&l.stack&&c.printErr("exception thrown: "+[l,l.stack]);throw l;}c.postMainLoop&&c.postMainLoop()}e<W||("object"===typeof SDL&&SDL.audio&&SDL.audio.C&&SDL.audio.C(),R())}}}var R=null,V="",W=0,Q=null,qb=0,lb=0,mb=0,ub=0,rb=[],tb={},nb,U,sb,vb=!1,wb=!1,xb=[];
function yb(){function a(){wb=document.pointerLockElement===c.canvas||document.mozPointerLockElement===c.canvas||document.webkitPointerLockElement===c.canvas||document.msPointerLockElement===c.canvas}c.preloadPlugins||(c.preloadPlugins=[]);if(!zb){zb=!0;try{X=!0}catch(d){X=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Ab="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:X?null:console.log("warning: no BlobBuilder");
Y="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;c.l||"undefined"!==typeof Y||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),c.l=!0);c.preloadPlugins.push({canHandle:function(a){return!c.l&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var e=null;if(X)try{e=new Blob([a],{type:Bb(b)}),e.size!==a.length&&(e=new Blob([(new Uint8Array(a)).buffer],{type:Bb(b)}))}catch(n){ea("Blob constructor present but fails: "+
n+"; falling back to blob builder")}e||(e=new Ab,e.append((new Uint8Array(a)).buffer),e=e.getBlob());var d=Y.createObjectURL(e),l=new Image;l.onload=function(){assert(l.complete,"Image "+b+" could not be decoded");var e=document.createElement("canvas");e.width=l.width;e.height=l.height;e.getContext("2d").drawImage(l,0,0);c.preloadedImages[b]=e;Y.revokeObjectURL(d);f&&f(a)};l.onerror=function(){console.log("Image "+d+" could not be decoded");g&&g()};l.src=d}});c.preloadPlugins.push({canHandle:function(a){return!c.J&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function e(e){l||(l=!0,c.preloadedAudios[b]=e,f&&f(a))}function d(){l||(l=!0,c.preloadedAudios[b]=new Audio,g&&g())}var l=!1;if(X){try{var n=new Blob([a],{type:Bb(b)})}catch(T){return d()}n=Y.createObjectURL(n);var m=new Audio;m.addEventListener("canplaythrough",function(){e(m)},!1);m.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var d="",f=0,g=0,h=
0;h<a.length;h++)for(f=f<<8|a[h],g+=8;6<=g;){var k=f>>g-6&63;g-=6;d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k]}2==g?(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],d+="=="):4==g&&(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],d+="=");m.src="data:audio/x-"+b.substr(-3)+";base64,"+d;e(m)}};m.src=n;Cb(function(){e(m)},1E4)}else return d()}});var b=c.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),c.elementPointerLock&&
b.addEventListener("click",function(a){!wb&&c.canvas.requestPointerLock&&(c.canvas.requestPointerLock(),a.preventDefault())},!1))}}
function Db(a,b,d,e){if(b&&c.f&&a==c.canvas)return c.f;if(b){var f={antialias:!1,alpha:!1};if(e)for(var g in e)f[g]=e[g];if(f=GL.createContext(a,f))var h=GL.getContext(f).GLctx}else h=a.getContext("2d");if(!h)return null;d&&(b||assert("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),c.f=h,b&&GL.I(f),c.K=b,xb.forEach(function(a){a()}),yb());return h}var Eb=!1,Fb=void 0,Z=void 0;
function Hb(a,b,d){function e(){vb=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},f.exitFullscreen=f.exitFullscreen.bind(document),Fb&&f.requestPointerLock(),vb=!0,Z&&("undefined"!=typeof SDL&&
(z[SDL.screen>>2]=A[SDL.screen>>2]|8388608),Ib())):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),Z&&("undefined"!=typeof SDL&&(z[SDL.screen>>2]=A[SDL.screen>>2]&-8388609),Ib()));if(c.onFullScreen)c.onFullScreen(vb);if(c.onFullscreen)c.onFullscreen(vb);Jb(f)}Fb=a;Z=b;Kb=d;"undefined"===typeof Fb&&(Fb=!0);"undefined"===typeof Z&&(Z=!1);"undefined"===typeof Kb&&(Kb=null);var f=c.canvas;Eb||(Eb=!0,document.addEventListener("fullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",
e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("MSFullscreenChange",e,!1));var g=document.createElement("div");f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);d?g.requestFullscreen({L:d}):
g.requestFullscreen()}function Lb(a,b,d){c.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");Lb=function(a,b,d){return Hb(a,b,d)};return Hb(a,b,d)}var Mb=0;function Nb(a){var b=Date.now();if(0===Mb)Mb=b+1E3/60;else for(;b+2>=Mb;)Mb+=1E3/60;setTimeout(a,Math.max(Mb-b,0))}
function ob(a){"undefined"===typeof window?Nb(a):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||Nb),window.requestAnimationFrame(a))}function Cb(a,b){c.noExitRuntime=!0;setTimeout(function(){w||a()},b)}
function Bb(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var Ob=[];function Ib(){var a=c.canvas;Ob.forEach(function(b){b(a.width,a.height)})}
function Jb(a,b,d){b&&d?(a.D=b,a.w=d):(b=a.D,d=a.w);var e=b,f=d;c.forcedAspectRatio&&0<c.forcedAspectRatio&&(e/f<c.forcedAspectRatio?e=Math.round(f*c.forcedAspectRatio):f=Math.round(e/c.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/e,screen.height/f);e=Math.round(e*g);f=Math.round(f*g)}Z?
(a.width!=e&&(a.width=e),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=d&&(a.height=d),"undefined"!=typeof a.style&&(e!=b||f!=d?(a.style.setProperty("width",e+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var zb,X,Ab,Y,Kb,Pb={},Qb=1;
function Rb(a,b){Rb.a||(Rb.a={});a in Rb.a||(c.dynCall_v(b),Rb.a[a]=1)}for(var Sb=Array(256),Tb=0;256>Tb;++Tb)Sb[Tb]=String.fromCharCode(Tb);Oa=Sb;Va=c.BindingError=Ua("BindingError");c.InternalError=Ua("InternalError");c.count_emval_handles=function(){for(var a=0,b=5;b<M.length;++b)void 0!==M[b]&&++a;return a};c.get_first_emval=function(){for(var a=5;a<M.length;++a)if(void 0!==M[a])return M[a];return null};
c.requestFullScreen=function(a,b,d){c.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");c.requestFullScreen=c.requestFullscreen;Lb(a,b,d)};c.requestFullscreen=function(a,b,d){Hb(a,b,d)};c.requestAnimationFrame=function(a){ob(a)};c.setCanvasSize=function(a,b,d){Jb(c.canvas,a,b);d||Ib()};c.pauseMainLoop=function(){R=null;W++};c.resumeMainLoop=function(){W++;var a=lb,b=mb,d=Q;Q=null;pb(d);kb(a,b);R()};
c.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};c.createContext=function(a,b,d,e){return Db(a,b,d,e)};
u?S=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?S=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?S=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?S=function(){return performance.now()}:S=Date.now;assert(!ta);var Ub=B;B=B+4+15&-16;ya=Ub;ua=va=da(B);wa=ua+Aa;xa=da(wa);z[ya>>2]=xa;ta=!0;c.wasmTableSize=154;c.wasmMaxTableSize=154;c.m={};
c.o={abort:x,enlargeMemory:function(){za()},getTotalMemory:function(){return C},abortOnCannotGrowMemory:za,___assert_fail:function(a,b,d,e){x("Assertion failed: "+ha(a)+", at: "+[b?ha(b):"unknown filename",d,e?ha(e):"unknown function"])},___setErrNo:function(a){c.___errno_location&&(z[c.___errno_location()>>2]=a);return a},___syscall140:function(a,b){G=b;try{var d=Ma.u();H();var e=H(),f=H(),g=H();FS.H(d,e,g);z[f>>2]=d.position;d.v&&0===e&&0===g&&(d.v=null);return 0}catch(h){return"undefined"!==typeof FS&&
h instanceof FS.i||x(h),-h.j}},___syscall146:I,___syscall6:function(a,b){G=b;try{var d=Ma.u();FS.close(d);return 0}catch(e){return"undefined"!==typeof FS&&e instanceof FS.i||x(e),-e.j}},__embind_register_bool:function(a,b,d,e,f){var g=Na(d);b=J(b);L(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===d)var e=ma;else if(2===d)e=na;else if(4===d)e=z;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>
g])},b:null})},__embind_register_emval:function(a,b){b=J(b);L(a,{name:b,fromWireType:function(a){var b=M[a].value;Xa(a);return b},toWireType:function(a,b){return N(b)},argPackAdvance:8,readValueFromPointer:Ya,b:null})},__embind_register_float:function(a,b,d){d=Na(d);b=J(b);L(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+Za(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:$a(b,
d),b:null})},__embind_register_integer:function(a,b,d,e,f){function g(a){return a}b=J(b);-1===f&&(f=4294967295);var h=Na(d);if(0===e){var k=32-8*d;g=function(a){return a<<k>>>k}}var l=-1!=b.indexOf("unsigned");L(a,{name:b,fromWireType:g,toWireType:function(a,d){if("number"!==typeof d&&"boolean"!==typeof d)throw new TypeError('Cannot convert "'+Za(d)+'" to '+this.name);if(d<e||d>f)throw new TypeError('Passing a number "'+Za(d)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+
e+", "+f+"]!");return l?d>>>0:d|0},argPackAdvance:8,readValueFromPointer:ab(b,h,0!==e),b:null})},__embind_register_memory_view:function(a,b,d){function e(a){a>>=2;var b=A;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];d=J(d);L(a,{name:d,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{A:!0})},__embind_register_std_string:function(a,b){b=J(b);L(a,{name:b,fromWireType:function(a){for(var b=A[a>>2],d=
Array(b),g=0;g<b;++g)d[g]=String.fromCharCode(y[a+4+g]);P(a);return d.join("")},toWireType:function(a,b){function d(a,b){return a[b]}function e(a,b){return a.charCodeAt(b)}b instanceof ArrayBuffer&&(b=new Uint8Array(b));var h;b instanceof Uint8Array?h=d:b instanceof Uint8ClampedArray?h=d:b instanceof Int8Array?h=d:"string"===typeof b?h=e:K("Cannot pass non-string to std::string");var k=b.length,l=Vb(4+k);A[l>>2]=k;for(var n=0;n<k;++n){var m=h(b,n);255<m&&(P(l),K("String has UTF-16 code units that do not fit in 8 bits"));
y[l+4+n]=m}null!==a&&a.push(P,l);return l},argPackAdvance:8,readValueFromPointer:Ya,b:function(a){P(a)}})},__embind_register_std_wstring:function(a,b,d){d=J(d);if(2===b){var e=function(){return oa};var f=1}else 4===b&&(e=function(){return A},f=2);L(a,{name:d,fromWireType:function(a){for(var b=e(),d=A[a>>2],g=Array(d),n=a+4>>f,m=0;m<d;++m)g[m]=String.fromCharCode(b[n+m]);P(a);return g.join("")},toWireType:function(a,d){var g=e(),h=d.length,n=Vb(4+h*b);A[n>>2]=h;for(var m=n+4>>f,T=0;T<h;++T)g[m+T]=
d.charCodeAt(T);null!==a&&a.push(P,n);return n},argPackAdvance:8,readValueFromPointer:Ya,b:function(a){P(a)}})},__embind_register_void:function(a,b){b=J(b);L(a,{B:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},__emval_call_method:function(a,b,d,e,f){a=db[a];b=O(b);d=cb(d);var g=[];z[e>>2]=N(g);return a(b,d,g,f)},__emval_decref:Xa,__emval_get_global:function(a){if(0===a)return N(Function("return this")());a=cb(a);return N(Function("return this")()[a])},__emval_get_method_caller:function(a,
b){b=hb(a,b);for(var d=b[0],e=d.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+"$",f=["retType"],g=[d],h="",k=0;k<a-1;++k)h+=(0!==k?", ":"")+"arg"+k,f.push("argType"+k),g.push(b[1+k]);e="return function "+Sa("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var l=0;for(k=0;k<a-1;++k)e+="    var arg"+k+" = argType"+k+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=b[k+1].argPackAdvance;e+="    var rv = handle[name]("+h+");\n";for(k=0;k<a-1;++k)b[k+1].deleteObject&&(e+=
"    argType"+k+".deleteObject(arg"+k+");\n");d.B||(e+="    return retType.toWireType(destructors, rv);\n");f.push(e+"};\n");a=ib(f).apply(null,g);return eb(a)},__emval_get_property:function(a,b){a=O(a);b=O(b);return N(a[b])},__emval_incref:function(a){4<a&&(M[a].h+=1)},__emval_new_cstring:function(a){return N(cb(a))},__emval_new_object:function(){return N({})},__emval_run_destructors:function(a){for(var b=M[a].value;b.length;){var d=b.pop();b.pop()(d)}Xa(a)},__emval_set_property:function(a,b,d){a=
O(a);b=O(b);d=O(d);a[b]=d},__emval_take_value:function(a,b){a=fb(a,"_emval_take_value");a=a.readValueFromPointer(b);return N(a)},_abort:function(){c.abort()},_emscripten_memcpy_big:function(a,b,d){y.set(y.subarray(b,b+d),a);return a},_emscripten_sleep:function(a){c.setAsync();Cb(Wb,a)},_pthread_getspecific:function(a){return Pb[a]||0},_pthread_key_create:function(a){if(0==a)return 22;z[a>>2]=Qb;Pb[Qb]=0;Qb++;return 0},_pthread_once:Rb,_pthread_setspecific:function(a,b){if(!(a in Pb))return 22;Pb[a]=
b;return 0},DYNAMICTOP_PTR:ya,STACKTOP:va,___async:0,___async_unwind:1,___async_retval:jb,___async_cur_frame:0};var Xb=c.asm(c.m,c.o,buffer);c.asm=Xb;var La=c.__GLOBAL__sub_I_bind_cpp=function(){return c.asm.__GLOBAL__sub_I_bind_cpp.apply(null,arguments)},Ka=c.__GLOBAL__sub_I_main_cpp=function(){return c.asm.__GLOBAL__sub_I_main_cpp.apply(null,arguments)};c.___errno_location=function(){return c.asm.___errno_location.apply(null,arguments)};
var gb=c.___getTypeName=function(){return c.asm.___getTypeName.apply(null,arguments)},Wb=c._emscripten_async_resume=function(){return c.asm._emscripten_async_resume.apply(null,arguments)},P=c._free=function(){return c.asm._free.apply(null,arguments)};c._main=function(){return c.asm._main.apply(null,arguments)};var Vb=c._malloc=function(){return c.asm._malloc.apply(null,arguments)};c.setAsync=function(){return c.asm.setAsync.apply(null,arguments)};
var la=c.stackAlloc=function(){return c.asm.stackAlloc.apply(null,arguments)};c.dynCall_v=function(){return c.asm.dynCall_v.apply(null,arguments)};c.dynCall_vi=function(){return c.asm.dynCall_vi.apply(null,arguments)};c.asm=Xb;function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;F=function Yb(){c.calledRun||Zb();c.calledRun||(F=Yb)};
c.callMain=function(a){a=a||[];Ga||(Ga=!0,D(Ca));var b=a.length+1,d=la(4*(b+1));z[d>>2]=ka(c.thisProgram);for(var e=1;e<b;e++)z[(d>>2)+e]=ka(a[e-1]);z[(d>>2)+b]=0;try{var f=c._main(b,d,0);$b(f,!0)}catch(g){g instanceof v||("SimulateInfiniteLoop"==g?c.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),c.printErr("exception thrown: "+a),c.quit(1,g)))}finally{}};
function Zb(a){function b(){if(!c.calledRun&&(c.calledRun=!0,!w)){Ga||(Ga=!0,D(Ca));D(Da);if(c.onRuntimeInitialized)c.onRuntimeInitialized();c._main&&ac&&c.callMain(a);if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();Fa.unshift(b)}D(Fa)}}a=a||c.arguments;if(!(0<E)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Ha();D(Ba);0<E||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);b()},1)):b())}}c.run=Zb;function $b(a,b){if(!b||!c.noExitRuntime||0!==a){if(!c.noExitRuntime&&(w=!0,va=void 0,D(Ea),c.onExit))c.onExit(a);u&&process.exit(a);c.quit(a,new v(a))}}c.exit=$b;function x(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";w=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}c.abort=x;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var ac=!0;
c.noInitialRun&&(ac=!1);c.noExitRuntime=!0;Zb();