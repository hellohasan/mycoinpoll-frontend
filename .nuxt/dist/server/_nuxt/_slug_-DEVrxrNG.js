import { _ as __nuxt_component_0$1 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$3 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { unref, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { Skeletor } from "vue-skeletor";
import { u as useTokenStore } from "./useTokenStore-B5ownuVl.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import { _ as _sfc_main$4 } from "./Index-DNIHiPhR.js";
import { b as useRoute } from "../server.mjs";
import "ufo";
import "h3";
import "./useApi-BM86DZuP.js";
import "vue-toastification";
import "ohash";
import "@reown/appkit/vue";
import "./useClipboard-CEQhz5Du.js";
import "./useWeb3-BYnZ8Zbm.js";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "cookie-es";
import "deep-pick-omit";
const _sfc_main$2 = {
  __name: "Stat",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenStore = useTokenStore();
    const { token, loading } = storeToRefs(tokenStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtImg = _sfc_main$3;
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-6"><div class="token-details-card-thumnails box-bg"><div class="token-card-thumnails position-relative m-0">`);
      if (!unref(token)) {
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "540",
          height: "370"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(token).feature_image,
          alt: unref(token).full_name,
          loading: "lazy",
          width: "540",
          height: "370",
          format: "webp",
          placeholder: [445, 370],
          class: "w-100 object-fit-cover"
        }, null, _parent));
      }
      _push(`<ul class="d-flex align-items-center">`);
      if (!unref(token)) {
        _push(`<!--[-->`);
        ssrRenderList(2, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            pill: "",
            key: i,
            width: "113",
            height: "38"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(token).tags, (label, index) => {
          _push(`<li><a href="#" class="${ssrRenderClass([{
            "token-btn-active": index % 2 === 0,
            "token-btn-hover": index % 2 !== 0
          }, "token-btn"])}">${ssrInterpolate(label)}</a></li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div></div></div><div class="col-lg-6"><div class="token-details-right-box"><div class="token-card-heading">`);
      if (!unref(token)) {
        _push(ssrRenderComponent(unref(Skeletor), { height: "52" }, null, _parent));
      } else {
        _push(`<h3 class="text-shadow">${ssrInterpolate(unref(token).name)}</h3>`);
      }
      _push(`</div><div class="token-shear-counter-box d-flex align-items-center"><div class="token-view-shear">`);
      if (!unref(token)) {
        _push(`<!--[--><p class="mb-10">`);
        _push(ssrRenderComponent(unref(Skeletor), { width: "350" }, null, _parent));
        _push(`</p><p class="mb-10">`);
        _push(ssrRenderComponent(unref(Skeletor), { width: "350" }, null, _parent));
        _push(`</p><p class="mb-10">`);
        _push(ssrRenderComponent(unref(Skeletor), { width: "350" }, null, _parent));
        _push(`</p><!--]-->`);
      } else {
        _push(`<p class="mb20">${ssrInterpolate(unref(token).short_description)}</p>`);
      }
      _push(`</div><div class="countdown-area"><div class="social-menu mb-4">`);
      if (!unref(token)) {
        _push(`<ul class="d-flex align-items-center"><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<li style="${ssrRenderStyle({ "background": "none" })}">`);
          _push(ssrRenderComponent(unref(Skeletor), {
            circle: "",
            size: "44"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<ul class="d-flex align-items-center">`);
        if ((_a = unref(token).social_media) == null ? void 0 : _a.facebook) {
          _push(`<li style="${ssrRenderStyle({ "background": "none" })}"><a${ssrRenderAttr("href", (_b = unref(token).social_media) == null ? void 0 : _b.facebook)} target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(token).social_media) == null ? void 0 : _c.twitter) {
          _push(`<li style="${ssrRenderStyle({ "background": "none" })}"><a${ssrRenderAttr("href", (_d = unref(token).social_media) == null ? void 0 : _d.twitter)} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_e = unref(token).social_media) == null ? void 0 : _e.telegram) {
          _push(`<li style="${ssrRenderStyle({ "background": "none" })}"><a${ssrRenderAttr("href", (_f = unref(token).social_media) == null ? void 0 : _f.telegram)} target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_g = unref(token).social_media) == null ? void 0 : _g.linkedin) {
          _push(`<li style="${ssrRenderStyle({ "background": "none" })}"><a${ssrRenderAttr("href", (_h = unref(token).social_media) == null ? void 0 : _h.linkedin)} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      }
      _push(`</div>`);
      if (!unref(token)) {
        _push(`<!--[--><h5>`);
        _push(ssrRenderComponent(unref(Skeletor), null, null, _parent));
        _push(`</h5><ul class="d-flex align-items-center"><li>`);
        _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
        _push(`</li><li><span>:</span></li><li>`);
        _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
        _push(`</li><li><span>:</span></li><li>`);
        _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
        _push(`</li><li><span>:</span></li><li>`);
        _push(ssrRenderComponent(unref(Skeletor), { size: "52" }, null, _parent));
        _push(`</li></ul><!--]-->`);
      } else {
        _push(`<!--[--><h5>Countdown</h5>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="token-details-terget-area d-flex align-items-center justify-content-between">`);
      if (!unref(token)) {
        _push(`<!--[--><ul class="d-flex align-items-center mt-20"><li><p>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "30"
        }, null, _parent));
        _push(`</p><span>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "20"
        }, null, _parent));
        _push(`</span></li><li><p>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "30"
        }, null, _parent));
        _push(`</p><span>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "20"
        }, null, _parent));
        _push(`</span></li></ul><ul class="d-flex align-items-center text-right mt-20"><li><p class="text-end">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "30"
        }, null, _parent));
        _push(`</p><span>`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100",
          height: "20"
        }, null, _parent));
        _push(`</span></li></ul><!--]-->`);
      } else {
        _push(`<!--[--><ul class="d-flex align-items-center mt-20"><li><p>Supporter</p><span>${ssrInterpolate(unref(token).supporter)}</span></li><li><p>Progress</p><span>${ssrInterpolate(unref(token).sell_percentage)}%</span></li></ul><ul class="d-flex align-items-center text-right mt-20"><li><p class="text-end">Raised</p><span>${ssrInterpolate(unref(token).already_sell)}/${ssrInterpolate(unref(token).sell_target)}</span></li></ul><!--]-->`);
      }
      _push(`</div><div class="token-details-btn-group mt40"><ul class="d-flex align-items-center">`);
      if (!unref(token)) {
        _push(`<!--[--><li class="w-100 w-md-50">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "303",
          height: "65"
        }, null, _parent));
        _push(`</li><li class="w-md-50 w-100">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "303",
          height: "65"
        }, null, _parent));
        _push(`</li><!--]-->`);
      } else {
        _push(`<!--[--><li class="w-100 w-md-50"><a href="#" role="button" class="primary-btn btn4 text-center"><h4>White Paper</h4></a></li><li class="w-md-50 w-100"><a href="https://ecmcoin.com" target="_blank" class="primary-btn btn4 text-center"><h4>Official Website</h4></a></li><!--]-->`);
      }
      _push(`</ul></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Token/Stat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Info",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenStore = useTokenStore();
    const { token } = storeToRefs(tokenStore);
    const getColor = (index) => {
      const colors = ["#1cd691", "#dfc730", "#359846", "#b92124", "#2682ee"];
      return colors[index % colors.length];
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_img = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="card-listed-section position-relative"><div class="card-listed circle-effect1"></div><div class="card-listed2 circle-effect2"></div><div class="card-listed3 circle-effect3"></div><div class="container"><div class="row"><div class="col-md-12"><div class="full-w-card ptb80 plr40 client-review-bg mobile-box-bg"><div class="upgrade-box border-bottom-c pb30"><div class="ido-card-header d-flex align-items-center"><div class="ido-card-logo">`);
      if (unref(token)) {
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(token).logo,
          loading: "lazy",
          placeholder: [95, 95],
          format: "webp",
          width: "95",
          height: "95",
          alt: unref(token).symbol
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Skeletor), {
          circle: "",
          size: "80"
        }, null, _parent));
      }
      _push(`</div><div class="ido-card-header-text">`);
      if (unref(token)) {
        _push(`<!--[--><h4>${ssrInterpolate(unref(token).symbol)}</h4><p>${ssrInterpolate(unref(token).full_name)}</p><!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "220",
          height: "35",
          as: "h4"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "220",
          height: "20",
          as: "p"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="project-introduction mt40"><div class="common-heading-2">`);
      if (unref(token)) {
        _push(`<!--[--><h4>Project Introduction</h4><p class="w-100">${unref(token).description ?? ""}</p><!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "25%",
          height: "45",
          as: "h4"
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            key: i,
            as: "p",
            class: "mb-2"
          }, null, _parent));
        });
        _push(`<!--]--><!--]-->`);
      }
      _push(`</div></div></div><div class="upgrade-box"><div class="ido-card-header d-flex align-items-center"><div class="ido-card-logo">`);
      if (unref(token)) {
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(token).company_logo,
          class: "img-rounded",
          loading: "lazy",
          placeholder: [95, 95],
          format: "webp",
          width: "95",
          height: "95",
          alt: unref(token).symbol
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Skeletor), {
          circle: "",
          size: "80"
        }, null, _parent));
      }
      _push(`</div><div class="ido-card-header-text">`);
      if (unref(token)) {
        _push(`<!--[--><h4>${ssrInterpolate(unref(token).token_company)}</h4><p>Founder</p><!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "220",
          height: "35",
          as: "h4"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "220",
          height: "20",
          as: "p"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="project-introduction mt40"><div class="common-heading-2">`);
      if (unref(token)) {
        _push(`<p class="w-100">${unref(token).company_details ?? ""}</p>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push(ssrRenderComponent(unref(Skeletor), {
            key: i,
            as: "p",
            class: "mb-2"
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></div></div></div></div><div class="token-circle1"></div><div class="token-circle2"></div><div class="token-circle3"></div></section><section class="token-rollout-section position-relative mt60"><div class="token-rollout1 circle-effect2"></div><div class="container"><div class="row align-items-center"><div class="col-lg-6"><div class="token-rollout-left-side"><div class="section-heading"><h3 class="text-shadow">Strategic Token Rollout</h3><p>Our strategic token distribution ensures a balanced, fair launch, maximizing growth and long-term community involvement.</p></div>`);
      if ((_a = unref(token)) == null ? void 0 : _a.distributions) {
        _push(`<div class="token-roll-controls mobile-box-bg mt40"><!--[-->`);
        ssrRenderList(unref(token).distributions, (distribution, i) => {
          _push(`<div class="progress-item mb20"><div class="token-roll-label progress-label"><ul class="d-flex align-items-center justify-content-between"><li>${ssrInterpolate(distribution.title)}</li><li>${ssrInterpolate(distribution.value)}%</li></ul></div><div class="progress"><div class="progress-bar align-items-end" role="progressbar" style="${ssrRenderStyle({ width: distribution.value + "%", backgroundColor: getColor(i) })}"${ssrRenderAttr("aria-valuenow", distribution.value)} aria-valuemin="0" aria-valuemax="100"><span>${ssrInterpolate(distribution.value)}%</span></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="token-roll-controls mobile-box-bg mt40">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100%",
          height: "78",
          class: "mb-3"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100%",
          height: "78",
          class: "mb-3"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "100%",
          height: "78",
          class: "mb-3"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="col-lg-6"><div class="token-rollout-right-side d-flex justify-content-end position-relative">`);
      if (unref(token)) {
        _push(`<div class="chart-center-boxf">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(token).distribution_image,
          width: 548,
          height: 517,
          sizes: "(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw",
          fit: "cover",
          loading: "lazy",
          placeholder: "",
          class: "w-full h-auto max-w-full",
          quality: "80",
          format: "webp",
          alt: "Token distribution visualization"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="chart-center-boxf">`);
        _push(ssrRenderComponent(unref(Skeletor), {
          width: "548",
          height: "517"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Token/Info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useTokenStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FrontendTokenStat = _sfc_main$2;
      const _component_EcmPurchase = _sfc_main$4;
      const _component_FrontendTokenInfo = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container"><div class="breadcrumbs-area mt-20 breadcrumbs-mobile-padding"><div class="container"><div class="row"><div class="col-md-12"><div class="breadcrumbs"><ul class="d-flex align-items-center flex-wrap"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li><li><a href="#" class="active">Token Details</a></li></ul></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_FrontendTokenStat, null, null, _parent));
      _push(`</div><section class="ecm-section position-relative ptb120"><div class="container">`);
      _push(ssrRenderComponent(_component_EcmPurchase, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_FrontendTokenInfo, null, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/token/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DEVrxrNG.js.map
