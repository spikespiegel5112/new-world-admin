webpackJsonp([2],{"405r":function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function a(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var r=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(r,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var i=e,a=this.$slots.footer;a&&(i=e?[].concat(o(e),o(a)):[].concat(o(a)));var r=null,s=function(t,e){r=function(t,e,n){return void 0==n?t:((t=null==t?{}:t)[e]=n,t)}(r,t,e)};if(s("attrs",this.$attrs),this.componentData){var l=this.componentData,c=l.on,d=l.props;s("on",c),s("props",d)}return t(this.element,r,i)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};r.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),a.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=a.bind(e,t)});var o=i({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in o)&&(o.draggable=">*"),this._sortable=new t(this.rootContainer,o),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map(function(t){return t.elm}),a=[].concat(o(e)).map(function(t){return i.indexOf(t)});return n?a.filter(function(t){return-1!==t}):a}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(o(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,o=this.getUnderlyingPotencialDraggableComponent(e);if(!o)return{component:o};var a=o.realList,r={list:a,component:o};if(e!==n&&a&&o.getUnderlyingVm){var s=o.getUnderlyingVm(n);if(s)return i(s,r)}return r},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var a={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:a})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(o(e.to.children)).filter(function(t){return"none"!==t.style.display}),i=n.indexOf(e.related),a=t.component.getVmIndex(i);return-1!=n.indexOf(c)||!e.willInsertAfter?a:a+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var o=this.getRelatedContextFromMoveEvent(t),a=this.context,r=this.computeFutureIndex(o,t);return i(a,{futureIndex:r}),i(t,{relatedContext:o,draggedContext:a}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var a=n("HOBB");t.exports=e(a)}()},A6u5:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.edifice_main_container .sortlist > li {\n  margin: 0 auto 20px;\n  height: 200px;\n}\n.edifice_main_container .buildingname {\n  margin: 10px 0;\n  font-size: 20px;\n}\n.edifice_main_container .floordesc > li {\n  display: inline-block;\n}\n.edifice_main_container .floordesc .brandmeta label {\n  font-size: 16px;\n}\n.edifice_main_container .floordesc .brandmeta span {\n  font-size: 16px;\n}\n.edifice_main_container .operation {\n  float: right;\n}\n",""])},HOBB:function(t,e,n){var i,o;!function(a){"use strict";void 0===(o="function"==typeof(i=a)?i.call(e,n,e,t):i)||(t.exports=o)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,o,a,r,s,l,c,d,u,h,f,p,g,m,v,_,b,y,D={},C=/\s+/g,w=/left|right|inline/,x="Sortable"+(new Date).getTime(),S=window,T=S.document,E=S.parseInt,I=S.setTimeout,M=S.jQuery||S.Zepto,k=S.Polymer,N=!1,O="draggable"in T.createElement("div"),A=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=T.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),L=!1,$=Math.abs,B=Math.min,F=[],P=[],R=it(function(t,e,n){if(n&&e.scroll){var i,o,a,r,d,u,h=n[x],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,m=t.clientY,v=window.innerWidth,_=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(i=s,o=s.getBoundingClientRect(),a=($(o.right-g)<=f)-($(o.left-g)<=f),r=($(o.bottom-m)<=f)-($(o.top-m)<=f)),a||r||(r=(_-m<=f)-(m<=f),((a=(v-g<=f)-(g<=f))||r)&&(i=S)),D.vx===a&&D.vy===r&&D.el===i||(D.el=i,D.vx=a,D.vy=r,clearInterval(D.pid),i&&(D.pid=setInterval(function(){if(u=r?r*p:0,d=a?a*p:0,"function"==typeof c)return c.call(h,d,u,t);i===S?S.scrollTo(S.pageXOffset+d,S.pageYOffset+u):(i.scrollTop+=u,i.scrollLeft+=d)},24)))}},30),U=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){N={capture:!1,passive:!1}}}))}catch(t){}function G(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=ot({},e),t[x]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==G.supportPointer};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var o in U(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&O,X(t,"mousedown",this._onTapStart),X(t,"touchstart",this._onTapStart),e.supportPointer&&X(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(X(t,"dragover",this),X(t,"dragenter",this)),P.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function q(e,n){"clone"!==e.lastPullMode&&(n=!0),i&&i.state!==n&&(z(i,"display",n?"none":""),n||i.state&&(e.options.group.revertClone?(o.insertBefore(i,a),e._animate(t,i)):o.insertBefore(i,t)),i.state=n)}function Y(t,e,n){if(t){n=n||T;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=V(t))}return null}function V(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function X(t,e,n){t.addEventListener(e,n,N)}function j(t,e,n){t.removeEventListener(e,n,N)}function H(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(C," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(C," ")}}function z(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return T.defaultView&&T.defaultView.getComputedStyle?n=T.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function W(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;o<a;o++)n(i[o],o);return i}return[]}function Q(t,e,n,o,a,r,s,l){t=t||e[x];var c=T.createEvent("Event"),d=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=a||e,c.from=r||e,c.item=o||e,c.clone=i,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),d[u]&&d[u].call(t,c)}function J(t,e,n,i,o,a,r,s){var l,c,d=t[x],u=d.options.onMove;return(l=T.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=a||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function Z(t){t.draggable=!1}function K(){L=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function it(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,I(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function ot(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function at(t){return k&&k.dom?k.dom(t).cloneNode(!0):M?M(t).clone(!0)[0]:t.cloneNode(!0)}function rt(t){return I(t,0)}function st(t){return clearTimeout(t)}return G.prototype={constructor:G,_onTapStart:function(e){var n,i=this,o=this.el,a=this.options,s=a.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],d=(c||e).target,u=e.target.shadowRoot&&e.path&&e.path[0]||d,h=a.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&F.push(i)}}(o),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||a.disabled)&&!u.isContentEditable&&(d=Y(d,a.draggable,o))&&r!==d){if(n=et(d,a.draggable),"function"==typeof h){if(h.call(this,e,d,this))return Q(i,u,"filter",d,o,o,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=Y(u,t.trim(),o))return Q(i,t,"filter",d,o,o,n),!0})))return void(s&&e.preventDefault());a.handle&&!Y(u,a.handle,o)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,i,s,l){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;s&&!t&&s.parentNode===u&&(v=n,o=u,e=(t=s).parentNode,a=t.nextSibling,r=s,g=h.group,f=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,H(t,h.chosenClass,!0),d._triggerDragStart(n,i),Q(d,o,"choose",t,o,o,f)},h.ignore.split(",").forEach(function(e){W(t,e.trim(),Z)}),X(p,"mouseup",d._onDrop),X(p,"touchend",d._onDrop),X(p,"touchcancel",d._onDrop),X(p,"selectstart",d),h.supportPointer&&X(p,"pointercancel",d._onDrop),h.delay?(X(p,"mouseup",d._disableDelayedDrag),X(p,"touchend",d._disableDelayedDrag),X(p,"touchcancel",d._disableDelayedDrag),X(p,"mousemove",d._disableDelayedDrag),X(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&X(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=I(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),j(t,"mouseup",this._disableDelayedDrag),j(t,"touchend",this._disableDelayedDrag),j(t,"touchcancel",this._disableDelayedDrag),j(t,"mousemove",this._disableDelayedDrag),j(t,"touchmove",this._disableDelayedDrag),j(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(v={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(v,"touch")):this.nativeDraggable?(X(t,"dragend",this),X(o,"dragstart",this._onDragStart)):this._onDragStart(v,!0);try{T.selection?rt(function(){T.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(o&&t){var e=this.options;H(t,e.ghostClass,!0),H(t,e.dragClass,!1),G.active=this,Q(this,o,"start",t,o,o,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,A||z(n,"display","none");var t=T.elementFromPoint(_.clientX,_.clientY),e=t,i=P.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(_.clientX,_.clientY)),e)do{if(e[x]){for(;i--;)P[i]({clientX:_.clientX,clientY:_.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);A||z(n,"display","")}},_onTouchMove:function(t){if(v){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,a=t.touches?t.touches[0]:t,r=a.clientX-v.clientX+o.x,s=a.clientY-v.clientY+o.y,l=t.touches?"translate3d("+r+"px,"+s+"px,0)":"translate("+r+"px,"+s+"px)";if(!G.active){if(i&&B($(a.clientX-this._lastX),$(a.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),b=!0,_=a,z(n,"webkitTransform",l),z(n,"mozTransform",l),z(n,"msTransform",l),z(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),a=z(t),r=this.options;H(n=t.cloneNode(!0),r.ghostClass,!1),H(n,r.fallbackClass,!0),H(n,r.dragClass,!0),z(n,"top",i.top-E(a.marginTop,10)),z(n,"left",i.left-E(a.marginLeft,10)),z(n,"width",i.width),z(n,"height",i.height),z(n,"opacity","0.8"),z(n,"position","fixed"),z(n,"zIndex","100000"),z(n,"pointerEvents","none"),r.fallbackOnBody&&T.body.appendChild(n)||o.appendChild(n),e=n.getBoundingClientRect(),z(n,"width",2*i.width-e.width),z(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var a=this,r=e.dataTransfer,s=a.options;a._offUpEvents(),g.checkPull(a,a,t,e)&&((i=at(t)).draggable=!1,i.style["will-change"]="",z(i,"display","none"),H(i,a.options.chosenClass,!1),a._cloneId=rt(function(){o.insertBefore(i,t),Q(a,o,"clone",t)})),H(t,s.dragClass,!0),n?("touch"===n?(X(T,"touchmove",a._onTouchMove),X(T,"touchend",a._onDrop),X(T,"touchcancel",a._onDrop),s.supportPointer&&(X(T,"pointermove",a._onTouchMove),X(T,"pointerup",a._onDrop))):(X(T,"mousemove",a._onTouchMove),X(T,"mouseup",a._onDrop)),a._loopId=setInterval(a._emulateDragOver,50)):(r&&(r.effectAllowed="move",s.setData&&s.setData.call(a,r,t)),X(T,"drop",a),a._dragStartId=rt(a._dragStarted))},_onDragOver:function(r){var s,l,c,f,p=this.el,v=this.options,_=v.group,y=G.active,D=g===_,C=!1,S=v.sort;if(void 0!==r.preventDefault&&(r.preventDefault(),!v.dragoverBubble&&r.stopPropagation()),!t.animated&&(b=!0,y&&!v.disabled&&(D?S||(f=!o.contains(t)):m===this||(y.lastPullMode=g.checkPull(this,y,t,r))&&_.checkPut(this,y,t,r))&&(void 0===r.rootEl||r.rootEl===this.el))){if(R(r,v,this.el),L)return;if(s=Y(r.target,v.draggable,p),l=t.getBoundingClientRect(),m!==this&&(m=this,C=!0),f)return q(y,!0),e=o,void(i||a?o.insertBefore(t,i||a):S||o.appendChild(t));if(0===p.children.length||p.children[0]===n||p===r.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,r)){if(0!==p.children.length&&p.children[0]!==n&&p===r.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}q(y,D),!1!==J(o,p,t,l,s,c,r)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[x]){d!==s&&(d=s,u=z(s),h=z(s.parentNode));var T=(c=s.getBoundingClientRect()).right-c.left,E=c.bottom-c.top,M=w.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),k=s.offsetWidth>t.offsetWidth,N=s.offsetHeight>t.offsetHeight,O=(M?(r.clientX-c.left)/T:(r.clientY-c.top)/E)>.5,A=s.nextElementSibling,$=!1;if(M){var B=t.offsetTop,F=s.offsetTop;$=B===F?s.previousElementSibling===t&&!k||O&&k:s.previousElementSibling===t||t.previousElementSibling===s?(r.clientY-c.top)/E>.5:F>B}else C||($=A!==t&&!N||O&&N);var P=J(o,p,t,l,s,c,r,$);!1!==P&&(1!==P&&-1!==P||($=1===P),L=!0,I(K,30),q(y,D),t.contains(p)||($&&!A?p.appendChild(t):s.parentNode.insertBefore(t,$?A:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),z(e,"transition","none"),z(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,z(e,"transition","all "+n+"ms"),z(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=I(function(){z(e,"transition",""),z(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;j(T,"touchmove",this._onTouchMove),j(T,"pointermove",this._onTouchMove),j(t,"mouseup",this._onDrop),j(t,"touchend",this._onDrop),j(t,"pointerup",this._onDrop),j(t,"touchcancel",this._onDrop),j(t,"pointercancel",this._onDrop),j(t,"selectstart",this)},_onDrop:function(r){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(D.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),j(T,"mouseover",this),j(T,"mousemove",this._onTouchMove),this.nativeDraggable&&(j(T,"drop",this),j(s,"dragstart",this._onDragStart)),this._offUpEvents(),r&&(b&&(r.preventDefault(),!l.dropBubble&&r.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==e&&"clone"===G.active.lastPullMode||i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&j(t,"dragend",this),Z(t),t.style["will-change"]="",H(t,this.options.ghostClass,!1),H(t,this.options.chosenClass,!1),Q(this,o,"unchoose",t,e,o,f),o!==e?(p=et(t,l.draggable))>=0&&(Q(null,e,"add",t,e,o,f,p),Q(this,o,"remove",t,e,o,f,p),Q(null,e,"sort",t,e,o,f,p),Q(this,o,"sort",t,e,o,f,p)):t.nextSibling!==a&&(p=et(t,l.draggable))>=0&&(Q(this,o,"update",t,e,o,f,p),Q(this,o,"sort",t,e,o,f,p)),G.active&&(null!=p&&-1!==p||(p=f),Q(this,o,"end",t,e,o,f,p),this.save()))),this._nulling()},_nulling:function(){o=t=e=n=a=i=r=s=l=v=_=b=p=d=u=m=g=G.active=null,F.forEach(function(t){t.checked=!0}),F.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,o=n.length,a=this.options;i<o;i++)Y(t=n[i],a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,i){var o=n.children[i];Y(o,this.options.draggable,n)&&(e[t]=o)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return Y(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&U(n)},destroy:function(){var t=this.el;t[x]=null,j(t,"mousedown",this._onTapStart),j(t,"touchstart",this._onTapStart),j(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(j(t,"dragover",this),j(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),P.splice(P.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},X(T,"touchmove",function(t){G.active&&t.preventDefault()}),G.utils={on:X,off:j,css:z,find:W,is:function(t,e){return!!Y(t,e,t)},extend:ot,throttle:it,closest:Y,toggleClass:H,clone:at,index:et,nextTick:rt,cancelNextTick:st},G.create=function(t,e){return new G(t,e)},G.version="1.7.0",G})},k01E:function(t,e,n){var i=n("A6u5");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("83855a52",i,!1)},rERP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZLEe"),o=n.n(i),a=n("aA9S"),r=n.n(a),s=n("pnga"),l=n("zQDM"),c=n("405r"),d=n.n(c),u={components:{CommonTag:s.a,CommonQuery:l.a,Draggable:d.a},data:function(){return{findFloorsRequest:"building-show-service/1.0.0/buildingShow/findFloors",floorList:[],queryModel:{name:"",deviceType:this.currentDeviceType,gameTypeId:this.currentGameTypeId},pagination:{page:1,limit:20},formData:{id:0,name:"",title:"",description:"",iconUrl:"",bigImageUrl:"",iosDownloadUrl:"",androidDownloadUrl:"",webGameUrl:"",nature:"",ios:!1,android:!1,status:null},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,rules:{name:[{required:!0,message:"此项为不能为空",trigger:"change"}]},loading:!1,deviceType:"ios",chosenGameName:"",buildingName:""}},computed:{layoutHeight:function(){return this.$store.state.app.layoutHeight-40}},watch:{effectiveDuration:function(t){console.log(t),null===t&&(t=[]),this.formData.startDate=t[0],this.formData.endDate=t[1]},"formData.bigImageUrl":function(t){console.warn(t)},chosenGameName:function(t){this.queryModel.name=t},initSortData:function(t){console.log(t)}},mounted:function(){this.getSortList()},methods:{getSortList:function(){var t=this;this.$http.get(this.$baseUrl+this.findFloorsRequest+"/"+this.deviceType,{params:this.queryModel}).then(function(e){console.log(e),e=e.data,t.floorList=e,t.buildingName=e.buildingName,t.loading=!1})},handleUpdate:function(t){var e=this;console.log(t),this.formData=r()({},t.row),this.effectiveDuration=[t.row.startDate,t.row.endDate],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},handleAddFloor:function(){this.dialogFormVisible=!0,this.queryModel.name="",this.chosenGameName=""},addGame:function(){if(o()(this.chosenGameInfo).length>0){var t=[];(t=this.currentSortData).push(this.chosenGameInfo),this.currentSortData=t,console.log(this.currentSortData),console.log(this.initSortData),this.dialogFormVisible=!1}else this.$message.warning("无游戏可添加")},minusGame:function(t){var e=this.currentSortData;e.splice(t,1),this.currentSortData=e,console.log(this.currentSortData)},handleAddBrand:function(){var t=this,e={};0!==this.currentSortData.length?("ios"===this.currentDeviceType?e={iosGameIdList:this.currentSortData.map(function(t){return t.id})}:"android"===this.currentDeviceType&&(e={androidGameIdList:this.currentSortData.map(function(t){return t.id})}),this.$http.post(this.$baseUrl+this.rankGameByTypeRequest+"/"+this.currentGameTypeId,e).then(function(e){console.log(e),t.getSortList()}).catch(function(e){t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})):this.$message.warning("排序列表不能为空")},focusSortList:function(t,e){var n=this;console.log(this.gameOptions),this.loading=!0,this.queryModel=r()(this.queryModel,{limit:999,page:1,status:1,title:"",description:"",gameTypeId:""}),console.log(this.queryModel),this.$http.get(this.$baseUrl+this.game_infoListRequest,{params:this.queryModel}).then(function(t){console.log(t),n.loading=!1,n.total=t.total;var i=[];0!==t.list.length&&(t.list.forEach(function(t,e){i.push(r()(t,{value:t.name}))}),n.currentSortData.forEach(function(t){i=i.filter(function(e){return t.name!==e.name})}),console.log(111,i),e(i),console.log(222,n.gameOptions))})},chooseGame:function(t){console.log(333,t),this.chosenGameInfo=t,this.queryModel.name=t.value}}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("CommonLoading",{attrs:{loading:t.loading,relative:!1}}),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"edifice_main_container common_sortlist_wrapper",style:{height:t.layoutHeight+"px"}},[n("div",{staticClass:"buildingname"},[t._v("大楼名称："+t._s(t.buildingName))]),t._v(" "),n("ul",{staticClass:"addgame"},[n("li",[n("a",{staticClass:"plus",on:{click:t.handleAddFloor}},[n("span",{staticClass:"add el-icon-circle-plus-outline"})])])]),t._v(" "),n("ul",{staticClass:"sortlist"},t._l(t.floorList,function(e,i){return n("li",{key:e.id},[n("el-row",[n("el-col",{attrs:{span:23}},[n("el-form",{ref:"form",refInFor:!0,staticClass:"maincontent",attrs:{"label-width":"150px"}},[n("el-row",{staticClass:"floordesc"},[n("el-col",{staticClass:"brandmeta",attrs:{span:7}},[n("el-form-item",{attrs:{label:"品牌名称："}},[n("span",[t._v(t._s(e.brandName))])])],1),t._v(" "),n("el-col",{staticClass:"brandmeta",attrs:{span:7}},[n("el-form-item",{attrs:{label:"地点："}},[n("span",[t._v(t._s(e.location))])])],1),t._v(" "),n("el-col",{staticClass:"brandmeta",attrs:{span:7}},[n("el-form-item",{attrs:{label:"地点："}},[n("span",[t._v(t._s(e.location))])])],1),t._v(" "),n("el-col",{staticClass:"operation",attrs:{span:3}},[n("el-button",{attrs:{type:"primary",size:"mini",disable:e!=={}},on:{click:t.handleAddBrand}},[t._v("添加品牌")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",disable:e==={}},on:{click:t.handleAddBrand}},[t._v("移除品牌")])],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"Android可用性："}},[n("span",[t._v(t._s(e.androidEnable))])])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"iOS可用性："}},[n("span",[t._v(t._s(e.iosEnable))])])],1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:1}},[n("a",{staticClass:"minus",on:{click:function(e){t.minusGame(i)}}},[n("span",{staticClass:"add el-icon-remove-outline"})])])],1)],1)}))])])],1),t._v(" "),n("el-row",{staticClass:"footer",attrs:{type:"flex",justify:"center"}},[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:6}},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleAddBrand}},[t._v("保存排序")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-form",{ref:"queryModel",attrs:{rules:t.rules,model:t.queryModel,"label-position":"right","label-width":"150px"}},[n("el-form-item",{attrs:{label:"品牌名称",prop:"name"}},[n("el-autocomplete",{attrs:{"fetch-suggestions":t.focusSortList,placeholder:"请输入内容"},on:{select:t.chooseGame},model:{value:t.chosenGameName,callback:function(e){t.chosenGameName=e},expression:"chosenGameName"}})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:t.addGame}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)};h._withStripped=!0;var f={render:h,staticRenderFns:[]},p=f;var g=!1;var m=n("vSla")(u,p,!1,function(t){g||n("k01E")},null,null);m.options.__file="src\\views\\edifice\\edificeManagement.vue";e.default=m.exports}});