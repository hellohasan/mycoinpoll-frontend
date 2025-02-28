import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as __nuxt_component_0$1 } from "./client-only-Bwxzq3Sq.js";
import { ref, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useAppKitAccount } from "@reown/appkit/vue";
import { u as useWeb3 } from "./useWeb3-BYnZ8Zbm.js";
import "hookable";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "vue-toastification";
import { _ as _export_sfc } from "../server.mjs";
import "defu";
import "ufo";
import "h3";
import "pinia";
import "ohash";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "destr";
import "klona";
import "deep-pick-omit";
const _sfc_main = {
  __name: "staking",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useAppKitAccount();
    useWeb3();
    const ecm = ref(0);
    const amount = ref(0);
    const duration = ref(0);
    const percentage = ref(0);
    ref(0);
    const estimate_profit = ref(0);
    const estimate_total = ref(0);
    const trxHash = ref(null);
    const { useOnlyFetch } = useApi();
    const { data: plans } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-staking-plans")), __temp = await __temp, __restore(), __temp);
    const { data: history, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-staking-history")), __temp = await __temp, __restore(), __temp);
    const unlockDate = () => {
      if (!duration.value) return "-";
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() + duration.value);
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "long" });
      const year = date.getFullYear();
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      const suffix = ["th", "st", "nd", "rd"][day % 10 > 3 ? 0 : (day % 100 - day % 10 != 10) * (day % 10)];
      return `${day}${suffix}, ${month} ${year} ${hours}:${minutes} ${ampm}`;
    };
    watch([amount, percentage, duration], () => {
      if (amount.value > 0 && duration.value > 0 && percentage.value > 0) {
        const profitValue = parseFloat(amount.value) * percentage.value / 100;
        estimate_profit.value = Number(profitValue.toFixed(3));
        estimate_total.value = Number((parseFloat(amount.value) + profitValue).toFixed(3));
      } else {
        estimate_profit.value = 0;
        estimate_total.value = 0;
      }
    }, { immediate: true });
    const btnText = ref("Stake Now");
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))} data-v-efd39d73><div class="staking-section" data-v-efd39d73><div class="row" data-v-efd39d73><div class="col-md-12" data-v-efd39d73><form action="" data-v-efd39d73><div class="d-flex h-100 justify-content-between g-20 flex-xl-nowrap flex-wrap" data-v-efd39d73><div class="staking-header-item" data-v-efd39d73><div class="taking-value-area d-flex align-items-center g-10 justify-content-between" data-v-efd39d73><div class="staking-value d-flex align-items-center g-10" data-v-efd39d73>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/icon/ecm.png",
        loading: "lazy",
        placeholder: "",
        "placeholder-class": "rounded-circle",
        alt: "ecm-logo"
      }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("value", unref(amount))} placeholder="Enter ECM amount" data-v-efd39d73></div><div class="balance" data-v-efd39d73><p data-v-efd39d73>Balance</p><p data-v-efd39d73><span data-v-efd39d73>${ssrInterpolate(unref(ecm))}</span> ECM </p></div></div><div class="d-flex align-items-center mt-3 g-20 flex-wrap" data-v-efd39d73><div class="form-group" data-v-efd39d73><div class="staking-days-select-btn bg-border-input" data-v-efd39d73><input type="radio" id="one" class="public-radio" name="stakingPercentage" value="1" data-v-efd39d73><label for="one" data-v-efd39d73> 25% <span data-v-efd39d73></span></label></div></div><div class="form-group" data-v-efd39d73><div class="bg-border-input staking-days-select-btn" data-v-efd39d73><input type="radio" id="two" class="public-radio" name="stakingPercentage" value="2" data-v-efd39d73><label for="two" data-v-efd39d73> 50% <span data-v-efd39d73></span></label></div></div><div class="form-group" data-v-efd39d73><div class="bg-border-input staking-days-select-btn" data-v-efd39d73><input type="radio" id="three" class="public-radio" name="stakingPercentage" value="3" data-v-efd39d73><label for="three" data-v-efd39d73> 75% <span data-v-efd39d73></span></label></div></div><div class="form-group" data-v-efd39d73><div class="bg-border-input staking-days-select-btn" data-v-efd39d73><input type="radio" id="four" class="public-radio" name="stakingPercentage" value="4" data-v-efd39d73><label for="four" data-v-efd39d73> Max <span data-v-efd39d73></span></label></div></div></div></div><div class="staking-header-item" data-v-efd39d73><div class="taking-value-area d-flex align-items-center g-10 justify-content-between" data-v-efd39d73><div class="staking-value d-flex align-items-center g-10" data-v-efd39d73>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/icon/timer.png",
        loading: "lazy",
        placeholder: "",
        "placeholder-class": "rounded-circle",
        alt: "timer"
      }, null, _parent));
      _push(`<p data-v-efd39d73>${ssrInterpolate(unref(duration))}</p></div><div class="days-value" data-v-efd39d73><p data-v-efd39d73>Days</p></div></div><div class="d-flex align-items-center mt-3 g-20 flex-wrap" data-v-efd39d73><!--[-->`);
      ssrRenderList(unref(plans), (plan, i) => {
        _push(`<div class="form-group" data-v-efd39d73><div class="bg-border-input staking-days-select-btn" data-v-efd39d73><input type="radio"${ssrRenderAttr("id", `stakingweek_${i + 1}`)}${ssrRenderAttr("value", plan.duration)} class="public-radio" name="stakingweek" data-v-efd39d73><label${ssrRenderAttr("for", `stakingweek_${i + 1}`)} data-v-efd39d73>${ssrInterpolate(plan.name)} <span data-v-efd39d73></span></label></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-4" data-v-efd39d73><span class="label" data-v-efd39d73>Lock Overview</span></div><div class="lock-overview d-flex align-items-center justify-content-center mt-2" data-v-efd39d73><div class="selected-staking-title d-flex align-items-center g-10" data-v-efd39d73>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/icon/ecm.png",
        width: "30",
        loading: "lazy",
        placeholder: "",
        "placeholder-class": "rounded-circle",
        alt: "icon"
      }, null, _parent));
      _push(`<h6 class="page-title" data-v-efd39d73>My ${ssrInterpolate(unref(amount))} ECM Stack for ${ssrInterpolate(unref(duration))} Days</h6></div></div><div class="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap g-10 mt-4" data-v-efd39d73><div class="milestone-offer-card w-100" data-v-efd39d73><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>Stack amount</p><span data-v-efd39d73>${ssrInterpolate(unref(amount))} ECM</span></div><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>Estimated Profit</p><span class="text-color-1CD691" data-v-efd39d73>${ssrInterpolate(unref(estimate_profit))} ECM</span></div><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>Total with Reward</p><span data-v-efd39d73>${ssrInterpolate(unref(estimate_total))} ECM</span></div></div><div class="milestone-offer-card w-100" data-v-efd39d73><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>ECM to be locked</p><span data-v-efd39d73>${ssrInterpolate(unref(amount))} ECM</span></div><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>Duration</p><span class="text-color-1CD691" data-v-efd39d73>${ssrInterpolate(unref(duration))} days</span></div><div class="milestone-offer-info-item d-flex align-items-center justify-content-between" data-v-efd39d73><p data-v-efd39d73>Unlocked on</p><span data-v-efd39d73>${ssrInterpolate(unlockDate())}</span></div></div></div><div class="d-flex align-items-center justify-content-md-between justify-content-center flex-wrap flex-md-nowrap g-10 mt-4" data-v-efd39d73><button type="button"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="gradient-btn w-50" data-v-efd39d73><i style="${ssrRenderStyle(unref(isLoading) ? null : { display: "none" })}" class="fa fa-spinner fa-spin me-1" data-v-efd39d73></i> ${ssrInterpolate(unref(btnText))} <span style="${ssrRenderStyle(!unref(isLoading) ? null : { display: "none" })}" class="icon-rotate" data-v-efd39d73><i class="fas fa-arrow-right" data-v-efd39d73></i></span></button>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-ico" },
        class: "transparent-btn border-gradient w-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buy ECM <i class="fa-solid fa-cart-shopping" data-v-efd39d73${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Buy ECM "),
              createVNode("i", { class: "fa-solid fa-cart-shopping" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(trxHash)) {
        _push(`<div class="w-100 mt-4" data-v-efd39d73><a${ssrRenderAttr("href", `https://etherscan.io/tx/${unref(trxHash)}`)} target="_blank" class="transparent-btn border-gradient d-flex align-items-center justify-content-center g-10" data-v-efd39d73><span data-v-efd39d73><b data-v-efd39d73>Hash :</b></span><span class="clip-text w-auto" data-v-efd39d73>${ssrInterpolate(unref(trxHash))}</span><span class="text-copy-btn rotate-50" data-v-efd39d73><i class="fa-solid fa-arrow-right-long" data-v-efd39d73></i></span></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div><div class="data-show-table-area dashboard-box mt30" data-v-efd39d73><div class="table-header-area d-flex align-items-center justify-content-between" data-v-efd39d73><div class="table-heading" data-v-efd39d73><h5 data-v-efd39d73>Staking History</h5></div><div class="search-box-area" data-v-efd39d73><form action="" data-v-efd39d73><div class="input bg-border-input position-relative" data-v-efd39d73><div class="search-icon" data-v-efd39d73><i class="search-icon fas fa-search" data-v-efd39d73></i></div><input type="text" class="form-control" id="search" placeholder="Search here..." data-v-efd39d73></div></form></div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/staking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const staking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efd39d73"]]);
export {
  staking as default
};
//# sourceMappingURL=staking-nDoJj6DE.js.map
