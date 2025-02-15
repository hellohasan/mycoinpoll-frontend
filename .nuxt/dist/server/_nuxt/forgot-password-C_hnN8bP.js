import { u as useVForm, _ as _sfc_main$1 } from "./useVForm-DEM93eEe.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-3pynsLqV.js";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "vue-toastification";
import "vform";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useVForm({
      unique_id: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroupHasError = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container"><div class="recover-form ptb80"><div class="modal-custom-width page-modal-width"><div class="modal-content custom-modal"><form><div class="modal-header-area d-flex align-items-center justify-content-between"><h4 class="text-shadow">Reset Your Password</h4></div><div class="modal-body-inner"><div class="row gy-3"><div class="form-group col-md-12"><label for="unique_id">Enter Unique ID:</label><div class="input bg-border-input"><input${ssrRenderAttr("value", unref(form).unique_id)} type="unique_id" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.has("unique_id") }, "form-control"])}" id="unique_id" placeholder="Enter Unique ID"></div>`);
      _push(ssrRenderComponent(_component_FormGroupHasError, {
        form: unref(form),
        field: "unique_id"
      }, null, _parent));
      _push(`</div><div class="form-group col-md-12 d-flex align-items-center justify-content-between flex-wrap">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/login",
        class: "gradient-color"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login Now?`);
          } else {
            return [
              createTextVNode("Login Now?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="form-group col-md-12"><button type="submit"${ssrIncludeBooleanAttr(unref(form).busy) ? " disabled" : ""} class="btn1 primary-btn subscribe-btn w-100">`);
      if (unref(form).busy) {
        _push(`<!--[--><i class="fas fa-spinner fa-spin me-1"></i> Processing for <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(` Send Reset Request <span class="icon-rotate"><i class="fas fa-arrow-right"></i></span></button></div></div></div></form></div></div></div></div><div class="roadmap1 circle-effect4"></div><div class="roadmap2 circle-effect-center"></div><div class="roadmap3 circle-effect5"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgot-password-C_hnN8bP.js.map
