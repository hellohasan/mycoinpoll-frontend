import { _ as _sfc_main$1 } from "./Input-CYTDhVcw.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useVForm } from "./useVForm-BndtwnoY.js";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "vue-toastification";
import "vform";
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
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const form = useVForm({
      name: "",
      selectedRoles: [],
      group_name: "",
      crud: ""
    });
    const { useOnlyFetch } = useApi();
    const { data: roleLists } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-roles")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroupInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Create New Permission</h5></div></div><form><div class="row gy-4 mt-1">`);
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        error: unref(form).errors.get("name"),
        label: "Permission Name",
        placeholder: "Enter permission name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(form).group_name,
        "onUpdate:modelValue": ($event) => unref(form).group_name = $event,
        error: unref(form).errors.get("group_name"),
        label: "Permission Group",
        placeholder: "Enter permission Group"
      }, null, _parent));
      _push(`<div class="form-group"><div class="form-check ml-2 mb-2"><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(unref(form).crud) ? ssrLooseContain(unref(form).crud, null) : unref(form).crud) ? " checked" : ""} name="crud" id="exampleCheck1"><label class="form-check-label text-white" for="exampleCheck1">Check me out for ( *-create *-store *-edit *-update *-destroy )</label></div></div></div><div class="table-heading mt-20"><h5>Assign Role</h5></div><div class="line-1 mt-15"></div><div class="row gy-4 mt-1"><!--[-->`);
      ssrRenderList(unref(roleLists), (role) => {
        _push(`<div class="col-sm-6 col-lg-3 col-md-4"><div class="form-group"><input type="checkbox"${ssrRenderAttr("id", role.id)} class="checkBox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).selectedRoles) ? ssrLooseContain(unref(form).selectedRoles, role.id) : unref(form).selectedRoles) ? " checked" : ""}${ssrRenderAttr("value", role.id)}><label${ssrRenderAttr("for", role.id)}>${ssrInterpolate(role.name)} `);
        if (unref(form).selectedRoles.includes(role.id)) {
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
      _push(` Create Permission </button></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-permissions/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-Ckjte6MG.js.map
