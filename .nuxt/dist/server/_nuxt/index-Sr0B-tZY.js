import { _ as __nuxt_component_0 } from "./nuxt-link-3pynsLqV.js";
import { _ as _sfc_main$a } from "./NuxtImg-CDXWn6Zd.js";
import { ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString, watch } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useAppKitAccount } from "@reown/appkit/vue";
import { u as useWeb3 } from "./useWeb3-DpF_j_e1.js";
import { Skeletor } from "vue-skeletor";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { defineStore, storeToRefs } from "pinia";
import { c as useRuntimeConfig, a as useAuthStore } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useToastAlert } from "./useToastAlert-CWsawm9Y.js";
import "ufo";
import "h3";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
import "vue-toastification";
const _sfc_main$9 = {
  __name: "Flipbox",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/images/flip-logo/bitcoin.png",
      "/images/flip-logo/solana.png",
      "/images/flip-logo/dogecoin.png",
      "/images/flip-logo/xrp.png",
      "/images/flip-logo/ethereum.png",
      "/images/flip-logo/bancor.png",
      "/images/flip-logo/ecm.png"
    ];
    const allImagesLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(allImagesLoaded) ? null : { display: "none" },
        class: "logo-flip-box"
      }, _attrs))}><!--[-->`);
      ssrRenderList(images, (image, index) => {
        _push(`<div class="flip-item">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: image,
          alt: "logo",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Flipbox.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const wallet = useAppKitAccount();
    useWeb3();
    function formatAddress(myAddress) {
      if (typeof myAddress !== "string" || !myAddress) {
        return "";
      }
      return myAddress.slice(0, 6) + "......" + myAddress.slice(-6);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FrontendHomeFlipbox = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-cover-area" }, _attrs))}><section class="hero-section"><div class="hero-container"><div class="container"><div class="row"><div class="col-md-12"><div class="hero-section-outter d-flex"><div class="hero-area-text index-hero-text"><h3>Blockchain’s Ultimate Crypto Launchpad for Innovation</h3><p>Unlock early access to the next wave of crypto innovations. Stake, participate, and launch in IDOs across top blockchains with fortified security and transparency. Experience multi-chain flexibility on a platform trusted by projects worldwide.</p><ul class="d-flex align-items-center"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/apply-launch",
        class: "btn1 primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apply for Listing <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
          } else {
            return [
              createTextVNode(" Apply for Listing "),
              createVNode("span", { class: "icon-rotate" }, [
                createVNode("i", { class: "fas fa-arrow-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" class="btn2 primary-btn">${ssrInterpolate(unref(wallet).isConnected ? formatAddress(unref(wallet).address) : "Connect Wallet")}</a></li></ul></div><div class="coinpool-hero-rights"><div class="logo-flip-box">`);
      _push(ssrRenderComponent(_component_FrontendHomeFlipbox, null, null, _parent));
      _push(`</div></div></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Chain",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      { src: "images/logo/bitcoin.png", alt: "Bitcoin" },
      { src: "images/logo/etherreum.png", alt: "Ethereum" },
      { src: "images/logo/binance.png", alt: "Binance" },
      { src: "images/logo/polygon.png", alt: "Polygon" },
      { src: "images/logo/crypto.png", alt: "Crypto" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "coin-logo-section" }, _attrs))}><div class="container"><div class="coin-logo-area"><ul class="d-flex align-items-center flex-wrap"><!--[-->`);
      ssrRenderList(logos, (logo, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: logo.src,
          loading: "lazy",
          placeholder: [170, 45],
          width: "170px",
          height: "45px",
          alt: logo.alt
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Chain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "TokenCardSkeleton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "token-card-main-area d-flex align-items-center" }, _attrs))}><div class="token-card-thumnail-text d-flex"><div class="token-card-thumnails position-relative">`);
      _push(ssrRenderComponent(unref(Skeletor), {
        width: "445",
        height: "370"
      }, null, _parent));
      _push(`<ul class="d-flex align-items-center"><!--[-->`);
      ssrRenderList(2, (i) => {
        _push(`<li><span role="button" href="#" class="token-btn">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "113",
          height: "38",
          pill: ""
        }, null, _parent));
        _push(`</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="token-card-middle-area"><div class="token-card-middle"><h4>`);
      _push(ssrRenderComponent(unref(Skeletor), {
        width: "444",
        height: "38",
        pill: ""
      }, null, _parent));
      _push(`</h4><p><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(ssrRenderComponent(unref(Skeletor), { key: i }, null, _parent));
      });
      _push(`<!--]--></p></div><div class="token-supporter"><h6>`);
      _push(ssrRenderComponent(unref(Skeletor), {
        width: "80",
        height: "25",
        pill: ""
      }, null, _parent));
      _push(`</h6><h4>`);
      _push(ssrRenderComponent(unref(Skeletor), { width: "60" }, null, _parent));
      _push(`</h4></div><div class="token-view-terget"><p>`);
      _push(ssrRenderComponent(unref(Skeletor), {
        width: "80",
        height: "25",
        pill: ""
      }, null, _parent));
      _push(`</p><div class="token-terget-box position-relative"><ul class="d-flex align-items-center justify-content-between"><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { width: "60" }, null, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { width: "100" }, null, _parent));
      _push(`<span>`);
      _push(ssrRenderComponent(unref(Skeletor), { width: "100" }, null, _parent));
      _push(`</span></li></ul></div></div></div><div class="token-card-right"><div class="social-menu"><ul class="d-flex align-items-center"><!--[-->`);
      ssrRenderList(2, (i) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          circle: "",
          size: "44"
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="countdown-area"><h5>`);
      _push(ssrRenderComponent(unref(Skeletor), null, null, _parent));
      _push(`</h5><ul class="d-flex align-items-center"><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
      _push(`</li><li><span>:</span></li><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
      _push(`</li><li><span>:</span></li><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
      _push(`</li><li><span>:</span></li><li>`);
      _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
      _push(`</li></ul></div><div class="free-btn">`);
      _push(ssrRenderComponent(unref(Skeletor), {
        width: "186",
        height: "54",
        pill: ""
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skeletons/TokenCardSkeleton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useTokenStore = defineStore("tokenData", {
  state: () => ({
    tokens: [],
    token: {}
  }),
  getters: {
    runningTokens: (state) => {
      return state.tokens;
    },
    upcomingTokens: (state) => {
      return state.tokens.filter((token) => token.status === false);
    }
  },
  actions: {
    async getTokens() {
      const config = useRuntimeConfig();
      try {
        const data = await $fetch(`${config.public.apiBase}/tokens`);
        this.tokens = data;
      } catch (error) {
        console.error("Error fetching tokens");
      }
    },
    async getSingleToken(slug) {
      const config = useRuntimeConfig();
      try {
        const data = await $fetch(`${config.public.apiBase}/token/${slug}`);
        this.token = data;
      } catch (error) {
        console.error("Error fetching single token");
      }
    }
  }
});
const _sfc_main$5 = {
  __name: "RunningToken",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenStore = useTokenStore();
    const { runningTokens: tokens } = storeToRefs(tokenStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      const _component_SkeletonsTokenCardSkeleton = _sfc_main$6;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "running-token-section" }, _attrs))}><div class="container"><div class="running-token-view-box d-flex align-items-center justify-content-between border-indexcing flex-wrap"><div class="token-view-box-text d-flex align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/icon/bell.png",
        alt: "icon"
      }, null, _parent));
      _push(`<p>Stake now and secure your early position in the ECM Token launch. Stay tuned for the upcoming CDC Token, set to revolutionize the next phase of IDOs.</p></div><div class="token-view-btn"><a href="#" class="border-gradient btn3">View Details</a></div></div><div class="row"><div class="col-md-12 token-card-width"><div class="token-card-heading mb40"><h3 class="text-shadow">Running Tokens</h3></div>`);
      if (unref(tokens).length === 0) {
        _push(ssrRenderComponent(_component_SkeletonsTokenCardSkeleton, null, null, _parent));
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(tokens), (token, i) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          _push(`<div class="${ssrRenderClass([{ mt40: i !== 0 }, "token-card-main-area d-flex align-items-center"])}"><div class="token-card-thumnail-text d-flex"><div class="token-card-thumnails position-relative">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: token.feature_image,
            alt: token.full_name,
            loading: "lazy",
            placeholder: [445, 370],
            class: "clip-path w-100"
          }, null, _parent));
          _push(`<ul class="d-flex align-items-center"><!--[-->`);
          ssrRenderList(token.tags, (label, index) => {
            _push(`<li><span role="button" href="#" class="${ssrRenderClass([{
              "token-btn-active": index % 2 === 0,
              "token-btn-hover": index % 2 !== 0
            }, "token-btn"])}">${ssrInterpolate(label)}</span></li>`);
          });
          _push(`<!--]--></ul></div><div class="token-card-middle-area"><div class="token-card-middle"><h4>${ssrInterpolate(token.full_name)}</h4><p>${ssrInterpolate(token.short_description)}</p></div><div class="token-supporter"><h6>Supporter</h6><h4>${ssrInterpolate(token.supporter)}</h4></div><div class="token-view-terget"><p>Raised</p><div class="token-terget-box position-relative"><ul class="d-flex align-items-center justify-content-between"><li>${ssrInterpolate(token.sell_percentage)} %</li><li>${ssrInterpolate(token.already_sell)} <span>/ ${ssrInterpolate(token.sell_target)}</span></li></ul></div></div></div></div><div class="token-card-right"><div class="social-menu"><ul class="d-flex align-items-center">`);
          if ((_a = token.social_media) == null ? void 0 : _a.facebook) {
            _push(`<li><a${ssrRenderAttr("href", (_b = token.social_media) == null ? void 0 : _b.facebook)} target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>`);
          } else {
            _push(`<!---->`);
          }
          if ((_c = token.social_media) == null ? void 0 : _c.twitter) {
            _push(`<li><a${ssrRenderAttr("href", (_d = token.social_media) == null ? void 0 : _d.twitter)} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a></li>`);
          } else {
            _push(`<!---->`);
          }
          if ((_e = token.social_media) == null ? void 0 : _e.telegram) {
            _push(`<li><a${ssrRenderAttr("href", (_f = token.social_media) == null ? void 0 : _f.telegram)} target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a></li>`);
          } else {
            _push(`<!---->`);
          }
          if ((_g = token.social_media) == null ? void 0 : _g.linkedin) {
            _push(`<li><a${ssrRenderAttr("href", (_h = token.social_media) == null ? void 0 : _h.linkedin)} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div><div class="countdown-area"><h5>Countdown</h5>`);
          _push(ssrRenderComponent(unref(VueCountdown), {
            time: token.stage_date_timestamp
          }, {
            default: withCtx(({ days, hours, minutes, seconds }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<ul class="d-flex align-items-center"${_scopeId}><li${_scopeId}>${ssrInterpolate(days)}D</li><li${_scopeId}><span${_scopeId}>:</span></li><li${_scopeId}>${ssrInterpolate(hours)}</li><li${_scopeId}><span${_scopeId}>:</span></li><li${_scopeId}>${ssrInterpolate(minutes)}</li><li${_scopeId}><span${_scopeId}>:</span></li><li${_scopeId}>${ssrInterpolate(seconds)}</li></ul>`);
              } else {
                return [
                  createVNode("ul", { class: "d-flex align-items-center" }, [
                    createVNode("li", null, toDisplayString(days) + "D", 1),
                    createVNode("li", null, [
                      createVNode("span", null, ":")
                    ]),
                    createVNode("li", null, toDisplayString(hours), 1),
                    createVNode("li", null, [
                      createVNode("span", null, ":")
                    ]),
                    createVNode("li", null, toDisplayString(minutes), 1),
                    createVNode("li", null, [
                      createVNode("span", null, ":")
                    ]),
                    createVNode("li", null, toDisplayString(seconds), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="free-btn">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: { name: "token-slug", params: { slug: token.slug } },
            class: "btn1 primary-btn"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Token <span class="icon-rotate"${_scopeId}></span>`);
              } else {
                return [
                  createTextVNode(" View Token "),
                  createVNode("span", { class: "icon-rotate" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div><div class="token-circle1 circle-effect1"></div><div class="token-circle2 circle-effect2"></div><div class="token-circle3 circle-effect3"></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/RunningToken.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "IcoInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const ecmContactAddress = ref("");
    const isLoading = ref(true);
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
function useCopy() {
  const copied = ref(false);
  const { toastSuccess } = useToastAlert();
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = (void 0).createElement("textarea");
    textArea.value = text;
    textArea.style.cssText = "position: fixed; top: 0; left: 0; opacity: 0;";
    (void 0).body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = (void 0).execCommand("copy");
      (void 0).body.removeChild(textArea);
      return successful;
    } catch (err) {
      (void 0).body.removeChild(textArea);
      return false;
    }
  };
  const copyNow = async (text) => {
    try {
      if (false) ;
    } catch (err) {
      copied.value = false;
    }
  };
  return {
    copied,
    copyNow
  };
}
const _sfc_main$3 = {
  __name: "Referral",
  __ssrInlineRender: true,
  setup(__props) {
    const wallet = useAppKitAccount();
    const store = useReferralStore();
    const authStore = useAuthStore();
    const { authenticated, user } = storeToRefs(authStore);
    const referralLink = ref("");
    const config = useRuntimeConfig();
    useCopy();
    watch(authenticated, (newAuth) => {
      console.log("authenticated", newAuth);
      if (newAuth) {
        referralLink.value = `${config.public.appUrl}?ref=${user.value.unique_id}`;
      } else {
        referralLink.value = "";
      }
    }, { immediate: true });
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
    const { currentStage: stageData } = storeToRefs(stageDataStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EcmPurchaseReferral = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ecm-right-header" }, _attrs))}><ul class="d-flex align-items-center justify-content-between flex-wrap">`);
      if (unref(stageData).index === null) {
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
      if (unref(stageData).index === null) {
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "30",
          pill: ""
        }, null, _parent));
      } else {
        _push(`<div class="progress"><div class="progress-bar align-items-end" role="progressbar" style="${ssrRenderStyle({ width: unref(stageData).percentageSold + "%" })}"${ssrRenderAttr("aria-valuenow", unref(stageData).percentageSold)} aria-valuemin="0" aria-valuemax="100"><span>${ssrInterpolate(unref(stageData).percentageSold)}%</span></div></div>`);
      }
      _push(`</div><div class="line-divider2 w-100 mt-20 mb20"></div>`);
      if (unref(stageData).index === null) {
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
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    ref(false);
    useStageDataStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EcmPurchaseIcoInfo = _sfc_main$4;
      const _component_EcmPurchaseIcoStat = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "ecm-section position-relative ptb120" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-xl-6">`);
      _push(ssrRenderComponent(_component_EcmPurchaseIcoInfo, null, null, _parent));
      _push(`</div><div class="col-xl-6"><div class="ecm-right-box">`);
      _push(ssrRenderComponent(_component_EcmPurchaseIcoStat, { isLoading: unref(isLoading) }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcmPurchase/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useTokenStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendHomeHero = _sfc_main$8;
      const _component_FrontendHomeChain = _sfc_main$7;
      const _component_FrontendHomeRunningToken = _sfc_main$5;
      const _component_EcmPurchase = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FrontendHomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeChain, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeRunningToken, null, null, _parent));
      _push(ssrRenderComponent(_component_EcmPurchase, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Sr0B-tZY.js.map
