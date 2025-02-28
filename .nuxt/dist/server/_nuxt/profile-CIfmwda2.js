import { _ as _sfc_main$2 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$3 } from "./Input-CYTDhVcw.js";
import { mergeProps, useSSRContext, watch, unref } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as useAuthStore } from "../server.mjs";
import "hookable";
import { u as useVForm } from "./useVForm-BndtwnoY.js";
import "vue-toastification";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import "ufo";
import "h3";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
import "deep-pick-omit";
import "vform";
const _sfc_main$1 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: "Submit"
    },
    type: {
      type: String,
      default: "submit"
    },
    processing: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group d-flex justify-content-end align-items-center g30" }, _attrs))} data-v-d1c9ec32><button type="submit"${ssrIncludeBooleanAttr(__props.processing) ? " disabled" : ""} class="gradient-btn" data-v-d1c9ec32>`);
      if (__props.processing) {
        _push(`<i class="fas fa-spinner fa-spin me-1" data-v-d1c9ec32></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.label)}</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormGroup/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d1c9ec32"]]);
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useVForm({
      name: "",
      username: "",
      email: "",
      phone: "",
      eth_address: ""
    });
    const authStore = useAuthStore();
    const { getUser: user } = storeToRefs(authStore);
    watch(user, (newUser) => {
      if (newUser) {
        form.fill(newUser);
      }
    }, { immediate: true });
    const passwordForm = useVForm({
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$2;
      const _component_FormGroupInput = _sfc_main$3;
      const _component_FormGroupButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Update Profile Information</h5></div></div><div class="card-line"></div><div class="custom-card-body"><div class="row gy-4"><div class="col-md-12"><div class="form-group"><div class="profile-view-status d-flex align-items-center g20"><div class="profile-lg-icon">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/dashboard/icon/user.png",
        loading: "lazy",
        placeholder: "",
        alt: "user"
      }, null, _parent));
      _push(`</div><div class="verify-btn"><div class="transparent-btn-sm border-gradient mt10"><span class="gradient-color"><i class="fa-solid fa-circle-check"></i> Verified LV.1 </span></div></div></div></div></div><form><div class="row gy-4">`);
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        error: unref(form).errors.get("name"),
        label: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(form).eth_address,
        "onUpdate:modelValue": ($event) => unref(form).eth_address = $event,
        error: unref(form).errors.get("eth_address"),
        label: "Wallet",
        readonly: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-4",
        modelValue: unref(form).username,
        "onUpdate:modelValue": ($event) => unref(form).username = $event,
        error: unref(form).errors.get("username"),
        label: "Username"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-4",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.get("email"),
        label: "Email Address"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-4",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        error: unref(form).errors.get("phone"),
        label: "Phone Number"
      }, null, _parent));
      _push(`<div class="card-footer">`);
      _push(ssrRenderComponent(_component_FormGroupButton, {
        processing: unref(form).busy,
        label: "Update Profile"
      }, null, _parent));
      _push(`</div></div></form><div class="card-line"></div><div class="table-heading"><h5>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/icon/launch.png",
        loading: "lazy",
        placeholder: "",
        alt: "icon"
      }, null, _parent));
      _push(` Update Your Password </h5></div><div class="dashboard-box"><form><div class="row gy-4">`);
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(passwordForm).password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
        type: "password",
        error: unref(passwordForm).errors.get("password"),
        label: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormGroupInput, {
        col: "col-md-6",
        modelValue: unref(passwordForm).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
        type: "password",
        error: unref(passwordForm).errors.get("password_confirmation"),
        label: "Confirm Password"
      }, null, _parent));
      _push(`<div class="custom-card-footer">`);
      _push(ssrRenderComponent(_component_FormGroupButton, {
        processing: unref(passwordForm).busy,
        label: "Update Password"
      }, null, _parent));
      _push(`</div></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-CIfmwda2.js.map
