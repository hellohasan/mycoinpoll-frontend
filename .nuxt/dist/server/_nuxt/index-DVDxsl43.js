import { _ as _sfc_main$2 } from "./NuxtImg-CxsfQNta.js";
import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { defineStore, storeToRefs } from "pinia";
import { s as storages, b as useRuntimeConfig, a as useAuthStore } from "../server.mjs";
import { u as useApi } from "./useApi-CoUeKmPG.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useClipboard } from "./useClipboard-scHTkX45.js";
import "ufo";
import "h3";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
import "./useToastAlert-BBJ771Vo.js";
import "vue-toastification";
const EXPIRATION_TIME = 3 * 60 * 1e3;
const useUserTokenStore = defineStore("userToken", {
  state: () => ({
    tokens: [],
    isLoading: false,
    error: null,
    expirationTime: null
  }),
  getters: {
    getTokenById: (state) => (id) => state.tokens.find((token) => token.id === id),
    isDataExpired: (state) => {
      return !state.expirationTime || Date.now() >= state.expirationTime;
    },
    userETHAddress() {
      var _a;
      const authStore = useAuthStore();
      return ((_a = authStore.user) == null ? void 0 : _a.eth_address) || "";
    }
  },
  actions: {
    async fetchFeatureTokens() {
      if (!this.isDataExpired) return;
      const { myFetch } = useApi();
      this.isLoading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const data = await myFetch(`${config.public.apiBase}/feature-tokens`);
        const tokensWithBalances = await Promise.all(
          data.map(async (token) => {
            const balance = await this.fetchTokenBalance(token);
            return {
              ...token,
              balance
            };
          })
        );
        this.tokens = tokensWithBalances;
        this.setExpirationTime();
      } catch (error) {
        this.error = "Failed to fetch feature tokens";
      } finally {
        this.isLoading = false;
      }
    },
    async fetchTokenBalance(token) {
      if (!this.userETHAddress) return 0;
      if (token.contract_address == null) return 0;
      const { myFetch } = useApi();
      try {
        const data = await myFetch(`token-balance/${token.contract_address}/${this.userETHAddress}`);
        return data.balance;
      } catch (error) {
      }
    },
    setExpirationTime() {
      this.expirationTime = Date.now() + EXPIRATION_TIME;
    },
    resetIfExpired() {
      if (this.isDataExpired) {
        this.tokens = [];
        this.expirationTime = null;
        this.fetchFeatureTokens();
      }
    }
  },
  persist: {
    storage: storages.localStorage(),
    beforeRestore: (context) => {
      context.store.resetIfExpired();
    }
  }
});
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
      const _component_nuxt_img = _sfc_main$2;
      const _component_BackendPartialsTokenCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="user-info-overview-box d-flex align-items-center justify-content-between mt30"><div class="user-info-text"><h4>Hi, ${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.name)}!</h4><h6>Username: ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.username)}</h6><h6> Wallet: <span class="text-content">${ssrInterpolate(((_c = unref(user)) == null ? void 0 : _c.eth_address) || "N/A")}</span></h6></div></div><div class="user-notification-box-section mt30"><div class="user-notification-box warning-bg-notification flex-wrap d-flex align-items-center justify-content-between"><div class="notification-text-box d-flex"><div class="notification-icon yellow-color"><i class="fas fa-info-circle"></i></div><div class="notification-text"><h5>Under Development</h5><p class="gradient-color">We are currently working on Version 3 to provide you with a better experience. Stay tuned for exciting updates!</p></div></div></div></div><div class="refer-link-box mt30"><div class="input bg-border-input"><div class="refer-link-box-inner p30"><div class="input bg-border-input"><div class="refer-link-box-inner d-flex align-items-center g30 position-relative"><p>Referral Link :</p><input type="text" id="refer-url" readonly${ssrRenderAttr("value", unref(referralLink))}>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/dashboard/icon/copy.png",
        alt: "copy",
        width: "30",
        onClick: copyReferralLink
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="user-coin-balance-box mt30"><div class="row gy-4"><!--[-->`);
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
//# sourceMappingURL=index-DVDxsl43.js.map
