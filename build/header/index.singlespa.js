define("header-app",["react","react-dom"],function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/header",r(r.s=5)}([function(t,r){t.exports=e},function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},function(e,r){e.exports=t},function(e,t,r){var n,a,o;a=[t],void 0===(o="function"==typeof(n=function(e){"use strict";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l){if("object"!==r(l))throw new Error("single-spa-react requires a configuration object");var u=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(r){t(e,r,n[r])})}return e}({},a,l);if(!u.React)throw new Error("single-spa-react must be passed opts.React");if(!u.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!u.rootComponent&&!u.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!n&&u.React.createContext&&(e.SingleSpaContext=n=u.React.createContext());var d={bootstrap:o.bind(null,u),mount:i.bind(null,u),unmount:c.bind(null,u)};return u.parcelCanUpdate&&(d.update=function(e,t){return new Promise(function(r,a){var o=e.React.createElement(e.rootComponent,t),i=n?e.React.createElement(n.Provider,{value:t},o):o;s({elementToRender:i,domElement:e.domElement,whenFinished:function(){r(this)},opts:e})})}.bind(null,u)),d},e.SingleSpaContext=void 0;var n=null;e.SingleSpaContext=n;var a={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElementGetter:null,parcelCanUpdate:!0};function o(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent().then(function(t){e.rootComponent=t})}function i(e,t){return new Promise(function(r,a){!e.suppressComponentDidCatchWarning&&function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)&&(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application")));var o=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t="single-spa-application:".concat(e.appName||e.name);if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var i=e.React.createElement(e.rootComponent,t),c=n?e.React.createElement(n.Provider,{value:t},i):i,l=function(e,t){var r=e();if(!r)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return r}(o,t);s({elementToRender:c,domElement:l,whenFinished:function(){r(this)},opts:e}),e.domElement=l})}function c(e,t){return Promise.resolve().then(function(){e.ReactDOM.unmountComponentAtNode(e.domElement)})}function s(e){var t=e.opts,r=e.elementToRender,n=e.domElement,a=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(n).render(r,a):"hydrate"===t.renderType?t.ReactDOM.hydrate(r,n,a):t.ReactDOM.render(r,n,a)}})?n.apply(t,a):n)||(e.exports=o)},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),i=r.n(o),c=r(3),s=r.n(c),l=r(1),u=r.n(l);var d=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,o?0:a.cssRules.length)}catch(e){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}();var f=function(e){function t(e,t,n){var a=t.trim().split(m);t=a;var o=a.length,i=e.length;switch(i){case 0:case 1:var c=0;for(e=0===i?"":e[0]+" ";c<o;++c)t[c]=r(e,t[c],n).trim();break;default:var s=c=0;for(t=[];c<o;++c)for(var l=0;l<i;++l)t[s++]=r(e[l]+" ",a[c],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(h,"$1"+e.trim());case 58:return e.trim()+t.replace(h,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(h,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,o){var i=e+";",c=2*t+3*r+4*o;if(944===c){e=i.indexOf(":",9)+1;var s=i.substring(e,i.length-1).trim();return s=i.substring(0,e).trim()+s+";",1===R||2===R&&a(s,1)?"-webkit-"+s+s:s}if(0===R||2===R&&!a(i,1))return i;switch(c){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(O,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(s=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+s+i;case 1005:return f.test(i)?i.replace(d,":-webkit-")+i.replace(d,":-moz-")+i:i;case 1e3:switch(t=(s=i.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=i.replace(y,"tb");break;case 232:s=i.replace(y,"tb-rl");break;case 220:s=i.replace(y,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+s+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,c=(s=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:i=i.replace(s,"-webkit-"+s)+";"+i;break;case 207:case 102:i=i.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+i.replace(s,"-webkit-"+s)+";"+i.replace(s,"-ms-"+s+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return s=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+s+"-ms-flex-"+s+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(C,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(C,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,o).replace(":fill-available",":stretch"):i.replace(s,"-webkit-"+s)+i.replace(s,"-moz-"+s.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===r+o&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+i}return i}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),M(2!==t?n:n.replace(x,"$1"),r,t)}function o(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function i(e,t,r,n,a,o,i,c,l,u){for(var d,f=0,p=t;f<T;++f)switch(d=j[f].call(s,e,p,r,n,a,o,i,c,l,u)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?R=1:(R=2,M=e):R=0),c}function s(e,r){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<T){var s=i(-1,r,c,c,S,E,0,0,0,0);void 0!==s&&"string"==typeof s&&(r=s)}var d=function e(r,c,s,d,f){for(var p,m,h,y,w,C=0,x=0,A=0,O=0,j=0,M=0,D=h=p=0,z=0,G=0,I=0,L=0,$=s.length,F=$-1,U="",q="",H="",W="";z<$;){if(m=s.charCodeAt(z),z===F&&0!==x+O+A+C&&(0!==x&&(m=47===x?10:47),O=A=C=0,$++,F++),0===x+O+A+C){if(z===F&&(0<G&&(U=U.replace(u,"")),0<U.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:U+=s.charAt(z)}m=59}switch(m){case 123:for(p=(U=U.trim()).charCodeAt(0),h=1,L=++z;z<$;){switch(m=s.charCodeAt(z)){case 123:h++;break;case 125:h--;break;case 47:switch(m=s.charCodeAt(z+1)){case 42:case 47:e:{for(D=z+1;D<F;++D)switch(s.charCodeAt(D)){case 47:if(42===m&&42===s.charCodeAt(D-1)&&z+2!==D){z=D+1;break e}break;case 10:if(47===m){z=D+1;break e}}z=D}}break;case 91:m++;case 40:m++;case 34:case 39:for(;z++<F&&s.charCodeAt(z)!==m;);}if(0===h)break;z++}switch(h=s.substring(L,z),0===p&&(p=(U=U.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<G&&(U=U.replace(u,"")),m=U.charCodeAt(1)){case 100:case 109:case 115:case 45:G=c;break;default:G=P}if(L=(h=e(c,G,h,m,f+1)).length,0<T&&(w=i(3,h,G=t(P,U,I),c,S,E,L,m,f,d),U=G.join(""),void 0!==w&&0===(L=(h=w.trim()).length)&&(m=0,h="")),0<L)switch(m){case 115:U=U.replace(k,o);case 100:case 109:case 45:h=U+"{"+h+"}";break;case 107:h=(U=U.replace(g,"$1 $2"))+"{"+h+"}",h=1===R||2===R&&a("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=U+h,112===d&&(q+=h,h="")}else h="";break;default:h=e(c,t(c,U,I),h,d,f+1)}H+=h,h=I=G=D=p=0,U="",m=s.charCodeAt(++z);break;case 125:case 59:if(1<(L=(U=(0<G?U.replace(u,""):U).trim()).length))switch(0===D&&(p=U.charCodeAt(0),45===p||96<p&&123>p)&&(L=(U=U.replace(" ",":")).length),0<T&&void 0!==(w=i(1,U,c,r,S,E,q.length,d,f,d))&&0===(L=(U=w.trim()).length)&&(U="\0\0"),p=U.charCodeAt(0),m=U.charCodeAt(1),p){case 0:break;case 64:if(105===m||99===m){W+=U+s.charAt(z);break}default:58!==U.charCodeAt(L-1)&&(q+=n(U,p,m,U.charCodeAt(2)))}I=G=D=p=0,U="",m=s.charCodeAt(++z)}}switch(m){case 13:case 10:47===x?x=0:0===1+p&&107!==d&&0<U.length&&(G=1,U+="\0"),0<T*N&&i(0,U,c,r,S,E,q.length,d,f,d),E=1,S++;break;case 59:case 125:if(0===x+O+A+C){E++;break}default:switch(E++,y=s.charAt(z),m){case 9:case 32:if(0===O+C+x)switch(j){case 44:case 58:case 9:case 32:y="";break;default:32!==m&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===O+x+C&&(G=I=1,y="\f"+y);break;case 108:if(0===O+x+C+_&&0<D)switch(z-D){case 2:112===j&&58===s.charCodeAt(z-3)&&(_=j);case 8:111===M&&(_=M)}break;case 58:0===O+x+C&&(D=z);break;case 44:0===x+A+O+C&&(G=1,y+="\r");break;case 34:case 39:0===x&&(O=O===m?0:0===O?m:O);break;case 91:0===O+x+A&&C++;break;case 93:0===O+x+A&&C--;break;case 41:0===O+x+C&&A--;break;case 40:if(0===O+x+C){if(0===p)switch(2*j+3*M){case 533:break;default:p=1}A++}break;case 64:0===x+A+O+C+D+h&&(h=1);break;case 42:case 47:if(!(0<O+C+A))switch(x){case 0:switch(2*m+3*s.charCodeAt(z+1)){case 235:x=47;break;case 220:L=z,x=42}break;case 42:47===m&&42===j&&L+2!==z&&(33===s.charCodeAt(L+2)&&(q+=s.substring(L,z+1)),y="",x=0)}}0===x&&(U+=y)}M=j,j=m,z++}if(0<(L=q.length)){if(G=c,0<T&&void 0!==(w=i(2,q,G,r,S,E,L,d,f,d))&&0===(q=w).length)return W+q+H;if(q=G.join(",")+"{"+q+"}",0!=R*_){switch(2!==R||a(q,2)||(_=0),_){case 111:q=q.replace(v,":-moz-$1")+q;break;case 112:q=q.replace(b,"::-webkit-input-$1")+q.replace(b,"::-moz-$1")+q.replace(b,":-ms-input-$1")+q}_=0}}return W+q+H}(P,c,r,0,0);return 0<T&&void 0!==(s=i(-2,d,c,c,S,E,d.length,0,0,0))&&(d=s),_=0,E=S=1,d}var l=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,f=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,E=1,S=1,_=0,R=1,P=[],j=[],T=0,M=null,N=0;return s.use=function e(t){switch(t){case void 0:case null:T=j.length=0;break;default:if("function"==typeof t)j[T++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},s.set=c,void 0!==e&&c(e),s};function p(e){e&&m.current.insert(e+"}")}var m={current:null},h=function(e,t,r,n,a,o,i,c,s,l){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return m.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===c)return t+"/*|*/";break;case 3:switch(c){case 102:case 112:return m.current.insert(r[0]+t),"";default:return t+(0===l?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(p)}},g=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new f(t);var a,o={};a=e.container||document.head;var i,c=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(c,function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach(function(e){o[e]=!0}),e.parentNode!==a&&a.appendChild(e)}),n.use(e.stylisPlugins)(h),i=function(e,t,r,a){var o=t.name;m.current=r,n(e,t.styles),a&&(s.inserted[o]=!0)};var s={key:r,sheet:new d({key:r,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:o,registered:{},insert:i};return s};function b(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "}),n}var v=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+n,a,e.sheet,!0);a=a.next}while(void 0!==a)}};var y=function(e){for(var t,r=e.length,n=r^r,a=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++a;switch(r){case 3:n^=(255&e.charCodeAt(a+2))<<16;case 2:n^=(255&e.charCodeAt(a+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(a)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)},k={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var w=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},C=/[A-Z]|^ms/g,x=/_EMO_([^_]+?)_([^]*?)_EMO_/g,A=function(e){return 45===e.charCodeAt(1)},O=w(function(e){return A(e)?e:e.replace(C,"-$&").toLowerCase()}),E=function(e,t){if(null==t||"boolean"==typeof t)return"";switch(e){case"animation":case"animationName":"string"==typeof t&&(t=t.replace(x,function(e,t,r){return _={name:t,styles:r,next:_},t}))}return 1===k[e]||A(e)||"number"!=typeof t||0===t?t:t+"px"};function S(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return _={name:r.name,styles:r.styles,next:_},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)_={name:a.name,styles:a.styles,next:_},a=a.next;return r.styles}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=S(e,t,r[a],!1);else for(var o in r){var i=r[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=o+"{"+t[i]+"}":n+=O(o)+":"+E(o,i)+";";else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]])n+=o+"{"+S(e,t,i,!1)+"}";else for(var c=0;c<i.length;c++)n+=O(o)+":"+E(o,i[c])+";"}return n}(e,t,r);case"function":if(void 0!==e){var o=_,i=r(e);return _=o,S(e,t,i,n)}default:if(null==t)return r;var c=t[r];return void 0===c||n?r:c}}var _,R=/label:\s*([^\s;\n{]+)\s*;/g;var P=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";_=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=S(r,t,o,!1)):a+=o[0];for(var i=1;i<e.length;i++)a+=S(r,t,e[i],46===a.charCodeAt(a.length-1)),n&&(a+=o[i]);R.lastIndex=0;for(var c,s="";null!==(c=R.exec(a));)s+="-"+c[1];return{name:y(a)+s,styles:a,next:_}};var j=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return P(t)};var T=Object(n.createContext)(g()),M=Object(n.createContext)({}),N=(T.Provider,function(e){return Object(n.forwardRef)(function(t,r){return Object(n.createElement)(T.Consumer,null,function(n){return e(t,n,r)})})}),D="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",z=Object.prototype.hasOwnProperty,G=function(e,t,r,a){var o=t[D],i=[],c="",s=null===r?t.css:t.css(r);"string"==typeof s&&void 0!==e.registered[s]&&(s=e.registered[s]),i.push(s),void 0!==t.className&&(c=b(e.registered,i,t.className));var l=P(i);v(e,l,"string"==typeof o);c+=e.key+"-"+l.name;var u={};for(var d in t)z.call(t,d)&&"css"!==d&&d!==D&&(u[d]=t[d]);return u.ref=a,u.className=c,Object(n.createElement)(o,u)};N(function(e,t,r){return"function"==typeof e.css?Object(n.createElement)(M.Consumer,null,function(n){return G(t,e,n,r)}):G(t,e,null,r)});n.Component;N(function(e,t){return Object(n.createElement)(M.Consumer,null,function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=P(r,t.registered);return v(t,a,!1),t.key+"-"+a.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(e,t,r){var n=[],a=b(e,n,r);return n.length<2?r:a+t(n)}(t.registered,n,function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var c in i="",o)o[c]&&c&&(i&&(i+=" "),i+=c);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a}(r))},theme:r},o=e.children(a);return!0,o})});var I=r(4),L=r.n(I),$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,F=w(function(e){return $.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),U=function(e){return"theme"!==e&&"innerRef"!==e},q=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?F:U},H=function e(t,r){var a,o,i;void 0!==r&&(a=r.label,i=r.target,o=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var c=t.__emotion_real===t,s=c&&t.__emotion_base||t;"function"!=typeof o&&c&&(o=t.__emotion_forwardProp);var l=o||q(s),u=!l("as");return function(){var d=arguments,f=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&f.push("label:"+a+";"),null==d[0]||void 0===d[0].raw)f.push.apply(f,d);else{f.push(d[0][0]);for(var p=d.length,m=1;m<p;m++)f.push(d[m],d[0][m])}var h=N(function(e,t,r){return Object(n.createElement)(M.Consumer,null,function(a){var c=u&&e.as||s,d="",p=[],m=e;if(null==e.theme){for(var h in m={},e)m[h]=e[h];m.theme=a}"string"==typeof e.className&&(d+=b(t.registered,p,e.className));var g=P(f.concat(p),t.registered,m);v(t,g,"string"==typeof c),d+=t.key+"-"+g.name,void 0!==i&&(d+=" "+i);var y=u&&void 0===o?q(c):l,k={};for(var w in e)u&&"as"===w||y(w)&&(k[w]=e[w]);return k.className=d,k.ref=r||e.innerRef,Object(n.createElement)(c,k)})});return h.displayName=void 0!==a?a:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_styles=f,h.__emotion_forwardProp=o,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(t,n){return e(t,void 0!==n?L()({},r||{},n):r).apply(void 0,f)},h}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){H[e]=H(e)});var W=H;function B(){var e=u()(["\n  ","\n"]);return B=function(){return e},e}function X(){var e=u()(["\n  ","\n"]);return X=function(){return e},e}function V(){var e=u()(["\n  flex: 1 1 auto;\n  padding: 10px;\n  text-align: center;\n"]);return V=function(){return e},e}function Y(){var e=u()(["\n  display: flex;\n  align-items: center;\n  background: #1d8;\n  color: #fff;\n  padding: 0 5px;\n"]);return Y=function(){return e},e}var Z=j(Y()),K=j(V()),J=W.header(X(),Z),Q=W.h1(B(),K),ee=function(){return a.a.createElement(J,null,a.a.createElement("div",null,"X"),a.a.createElement(Q,null,"Creditas"),a.a.createElement("div",null,"©"))};r.d(t,"bootstrap",function(){return re}),r.d(t,"mount",function(){return ne}),r.d(t,"unmount",function(){return ae});var te=s()({React:a.a,ReactDOM:i.a,rootComponent:function(){return a.a.createElement(ee,null)},domElementGetter:function(){return document.getElementById("header")}}),re=[te.bootstrap],ne=[te.mount],ae=[te.unmount]}])});
//# sourceMappingURL=index.singlespa.js.map