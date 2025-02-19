import { _ as __nuxt_component_0 } from "./nuxt-link-BWdyHLLK.js";
import { computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { d as useRoute } from "../server.mjs";
const _sfc_main = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const pageTitle = computed(() => {
      return route.meta.title || "Current Page";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumbs-area mt-20 breadcrumbs-mobile-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-md-12"><div class="breadcrumbs"><ul class="d-flex align-items-center flex-wrap"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li><li><a href="#" class="active">${ssrInterpolate(unref(pageTitle))}</a></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Breadcrumb-BifjN4Sx.js.map
