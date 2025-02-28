import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$2 } from "./Status-BqHMV6Wp.js";
import { withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useApi } from "./useApi-BM86DZuP.js";
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
    const { data: tokens } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-tokens")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$1;
      const _component_ElementsStatus = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Token List</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-tokens-create" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-plus"${_scopeId}></i> Add New Token `);
          } else {
            return [
              createVNode("i", { class: "fas fa-plus" }),
              createTextVNode(" Add New Token ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Logo</th><th>Token Name</th><th>Owner</th><th>Company</th><th>Stage</th><th>Status</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(tokens), (token) => {
        _push(`<tr><td>${ssrInterpolate(token.id)}</td><td>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: token.logo,
          loading: "lazy",
          placeholder: "",
          class: "img-fluid img-thumbnail",
          width: "50px",
          alt: ""
        }, null, _parent));
        _push(`</td><td>${ssrInterpolate(token.full_name)} <br> ${ssrInterpolate(token.sell_target)} ${ssrInterpolate(token.symbol)}</td><td>${ssrInterpolate(token.owner.name)} <br> ${ssrInterpolate(token.owner.email)}</td><td>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: token.company_logo,
          loading: "lazy",
          placeholder: "",
          class: "img-fluid img-thumbnail mb-1",
          width: "50px",
          alt: ""
        }, null, _parent));
        _push(`<br> ${ssrInterpolate(token.token_company)}</td><td>`);
        _push(ssrRenderComponent(_component_ElementsStatus, {
          status: token.stage_status,
          onText: "Running",
          offText: "Upcoming"
        }, null, _parent));
        _push(`</td><td>`);
        _push(ssrRenderComponent(_component_ElementsStatus, {
          status: token.status
        }, null, _parent));
        _push(`</td><td><div class="d-flex justify-content-between">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { path: `/dashboard/manage-tokens/${token.slug}/roadmap` },
          title: "Roadmap",
          class: "transparent-btn border-gradient"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-bezier-curve"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fas fa-bezier-curve" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { path: `/dashboard/manage-tokens/${token.slug}/edit` },
          title: "Edit",
          class: "transparent-btn border-gradient"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-edit"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fas fa-edit" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-tokens/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DUStqD-d.js.map
