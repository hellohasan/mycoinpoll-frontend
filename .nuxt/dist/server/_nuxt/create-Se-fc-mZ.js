import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import { u as useVForm } from "./useVForm-BndtwnoY.js";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "vue-toastification";
import { _ as __nuxt_component_0$1 } from "./client-only-Bwxzq3Sq.js";
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
import "vform";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useVForm({
      title: "",
      lesson_category_id: "",
      image: "",
      image_large: "",
      status: "",
      video_id: "",
      description: ""
    });
    const categories = ref([]);
    const { useOnlyFetch } = useApi();
    [__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-learn-category", {
      onResponse({ response }) {
        categories.value = response._data;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Create Lesson</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-learn" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-video"${_scopeId}></i> Lesson List `);
          } else {
            return [
              createVNode("i", { class: "fas fa-video" }),
              createTextVNode(" Lesson List ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line"></div>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0$1), null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-learn/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-Se-fc-mZ.js.map
