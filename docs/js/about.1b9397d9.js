(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),a=n("1d80"),o=n("577e"),u=n("5899"),c=r("".replace),i="["+u+"]",f=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),b=function(e){return function(t){var n=o(a(t));return 1&e&&(n=c(n,f,"")),2&e&&(n=c(n,s,"")),n}};e.exports={start:b(1),end:b(2),trim:b(3)}},7156:function(e,t,n){var r=n("1626"),a=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var u,c;return o&&r(u=t.constructor)&&u!==n&&a(c=u.prototype)&&c!==n.prototype&&o(e,c),e}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("e330"),u=n("94ca"),c=n("6eeb"),i=n("1a2d"),f=n("7156"),s=n("3a9b"),b=n("d9b5"),l=n("c04e"),p=n("d039"),d=n("241c").f,v=n("06cf").f,I=n("9bf2").f,N=n("408a"),O=n("58a8").trim,j="Number",E=a[j],g=E.prototype,w=a.TypeError,h=o("".slice),x=o("".charCodeAt),m=function(e){var t=l(e,"number");return"bigint"==typeof t?t:y(t)},y=function(e){var t,n,r,a,o,u,c,i,f=l(e,"number");if(b(f))throw w("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=O(f),t=x(f,0),43===t||45===t){if(n=x(f,2),88===n||120===n)return NaN}else if(48===t){switch(x(f,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+f}for(o=h(f,2),u=o.length,c=0;c<u;c++)if(i=x(o,c),i<48||i>a)return NaN;return parseInt(o,r)}return+f};if(u(j,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,T=function(e){var t=arguments.length<1?0:E(m(e)),n=this;return s(g,n)&&p((function(){N(n)}))?f(Object(t),n,T):t},_=r?d(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;_.length>k;k++)i(E,A=_[k])&&!i(T,A)&&I(T,A,v(E,A));T.prototype=g,g.constructor=T,c(a,j,T)}},f820:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=(n("a9e3"),Object(r["f"])("div",null,"转盘",-1)),o=Object(r["k"])({props:{drawIndex:Number},setup:function(e){var t=e,n=Object(r["b"])((function(){return t.drawIndex}));return console.log("before",n.value),Object(r["E"])(n,(function(){console.log("watch",n.value)})),function(e,n){return Object(r["t"])(),Object(r["e"])(r["a"],null,[a,Object(r["f"])("div",null,Object(r["C"])(t.drawIndex),1)],64)}}});const u=o;var c=u,i=Object(r["k"])({setup:function(e){var t=Object(r["y"])(-1),n=function(){t.value=5};return function(e,a){return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",{class:"about"},[Object(r["f"])("h1",{onClick:n},"This is an about page")]),Object(r["i"])(c,{drawIndex:t.value},null,8,["drawIndex"])],64)}}});const f=i;t["default"]=f}}]);
//# sourceMappingURL=about.1b9397d9.js.map