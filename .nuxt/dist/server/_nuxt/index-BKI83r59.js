import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$2 } from "./Status-BqHMV6Wp.js";
import { withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "sweetalert2";
/* empty css              */
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
import "vue-toastification";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { useOnlyFetch } = useApi();
    const { data: newsList, refresh } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-news")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$1;
      const _component_ElementsStatus = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>News List</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-news-create" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-plus"${_scopeId}></i> Create News `);
          } else {
            return [
              createVNode("i", { class: "fas fa-plus" }),
              createTextVNode(" Create News ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line"></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Title</th><th>Image</th><th>Category</th><th>Status</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(newsList), (news, i) => {
        _push(`<tr><td>${ssrInterpolate(++i)}</td><td>${ssrInterpolate(news.title)}</td><td>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          width: "150px",
          src: news.image,
          placeholder: "",
          loading: "lazy",
          alt: ""
        }, null, _parent));
        _push(`</td><td>${ssrInterpolate(news.category.name)}</td><td>`);
        _push(ssrRenderComponent(_component_ElementsStatus, {
          status: news.status
        }, null, _parent));
        _push(`</td><td><ul class="d-flex align-items-center action-group justify-content-center"><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "dashboard-manage-news-id-edit", params: { id: news.id } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-pencil-alt skyblue"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fas fa-pencil-alt skyblue" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li><li><a href="#" role="button"><i class="fa-solid fa-trash-can red"></i></a></li></ul></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BKI83r59.js.map
