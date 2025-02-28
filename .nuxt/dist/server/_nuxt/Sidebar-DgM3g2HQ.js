import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useApi } from "./useApi-BM86DZuP.js";
const _sfc_main = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const popularBlogs = ref([]);
    const categoryList = ref([]);
    const { useOnlyFetch } = useApi();
    [__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-blog-category", {
      onResponse: ({ response }) => {
        categoryList.value = response._data;
      }
    })), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useOnlyFetch("/get-popular-blogs", {
      onResponse: ({ response }) => {
        popularBlogs.value = response._data;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-3" }, _attrs))}><div class="widget position-relative z-2"><h5 class="widget-title">Categories</h5><div class="line-1 mt-15"></div><ul class="categories-list d-flex ql-align-center flex-wrap mt-20"><!--[-->`);
      ssrRenderList(unref(categoryList), (category) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "blog-category-slug", params: { slug: category.slug } },
          class: "border-gradient btn3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="widget position-relative z-2 mt-20"><h5 class="widget-title">Popular Post</h5><div class="line-1 mt-15 mb-4"></div><div class="popular-post-items d-flex flex-lg-column flex-wrap"><!--[-->`);
      ssrRenderList(unref(popularBlogs), (blog) => {
        _push(`<div class="popular-post-item"><div class="popular-post-thumbnails d-flex flex-xxl-row flex-column"><img${ssrRenderAttr("src", blog.featured_image)} loading="lazy" placeholder width="82" height="82" alt="img" class="clip-path-2&quot;">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { name: "blog-detail-slug", params: { slug: blog.slug } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="popular-post-content"${_scopeId}><h5${_scopeId}>${ssrInterpolate(blog.title)}</h5></div>`);
            } else {
              return [
                createVNode("div", { class: "popular-post-content" }, [
                  createVNode("h5", null, toDisplayString(blog.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Blog/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Sidebar-DgM3g2HQ.js.map
