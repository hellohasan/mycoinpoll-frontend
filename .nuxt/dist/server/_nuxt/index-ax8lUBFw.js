import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./Status-BqHMV6Wp.js";
import { _ as __nuxt_component_1 } from "./Pagination-BPep5orQ.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "sweetalert2";
/* empty css              */
import "ufo";
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
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "deep-pick-omit";
import "vue-toastification";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { useOnlyFetch } = useApi();
    const lessons = ref([]);
    const loading = ref(false);
    const fetchLessons = async (page) => {
      const params = new URLSearchParams({ page });
      const { data, pending, error } = await useOnlyFetch(`manage-lessons?${params.toString()}`);
      lessons.value = data.value;
      loading.value = pending.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_ElementsStatus = _sfc_main$1;
      const _component_BackendPartialsPagination = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Lesson List</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-learn-create" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-plus"${_scopeId}></i> Create Lesson `);
          } else {
            return [
              createVNode("i", { class: "fas fa-plus" }),
              createTextVNode(" Create Lesson ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line"></div>`);
      if (!unref(loading)) {
        _push(`<div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Title</th><th>Image</th><th>Category</th><th>Status</th><th>Action</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(lessons).data, (lesson, i) => {
          _push(`<tr><td>${ssrInterpolate(++i)}</td><td>${ssrInterpolate(lesson.title)}</td><td><img${ssrRenderAttr("src", lesson.image)} width="120px" alt=""></td><td>${ssrInterpolate(lesson.category.name)}</td><td>`);
          _push(ssrRenderComponent(_component_ElementsStatus, {
            status: lesson.status
          }, null, _parent));
          _push(`</td><td><div class="d-flex align-content-between">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: { name: "dashboard-manage-learn-edit", query: { id: lesson.id } },
            class: "gradient-btn-small"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fas fa-edit"${_scopeId}></i> Edit `);
              } else {
                return [
                  createVNode("i", { class: "fas fa-edit" }),
                  createTextVNode(" Edit ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<a href="#" role="button" class="gradient-btn-small"><i class="fas fa-trash"></i> Delete </a></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        _push(ssrRenderComponent(_component_BackendPartialsPagination, {
          data: unref(lessons),
          onPaginationChangePage: fetchLessons
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-learn/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ax8lUBFw.js.map
