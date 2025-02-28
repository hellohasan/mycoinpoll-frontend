import { _ as _sfc_main$1 } from "./Breadcrumb-BQfd4NmQ.js";
import { _ as _sfc_main$2 } from "./NuxtImg-Cvt1lRnM.js";
import { _ as _sfc_main$3 } from "./Sidebar-DgM3g2HQ.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { ref, withAsyncContext, withCtx, unref, mergeProps, createBlock, openBlock, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "blogs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const blogList = ref({});
    const { useOnlyFetch } = useApi();
    const { pending } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-blogs", {
      onResponse({ response }) {
        blogList.value = response._data;
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontendBreadcrumb = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      const _component_FrontendBlogSidebar = _sfc_main$3;
      const _component_nuxt_link = __nuxt_component_0;
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
      _push(`</div></div></div></div></div></div></div><section class="blog-layout-section mt-120 position-relative"><div class="learn-circle1 circle-effect1"></div><div class="ellipse ellipse-2"></div><div class="ellipse ellipse-3"></div><div class="container"><div class="row gy-4">`);
      _push(ssrRenderComponent(_component_FrontendBlogSidebar, null, null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps(!unref(pending), { class: "col-lg-9" }))}><div class="position-relative rgb-border p30 h-100"><div class="row gy-4"><!--[-->`);
      ssrRenderList(unref(blogList).data, (blog) => {
        _push(`<div class="col-xl-6 col-md-6"><div class="blog-post-card h-100"><div class="blog-post-thumbnails">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: blog.featured_image,
          alt: "img",
          class: "w-100 clip-path-2"
        }, null, _parent));
        _push(`</div><div class="blog-post-content mt-20"><div class="d-flex align-items-center justify-content-between"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(blog.publish_date)}</span><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-list"></i> ${ssrInterpolate(blog.category.name)}</span></div><h4>${ssrInterpolate(blog.title)}</h4><p class="mt-3">${ssrInterpolate(blog.short_content)}</p><div class="d-inline-block mt-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "blog-detail-slug", params: { slug: blog.slug } },
          class: "btn-1-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn more <span class="icon-rotate"${_scopeId}><i class="fas fa-arrow-right"${_scopeId}></i></span>`);
            } else {
              return [
                createTextVNode(" Learn more "),
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
      _push(`<!--]--></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=blogs-C-TS2H99.js.map
