import { _ as __nuxt_component_0 } from "./nuxt-link-BZHva90P.js";
import { _ as _sfc_main$3 } from "./NuxtImg-CxsfQNta.js";
import { mergeProps, withCtx, createVNode, useSSRContext, computed, ref, watch, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { d as useRouter, a as useAuthStore, l as useCookie, c as useRoute, _ as _export_sfc } from "../server.mjs";
import { u as useWeb3 } from "./useWeb3-E5-KkHx1.js";
import { u as useApi } from "./useApi-CoUeKmPG.js";
import { useAppKitAccount } from "@reown/appkit/vue";
import "ufo";
import "defu";
import "h3";
import "ofetch";
import "hookable";
import "unctx";
import "pinia";
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
import "vue-toastification";
const _imports_0 = publicAssetsURL("/images/logo.png");
const _imports_1 = publicAssetsURL("/images/dashboard/icon/small-logo.png");
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFR3BMv8PPwMfQv8TPvsXSvsXSv8fTvcXRv8bSv8fSv8bSv8bS2sOdggAAAAt0Uk5TABAgN1xwf4CPweK0T4kRAAAAhElEQVR42l3PSw7EIAwDUOcHJb7/fQdFpWLyVpE3jnFE5kCj3KSFxs1aKEkmOp0haHwll+PPw7JwEb6k1ZC9SrTIldTtUfc3kAPAnAAGGV+JoUKrsrPaYSsNzk2xLTIl0jRd8vs1psAVUIdGVDQWmUOxyUjW2Od6O89YvhRQvnAGyjX2B8ZwBlNhgj8BAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFR3BMv7/Pv8XPv8PPvcbSvMLSvsXSv8fTv8XRvsbSv8fSv8fTv8bSv8bSv8bSv8bSzxGrwwAAAA90Uk5TABAhQFBQaX+Am7C/z9/vXQOYGQAAAI5JREFUeNqFkEkOwzAMA70kjpfI8//f1ghlFGgP4YXQyKQAh61jWgq/umH8QQN7h2eJgrGUzS4Ygh0usQJMwQkcu40qWPHmE7j3oQHkBZvcnlUGWtBSzXUZ0L8wpBQEh8djcCWgK0cV0lCWR2AmfziBFDxvRd+n40vRAGz0+fgOGZIzpx3XEJNyu8Fa1vQBMCAJ1/qRDcMAAAAASUVORK5CYII=";
const useAuthHelper = () => {
  const router = useRouter();
  const { clearUser, authenticated } = useAuthStore();
  const { disconnect } = useWeb3();
  const { useOnlyFetch } = useApi();
  const logout = async () => {
    if (authenticated) {
      await useOnlyFetch("/auth/logout", { method: "POST" });
      clearUser();
      await disconnect();
      useCookie("authentication").value = null;
      router.push("/auth/login");
    }
  };
  return {
    logout
  };
};
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthHelper();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dashboard-left position-relative",
        "data-simplebar": "",
        style: { "height": "calc(100svh - 60px)" }
      }, _attrs))}><div class="logo mb40">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "index" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-100"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "w-100"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="logo2 mb40">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "index" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo" class="w-100"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "logo",
                class: "w-100"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="dashboard-left-menu"><ul><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard" },
        "active-class": "menu-active-bg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/dashboard/icon/dashboard.png",
              alt: "icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="left-menu-text"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "/images/dashboard/icon/dashboard.png",
                alt: "icon"
              }),
              createVNode("span", { class: "left-menu-text" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-transactions" },
        "active-class": "menu-active-bg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/dashboard/icon/transactions.png",
              alt: "icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="left-menu-text"${_scopeId}>Transactions</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "/images/dashboard/icon/transactions.png",
                alt: "icon"
              }),
              createVNode("span", { class: "left-menu-text" }, "Transactions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-ico" },
        "active-class": "menu-active-bg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/dashboard/icon/ico.png",
              alt: "icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="left-menu-text"${_scopeId}>ECM ICO</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "/images/dashboard/icon/ico.png",
                alt: "icon"
              }),
              createVNode("span", { class: "left-menu-text" }, "ECM ICO")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-referrals" },
        "active-class": "menu-active-bg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="icon"${_scopeId}><span class="left-menu-text"${_scopeId}>Referral User</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "icon"
              }),
              createVNode("span", { class: "left-menu-text" }, "Referral User")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" role="button"><img${ssrRenderAttr("src", _imports_3)} alt="icon"><span class="left-menu-text">Logout</span></a></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Partials/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const pageTitle = computed(() => {
      return route.meta.title || "Current Page";
    });
    useWeb3();
    const wallet = useAppKitAccount();
    const walletText = ref("Connect Wallet");
    const { logout } = useAuthHelper();
    watch(wallet, async (newValue) => {
      if (newValue.address) {
        try {
          walletText.value = formatAddress(newValue.address);
        } catch (error) {
        }
      } else {
        walletText.value = "Connect Wallet";
      }
      if ((newValue == null ? void 0 : newValue.status) == "disconnected") {
        await logout();
      }
    }, { deep: true });
    const formatAddress = (address) => {
      if (!address) return "";
      return `${address.slice(0, 4)}...${address.slice(-4)}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-right-header-area d-flex align-items-center justify-content-between" }, _attrs))}><div class="page-info d-flex align-items-center"><div class="resize-icon"><i class="fa-solid fa-expand"></i></div><h5 class="page-title">${ssrInterpolate(unref(pageTitle))}</h5></div><div class="dashboard-header-right"><div class="d-flex align-items-center dashboard-header-right-group"><div role="button" class="text-btn d-flex align-items-center border-gradient">${ssrInterpolate(unref(walletText))} <span>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/icon/wallet.png",
        loading: "lazy",
        placeholder: "",
        width: "30",
        alt: "icon"
      }, null, _parent));
      _push(`</span></div><div class="profile-mini-icon">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "dashboard-profile" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/dashboard/icon/user.png",
              width: "50",
              height: "50",
              placeholder: "",
              alt: "user"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "/images/dashboard/icon/user.png",
                width: "50",
                height: "50",
                placeholder: "",
                alt: "user"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Partials/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackendPartialsSidebar = _sfc_main$2;
  const _component_BackendPartialsHeader = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="ellipse ellipse1"></div><div class="ellipse ellipse2"></div><div class="ellipse ellipse3"></div><div class="dashboard-main-area"><div class="dashboard-area d-flex align-items-start">`);
  _push(ssrRenderComponent(_component_BackendPartialsSidebar, null, null, _parent));
  _push(`<div class="dashboard-right">`);
  _push(ssrRenderComponent(_component_BackendPartialsHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><div class="copyright-box d-flex align-items-center justify-content-center"><p> © <a href="#" class="gradient-color">2024 MyCoinPoll.com All Rights Reserved.</a></p><p class="gradient-color">V3.0.6</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/backend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backend = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  backend as default
};
//# sourceMappingURL=backend-Ed05gp_L.js.map
