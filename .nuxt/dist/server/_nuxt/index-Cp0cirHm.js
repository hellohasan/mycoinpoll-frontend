import { _ as _sfc_main$1 } from "./Breadcrumb-BQfd4NmQ.js";
import { _ as _sfc_main$2 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { withAsyncContext, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { useMyFetch } = useApi();
    const { data: newsList, pending, error } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("get-news")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">`);
      _push(ssrRenderComponent(_component_FrontendBreadcrumb, null, null, _parent));
      _push(`<div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="learn-earn-hero-left"><div class="hero-area-text"><h3>Welcome to Our Update News</h3><p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our news section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p></div></div></div><div class="col-lg-5"><div class="box-bg"><div class="token-card-thumnails position-relative m-0">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/thumbnail/news-alt.jpg",
        alt: "img",
        loading: "lazy",
        placeholder: "",
        class: "w-100 h-100 object-fit-cover"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div><section class="learn-earn-card-section mt80 position-relative"><div class="container"><div class="row learn-earn-area"><div class="col-md-12"><!--[-->`);
      ssrRenderList(unref(newsList), (news, i) => {
        _push(`<div class="${ssrRenderClass([{ mt40: i != 0 }, "token-card-main-area d-flex align-items-center"])}"><div class="token-card-thumnail-text d-flex align-items-center"><div class="token-card-thumnails position-relative">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: news.image,
          loading: "lazy",
          placeholder: "",
          alt: "token",
          class: "clip-path"
        }, null, _parent));
        _push(`</div><div class="earn-right-text"><div class="token-card-middle"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(news.created_at)}</span><h4>${ssrInterpolate(news.title)}</h4><p>${ssrInterpolate(news.short_description)}</p></div><div class="earn-card-btn-group mt40"><ul class="d-flex align-items-center justify-content-between"><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "news-slug", params: { slug: news.slug } },
          class: "btn1 primary-btn subscribe-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read more <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
            } else {
              return [
                createTextVNode(" Read more "),
                createVNode("span", { class: "icon-rotate" }, [
                  createVNode("i", { class: "fas fa-arrow-right" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li></ul></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="learn-circle1 circle-effect1"></div><div class="learn-circle2 circle-effect2"></div><div class="learn-circle3 circle-effect2"></div><div class="learn-circle4 circle-effect5"></div><div class="line-shap-animation learn-circle5"></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cp0cirHm.js.map
