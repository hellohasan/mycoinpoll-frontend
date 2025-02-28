import { _ as _sfc_main$1 } from "./Breadcrumb-BQfd4NmQ.js";
import { _ as _sfc_main$2 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$3 } from "./Sidebar-DgM3g2HQ.js";
import { ref, withAsyncContext, withCtx, unref, mergeProps, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Skeletor } from "vue-skeletor";
import "hookable";
import { b as useRoute, n as navigateTo } from "../server.mjs";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "./nuxt-link-Bojkr02_.js";
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
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "deep-pick-omit";
import "vue-toastification";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const slug = useRoute().params.slug;
    const blog = ref({});
    const { useOnlyFetch } = useApi();
    const { pending } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch(`/get-blog/${slug}`, {
      method: "GET",
      onResponse({ response }) {
        if (response.status === 404) {
          navigateTo("/404");
        }
        blog.value = response._data;
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      const _component_FrontendBlogSidebar = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">`);
      _push(ssrRenderComponent(_component_FrontendBreadcrumb, null, null, _parent));
      _push(`<div class="coin-hero-area ptb50 position"><div class="frequently-circle"></div><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="learn-earn-hero-left"><div class="hero-area-text"><h3>Welcome to Our Blog Page</h3><p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our blog section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p></div></div></div><div class="col-lg-5"><div class="box-bg"><div class="token-card-thumnails position-relative m-0">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/thumbnail/blog.png",
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
      _push(`</div></div></div></div></div></div></div><section class="learn-earn-card-section mt80 position-relative"><div class="container"><div class="row gy-4">`);
      _push(ssrRenderComponent(_component_FrontendBlogSidebar, null, null, _parent));
      _push(`<div class="col-lg-9"><div class="row gy-4"><div class="col-md-12"><div class="token-card-thumnail-text"><div class="position-relative rgb-border mb40"><div class="news-thumnails">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: unref(blog).featured_image,
        alt: "image",
        format: "webp",
        modifiers: { width: 455, height: 380, quality: 80 },
        custom: true
      }, {
        default: withCtx(({ src, isLoaded, imgAttrs }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isLoaded) {
              _push2(ssrRenderComponent(unref(Skeletor), {
                width: "900",
                height: "548"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<img${ssrRenderAttrs(mergeProps(imgAttrs, {
                src,
                class: "w-100"
              }))}${_scopeId}>`);
            }
          } else {
            return [
              !isLoaded ? (openBlock(), createBlock(unref(Skeletor), {
                key: 0,
                width: "900",
                height: "548"
              })) : (openBlock(), createBlock("img", mergeProps({ key: 1 }, imgAttrs, {
                src,
                class: "w-100"
              }), null, 16, ["src"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="shear-btn"><div class="social-menu"><ul ul class="flex flex-column align-items-center g-10"><li><a href="#"><i class="fab fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li><li><a href="#"><i class="fab fa-instagram"></i></a></li><li><a href="#"><i class="fab fa-linkedin-in"></i></a></li></ul></div></div></div><div class="token-card-middle w-100 card-2"><div class="d-flex g-20"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(unref(blog).publish_date)}</span><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-user"></i> ${ssrInterpolate(((_a = unref(blog).user) == null ? void 0 : _a.name) || "Unknown")}</span></div><h4>${ssrInterpolate(unref(blog).title)}</h4><div>${unref(blog).content ?? ""}</div></div></div></div></div></div></div></div><div class="learn-circle1 circle-effect1"></div><div class="learn-circle2 circle-effect2"></div><div class="learn-circle3 circle-effect2"></div><div class="learn-circle4 circle-effect5"></div><div class="line-shap-animation learn-circle5"></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-CuGasSrb.js.map
