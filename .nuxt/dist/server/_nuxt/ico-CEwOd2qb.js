import { _ as _sfc_main$1 } from "./Index-DNIHiPhR.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "vue-skeletor";
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
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "deep-pick-omit";
import "./useApi-BM86DZuP.js";
import "vue-toastification";
import "@reown/appkit/vue";
import "./useClipboard-CEQhz5Du.js";
import "./useWeb3-BYnZ8Zbm.js";
import "./NuxtImg-Cvt1lRnM.js";
const _sfc_main = {
  __name: "ico",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EcmPurchase = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt40" }, _attrs))}><section class="ecm-section dashboard-box ico-section">`);
      _push(ssrRenderComponent(_component_EcmPurchase, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ico.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ico-CEwOd2qb.js.map
