import { _ as _sfc_main$3 } from "./NuxtImg-Cvt1lRnM.js";
import { ref, watch, unref, useSSRContext, computed, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useAppKitAccount } from "@reown/appkit/vue";
import { u as useWeb3, a as useUserTokenStore } from "./useWeb3-BYnZ8Zbm.js";
import { a as useAuthStore, e as useRuntimeConfig } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "sweetalert2";
/* empty css              */
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { u as useClipboard } from "./useClipboard-CEQhz5Du.js";
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
import "vue-toastification";
const _sfc_main$2 = {
  __name: "WalletChecker",
  __ssrInlineRender: true,
  setup(__props) {
    const wallet = useAppKitAccount();
    useWeb3();
    const multipleAccount = ref([]);
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    ref(false);
    watch(wallet, async (newValue) => {
      if (newValue.isConnected) ;
    }, { deep: true });
    useApi();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(wallet).isConnected) {
        _push(`<div class="user-notification-box-section mt30"><div class="user-notification-box warning-bg-notification flex-wrap d-flex align-items-center justify-content-between"><div class="notification-text-box d-flex"><div class="notification-icon yellow-color"><i class="fas fa-exclamation-triangle"></i></div><div class="notification-text"><h5>Wallet Not Connected</h5><p> This account not associate with any <span class="gradient-color">web3 wallet.</span> Please connect a wallet for next innovation. </p></div></div><a href="#" role="button" class="border-gradient btn3">Connect Wallet</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(multipleAccount).length) {
        _push(`<div class="user-notification-table warning-bg-notification mt30"><div class="notification-text-box d-flex"><div class="notification-icon yellow-color"><i class="fas fa-exclamation-triangle"></i></div><div class="notification-text"><h5>We got another ${ssrInterpolate(unref(multipleAccount).length)} account with this same wallet address. Please choose one and other account will be null.</h5></div></div><div class="common-table mt30"><table class="warning-table custom-table display nowrap mobile-table"><thead><tr><th>Unique ID</th><th>Username</th><th>Email</th><th>Action</th></tr></thead><tbody><tr><td>${ssrInterpolate(unref(user).unique_id)}</td><td>${ssrInterpolate(unref(user).username)}</td><td>${ssrInterpolate(unref(user).email)}</td><td class="text-center"><a href="#" role="button" class="gradient-btn-small"><i class="fas fa-link"></i> Select This </a></td></tr><!--[-->`);
        ssrRenderList(unref(multipleAccount), (ma) => {
          _push(`<tr><td>${ssrInterpolate(ma.unique_id)}</td><td>${ssrInterpolate(ma.username ?? "N/A")}</td><td>${ssrInterpolate(ma.email)}</td><td class="text-center"><a href="#" role="button" class="gradient-btn-small"><i class="fas fa-link"></i> Select This </a></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Dashboard/WalletChecker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TokenCard",
  __ssrInlineRender: true,
  props: {
    tokenId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const userTokenStore = useUserTokenStore();
    const token = userTokenStore.getTokenById(props.tokenId);
    const formattedBalance = computed(() => {
      if (token.balance === null) return "";
      return (Number(token.balance) / Math.pow(10, 18)).toFixed(4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-coin-balance d-flex align-items-center" }, _attrs))}><div class="coin-balance-logo text-center"><img${ssrRenderAttr("src", unref(token).logo)} alt="icon"></div><div class="coin-balance-info"><h6>${ssrInterpolate(unref(token).name)}</h6>`);
      if (unref(token).balance !== null) {
        _push(`<h6><span>${ssrInterpolate(unref(formattedBalance))}</span><sup>${ssrInterpolate(unref(token).symbol)}</sup></h6>`);
      } else {
        _push(`<p>Loading balance...</p>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Partials/TokenCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    const referralLink = computed(() => {
      return `${config.public.appUrl}/?ref=${user.value.unique_id}`;
    });
    const { copyNow } = useClipboard();
    const copyReferralLink = async () => {
      copyNow(referralLink.value);
    };
    const userTokenStore = useUserTokenStore();
    const { tokens } = storeToRefs(userTokenStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_img = _sfc_main$3;
      const _component_BackendDashboardWalletChecker = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_0;
      const _component_BackendPartialsTokenCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="user-info-overview-box d-flex align-items-center justify-content-between mt30"><div class="user-info-text"><h4>Hi, ${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.name)}!</h4><h6>Username: ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.username)}</h6><h6> Wallet: <span class="text-content">${ssrInterpolate(((_c = unref(user)) == null ? void 0 : _c.eth_address) || "N/A")}</span></h6></div></div><div class="user-notification-box-section mt30"><div class="user-notification-box warning-bg-notification flex-wrap d-flex align-items-center justify-content-between"><div class="notification-text-box d-flex"><div class="notification-icon yellow-color"><i class="fas fa-info-circle"></i></div><div class="notification-text"><h5>Under Development</h5><p class="gradient-color">We are currently working on Version 3 to provide you with a better experience. Stay tuned for exciting updates!</p></div></div></div></div><div class="refer-link-box mt30"><div class="input bg-border-input"><div class="refer-link-box-inner p30"><div class="input bg-border-input"><div class="refer-link-box-inner d-flex align-items-center g30 position-relative"><p>Referral Link :</p><input type="text" id="refer-url" readonly${ssrRenderAttr("value", unref(referralLink))}>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/dashboard/icon/copy.png",
        alt: "copy",
        width: "30",
        onClick: copyReferralLink
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_BackendDashboardWalletChecker, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="user-coin-balance-box mt30"><div class="row gy-4"><!--[-->`);
      ssrRenderList(unref(tokens), (token) => {
        _push(`<div class="col-xxl-4 col-xl-6">`);
        _push(ssrRenderComponent(_component_BackendPartialsTokenCard, {
          tokenId: token.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BpFsp-zi.js.map
