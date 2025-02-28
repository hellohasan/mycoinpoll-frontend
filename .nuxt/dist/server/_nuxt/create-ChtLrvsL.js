import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./Input-CYTDhVcw.js";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useVForm } from "./useVForm-BndtwnoY.js";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "vue-toastification";
import "ufo";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
import "deep-pick-omit";
import "vform";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const form = useVForm({
      name: "",
      selectedPermissions: []
    });
    const permissionLists = ref([]);
    const { useOnlyFetch } = useApi();
    [__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-permissions", {
      method: "get",
      onResponse: ({ response }) => {
        permissionLists.value = response._data;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_FormGroupInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Create a New Role</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-role" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-list"${_scopeId}></i> Role List `);
          } else {
            return [
              createVNode("i", { class: "fas fa-list" }),
              createTextVNode(" Role List ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line"></div><form><div class="custom-card-body"><div class="row gy-4 mt-1">`);
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-12",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        error: unref(form).errors.get("name"),
        label: "Role Name",
        placeholder: "Enter role name"
      }, null, _parent));
      _push(`<div class="table-heading mt-20"><h5>Assign Permission</h5></div></div><div class="row gy-4 mt-1"><!--[-->`);
      ssrRenderList(unref(permissionLists), (permission) => {
        _push(`<div class="col-sm-6 col-lg-3 col-md-4"><div class="form-group"><input type="checkbox"${ssrRenderAttr("id", permission.id)} class="checkBox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).selectedPermissions) ? ssrLooseContain(unref(form).selectedPermissions, permission.id) : unref(form).selectedPermissions) ? " checked" : ""}${ssrRenderAttr("value", permission.id)}><label${ssrRenderAttr("for", permission.id)}>${ssrInterpolate(permission.name)} `);
        if (unref(form).selectedPermissions.includes(permission.id)) {
          _push(`<span><i class="fa-solid fa-check"></i></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label></div></div>`);
      });
      _push(`<!--]--></div><div class="card-line"></div><div class="custom-card-footer"><div class="form-group d-flex justify-content-end align-items-center g30"><button type="submit"${ssrIncludeBooleanAttr(unref(form).busy) ? " disabled" : ""} class="gradient-btn">`);
      if (unref(form).busy) {
        _push(`<i class="fas fa-spinner fa-spin me-1"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Create Role </button></div></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-role/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-ChtLrvsL.js.map
