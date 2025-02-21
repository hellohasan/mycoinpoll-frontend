import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Skeletor } from "vue-skeletor";
import { b as useRuntimeConfig, a as useAuthStore, _ as _export_sfc } from "../server.mjs";
import { u as useFetch } from "./useToastAlert-BBJ771Vo.js";
import { useAppKitAccount } from "@reown/appkit/vue";
import { defineStore, storeToRefs } from "pinia";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useClipboard } from "./useClipboard-scHTkX45.js";
import { _ as _sfc_main$5 } from "./NuxtImg-CxsfQNta.js";
import { u as useWeb3 } from "./useWeb3-E5-KkHx1.js";
import "vue-toastification";
const _sfc_main$4 = {
  __name: "IcoInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const ecmContactAddress = ref("");
    const config = useRuntimeConfig();
    const { data, pending: isLoading } = useFetch(`${config.public.apiBase}/get-ecm-info`, {
      onResponse: ({ response }) => {
        ecmContactAddress.value = response._data.contract_address;
      }
    }, "$NxkBcRfFAk");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ecm-left-side" }, _attrs))}><div class="section-heading"><h3 class="text-shadow">Unlocking eCommerce Potential with Digital Coin Solutions</h3><p>Explore the ECM Cloud for Seamless eCommerce Integration, Unlocking Innovative Tools to Elevate your Metaverse Experience.</p></div><div class="ecm-address mt40"><h5>ECM Contact Address</h5>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          class: "bordered",
          height: "30px",
          pill: ""
        }, null, _parent));
      } else {
        _push(`<p>${ssrInterpolate(unref(ecmContactAddress))}</p>`);
      }
      _push(`</div><ul class="d-flex align-items-center mt40 g30 flex-wrap"><li><a role="button" class="btn1 primary-btn">White Paper</a></li><li><a href="https://ecmcoin.com" target="_blank" class="btn2 primary-btn">Official Website</a></li></ul></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcmPurchase/IcoInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useReferralStore = defineStore("referral", {
  state: () => ({
    referral: "0x0000000000000000000000000000000000000000"
  }),
  actions: {
    updateReferral(value) {
      this.referral = value;
    }
  }
});
const _sfc_main$3 = {
  __name: "Referral",
  __ssrInlineRender: true,
  setup(__props) {
    const wallet = useAppKitAccount();
    const store = useReferralStore();
    const authStore = useAuthStore();
    const { authenticated, user } = storeToRefs(authStore);
    const referralLink = ref("");
    useClipboard();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(wallet).isConnected) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column g-10 mt-20" }, _attrs))}><div class="address-text input-group d-flex align-items-center secondary-btn-sm"><span class="gradient-color" id="wallet_address">Your Address:</span><input type="text" class="form-control"${ssrRenderAttr("value", unref(wallet).address)} readonly="" id="wallet_address" placeholder="Your Address"></div>`);
        if (unref(referralLink)) {
          _push(`<div class="address-text input-group d-flex align-items-center position-relative secondary-btn-sm"><span class="gradient-color" id="referral_link">Referral Link:</span><input type="text" class="form-control"${ssrRenderAttr("value", unref(referralLink))} readonly="" id="referral_link" placeholder="Referral Link"><button class="text-copy-btn" type="button" id="referred_by"><i class="far fa-copy"></i></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="address-text input-group d-flex align-items-center secondary-btn-sm"><span class="gradient-color" id="referred_by">Referred By:</span><input type="text" class="form-control"${ssrRenderAttr("value", unref(store).referral)} id="referred_by" placeholder="Enter Referred By Wallet"></div><div class="line-divider2 w-100 mb20 mt10"></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcmPurchase/Referral.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CACHE_DURATION_MS = 3 * 60 * 1e3;
const useStageDataStore = defineStore("stageData", {
  state: () => ({
    currentStage: {
      index: null,
      price: "",
      usdtPrice: "",
      target: null,
      tokensSold: null,
      percentageSold: null
    },
    isStageLoading: false,
    lastUpdated: null
  }),
  getters: {
    isDataStale() {
      if (!this.lastUpdated) return true;
      const now = (/* @__PURE__ */ new Date()).getTime();
      return now - this.lastUpdated > CACHE_DURATION_MS;
    }
  },
  actions: {
    async fetchStageData(forceLoad = false) {
      return;
    },
    async forceLoadStageData() {
      await this.fetchStageData(true);
    }
  },
  persist: true
});
const _sfc_main$2 = {
  __name: "IcoStat",
  __ssrInlineRender: true,
  setup(__props) {
    const stageDataStore = useStageDataStore();
    const { currentStage: stageData, isStageLoading } = storeToRefs(stageDataStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EcmPurchaseReferral = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ecm-right-header" }, _attrs))}><ul class="d-flex align-items-center justify-content-between flex-wrap">`);
      if (unref(isStageLoading)) {
        _push(`<!--[--><li>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "215",
          height: "30",
          pill: ""
        }, null, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "180",
          height: "30",
          pill: ""
        }, null, _parent));
        _push(`</li><!--]-->`);
      } else {
        _push(`<!--[--><li>Stage ${ssrInterpolate(unref(stageData).index)}: ${ssrInterpolate(unref(stageData).tokensSold)} ECM</li><li>Max: ${ssrInterpolate(unref(stageData).target)} ECM</li><!--]-->`);
      }
      _push(`</ul><div class="ico-progress">`);
      if (unref(isStageLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "30",
          pill: ""
        }, null, _parent));
      } else {
        _push(`<div class="progress"><div class="progress-bar align-items-end" role="progressbar" style="${ssrRenderStyle({ width: unref(stageData).percentageSold + "%" })}"${ssrRenderAttr("aria-valuenow", unref(stageData).percentageSold)} aria-valuemin="0" aria-valuemax="100"><span>${ssrInterpolate(unref(stageData).percentageSold)}%</span></div></div>`);
      }
      _push(`</div><div class="line-divider2 w-100 mt-20 mb20"></div>`);
      if (unref(isStageLoading)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100%",
          height: "52"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100%",
          height: "52",
          class: "mt-2"
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_EcmPurchaseReferral, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcmPurchase/IcoStat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  name: "IxDisconnected"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" fillRule="evenodd" d="m109.72 221.26l37.711 37.712l25.065-25.064l30.17 30.17l-25.065 25.064l45.255 45.255l25.065-25.064l30.17 30.17l-25.065 25.064l37.713 37.712l-30.17 30.17l-15.085-15.085c-36.49 36.49-92.839 41.015-134.255 13.577l-36.25 36.247l-30.169-30.17l36.248-36.249c-27.438-41.416-22.913-97.765 13.577-134.255L79.55 251.43zM89.75 59.58l362.668 362.668l-30.17 30.17L59.58 89.75zm35.055 237.104c-24.994 24.994-24.994 65.516 0 90.51c24.1 24.1 62.641 24.962 87.773 2.582l2.736-2.582zM437.019 44.81l30.17 30.17l-46.915 46.916c27.438 41.416 22.913 97.765-13.577 134.255l15.085 15.085l-30.17 30.17l-181.02-181.02l30.17-30.17l15.086 15.085c36.49-36.49 92.839-41.015 134.254-13.576zm-148.266 88.079l-2.735 2.582l89.377 89.377c17.735-26.918 22.652-67.857 1.132-89.377c-24.1-24.1-62.641-24.961-87.774-2.582"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Disconnect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const wallet = useAppKitAccount();
    useWeb3();
    const isPurchaseProcessing = ref(false);
    const walletText = ref("Buy ECM");
    const stageDataStore = useStageDataStore();
    const { currentStage: stageData, isStageLoading } = storeToRefs(stageDataStore);
    const referralStore = useReferralStore();
    const { referral: purchaseReferral } = storeToRefs(referralStore);
    const ecm = ref("");
    const eth = ref("");
    const usdt = ref("");
    const trxHash = ref("");
    const activeTab = ref("eth-coin-form");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EcmPurchaseIcoInfo = _sfc_main$4;
      const _component_EcmPurchaseIcoStat = _sfc_main$2;
      const _component_nuxt_img = _sfc_main$5;
      const _component_IconsDisconnect = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row align-items-center" }, _attrs))}><div class="col-xl-6">`);
      _push(ssrRenderComponent(_component_EcmPurchaseIcoInfo, null, null, _parent));
      _push(`</div><div class="col-xl-6"><div class="ecm-right-box">`);
      _push(ssrRenderComponent(_component_EcmPurchaseIcoStat, null, null, _parent));
      _push(`<div class="ecm-form mt15">`);
      if (unref(isStageLoading)) {
        _push(`<h4 class="mb20">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "36",
          pill: "",
          class: "mt-2"
        }, null, _parent));
        _push(`</h4>`);
      } else {
        _push(`<h4 class="mb20">ICO is Live</h4>`);
      }
      _push(`<div class="ico-tab mb20">`);
      if (unref(isStageLoading)) {
        _push(`<div class="d-flex align-items-center g-20">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "50%",
          as: "div",
          height: "54",
          pill: ""
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "50%",
          as: "div",
          height: "54",
          pill: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<ul class="d-flex align-items-center g-20"><li class="${ssrRenderClass([{ active: unref(activeTab) === "eth-coin-form" }, "ico-tab-btn gradient-btn w-50"])}">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/eth.png",
          loading: "lazy",
          alt: "eth"
        }, null, _parent));
        _push(` Buy with ETH <span class="ico-tab-select-icon"><i class="fa-solid fa-circle-check"></i></span></li><li class="${ssrRenderClass([{ active: unref(activeTab) === "usdt-coin-form" }, "ico-tab-btn gradient-btn w-50"])}">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/usdt.png",
          alt: "ecm"
        }, null, _parent));
        _push(` Buy with USDT <span class="ico-tab-select-icon"><i class="fa-solid fa-circle-check"></i></span></li></ul>`);
      }
      _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === "eth-coin-form" ? null : { display: "none" })}" class="ico-tab-content">`);
      if (unref(isStageLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "30",
          pill: "",
          class: "mb-4"
        }, null, _parent));
      } else {
        _push(`<ul class="d-flex justify-content-center mt-1 mb20"><li class="text-white">1 ECM = ${ssrInterpolate(unref(stageData).price)} ETH</li></ul>`);
      }
      _push(`<div class="subscribe-form">`);
      if (unref(isStageLoading)) {
        _push(`<!--[-->`);
        ssrRenderList(3, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            key: i,
            class: "mt-2",
            height: "55"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<form><div class="subscribe-email mb20 d-flex align-items-center mw-100">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/ecm.png",
          alt: "icon"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", unref(ecm))} type="text" placeholder="ECM Amount"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " readonly" : ""}></div><div class="subscribe-email mb20 d-flex align-items-center mw-100">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/eth.png",
          alt: "icon"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", unref(eth))} type="text" placeholder="ETH Payable"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " readonly" : ""}></div>`);
        if (unref(wallet).isConnected) {
          _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " disabled" : ""} class="btn1 primary-btn submit-btn w-100 mb20"><i style="${ssrRenderStyle(unref(isPurchaseProcessing) ? null : { display: "none" })}" class="fa fa-spinner fa-spin me-1"></i> ${ssrInterpolate(unref(walletText))}</button>`);
        } else {
          _push(`<button type="button" class="btn1 primary-btn submit-btn w-100 mb20">${ssrInterpolate(unref(walletText))}</button>`);
        }
        _push(`</form>`);
      }
      _push(`</div></div><div style="${ssrRenderStyle(unref(activeTab) === "usdt-coin-form" ? null : { display: "none" })}" class="ico-tab-content">`);
      if (unref(isStageLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "30",
          pill: "",
          class: "mb-4"
        }, null, _parent));
      } else {
        _push(`<ul class="d-flex justify-content-center mt-1 mb20"><li class="text-white">1 ECM = ${ssrInterpolate(unref(stageData).usdtPrice)} USDT</li></ul>`);
      }
      _push(`<div class="subscribe-form">`);
      if (unref(isStageLoading)) {
        _push(`<!--[-->`);
        ssrRenderList(3, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            key: i,
            class: "mt-2",
            height: "55"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<form><div class="subscribe-email mb20 d-flex align-items-center mw-100">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/ecm.png",
          alt: "icon"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", unref(ecm))} type="text" placeholder="ECM Amount"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " readonly" : ""}></div><div class="subscribe-email mb20 d-flex align-items-center mw-100">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/icon/usdt.png",
          alt: "icon"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", unref(usdt))} type="text" placeholder="USDT Payable"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " readonly" : ""}></div>`);
        if (unref(wallet).isConnected) {
          _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " disabled" : ""} class="btn1 primary-btn submit-btn w-100 mb20"><i style="${ssrRenderStyle(unref(isPurchaseProcessing) ? null : { display: "none" })}" class="fa fa-spinner fa-spin me-1"></i> ${ssrInterpolate(unref(walletText))}</button>`);
        } else {
          _push(`<button type="button" class="btn1 primary-btn submit-btn w-100 mb20">${ssrInterpolate(unref(walletText))}</button>`);
        }
        _push(`</form>`);
      }
      _push(`</div></div></div>`);
      if (unref(isStageLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), { height: "55" }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(trxHash)) {
          _push(`<a${ssrRenderAttr("href", `https://etherscan.io/tx/${unref(trxHash)}`)} target="_blank" class="green-outline-btn d-flex align-items-center justify-content-between mt-20"><span class="gradient-color"><b>Hash:</b></span><span class="clip-text">${ssrInterpolate(unref(trxHash))}</span><span class="text-copy-btn rotate-50"><i class="fa-solid fa-arrow-right-long"></i></span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`<div class="${ssrRenderClass(["mt-3", { "text-center": !unref(isStageLoading) }])}">`);
      if (unref(isStageLoading)) {
        _push(ssrRenderComponent(unref(Skeletor), { height: "55" }, null, _parent));
      } else if (unref(wallet).isConnected) {
        _push(`<button type="button" class="red-outline-btn w-100 d-flex justify-content-center align-items-center mt-20"${ssrIncludeBooleanAttr(unref(isPurchaseProcessing)) ? " disabled" : ""}> Disconnect `);
        _push(ssrRenderComponent(_component_IconsDisconnect, null, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcmPurchase/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Index-hNYKr6d5.js.map
