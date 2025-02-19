import { _ as __nuxt_component_0 } from "./nuxt-link-BWdyHLLK.js";
import { _ as _sfc_main$b } from "./NuxtImg-BROtFWhK.js";
import { ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useAppKitAccount } from "@reown/appkit/vue";
import { u as useWeb3 } from "./useWeb3-BjmLCuRg.js";
import { _ as _sfc_main$c } from "./Chain-ClolZG-d.js";
import { Skeletor } from "vue-skeletor";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { u as useTokenStore, _ as _sfc_main$d } from "./Index-BneiYABl.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import { _ as _export_sfc, c as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./useToastAlert-BKJHFXvC.js";
import "ufo";
import "h3";
import "vue-toastification";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
const _sfc_main$a = {
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
      const _component_NuxtImg = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(allImagesLoaded) ? null : { display: "none" },
        class: "logo-flip-box"
      }, _attrs))}><!--[-->`);
      ssrRenderList(images, (image, index) => {
        _push(`<div class="flip-item">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: image,
          alt: "logo",
          loading: "lazy",
          width: "492",
          height: "491",
          format: "webp"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Flipbox.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
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
      const _component_FrontendHomeFlipbox = _sfc_main$a;
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "TokenCard",
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skeletors/TokenCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "RunningToken",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenStore = useTokenStore();
    const { runningTokens: tokens } = storeToRefs(tokenStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$b;
      const _component_SkeletorsTokenCard = _sfc_main$8;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "running-token-section" }, _attrs))}><div class="container"><div class="running-token-view-box d-flex align-items-center justify-content-between border-indexcing flex-wrap"><div class="token-view-box-text d-flex align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/icon/bell.png",
        width: "25",
        height: "25",
        format: "webp",
        loading: "lazy",
        alt: "icon"
      }, null, _parent));
      _push(`<p>Stake now and secure your early position in the ECM Token launch. Stay tuned for the upcoming CDC Token, set to revolutionize the next phase of IDOs.</p></div><div class="token-view-btn"><a href="#" class="border-gradient btn3">View Details</a></div></div><div class="row"><div class="col-md-12 token-card-width"><div class="token-card-heading mb40"><h3 class="text-shadow">Running Tokens</h3></div>`);
      if (unref(tokens).length === 0) {
        _push(ssrRenderComponent(_component_SkeletorsTokenCard, null, null, _parent));
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(tokens), (token, i) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          _push(`<div class="${ssrRenderClass([{ mt40: i !== 0 }, "token-card-main-area d-flex align-items-center"])}"><div class="token-card-thumnail-text d-flex"><div class="token-card-thumnails position-relative">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: token.feature_image,
            alt: token.full_name,
            loading: "lazy",
            width: "445",
            height: "370",
            format: "webp",
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/RunningToken.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "UpcomingToken",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenStore = useTokenStore();
    const { upcomingTokens: tokens } = storeToRefs(tokenStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkeletorsTokenCard = _sfc_main$8;
      const _component_NuxtImg = _sfc_main$b;
      const _component_nuxt_link = __nuxt_component_0;
      if (unref(tokens).length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "upcoming-ido-section pt120" }, _attrs))}><div class="container"><div class="col-md-12"><div class="token-card-heading mb60 d-flex align-items-center justify-content-between"><h3 class="text-shadow">Upcoming IDO Opportunities</h3></div></div><div class="row"><div class="col-md-12 token-card-width">`);
        if (unref(tokens).length === 0) {
          _push(ssrRenderComponent(_component_SkeletorsTokenCard, null, null, _parent));
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
              width: "445",
              height: "370",
              format: "webp",
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
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/UpcomingToken.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "WhyChoose",
  __ssrInlineRender: true,
  setup(__props) {
    const allImagesLoaded = ref(false);
    const cards = ref([
      {
        icon: "/images/icon/Vibrant-Community.png",
        title: "Vibrant Community",
        description: "Join a growing community of 10,000+ active investors and crypto enthusiasts."
      },
      {
        icon: "/images/icon/Innovative-Roadmap.png",
        title: "Innovative Roadmap",
        description: "Be part of a platform with a strong vision, including our upcoming ECM Meta World and future blockchain developments."
      },
      {
        icon: "/images/icon/Token-Distribution.png",
        title: "Token Distribution",
        description: "Your token will immediately be distributed to a large user base that hold your token."
      },
      {
        icon: "/images/icon/Exclusive-Access.png",
        title: "Exclusive Access",
        description: "Gain access to early investment opportunities and special projects through ECM Token."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-section position-relative" }, _attrs))}><div class="chain-circle2 circle-effect4"></div><div class="container"><div class="row"><div class="col-md-12"><div class="section-heading multi-chain-power-heading"><h3 class="text-shadow">`);
      if (!unref(allImagesLoaded)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          height: "55",
          width: "350"
        }, null, _parent));
      } else {
        _push(`<!--[-->Why Choose Us?<!--]-->`);
      }
      _push(`</h3></div></div></div>`);
      if (!unref(allImagesLoaded)) {
        _push(`<div class="row mt40 gy-4">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          as: "div",
          class: "col-md-4 ms-2",
          width: "306",
          height: "335"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          as: "div",
          class: "col-md-4 ms-3",
          width: "306",
          height: "335"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          as: "div",
          class: "col-md-4 ms-3",
          width: "306",
          height: "335"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          as: "div",
          class: "col-md-4 ms-3",
          width: "306",
          height: "335"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="row mt40 gy-4"><!--[-->`);
        ssrRenderList(unref(cards), (card) => {
          _push(`<div class="col-xl-3 col-lg-6"><div class="why-choose-card common-card text-center">`);
          _push(ssrRenderComponent(_component_nuxt_img, {
            src: card.icon,
            placeholder: 75,
            width: "75",
            height: "75",
            loading: "lazy",
            format: "webp",
            alt: card.title
          }, null, _parent));
          _push(`<h4>${ssrInterpolate(card.title)}</h4><p>${ssrInterpolate(card.description)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/WhyChoose.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "MultiChainPower",
  __ssrInlineRender: true,
  setup(__props) {
    const allImagesLoaded = ref(false);
    const chains = ref([
      {
        name: "Crypto Launchpad",
        icon: "/images/icon/Crypto-Launchpad.png",
        description: "Discover and support new cryptocurrency projects with our secure, innovative, and user-friendly platform."
      },
      {
        name: "ECM Token",
        icon: "/images/icon/ECM-Token.png",
        description: "Powering the ecosystem, ECM Token enhances the experience, offering exclusive access to investments."
      },
      {
        name: "Community Voting",
        icon: "/images/icon/Community-Voting.png",
        description: "Our platform integrates community voting to allow users to participate in deciding which projects receive funding."
      },
      {
        name: "Educational Resources",
        icon: "/images/icon/Educational-Resources.png",
        description: "Learn about blockchain, crypto, and launchpads with our comprehensive educational content."
      },
      {
        name: "Metaverse Integration",
        icon: "/images/icon/Metaverse-Integration.png",
        description: "Access Androverse, our innovative metaverse, where users can buy virtual land and enjoy exclusive experiences with ECM Tokens."
      },
      {
        name: "Project Launches",
        icon: "/images/icon/Project-Launches.png",
        description: "Gain early access to exclusive crypto launches and opportunities for ECM Token holders and MyCoinPoll community members."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "multi-chain-power-section ptb120 position-relative" }, _attrs))}><div class="chain-circle2 circle-effect4 chain-power-circle2"></div><div class="frequently-circle2 line-shap-animation"></div><div class="container"><div class="row"><div class="col-md-12"><div class="section-heading text-center multi-chain-power-heading"><h3 class="text-shadow">Unlock the Future with Key Features</h3><p>Explore the powerful tools and functionalities designed to enhance your blockchain journey. From multi-chain compatibility to secure staking, our platform is built to support seamless innovation and maximize your potential.</p></div></div></div>`);
      if (!unref(allImagesLoaded)) {
        _push(`<div class="row mt80 gy-4"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            key: i,
            class: "ms-2",
            width: "426",
            height: "206"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="row mt80 gy-4"><!--[-->`);
        ssrRenderList(unref(chains), (chain) => {
          _push(`<div class="col-xl-4 col-lg-6"><div class="multi-chain-card d-flex align-items-center"><div class="multi-chain-card-logo">`);
          _push(ssrRenderComponent(_component_nuxt_img, {
            src: chain.icon,
            loading: "lazy",
            width: "60",
            height: "60",
            placeholder: [60, 60],
            format: "webp",
            alt: chain.name
          }, null, _parent));
          _push(`</div><div class="multi-chain-card-text"><h4>${ssrInterpolate(chain.name)}</h4><p>${ssrInterpolate(chain.description)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="chain-circle circle-effect5"></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/MultiChainPower.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqItems = ref([
      {
        question: "What is MyCoinPoll?",
        answer: "MyCoinPoll is a crypto launchpad that connects investors with promising projects and allows project creators to seek funding through community voting.",
        isOpen: false
      },
      {
        question: "What benefits does the ECM Token offer?",
        answer: "The ECM Token provides exclusive access to investment opportunities, community voting, and educational resources within the MyCoinPoll ecosystem.",
        isOpen: false
      },
      {
        question: "How can I stay updated?",
        answer: "Register at www.mycoinpoll.com and follow us on Twitter and Telegram for the latest news.",
        isOpen: false
      },
      {
        question: "What upcoming events should I know about?",
        answer: "Join us at the Blockchain Life 2024 event in Dubai on October 22-23 and participate in the Phase 2 of the ECM Token ICO starting on October 24.",
        isOpen: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "frequently-asked-question-section pt120 position-relative" }, _attrs))} data-v-6e12c0e0><div class="frequently-circle" data-v-6e12c0e0></div><div class="container" data-v-6e12c0e0><div class="row align-items-center" data-v-6e12c0e0><div class="col-lg-6" data-v-6e12c0e0><div class="frequently-thumnail" data-v-6e12c0e0>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/thumbnail/frequently.png",
        loading: "lazy",
        format: "webp",
        placeholder: [614, 527],
        width: "614",
        height: "527",
        alt: "FAQ Thumbnail"
      }, null, _parent));
      _push(`</div></div><div class="col-lg-6" data-v-6e12c0e0><div class="frequently-asked-text-area" data-v-6e12c0e0><div class="section-heading multi-chain-power-heading" data-v-6e12c0e0><h3 class="text-shadow mb40" data-v-6e12c0e0>Frequently asked question?</h3></div><div class="frequently-answere" data-v-6e12c0e0><div class="accordion" id="accordionExample" data-v-6e12c0e0><!--[-->`);
      ssrRenderList(unref(faqItems), (item, index) => {
        _push(`<div class="accordion-item" data-v-6e12c0e0><span class="${ssrRenderClass([{ collapsed: !item.isOpen }, "accordion-button"])}" data-v-6e12c0e0>${ssrInterpolate(item.question)}</span><div${ssrRenderAttr("id", "collapse" + index)} class="${ssrRenderClass([{ show: item.isOpen }, "accordion-collapse collapse"])}" data-v-6e12c0e0><div class="accordion-body" data-v-6e12c0e0><p data-v-6e12c0e0>${ssrInterpolate(item.answer)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Faq.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6e12c0e0"]]);
const _sfc_main$2 = {
  __name: "Blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data: blogList, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${config.public.apiBase}/blogs`, "$0uY0y8CeVQ")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section pt120 position-relative" }, _attrs))}><div class="circle circle-1"></div><div class="container"><div class="row gy-4 align-items-center"><div class="col-lg-7"><div class="section-heading text-center text-lg-start"><h3 class="text-shadow">Our Blog</h3><p>Explore our blog for insights on ECM, blockchain innovations, e-commerce trends, and strategies to maximize your cryptocurrency investments.</p></div></div><div class="col-lg-5"><div class="d-flex justify-content-lg-end justify-content-center"><div class="d-inline-block">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/blogs",
        class: "btn-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View More <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
          } else {
            return [
              createTextVNode(" View More "),
              createVNode("span", { class: "icon-rotate" }, [
                createVNode("i", { class: "fas fa-arrow-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="row gy-4 mt-5"><!--[-->`);
      ssrRenderList(unref(blogList), (blog) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="blog-post-card h-100"><div class="blog-post-thumbnails">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: blog.featured_image,
          loading: "lazy",
          format: "webp",
          alt: "img",
          class: "w-100 clip-path-2"
        }, null, _parent));
        _push(`</div><div class="blog-post-content mt-20"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(blog.publish_date)}</span><h4>${ssrInterpolate(blog.title)}</h4><p class="mt-3">${ssrInterpolate(blog.short_content)}</p><div class="d-inline-block mt-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "blog-detail-slug", params: { slug: blog.slug } },
          class: "btn-1-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View More <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
            } else {
              return [
                createTextVNode(" View More "),
                createVNode("span", { class: "icon-rotate" }, [
                  createVNode("i", { class: "fas fa-arrow-right" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ApplyLaunch",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Launch Your Token on MyCoinPoll!");
    const description = ref("Empower Your Project with Our Supportive Ecosystem – Apply Now to Gain Visibility, Funding, and Access to a Vibrant Community of Investors Eager to Support Innovative Crypto Ventures! Unlock the Potential of Your Idea and Take the Next Step Towards Success!");
    const buttonText = ref("Apply for Launch");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "subscribe-section pt120" }, _attrs))} data-v-3cc3abb3><div class="container" data-v-3cc3abb3><div class="row subscribe-bg" data-v-3cc3abb3><div class="col-lg-12" data-v-3cc3abb3><div class="subscribe-text" data-v-3cc3abb3><div class="section-heading text-center" data-v-3cc3abb3><h3 class="text-shadow" data-v-3cc3abb3>${ssrInterpolate(unref(title))}</h3><p data-v-3cc3abb3>${ssrInterpolate(unref(description))}</p></div><div class="token-view-more-btn mt40" data-v-3cc3abb3>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "apply-launch" },
        class: "btn1 primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(buttonText))} <span class="icon-rotate" data-v-3cc3abb3${_scopeId}><i class="fas fa-arrow-right" data-v-3cc3abb3${_scopeId}></i></span>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(buttonText)) + " ", 1),
              createVNode("span", { class: "icon-rotate" }, [
                createVNode("i", { class: "fas fa-arrow-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/ApplyLaunch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FrontendHomeApplyLaunch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3cc3abb3"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useTokenStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendHomeHero = _sfc_main$9;
      const _component_FrontendHomeChain = _sfc_main$c;
      const _component_FrontendHomeRunningToken = _sfc_main$7;
      const _component_EcmPurchase = _sfc_main$d;
      const _component_FrontendHomeUpcomingToken = _sfc_main$6;
      const _component_FrontendHomeWhyChoose = _sfc_main$5;
      const _component_FrontendHomeMultiChainPower = _sfc_main$4;
      const _component_FrontendHomeFaq = __nuxt_component_7;
      const _component_FrontendHomeBlog = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FrontendHomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeChain, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeRunningToken, null, null, _parent));
      _push(ssrRenderComponent(_component_EcmPurchase, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeUpcomingToken, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeWhyChoose, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeMultiChainPower, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeFaq, null, null, _parent));
      _push(ssrRenderComponent(_component_FrontendHomeBlog, null, null, _parent));
      _push(ssrRenderComponent(unref(FrontendHomeApplyLaunch), null, null, _parent));
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
//# sourceMappingURL=index-P-_wVyVj.js.map
