import { _ as _sfc_main$1 } from "./Breadcrumb-O0p7_ayw.js";
import { _ as _sfc_main$2 } from "./NuxtImg-CxsfQNta.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
    const slug = route.params.slug;
    const { useMyFetch } = useApi();
    const { data: news, pending } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`get-news/${slug}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">`);
      _push(ssrRenderComponent(_component_FrontendBreadcrumb, null, null, _parent));
      if (!unref(pending)) {
        _push(`<div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="learn-earn-hero-left"><div class="hero-area-text"><h3>${ssrInterpolate(unref(news).title)}</h3><p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our news section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p></div></div></div><div class="col-lg-5"><div class="box-bg"><div class="token-card-thumnails position-relative m-0">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(news).image,
          loading: "lazy",
          placeholder: "",
          alt: "img",
          class: "w-100 h-100 object-fit-cover"
        }, null, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(pending)) {
        _push(`<section class="learn-earn-card-section mt80 position-relative"><div class="container"><div class="row"><div class="col-md-12"><div class="token-card-thumnail-text"><div class="position-relative rgb-border mb40"><div class="news-thumnails">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: unref(news).image_large,
          placeholder: "",
          loading: "lazy",
          alt: "token",
          class: "w-100"
        }, null, _parent));
        _push(`</div></div><div class="token-card-middle w-100"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(unref(news).created_at)}</span><h4>${ssrInterpolate(unref(news).title)}</h4><div class="news-poin-list">${unref(news).description ?? ""}</div></div></div></div></div></div><div class="learn-circle1 circle-effect1"></div><div class="learn-circle2 circle-effect2"></div><div class="learn-circle3 circle-effect2"></div><div class="learn-circle4 circle-effect5"></div><div class="line-shap-animation learn-circle5"></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BnX9-eRO.js.map
