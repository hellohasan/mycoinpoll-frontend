import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$2 } from "./Chain-Bmz4JlYu.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "deep-pick-omit";
const _sfc_main = {
  __name: "androverse",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$1;
      const _component_FrontendHomeChain = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="header-cover-area"><section class="hero-section"><div class="metaverse-container"><div class="container"><div class="row"><div class="col-md-12"><div class="d-flex"><div class="hero-area-text index-hero-text"><h3>Welcome to Androverse: The Future of Digital Ownership</h3><p>Explore a Vibrant Metaverse Where You Can Buy Land, Build Businesses, and Unlock Endless Opportunities! Trade NFT Properties with ECM Tokens and Connect with a Thriving Community of Innovators and Entrepreneurs!</p><ul class="d-flex align-items-center"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "index" },
        class: "btn1 primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go Back to Home <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
          } else {
            return [
              createTextVNode(" Go Back to Home "),
              createVNode("span", { class: "icon-rotate" }, [
                createVNode("i", { class: "fas fa-arrow-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="coinpool-hero-rights metaverse-thumnails">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/thumbnail/metavers-world.png",
        alt: ""
      }, null, _parent));
      _push(`</div></div></div></div></div></div></section></div>`);
      _push(ssrRenderComponent(_component_FrontendHomeChain, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/androverse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=androverse-d6JsxxHY.js.map
