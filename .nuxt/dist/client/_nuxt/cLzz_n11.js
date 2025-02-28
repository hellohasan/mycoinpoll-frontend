import{c as s,o,a as x,K as z,bv as H,f as O,g as m,F as V,l as A,M as S,ba as F,m as R,t as C,e as B,c5 as G,v as W,n as b,p as J,aT as U,s as Q,x as X,y as L,r as P,c0 as Y,d as Z,b as ee,u as te}from"./--rz71Vb.js";var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ie(e,n,t){return t={path:n,exports:{},require:function(l,r){return ae(l,r??t.path)}},e(t,t.exports),t.exports}function ae(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var re=ie(function(e,n){(function(t,l){e.exports=l()})(ne,function(){var t="__v-click-outside",l=typeof window<"u",r=typeof navigator<"u",i=l&&("ontouchstart"in window||r&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],p=function(a){var h=a.event,f=a.handler;(0,a.middleware)(h)&&f(h)},w=function(a,h){var f=function(u){var v=typeof u=="function";if(!v&&typeof u!="object")throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:v?u:u.handler,middleware:u.middleware||function(g){return g},events:u.events||i,isActive:u.isActive!==!1,detectIframe:u.detectIframe!==!1,capture:!!u.capture}}(h.value),I=f.handler,M=f.middleware,q=f.detectIframe,_=f.capture;if(f.isActive){if(a[t]=f.events.map(function(u){return{event:u,srcTarget:document.documentElement,handler:function(v){return function(g){var k=g.el,y=g.event,N=g.handler,T=g.middleware,E=y.path||y.composedPath&&y.composedPath();(E?E.indexOf(k)<0:!k.contains(y.target))&&p({event:y,handler:N,middleware:T})}({el:a,event:v,handler:I,middleware:M})},capture:_}}),q){var K={event:"blur",srcTarget:window,handler:function(u){return function(v){var g=v.el,k=v.event,y=v.handler,N=v.middleware;setTimeout(function(){var T=document.activeElement;T&&T.tagName==="IFRAME"&&!g.contains(T)&&p({event:k,handler:y,middleware:N})},0)}({el:a,event:u,handler:I,middleware:M})},capture:_};a[t]=[].concat(a[t],[K])}a[t].forEach(function(u){var v=u.event,g=u.srcTarget,k=u.handler;return setTimeout(function(){a[t]&&g.addEventListener(v,k,_)},0)})}},c=function(a){(a[t]||[]).forEach(function(h){return h.srcTarget.removeEventListener(h.event,h.handler,h.capture)}),delete a[t]},d=l?{beforeMount:w,updated:function(a,h){var f=h.value,I=h.oldValue;JSON.stringify(f)!==JSON.stringify(I)&&(c(a),w(a,{value:f}))},unmounted:c}:{};return{install:function(a){a.directive("click-outside",d)},directive:d}})}),oe=re;const se={class:"v3ti-loader-wrapper"},le=x("div",{class:"v3ti-loader"},null,-1),de=x("span",null,"Loading",-1),ue=[le,de];function ce(e,n){return o(),s("div",se,ue)}function D(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var he=`.v3ti-loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #112B3C;
}
.v3ti-loader-wrapper .v3ti-loader {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-block;
  border-top: 2px solid #112B3C;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;
  margin-right: 8px;
}
@keyframes rotation {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}`;D(he);const j={};j.render=ce;var fe=j,$={name:"Vue3TagsInput",emits:["update:modelValue","update:tags","on-limit","on-tags-changed","on-remove","on-error","on-focus","on-blur","on-select","on-select-duplicate-tag","on-new-tag"],props:{readOnly:{type:Boolean,default:!1},modelValue:{type:String,default:""},validate:{type:[String,Function,Object],default:""},addTagOnKeys:{type:Array,default:function(){return[13,",",32]}},placeholder:{type:String,default:""},tags:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},limit:{type:Number,default:-1},allowDuplicates:{type:Boolean,default:!1},addTagOnBlur:{type:Boolean,default:!1},selectItems:{type:Array,default:()=>[]},select:{type:Boolean,default:!1},duplicateSelectItem:{type:Boolean,default:!0},uniqueSelectField:{type:String,default:"id"},addTagOnKeysWhenSelect:{type:Boolean,default:!1},isShowNoData:{type:Boolean,default:!0}},components:{Loading:fe},directives:{clickOutside:oe.directive},data(){return{isInputActive:!1,isError:!1,newTag:"",innerTags:[],multiple:!1}},computed:{isLimit(){const e=this.limit>0&&Number(this.limit)===this.innerTags.length;return e&&this.$emit("on-limit"),e},selectedItemsIds(){return this.duplicateSelectItem?[]:this.tags.map(e=>e[this.uniqueSelectField]||"")}},watch:{error(){this.isError=this.error},modelValue:{immediate:!0,handler(e){this.newTag=e}},tags:{deep:!0,immediate:!0,handler(e){this.innerTags=[...e]}}},methods:{isShot(e){return!!this.$slots[e]},makeItNormal(e){this.$emit("update:modelValue",e.target.value),this.$refs.inputTag.className="v3ti-new-tag",this.$refs.inputTag.style.textDecoration="none"},resetData(){this.innerTags=[]},resetInputValue(){this.newTag="",this.$emit("update:modelValue","")},setPosition(){const e=this.$refs.inputBox,n=this.$refs.contextMenu;if(e&&n){n.style.display="block";const t=e.clientHeight||32,l=3;n.style.top=t+l+"px"}},closeContextMenu(){this.$refs.contextMenu&&(this.$refs.contextMenu.style={display:"none"})},handleSelect(e){if(this.isShowCheckmark(e)){const n=this.tags.filter(t=>e.id!==t.id);this.$emit("update:tags",n),this.$emit("on-select-duplicate-tag",e),this.resetInputValue()}else this.$emit("on-select",e);this.$nextTick(()=>{this.closeContextMenu()})},isShowCheckmark(e){return this.duplicateSelectItem?!1:this.selectedItemsIds.includes(e[this.uniqueSelectField])},focusNewTag(){this.select&&!this.disabled&&this.setPosition(),!(this.readOnly||!this.$el.querySelector(".v3ti-new-tag"))&&this.$el.querySelector(".v3ti-new-tag").focus()},handleInputFocus(e){this.isInputActive=!0,this.$emit("on-focus",e)},handleInputBlur(e){this.isInputActive=!1,this.addNew(e),this.$emit("on-blur",e)},addNew(e){if(this.select&&!this.addTagOnKeysWhenSelect)return;const n=e?this.addTagOnKeys.indexOf(e.keyCode)!==-1||this.addTagOnKeys.indexOf(e.key)!==-1:!0,t=e&&e.type!=="blur";!n&&(t||!this.addTagOnBlur)||this.isLimit||(this.newTag&&(this.allowDuplicates||this.innerTags.indexOf(this.newTag)===-1)&&this.validateIfNeeded(this.newTag)?(this.innerTags.push(this.newTag),this.addTagOnKeysWhenSelect&&(this.$emit("on-new-tag",this.newTag),this.updatePositionContextMenu()),this.resetInputValue(),this.tagChange(),e&&e.preventDefault()):(this.validateIfNeeded(this.newTag)?this.makeItError(!0):this.makeItError(!1),e&&e.preventDefault()))},updatePositionContextMenu(){this.$nextTick(()=>{this.setPosition()})},makeItError(e){this.newTag!==""&&(this.$refs.inputTag.className="v3ti-new-tag v3ti-new-tag--error",this.$refs.inputTag.style.textDecoration="underline",this.$emit("on-error",e))},validateIfNeeded(e){return this.validate===""||this.validate===void 0?!0:typeof this.validate=="function"?this.validate(e):!0},removeLastTag(){this.newTag||(this.innerTags.pop(),this.tagChange(),this.updatePositionContextMenu())},remove(e){this.innerTags.splice(e,1),this.tagChange(),this.$emit("on-remove",e),this.updatePositionContextMenu()},tagChange(){this.$emit("on-tags-changed",this.innerTags)}}};const ve={key:1,class:"v3ti-tag-content"},ge=["onClick"],me=["placeholder","disabled"],pe={key:0,class:"v3ti-loading"},xe={key:1,class:"v3ti-no-data"},ye={key:1},we={key:2},ke=["onClick"],Te={class:"v3ti-context-item--label"},be={key:0,class:"v3ti-icon-selected-tag",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},Ie=x("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),Se=x("path",{d:"M5 12l5 5l10 -10"},null,-1),Ce=[Ie,Se];function _e(e,n,t,l,r,i){const p=z("Loading"),w=H("click-outside");return O((o(),s("div",{onClick:n[6]||(n[6]=c=>i.focusNewTag()),class:b([{"v3ti--focus":r.isInputActive,"v3ti--error":r.isError},"v3ti"])},[x("div",{class:b(["v3ti-content",{"v3ti-content--select":t.select}]),ref:"inputBox"},[(o(!0),s(V,null,A(r.innerTags,(c,d)=>(o(),s("span",{key:d,class:"v3ti-tag"},[i.isShot("item")?S(e.$slots,"item",F(R({key:0},{name:c,index:d,tag:c}))):(o(),s("span",ve,C(c),1)),t.readOnly?m("",!0):(o(),s("a",{key:2,onClick:B(a=>i.remove(d),["prevent","stop"]),class:"v3ti-remove-tag"},null,8,ge))]))),128)),O(x("input",{ref:"inputTag",placeholder:t.placeholder,"onUpdate:modelValue":n[0]||(n[0]=c=>r.newTag=c),onKeydown:[n[1]||(n[1]=G(B(function(){return i.removeLastTag&&i.removeLastTag(...arguments)},["stop"]),["delete"])),n[2]||(n[2]=function(){return i.addNew&&i.addNew(...arguments)})],onBlur:n[3]||(n[3]=function(){return i.handleInputBlur&&i.handleInputBlur(...arguments)}),onFocus:n[4]||(n[4]=function(){return i.handleInputFocus&&i.handleInputFocus(...arguments)}),onInput:n[5]||(n[5]=function(){return i.makeItNormal&&i.makeItNormal(...arguments)}),class:"v3ti-new-tag",disabled:t.readOnly},null,40,me),[[W,r.newTag]])],2),t.select?(o(),s("section",{key:0,class:b(["v3ti-context-menu",{"v3ti-context-menu-no-data":!t.isShowNoData&&t.selectItems.length===0}]),ref:"contextMenu"},[t.loading?(o(),s("div",pe,[i.isShot("loading")?S(e.$slots,"default",{key:0}):(o(),J(p,{key:1}))])):m("",!0),!t.loading&&t.selectItems.length===0&&t.isShowNoData?(o(),s("div",xe,[i.isShot("no-data")?S(e.$slots,"no-data",{key:0}):(o(),s("span",ye," No data "))])):m("",!0),!t.loading&&t.selectItems.length>0?(o(),s("div",we,[(o(!0),s(V,null,A(t.selectItems,(c,d)=>(o(),s("div",{key:d,class:b(["v3ti-context-item",{"v3ti-context-item--active":i.isShowCheckmark(c)}]),onClick:B(a=>i.handleSelect(c,d),["stop"])},[x("div",Te,[S(e.$slots,"select-item",F(U(c)))]),i.isShowCheckmark(c)?(o(),s("svg",be,Ce)):m("",!0)],10,ke))),128))])):m("",!0)],2)):m("",!0)],2)),[[w,i.closeContextMenu]])}var Ne=`.v3ti {
  border-radius: 5px;
  min-height: 32px;
  line-height: 1.4;
  background-color: #fff;
  border: 1px solid #9ca3af;
  cursor: text;
  text-align: left;
  -webkit-appearance: textfield;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.v3ti .v3ti-icon-selected-tag {
  stroke: #19be6b;
  width: 1rem;
  height: 1rem;
  margin-left: 4px;
}
.v3ti--focus {
  outline: 0;
  border-color: #000000;
  box-shadow: 0 0 0 1px #000000;
}
.v3ti--error {
  border-color: #F56C6C;
}
.v3ti .v3ti-no-data {
  color: #d8d8d8;
  text-align: center;
  padding: 4px 7px;
}
.v3ti .v3ti-loading {
  padding: 4px 7px;
  text-align: center;
}
.v3ti .v3ti-context-menu {
  max-height: 150px;
  min-width: 150px;
  overflow: auto;
  display: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 5px 0;
  background: #ffffff;
  z-index: 1050;
  color: #475569;
  box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 6px 6px;
}
.v3ti .v3ti-context-menu .v3ti-context-item {
  padding: 4px 7px;
  display: flex;
  align-items: center;
}
.v3ti .v3ti-context-menu .v3ti-context-item:hover {
  background: #e8e8e8;
  cursor: pointer;
}
.v3ti .v3ti-context-menu .v3ti-context-item--label {
  flex: 1;
  min-width: 1px;
}
.v3ti .v3ti-context-menu .v3ti-context-item--active {
  color: #317CAF;
}
.v3ti .v3ti-context-menu-no-data {
  padding: 0;
}
.v3ti .v3ti-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.v3ti .v3ti-content--select {
  padding-right: 30px;
}
.v3ti .v3ti-tag {
  display: flex;
  font-weight: 400;
  margin: 3px;
  padding: 0 5px;
  background: #317CAF;
  color: #ffffff;
  height: 27px;
  border-radius: 5px;
  align-items: center;
  max-width: calc(100% - 16px);
}
.v3ti .v3ti-tag .v3ti-tag-content {
  flex: 1;
  min-width: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v3ti .v3ti-tag .v3ti-remove-tag {
  color: #ffffff;
  transition: opacity 0.3s ease;
  opacity: 0.5;
  cursor: pointer;
  padding: 0 5px 0 7px;
}
.v3ti .v3ti-tag .v3ti-remove-tag::before {
  content: "x";
}
.v3ti .v3ti-tag .v3ti-remove-tag:hover {
  opacity: 1;
}
.v3ti .v3ti-new-tag {
  background: transparent;
  border: 0;
  font-weight: 400;
  margin: 3px;
  outline: none;
  padding: 0 4px;
  flex: 1;
  min-width: 60px;
  height: 27px;
}
.v3ti .v3ti-new-tag--error {
  color: #F56C6C;
}`;D(Ne);$.render=_e;var Be=(()=>{const e=$;return e.install=n=>{n.component("Vue3TagsInput",e)},e})();const Me=["for"],Ee={key:0},Oe={class:"input bg-border-input"},Ve={key:1,class:"invalid-feedback d-block"},Fe={__name:"Tag",props:Q({label:String,type:{type:String,default:"text"},step:{type:String,default:null},col:{type:String,default:"col-md-12"},id:String,placeholder:String,required:Boolean,error:String,message:String,options:{type:Array,default:()=>[]}},{modelValue:{type:Array,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=X(e,"modelValue"),t=e,l=L(()=>t.id||`input-${Math.random().toString(36).substr(2,9)}`),r=L(()=>t.placeholder||t.label||""),i=P(""),p=P([]);Y(n,d=>{p.value=d},{immediate:!0});const w=d=>{i.value=d},c=d=>{p.value=d,n.value=d};return(d,a)=>(o(),s("div",{class:b(["form-group",e.col])},[e.label?(o(),s("label",{key:0,for:l.value,class:"label"},[Z(C(e.label)+": ",1),e.message?(o(),s("code",Ee,C(e.message),1)):m("",!0)],8,Me)):m("",!0),x("div",Oe,[ee(te(Be),{class:"form-control",modelValue:i.value,tags:p.value,"onUpdate:modelValue":w,onOnTagsChanged:c,placeholder:r.value},null,8,["modelValue","tags","placeholder"])]),e.error?(o(),s("div",Ve,C(e.error),1)):m("",!0)],2))}};export{Fe as _};
