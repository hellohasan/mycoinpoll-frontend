import { _ as _sfc_main$1 } from "./Breadcrumb-BQfd4NmQ.js";
import { _ as _sfc_main$2 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { withCtx, unref, mergeProps, createBlock, openBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Skeletor } from "vue-skeletor";
import "hookable";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "../server.mjs";
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
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "deep-pick-omit";
import "vue-toastification";
const _sfc_main = {
  __name: "learn",
  __ssrInlineRender: true,
  setup(__props) {
    const { useMyFetch } = useApi();
    const { data: lessons, pending } = useMyFetch("get-lessons");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">`);
      _push(ssrRenderComponent(_component_FrontendBreadcrumb, null, null, _parent));
      _push(`<div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="learn-earn-hero-left"><div class="hero-area-text"><h3>Grow Your Crypto Knowledge</h3><p class="mb-0">Gain knowledge and earn free crypto rewards by completing educational courses about blockchain, DeFi, and emerging technologies.</p></div></div></div><div class="col-lg-5"><div class="box-bg h-100"><div class="token-card-thumnails position-relative m-0 h-100">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/thumbnail/learnEarn-hero.png",
        alt: "image",
        format: "webp",
        modifiers: { width: 455, height: 380, quality: 80 },
        custom: true
      }, {
        default: withCtx(({ src, isLoaded, imgAttrs }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isLoaded) {
              _push2(ssrRenderComponent(unref(Skeletor), {
                width: "455",
                height: "380"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<img${ssrRenderAttrs(mergeProps(imgAttrs, {
                src,
                class: "w-100 h-100 object-fit-cover"
              }))}${_scopeId}>`);
            }
          } else {
            return [
              !isLoaded ? (openBlock(), createBlock(unref(Skeletor), {
                key: 0,
                width: "455",
                height: "380"
              })) : (openBlock(), createBlock("img", mergeProps({ key: 1 }, imgAttrs, {
                src,
                class: "w-100 h-100 object-fit-cover"
              }), null, 16, ["src"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div><section class="learn-earn-card-section mt80 position-relative"><div class="container"><div class="row learn-earn-area"><div class="col-md-12"><div class="token-card-heading mb40 d-flex align-items-center flex-wrap justify-content-between g30"><h3 class="text-shadow">Learn and Earn</h3></div><!--[-->`);
      ssrRenderList(unref(lessons), (lesson, i) => {
        _push(`<div class="${ssrRenderClass([{ mt40: i != 0 }, "token-card-main-area d-flex align-items-center"])}"><div class="token-card-thumnail-text d-flex align-items-center"><div class="token-card-thumnails position-relative"><img${ssrRenderAttr("src", lesson.image)} alt="token" class="clip-path"><ul class="d-flex align-items-center"><li><a href="#" class="token-btn token-btn-active token-ongoin d-flex align-items-center"><i class="fas fa-tag"></i> ${ssrInterpolate(lesson.category.name)}</a></li></ul></div><div class="earn-right-text"><div class="token-card-middle"><h4>${ssrInterpolate(lesson.title)}</h4><p>${ssrInterpolate(lesson.short_description)}</p></div><div class="earn-card-btn-group mt40"><ul class="d-flex align-items-center justify-content-between flex-wrap"><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "lesson-slug", params: { slug: lesson.slug } },
          class: "btn1 primary-btn subscribe-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Start Learning`);
            } else {
              return [
                createTextVNode("Start Learning")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li></ul></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="learn-circle1 circle-effect1"></div><div class="learn-circle2 circle-effect2"></div><div class="learn-circle3 circle-effect2"></div><div class="learn-circle4 circle-effect5"></div><div class="line-shap-animation learn-circle5"></div></section><section class="risk-warning-section pt120"><div class="container"><div class="row"><div class="col-md-12"><div class="full-w-card mobile-box-bg risk-warning d-flex align-items-start"><span><i class="fa-solid fa-circle-exclamation"></i></span><p> Disclaimer and Risk Warning: This content is presented to you on an “as is” basis for general information and educational purposes only, without representation or warranty of any kind. It should not be construed as financial advice, nor is it intended to recommend the purchase of any specific product or service. Please read our full disclaimer here for further details. Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance Academy is not liable for any losses you may incur. Not financial advice. For more information, see our <a href="#">Terms of Use</a> and <a href="#">Risk Warning</a></p></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/learn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=learn-BUO9UxYJ.js.map
