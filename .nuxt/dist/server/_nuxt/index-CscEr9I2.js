import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useFilters } from "./useFilters-BzlsH-OH.js";
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
    const { formatDate } = useFilters();
    const { useOnlyFetch } = useApi();
    const roles = ref([]);
    const { pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-roles", {
      onResponse({ response }) {
        roles.value = response._data;
      }
    })), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Roles</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-role-create" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-plus"${_scopeId}></i> Create Role `);
          } else {
            return [
              createVNode("i", { class: "fas fa-plus" }),
              createTextVNode(" Create Role ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Roles List</h5></div><div class="search-box-area"><form><div class="input bg-border-input position-relative"><div class="search-icon"><i class="search-icon fas fa-search"></i></div><input${ssrRenderAttr("value", unref(searchQuery))} type="search" class="form-control" id="search" placeholder="Search here"></div></form></div></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Role Name</th><th>User Count</th><th>Permissions</th><th>Date Created</th><th>Action</th></tr></thead><tbody>`);
      if (unref(roles) && unref(roles).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(roles), (role, i) => {
          _push(`<tr><td>${ssrInterpolate(i + 1)}</td><td>${ssrInterpolate(role.name)}</td><td>${ssrInterpolate(role.users_count)}</td><td>${ssrInterpolate(role.permissions_count)} &#39;s</td><td>${ssrInterpolate(unref(formatDate)(role.created_at))}</td><td><ul class="d-flex align-items-center action-group justify-content-center"><li>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: { name: "dashboard-manage-role-edit", query: { id: role.id } }
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
          _push(`</li><li><button type="button" class="bg-transparent"><i class="fa-solid fa-trash-can red"></i></button></li></ul></td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<tr><td colspan="100%" class="text-center">No data found!</td></tr>`);
      }
      _push(`</tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-role/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CscEr9I2.js.map
