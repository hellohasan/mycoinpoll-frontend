import { u as useVForm, _ as _sfc_main$1 } from "./useVForm-BdBdNnz_.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BZHva90P.js";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { useAppKitAccount } from "@reown/appkit/vue";
import { a as useAuthStore } from "../server.mjs";
import "vue-toastification";
import { u as useWeb3 } from "./useWeb3-E5-KkHx1.js";
import "hookable";
import { u as useApi } from "./useApi-CoUeKmPG.js";
import "vform";
import "ufo";
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
import "destr";
import "klona";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
import "./useToastAlert-BBJ771Vo.js";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { loginAction } = useAuthStore();
    const wallet = useAppKitAccount();
    useWeb3();
    const isLoadingWallet = ref(false);
    const walletText = ref("Connect Wallet");
    const form = useVForm({
      username: "",
      password: ""
    });
    useApi();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormGroupHasError = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "coin-details-hero-bg position-relative coin-details-hero-border custom-container" }, _attrs))}><div class="login-form ptb80"><div class="modal-custom-width page-modal-width"><div class="modal-content custom-modal"><form><div class="modal-header-area d-flex align-items-center justify-content-between"><h4 class="text-shadow">Log In</h4></div><div class="modal-body-inner"><div class="row gy-3"><div class="form-group col-md-12"><label for="username">Email or Username</label><div class="input bg-border-input"><input${ssrRenderAttr("value", unref(form).username)} type="text" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.has("username") }, "form-control"])}" id="username" placeholder="Enter email or username or Unique ID"></div>`);
      _push(ssrRenderComponent(_component_FormGroupHasError, {
        form: unref(form),
        field: "username"
      }, null, _parent));
      _push(`</div><div class="form-group col-md-12"><label for="password">Password</label><div class="input bg-border-input"><input${ssrRenderAttr("value", unref(form).password)} type="password" class="${ssrRenderClass([{ "is-invalid": unref(form).errors.has("password") }, "form-control"])}" id="password" placeholder="Enter valid password"></div>`);
      _push(ssrRenderComponent(_component_FormGroupHasError, {
        form: unref(form),
        field: "password"
      }, null, _parent));
      _push(`</div><div class="form-group col-md-12 d-flex align-items-center justify-content-between flex-wrap">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/forgot-password",
        class: "gradient-color"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgot Password?`);
          } else {
            return [
              createTextVNode("Forgot Password?")
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
      _push(` Login Now <span class="icon-rotate"><i class="fas fa-arrow-right"></i></span></button></div><div class="d-flex justify-content-center mt-20 mb20"><p class="modal-or-divider or-divider w-80">OR</p></div><div class="form-group col-md-12 m-0"><button type="button"${ssrIncludeBooleanAttr(unref(isLoadingWallet)) ? " disabled" : ""} class="btn1 primary-btn subscribe-btn w-100">`);
      if (unref(isLoadingWallet)) {
        _push(`<!--[--><i class="fas fa-spinner fa-spin me-1"></i> Processing for <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(walletText))} <span class="${ssrRenderClass({ "icon-rotate": unref(wallet).isConnected })}"><i class="${ssrRenderClass([unref(wallet).isConnected ? "fa-arrow-right" : "fa-wallet", "fa-solid"])}"></i></span></button></div>`);
      if (unref(wallet).isConnected) {
        _push(`<div class="form-group col-md-12"><button type="button" class="btn1 primary-btn subscribe-btn w-100"> Disconnect Wallet <span class="icon-rotate"><i class="fas fa-unlink"></i></span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-D5-_yHM4.js.map
