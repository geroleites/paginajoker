if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("smoothScrollTo",["ExecutionEnvironment","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=c("UserAgent").isBrowser("Firefox");b=d("ExecutionEnvironment").canUseDOM&&window.matchMedia("(prefers-reduced-motion: reduce)");var i=b&&b.matches,j=d("ExecutionEnvironment").canUseDOM&&document.documentElement!=null&&"scrollBehavior"in document.documentElement.style,k=new WeakMap();function a(a,b){var c=b.left;c=c===void 0?0:c;b=b.top;b=b===void 0?0:b;h&&(!k.get(a)&&c!==0&&(a.scrollLeft+=c/Math.abs(c),k.set(a,!0)));j?a.scrollTo({behavior:i?"auto":"smooth",left:c,top:b}):a.scrollTo(c,b)}g["default"]=a}),98);
__d("useContainerBreakpoints",["$InternalEnum","gkx","react","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";f=d("react");var h=f.useCallback,i=f.useState,j=b("$InternalEnum")({BiggerContainerSmallerChild:0,BiggerContainerBiggerChild:1});function k(a,b){var c=a[0],d=c.maxContainerWidth;c=c.width;a=a.slice(1);if(d===Infinity||a.length===0)return c;switch(b){case j.BiggerContainerSmallerChild:var e="calc(("+d+"px - 100%) * 9999)",f=k(a,b);typeof f==="number"&&(f="min("+f+"px, (100% - "+(d+.1)+"px) * 9999)");return"max("+f+", min("+c+", "+e+"))";case j.BiggerContainerBiggerChild:f="calc((100% - "+d+"px) * 9999)";e=k(a,b);return"min("+e+", max("+c+", "+f+"))"}}function a(a,b){b=i(null);var d=b[0],e=b[1];b=h(function(b){b=b.width;var c;for(var d=a,f=Array.isArray(d),g=0,d=f?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=d.length)break;h=d[g++]}else{g=d.next();if(g.done)break;h=g.value}h=h;if(b>h.maxContainerWidth)continue;c=h.width;break}e(c)},[a]);b=c("useResizeObserver")(b);return[b,d]}function e(a,b){a=k(a,b);return[void 0,a]}d=c("gkx")("1549702")?e:a;g.BreakpointRelationship=j;g.useContainerBreakpoints=d}),98);
__d("BaseHScroll.react",["BaseScrollableArea.react","BaseView.react","HiddenSubtreePassiveContext","Locale","UserAgent","emptyFunction","react","smoothScrollTo","stylex","useContainerBreakpoints","useLayoutEffect_SAFE_FOR_SSR","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useMemo,l=e.useRef,m=e.useState,n=d("Locale").isRTL();e=c("UserAgent").isBrowser("Safari < 14")||c("UserAgent").isBrowser("Mobile Safari < 14");var o=c("UserAgent").isBrowser("Chrome"),p=c("UserAgent").isBrowser("IE")||c("UserAgent").isBrowser("Edge"),q=n&&e,r=1600,s=10,t=h.createContext(null);function a(a){var b=a.accessibilityLabel,e=a.cardWidth,f=a.children,g=a.disableScrolling;g=g===void 0?!1:g;var o=a.gap,w=o===void 0?0:o;o=a.hideArrows;o=o===void 0?!1:o;var x=a.initialScrollToIndex,y=a.initialScrollSmoothing,z=y===void 0?!1:y,A=a.maxContentWindowWidth;y=a.nextButton;var B=a.peekWidth,C=a.prevButton,D=a.onPressNext,E=D===void 0?c("emptyFunction"):D;D=a.onPressPrev;var F=D===void 0?c("emptyFunction"):D;D=a.peek;var G=D===void 0?!1:D;D=a.peekPaddingStart;var H=a.peekPaddingEnd;a=a.testid;a=A!=null&&G&&H!=null&&D!=null;var I=e.type==="responsive"?e.minWidth:e.width,J=k(function(){var a=[];if(e.type==="fixed")a.push({maxContainerWidth:Infinity,width:I+"px"});else if(G&&A!=null){var b=B*2,c=2*I+w+b,d=1;while(c<A+b){var f=d<=1||w===0?0:(d-1)*w;f=f+b;f=f===0?"100%":"(100% - "+f+"px)";a.push({maxContainerWidth:c,width:"calc("+f+" / "+d+")"});c+=w+I;d++}f=d<=1||w===0?0:(d-1)*w;c=f+b;c=c===0?"100%":"(100% - "+c+"px)";a.push({maxContainerWidth:A+b,width:"calc("+c+" / "+d+")"});a.push({maxContainerWidth:Infinity,width:(A-f)/d})}else{b=G?B*2:0;c=2*I+w+b;f=1;while(c<r){d=f<=1||w===0?0:(f-1)*w;d=d+b;d=d===0?"100%":"(100% - "+d+"px)";a.push({maxContainerWidth:c,width:"calc("+d+" / "+f+")"});c+=w+I;f++}d=f<=1||w===0?0:(f-1)*w;c=d+b;d=c===0?"100%":"(100% - "+c+"px)";a.push({maxContainerWidth:Infinity,width:"calc("+d+" / "+f+")"})}return a},[e.type,G,A,I,B,w]);J=d("useContainerBreakpoints").useContainerBreakpoints(J,d("useContainerBreakpoints").BreakpointRelationship.BiggerContainerSmallerChild);var K=J[0],L=J[1];J=k(function(){if(G&&A!=null)return[{maxContainerWidth:A+B*2,width:B},{maxContainerWidth:Infinity,width:"calc((100% - "+A+"px) / 2)"}];return G?[{maxContainerWidth:Infinity,width:B}]:[{maxContainerWidth:Infinity,width:0}]},[A,G,B]);J=d("useContainerBreakpoints").useContainerBreakpoints(J,d("useContainerBreakpoints").BreakpointRelationship.BiggerContainerBiggerChild);var M=J[0];J=J[1];J=A!=null&&typeof J==="string"&&J.includes("min(")?"max("+B+"px, (100% - "+A+"px) / 2)":J;var N=l(null),O=m(!n),P=O[0],Q=O[1];O=m(n);var R=O[0],S=O[1],T=l(!1);c("useLayoutEffect_SAFE_FOR_SSR")(function(){var a;a=(a=N.current)==null?void 0:a.getDOMNode();if(a==null)return;if(n){var b=a.clientWidth,c=a.scrollLeft;a=a.scrollWidth;c>50&&c>a-b-50&&(T.current=!0)}},[]);var U=i(function(){var a;a=(a=N.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=a.getBoundingClientRect();b=b.width;var c=a.scrollLeft;a=a.scrollWidth;n&&!p?T.current?(Q(c>a-b-w),S(c<w)):(Q(c>-w),S(c<-a+b+w)):(Q(c<w),S(c>a-b-w))},[w]);O=c("useResizeObserver")(U);K=c("useMergeRefs")(K,M,O);var V=j(c("HiddenSubtreePassiveContext"));c("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=V.subscribeToChanges(function(a){a.hidden||U()});return function(){return a.remove()}},[V,U]);M=h.Children.count(f);c("useLayoutEffect_SAFE_FOR_SSR")(function(){U()},[M,U]);var W=l(w);c("useLayoutEffect_SAFE_FOR_SSR")(function(){W.current=w},[w]);var X=i(function(a){var b=a.getBoundingClientRect(),c=A!=null?Math.min(b.width-(G?2*B:0),A):G?b.width-2*B:b.width,d=(b.width-c)/2,e=b.left+d;b=b.right-d;d=Array.from(a.children[0].children).filter(function(a){return a.tagName==="DIV"});return{childCards:d,containerLeft:e,containerRight:b,containerWidth:c}},[A,G,B]),Y=l(X);c("useLayoutEffect_SAFE_FOR_SSR")(function(){Y.current=X},[X]);c("useLayoutEffect_SAFE_FOR_SSR")(function(){if(x!=null){var a,b=(a=N.current)==null?void 0:a.getDOMNode();if(b==null)return;a=Y.current(b);a=a.childCards;var d=0;for(var e=0;e<Math.min(x,a.length);e++)d+=a[e].getBoundingClientRect().width+W.current;a=function(a){z?c("smoothScrollTo")(b,{left:a}):b.scrollTo(a,0)};if(n&&!p)if(T.current){e=b.scrollWidth-b.getBoundingClientRect().width;a(e-d)}else a(-d);else a(d)}},[x,z]);O=function(){var a;a=(a=N.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=X(a),d=b.childCards,e=b.containerLeft;b=b.containerRight;var f;for(var g=n?0:d.length-1;n?g<d.length:g>=0;n?g++:g--){var h=d[g].getBoundingClientRect();if(h.left<=e-s){f=h;break}}if(f==null)return;h=f.right-b;h!==0&&(n&&p?c("smoothScrollTo")(a,{left:a.scrollLeft-h}):c("smoothScrollTo")(a,{left:a.scrollLeft+h}),F())};M=function(){var a;a=(a=N.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=X(a),d=b.childCards,e=b.containerLeft;b=b.containerRight;var f;for(var g=n?d.length-1:0;n?g>=0:g<d.length;n?g--:g++){var h=d[g].getBoundingClientRect();if(h.right>=b+s){f=h;break}}if(f==null)return;h=f.left-e;h!==0&&(n&&p?c("smoothScrollTo")(a,{left:a.scrollLeft-h}):c("smoothScrollTo")(a,{left:a.scrollLeft+h}),E())};var Z=k(function(){return L!=null?{gap:w,width:L}:null},[L,w]),$=h.Children.count(f);u(N,$);return h.jsxs(c("BaseView.react"),{ref:K,testid:void 0,children:[h.jsx("div",{"aria-hidden":o||!!P,className:c("stylex")(v.buttonWrapper,(o||!!P)&&v.hidden),style:n?{right:J!=null&&!a?J:G?B:0,transform:"translate(calc(50% + "+(G?w/2:0)+"px), -50%)"}:{left:J!=null&&!a?J:G?B:0,transform:"translate(calc(-50% - "+(G?w/2:0)+"px), -50%)"},suppressHydrationWarning:!0,children:C(n?M:O,!!P)}),h.jsx(c("BaseView.react"),{"aria-label":b,role:b!=null?"region":void 0,xstyle:v.scrollContainer,children:h.jsxs(c("BaseScrollableArea.react"),{hideScrollbar:!0,horizontal:!0,onScroll:U,ref:N,style:{scrollPadding:J},vertical:!1,xstyle:[v.scrollView,!q&&v.scrollViewSnap,g&&v.scrollViewNoScroll],children:[G&&A!=null&&D==null&&h.jsx("span",{style:{flexShrink:0,minWidth:B,width:"calc((100% - "+A+"px) / 2)"}}),G&&(D!=null||A==null)&&h.jsx("span",{style:{minWidth:($=D)!=null?$:B}}),h.jsx(t.Provider,{value:Z,children:f}),G&&A!=null&&H==null&&h.jsx("span",{style:{flexShrink:0,minWidth:B,width:"calc((100% - "+A+"px) / 2)"}}),G&&(H!=null||A==null)&&h.jsx("span",{style:{minWidth:(K=H)!=null?K:B}})]})}),h.jsx("div",{"aria-hidden":o||!!R,className:c("stylex")(v.buttonWrapper,(o||!!R)&&v.hidden),style:n?{left:J!=null&&!a?J:G?B:0,transform:"translate(calc(-50% - "+(G?w/2:0)+"px), -50%)"}:{right:J!=null&&!a?J:G?B:0,transform:"translate(calc(50% + "+(G?w/2:0)+"px), -50%)"},suppressHydrationWarning:!0,children:y(n?O:M,!!R)})]})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.children,d=a.expanding;d=d===void 0?!1:d;var e=a.role;a=a.type;a=a===void 0?"default":a;var f=j(t);if(f==null)return null;var g=f.gap;f=f.width;a={flexBasis:a==="custom"?void 0:a==="doubleWidth"?"calc(("+f+") * 2 + "+g+"px)":f};return h.jsx("div",{className:c("stylex")(v.card,n&&v.cardRTL,w[g],d&&v.cardExpanding),role:e,style:a,children:b})}b.displayName=b.name+" [from "+f.id+"]";var u=function(a,b){};o&&(u=function(a,b){var d=l(null);c("useLayoutEffect_SAFE_FOR_SSR")(function(){var b,c=d.current;b=(b=a.current)==null?void 0:b.getDOMNode();c!=null&&b!=null&&(b.scrollLeft=c)},[b,a]);b=(b=a.current)==null?void 0:b.getDOMNode();b!=null&&(d.current=b.scrollLeft)});var v={buttonWrapper:{opacity:"pedkr2u6",position:"pmk7jnqg",top:"rk01pc8j",transitionDuration:"dpja2al7",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",zIndex:"tkr6xdv7"},card:{flexGrow:"kb5gq1qc",flexShrink:"pfnyh3mw",minWidth:"hpfvmrgz",scrollSnapAlign:"qdtcsgvi"},cardExpanding:{display:"j83agx80"},cardRTL:{scrollSnapAlign:"t5eea3g8"},hidden:{opacity:"b5wmifdl",pointerEvents:"hzruof5a"},scrollContainer:{marginBottom:"obtkqiv7",marginTop:"sv5sfqaa",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"},scrollView:{boxSizing:"rq0escxv",marginBottom:"oygrvhab",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05",scrollbarWidth:"ofs802cu"},scrollViewNoScroll:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},scrollViewSnap:{scrollSnapType:"tu18w1b4"}},w=(e={},e[0]={marginEnd:"cxmmr5t8"},e[4]={marginEnd:"cgat1ltu",":last-of-type":{marginEnd:"t7l9tvuc"}},e[8]={marginEnd:"oi9244e8",":last-of-type":{marginEnd:"t7l9tvuc"}},e[12]={marginEnd:"tvfksri0",":last-of-type":{marginEnd:"t7l9tvuc"}},e[16]={marginEnd:"wkznzc2l",":last-of-type":{marginEnd:"t7l9tvuc"}},e);g.HScrollContainer=a;g.HScrollChild=b}),98);
__d("ChevronLeftFilled20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("path",{d:"M12.2 4.53 6.727 10l5.47 5.47a.75.75 0 0 1-1.061 1.06l-6-6a.751.751 0 0 1 0-1.06l6-6A.75.75 0 1 1 12.2 4.53z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("ChevronRightFilled20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 20 20",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("path",{d:"M7.8 4.53 13.273 10 7.8 15.47a.75.75 0 0 0 1.061 1.06l6-6a.751.751 0 0 0 0-1.06l-6-6A.75.75 0 0 0 7.8 4.53z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("CometHScroll.react",["fbt","BaseHScroll.react","ChevronLeftFilled20.svg.react","ChevronRightFilled20.svg.react","CometCircleButton.react","CometTrackingNodeProvider.react","Locale","SVGIcon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback,k=h._(/*FBT_CALL*/"Elementos siguientes"/*FBT_CALL*/),l=h._(/*FBT_CALL*/"Elementos anteriores"/*FBT_CALL*/),m=d("Locale").isRTL(),n=44;function a(a){var b=a.nextButtonLabel,e=b===void 0?k:b;b=a.prevButtonLabel;var f=b===void 0?l:b;b=a.reduceArrowSize;var g=b===void 0?!1:b;b=babelHelpers.objectWithoutPropertiesLoose(a,["nextButtonLabel","prevButtonLabel","reduceArrowSize"]);a=j(function(a,b){return i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:419,children:i.jsx(c("CometCircleButton.react"),{color:"secondary",disabled:b,icon:d("SVGIcon").svgIcon(m?c("ChevronRightFilled20.svg.react"):c("ChevronLeftFilled20.svg.react")),label:f,onPress:a,size:g?40:48,testid:void 0,type:"overlay-raised"})})},[f,g]);var h=j(function(a,b){return i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:420,children:i.jsx(c("CometCircleButton.react"),{color:"secondary",disabled:b,icon:d("SVGIcon").svgIcon(m?c("ChevronLeftFilled20.svg.react"):c("ChevronRightFilled20.svg.react")),label:e,onPress:a,size:g?40:48,testid:void 0,type:"overlay-raised"})})},[e,g]);return i.jsx(d("BaseHScroll.react").HScrollContainer,babelHelpers["extends"]({},b,{nextButton:h,peekWidth:n,prevButton:a}))}a.displayName=a.name+" [from "+f.id+"]";g.Container=a;g.Child=d("BaseHScroll.react").HScrollChild}),98);