import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "simplebar";
import "hookable";
const _sfc_main = {
  __name: "backend",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ellipse ellipse1"></div><div class="ellipse ellipse2"></div><div class="ellipse ellipse3"></div><div class="dashboard-main-area">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="copyright-box d-flex align-items-center justify-content-center"><p> © <a href="#" class="gradient-color">2024 MyCoinPoll.com All Rights Reserved.</a></p><p class="gradient-color">V3.0.6</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/backend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=backend-B43YMYwX.js.map
