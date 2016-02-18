(function(n){if("function"===typeof bootstrap)bootstrap("promise",n);else if("object"===typeof exports&&"object"===typeof module)module.exports=n();else if("function"===typeof define&&define.amd)define(n);else if("undefined"!==typeof ses)ses.ok()&&(ses.makeQ=n);else if("undefined"!==typeof window||"undefined"!==typeof self){var r="undefined"!==typeof window?window:self,A=r.Q;r.Q=n();r.Q.noConflict=function(){r.Q=A;return this}}else throw Error("This environment was not anticipated by Q. Please file a bug.");
})(function(){function n(a){return function(){return W.apply(a,arguments)}}function r(a,c){if(B&&c.stack&&"object"===typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf("From previous event:")){for(var g=[],b=c;b;b=b.source)b.stack&&g.unshift(b.stack);g.unshift(a.stack);for(var g=g.join("\nFrom previous event:\n").split("\n"),b=[],d=0;d<g.length;++d){var h=g[d],k;if(k=A(h)){var L=k[1];k=k[0]===M&&L>=X&&L<=Y}else k=!1;k||(k=h,k=-1!==k.indexOf("(module.js:")||-1!==k.indexOf("(node.js:"));k||!h||b.push(h)}g=
b.join("\n");a.stack=g}}function A(a){var c=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(c||(c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a)))return[c[1],Number(c[2])];if(a=/.*@(.+):(\d+)$/.exec(a))return[a[1],Number(a[2])]}function N(){if(B)try{throw Error();}catch(c){var a=c.stack.split("\n"),a=0<a[0].indexOf("@")?a[1]:a[2];if(a=A(a))return M=a[0],a[1]}}function b(a){return a instanceof d?a:O(a)?Z(a):D(a)}function l(){function a(a){e=a;h.source=a;x(c,function(c,g){b.nextTick(function(){a.promiseDispatch.apply(a,
g)})},void 0);g=c=void 0}var c=[],g=[],e,m=F(l.prototype),h=F(d.prototype);h.promiseDispatch=function(a,d,h){var m=f(arguments);c?(c.push(m),"when"===d&&h[1]&&g.push(h[1])):b.nextTick(function(){e.promiseDispatch.apply(e,m)})};h.valueOf=function(){if(c)return h;var a=P(e);t(a)&&(e=a);return a};h.inspect=function(){return e?e.inspect():{state:"pending"}};if(b.longStackSupport&&B)try{throw Error();}catch(k){h.stack=k.stack.substring(k.stack.indexOf("\n")+1)}m.promise=h;m.resolve=function(c){e||a(b(c))};
m.fulfill=function(c){e||a(D(c))};m.reject=function(c){e||a(p(c))};m.notify=function(a){e||x(g,function(c,g){b.nextTick(function(){g(a)})},void 0)};return m}function u(a){if("function"!==typeof a)throw new TypeError("resolver must be a function.");var c=l();try{a(c.resolve,c.reject,c.notify)}catch(b){c.reject(b)}return c.promise}function Q(a){return u(function(c,g){for(var e=0,d=a.length;e<d;e++)b(a[e]).then(c,g)})}function d(a,c,b){void 0===c&&(c=function(a){return p(Error("Promise does not support operation: "+
a))});void 0===b&&(b=function(){return{state:"unknown"}});var e=F(d.prototype);e.promiseDispatch=function(b,g,d){var m;try{m=a[g]?a[g].apply(e,d):c.call(e,g,d)}catch(f){m=p(f)}b&&b(m)};if(e.inspect=b){var m=b();"rejected"===m.state&&(e.exception=m.reason);e.valueOf=function(){var a=b();return"pending"===a.state||"rejected"===a.state?e:a.value}}return e}function q(a,c,g,e){return b(a).then(c,g,e)}function P(a){if(t(a)){var c=a.inspect();if("fulfilled"===c.state)return c.value}return a}function t(a){return a instanceof
d}function O(a){return a===Object(a)&&"function"===typeof a.then}function G(){v.length=0;y.length=0;z||(z=!0)}function aa(a,c){z&&("object"===typeof process&&"function"===typeof process.emit&&b.nextTick.runAfter(function(){-1!==H(y,a)&&(process.emit("unhandledRejection",c,a),I.push(a))}),y.push(a),c&&"undefined"!==typeof c.stack?v.push(c.stack):v.push("(no stack) "+c))}function ba(a){if(z){var c=H(y,a);-1!==c&&("object"===typeof process&&"function"===typeof process.emit&&b.nextTick.runAfter(function(){var b=
H(I,a);-1!==b&&(process.emit("rejectionHandled",v[c],a),I.splice(b,1))}),y.splice(c,1),v.splice(c,1))}}function p(a){var c=d({when:function(c){c&&ba(this);return c?c(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});aa(c,a);return c}function D(a){return d({when:function(){return a},get:function(c){return a[c]},set:function(c,b){a[c]=b},"delete":function(c){delete a[c]},post:function(c,b){return null===c||void 0===c?a.apply(void 0,b):a[c].apply(a,b)},apply:function(c,
b){return a.apply(c,b)},keys:function(){return ca(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function Z(a){var c=l();b.nextTick(function(){try{a.then(c.resolve,c.reject,c.notify)}catch(b){c.reject(b)}});return c.promise}function R(a,c,g){return b(a).spread(c,g)}function S(a,c,g){return b(a).dispatch(c,g)}function w(a){return q(a,function(a){var b=0,e=l();x(a,function(d,h,k){var f;t(h)&&"fulfilled"===(f=h.inspect()).state?a[k]=f.value:(++b,q(h,function(d){a[k]=d;0===--b&&e.resolve(a)},
e.reject,function(a){e.notify({index:k,value:a})}))},void 0);0===b&&e.resolve(a);return e.promise})}function T(a){if(0===a.length)return b.resolve();var c=b.defer(),g=0;x(a,function(b,d,h){b=a[h];g++;q(b,function(a){c.resolve(a)},function(a){g--;0===g&&(a.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+a.message,c.reject(a))},function(a){c.notify({index:h,value:a})})},void 0);return c.promise}function U(a){return q(a,function(a){a=J(a,b);
return q(w(J(a,function(a){return q(a,V,V)})),function(){return a})})}var B=!1;try{throw Error();}catch(a){B=!!a.stack}var X=N(),M,V=function(){},C=function(){function a(){for(var a,e;b.next;){b=b.next;a=b.task;b.task=void 0;if(e=b.domain)b.domain=void 0,e.enter();c(a,e)}for(;f.length;)a=f.pop(),c(a);d=!1}function c(c,b){try{c()}catch(g){if(k)throw b&&b.exit(),setTimeout(a,0),b&&b.enter(),g;setTimeout(function(){throw g;},0)}b&&b.exit()}var b={task:void 0,next:null},e=b,d=!1,h=void 0,k=!1,f=[];C=
function(a){e=e.next={task:a,domain:k&&process.domain,next:null};d||(d=!0,h())};if("object"===typeof process&&"[object process]"===process.toString()&&process.nextTick)k=!0,h=function(){process.nextTick(a)};else if("function"===typeof setImmediate)h="undefined"!==typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!==typeof MessageChannel){var E=new MessageChannel;E.port1.onmessage=function(){h=l;E.port1.onmessage=a;a()};var l=function(){E.port2.postMessage(0)},
h=function(){setTimeout(a,0);l()}}else h=function(){setTimeout(a,0)};C.runAfter=function(a){f.push(a);d||(d=!0,h())};return C}(),W=Function.call,f=n(Array.prototype.slice),x=n(Array.prototype.reduce||function(a,c){var b=0,d=this.length;if(1===arguments.length){do{if(b in this){c=this[b++];break}if(++b>=d)throw new TypeError;}while(1)}for(;b<d;b++)b in this&&(c=a(c,this[b],b));return c}),H=n(Array.prototype.indexOf||function(a){for(var c=0;c<this.length;c++)if(this[c]===a)return c;return-1}),J=n(Array.prototype.map||
function(a,c){var b=this,d=[];x(b,function(m,h,k){d.push(a.call(c,h,k,b))},void 0);return d}),F=Object.create||function(a){function c(){}c.prototype=a;return new c},da=n(Object.prototype.hasOwnProperty),ca=Object.keys||function(a){var c=[],b;for(b in a)da(a,b)&&c.push(b);return c},ea=n(Object.prototype.toString),K;K="undefined"!==typeof ReturnValue?ReturnValue:function(a){this.value=a};b.resolve=b;b.nextTick=C;b.longStackSupport=!1;"object"===typeof process&&process&&process.env&&process.env.Q_DEBUG&&
(b.longStackSupport=!0);b.defer=l;l.prototype.makeNodeResolver=function(){var a=this;return function(c,b){c?a.reject(c):2<arguments.length?a.resolve(f(arguments,1)):a.resolve(b)}};b.Promise=u;b.promise=u;u.race=Q;u.all=w;u.reject=p;u.resolve=b;b.passByCopy=function(a){return a};d.prototype.passByCopy=function(){return this};b.join=function(a,c){return b(a).join(c)};d.prototype.join=function(a){return b([this,a]).spread(function(a,b){if(a===b)return a;throw Error("Q can't join: not the same: "+a+" "+
b);})};b.race=Q;d.prototype.race=function(){return this.then(b.race)};b.makePromise=d;d.prototype.toString=function(){return"[object Promise]"};d.prototype.then=function(a,c,g){function d(c){try{return"function"===typeof a?a(c):c}catch(b){return p(b)}}function m(a){if("function"===typeof c){r(a,h);try{return c(a)}catch(b){return p(b)}}return p(a)}var h=this,k=l(),f=!1;b.nextTick(function(){h.promiseDispatch(function(a){f||(f=!0,k.resolve(d(a)))},"when",[function(a){f||(f=!0,k.resolve(m(a)))}])});
h.promiseDispatch(void 0,"when",[void 0,function(a){var c,d=!1;try{c="function"===typeof g?g(a):a}catch(e){if(d=!0,b.onerror)b.onerror(e);else throw e;}d||k.notify(c)}]);return k.promise};b.tap=function(a,c){return b(a).tap(c)};d.prototype.tap=function(a){a=b(a);return this.then(function(c){return a.fcall(c).thenResolve(c)})};b.when=q;d.prototype.thenResolve=function(a){return this.then(function(){return a})};b.thenResolve=function(a,c){return b(a).thenResolve(c)};d.prototype.thenReject=function(a){return this.then(function(){throw a;
})};b.thenReject=function(a,c){return b(a).thenReject(c)};b.nearer=P;b.isPromise=t;b.isPromiseAlike=O;b.isPending=function(a){return t(a)&&"pending"===a.inspect().state};d.prototype.isPending=function(){return"pending"===this.inspect().state};b.isFulfilled=function(a){return!t(a)||"fulfilled"===a.inspect().state};d.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state};b.isRejected=function(a){return t(a)&&"rejected"===a.inspect().state};d.prototype.isRejected=function(){return"rejected"===
this.inspect().state};var v=[],y=[],I=[],z=!0;b.resetUnhandledRejections=G;b.getUnhandledReasons=function(){return v.slice()};b.stopUnhandledRejectionTracking=function(){G();z=!1};G();b.reject=p;b.fulfill=D;b.master=function(a){return d({isDef:function(){}},function(c,b){return S(a,c,b)},function(){return b(a).inspect()})};b.spread=R;d.prototype.spread=function(a,c){return this.all().then(function(c){return a.apply(void 0,c)},c)};b.async=function(a){return function(){function c(a,c){var l;if("undefined"===
typeof StopIteration){try{l=d[a](c)}catch(n){return p(n)}return l.done?b(l.value):q(l.value,e,f)}try{l=d[a](c)}catch(n){return"[object StopIteration]"===ea(n)||n instanceof K?b(n.value):p(n)}return q(l,e,f)}var d=a.apply(this,arguments),e=c.bind(c,"next"),f=c.bind(c,"throw");return e()}};b.spawn=function(a){b.done(b.async(a)())};b["return"]=function(a){throw new K(a);};b.promised=function(a){return function(){return R([this,w(arguments)],function(c,b){return a.apply(c,b)})}};b.dispatch=S;d.prototype.dispatch=
function(a,c){var d=this,e=l();b.nextTick(function(){d.promiseDispatch(e.resolve,a,c)});return e.promise};b.get=function(a,c){return b(a).dispatch("get",[c])};d.prototype.get=function(a){return this.dispatch("get",[a])};b.set=function(a,c,d){return b(a).dispatch("set",[c,d])};d.prototype.set=function(a,c){return this.dispatch("set",[a,c])};b.del=b["delete"]=function(a,c){return b(a).dispatch("delete",[c])};d.prototype.del=d.prototype["delete"]=function(a){return this.dispatch("delete",[a])};b.mapply=
b.post=function(a,c,d){return b(a).dispatch("post",[c,d])};d.prototype.mapply=d.prototype.post=function(a,c){return this.dispatch("post",[a,c])};b.send=b.mcall=b.invoke=function(a,c){return b(a).dispatch("post",[c,f(arguments,2)])};d.prototype.send=d.prototype.mcall=d.prototype.invoke=function(a){return this.dispatch("post",[a,f(arguments,1)])};b.fapply=function(a,c){return b(a).dispatch("apply",[void 0,c])};d.prototype.fapply=function(a){return this.dispatch("apply",[void 0,a])};b["try"]=b.fcall=
function(a){return b(a).dispatch("apply",[void 0,f(arguments,1)])};d.prototype.fcall=function(){return this.dispatch("apply",[void 0,f(arguments)])};b.fbind=function(a){var c=b(a),d=f(arguments,1);return function(){return c.dispatch("apply",[this,d.concat(f(arguments))])}};d.prototype.fbind=function(){var a=this,c=f(arguments);return function(){return a.dispatch("apply",[this,c.concat(f(arguments))])}};b.keys=function(a){return b(a).dispatch("keys",[])};d.prototype.keys=function(){return this.dispatch("keys",
[])};b.all=w;d.prototype.all=function(){return w(this)};b.any=T;d.prototype.any=function(){return T(this)};b.allResolved=function(a,c,b){return function(){"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(c+" is deprecated, use "+b+" instead.",Error("").stack);return a.apply(a,arguments)}}(U,"allResolved","allSettled");d.prototype.allResolved=function(){return U(this)};b.allSettled=function(a){return b(a).allSettled()};d.prototype.allSettled=function(){return this.then(function(a){return w(J(a,
function(a){function d(){return a.inspect()}a=b(a);return a.then(d,d)}))})};b.fail=b["catch"]=function(a,c){return b(a).then(void 0,c)};d.prototype.fail=d.prototype["catch"]=function(a){return this.then(void 0,a)};b.progress=function(a,c){return b(a).then(void 0,void 0,c)};d.prototype.progress=function(a){return this.then(void 0,void 0,a)};b.fin=b["finally"]=function(a,c){return b(a)["finally"](c)};d.prototype.fin=d.prototype["finally"]=function(a){if(!a||"function"!==typeof a.apply)throw Error("Q can't apply finally callback");
a=b(a);return this.then(function(c){return a.fcall().then(function(){return c})},function(c){return a.fcall().then(function(){throw c;})})};b.done=function(a,c,d,e){return b(a).done(c,d,e)};d.prototype.done=function(a,c,d){var e=function(a){b.nextTick(function(){r(a,f);if(b.onerror)b.onerror(a);else throw a;})},f=a||c||d?this.then(a,c,d):this;"object"===typeof process&&process&&process.domain&&(e=process.domain.bind(e));f.then(void 0,e)};b.timeout=function(a,c,d){return b(a).timeout(c,d)};d.prototype.timeout=
function(a,c){var b=l(),d=setTimeout(function(){c&&"string"!==typeof c||(c=Error(c||"Timed out after "+a+" ms"),c.code="ETIMEDOUT");b.reject(c)},a);this.then(function(a){clearTimeout(d);b.resolve(a)},function(a){clearTimeout(d);b.reject(a)},b.notify);return b.promise};b.delay=function(a,c){void 0===c&&(c=a,a=void 0);return b(a).delay(c)};d.prototype.delay=function(a){return this.then(function(c){var b=l();setTimeout(function(){b.resolve(c)},a);return b.promise})};b.nfapply=function(a,c){return b(a).nfapply(c)};
d.prototype.nfapply=function(a){var c=l();a=f(a);a.push(c.makeNodeResolver());this.fapply(a).fail(c.reject);return c.promise};b.nfcall=function(a){var c=f(arguments,1);return b(a).nfapply(c)};d.prototype.nfcall=function(){var a=f(arguments),c=l();a.push(c.makeNodeResolver());this.fapply(a).fail(c.reject);return c.promise};b.nfbind=b.denodeify=function(a){if(void 0===a)throw Error("Q can't wrap an undefined function");var c=f(arguments,1);return function(){var d=c.concat(f(arguments)),e=l();d.push(e.makeNodeResolver());
b(a).fapply(d).fail(e.reject);return e.promise}};d.prototype.nfbind=d.prototype.denodeify=function(){var a=f(arguments);a.unshift(this);return b.denodeify.apply(void 0,a)};b.nbind=function(a,c){var d=f(arguments,2);return function(){var e=d.concat(f(arguments)),m=l();e.push(m.makeNodeResolver());b(function(){return a.apply(c,arguments)}).fapply(e).fail(m.reject);return m.promise}};d.prototype.nbind=function(){var a=f(arguments,0);a.unshift(this);return b.nbind.apply(void 0,a)};b.nmapply=b.npost=function(a,
c,d){return b(a).npost(c,d)};d.prototype.nmapply=d.prototype.npost=function(a,c){var b=f(c||[]),d=l();b.push(d.makeNodeResolver());this.dispatch("post",[a,b]).fail(d.reject);return d.promise};b.nsend=b.nmcall=b.ninvoke=function(a,c){var d=f(arguments,2),e=l();d.push(e.makeNodeResolver());b(a).dispatch("post",[c,d]).fail(e.reject);return e.promise};d.prototype.nsend=d.prototype.nmcall=d.prototype.ninvoke=function(a){var b=f(arguments,1),d=l();b.push(d.makeNodeResolver());this.dispatch("post",[a,b]).fail(d.reject);
return d.promise};b.nodeify=function(a,c){return b(a).nodeify(c)};d.prototype.nodeify=function(a){if(a)this.then(function(c){b.nextTick(function(){a(null,c)})},function(c){b.nextTick(function(){a(c)})});else return this};b.noConflict=function(){throw Error("Q.noConflict only works when Q is used as a global");};var Y=N();return b});