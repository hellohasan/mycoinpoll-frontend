import { _ as _sfc_main$1 } from "./Breadcrumb-O0p7_ayw.js";
import { _ as _sfc_main$2 } from "./NuxtImg-CxsfQNta.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import { c as useRoute } from "../server.mjs";
import { u as useApi } from "./useApi-CoUeKmPG.js";
import "./nuxt-link-BZHva90P.js";
import "ufo";
import "defu";
import "h3";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { useMyFetch } = useApi();
    const { data: lesson, pending, error } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`get-lessons/${route.params.slug}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(pending)) {
        _push(`<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">`);
        _push(ssrRenderComponent(_component_FrontendBreadcrumb, null, null, _parent));
        _push(`<div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="learn-earn-hero-left"><div class="hero-area-text"><h3>${ssrInterpolate(unref(lesson).title)}</h3><p class="mb-0">${ssrInterpolate(unref(lesson).short_description)}</p></div></div></div><div class="col-lg-5"><div class="box-bg h-100"><div class="token-card-thumnails position-relative m-0 h-100">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(lesson).image,
          alt: "img",
          class: "w-100 h-100 object-fit-cover"
        }, null, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="learn-earn-card-section mt80 position-relative"><div class="container"><div class="row"><div class="col-md-12"><div class="position-relative rgb-border"><div class="learning-video-box"><iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${unref(lesson).video_id}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div><div class="col-md-12 mt40"><div class="news-poin-list">${unref(lesson).description ?? ""}</div></div></div></div><div class="learn-circle1 circle-effect1"></div><div class="learn-circle2 circle-effect2"></div><div class="learn-circle3 circle-effect2"></div><div class="learn-circle4 circle-effect5"></div><div class="line-shap-animation learn-circle5"></div></section><section class="risk-warning-section pt120"><div class="container"><div class="row"><div class="col-md-12"><div class="full-w-card mobile-box-bg risk-warning d-flex align-items-start"><span><i class="fa-solid fa-circle-exclamation"></i></span><p> Disclaimer and Risk Warning: This content is presented to you on an “as is” basis for general information and educational purposes only, without representation or warranty of any kind. It should not be construed as financial advice, nor is it intended to recommend the purchase of any specific product or service. Please read our full disclaimer here for further details. Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance Academy is not liable for any losses you may incur. Not financial advice. For more information, see our <a href="#">Terms of Use</a> and <a href="#">Risk Warning</a></p></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lesson/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-B7mRaj1B.js.map
