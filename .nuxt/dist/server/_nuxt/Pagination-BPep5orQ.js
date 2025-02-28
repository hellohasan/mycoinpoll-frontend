import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: null
    },
    limit: {
      type: Number,
      default: 2
    }
  },
  emits: ["pagination-change-page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isResourceCollection = computed(() => props.data && props.data.meta && props.data.links);
    const currentPageValue = computed(() => {
      if (!props.data) return 1;
      return isResourceCollection.value ? props.data.meta.current_page : props.data.current_page || 1;
    });
    const lastPageValue = computed(() => {
      if (!props.data) return 1;
      return isResourceCollection.value ? props.data.meta.last_page : props.data.last_page || 1;
    });
    const showPagination = computed(() => props.data && lastPageValue.value > 1);
    const visiblePages = computed(() => {
      if (!lastPageValue.value) return [];
      let start = Math.max(1, currentPageValue.value - Math.floor(props.limit / 2));
      let end = Math.min(lastPageValue.value, start + props.limit - 1);
      if (end === lastPageValue.value) {
        start = Math.max(1, end - props.limit + 1);
      }
      if (start === 1) {
        end = Math.min(lastPageValue.value, start + props.limit - 1);
      }
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });
    const showFirst = computed(() => visiblePages.value[0] > 1);
    const showLast = computed(() => visiblePages.value[visiblePages.value.length - 1] < lastPageValue.value);
    const showLeftDots = computed(() => visiblePages.value[0] > 2);
    const showRightDots = computed(() => visiblePages.value[visiblePages.value.length - 1] < lastPageValue.value - 1);
    return (_ctx, _push, _parent, _attrs) => {
      if (showPagination.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-center" }, _attrs))} data-v-5cad34c7><div class="pagination mt-20" data-v-5cad34c7><ul class="d-flex align-items-center w-100" data-v-5cad34c7><li data-v-5cad34c7><a href="#" role="button" class="${ssrRenderClass([{ disabled: currentPageValue.value === 1 }, "btn1 primary-btn subscribe-btn"])}" data-v-5cad34c7>Previous</a></li><li data-v-5cad34c7><ul class="d-flex align-items-center pagination-inner" data-v-5cad34c7>`);
        if (showFirst.value) {
          _push(`<li data-v-5cad34c7><a href="#" role="button" data-v-5cad34c7>1</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (showLeftDots.value) {
          _push(`<li data-v-5cad34c7><a href="#" role="button" data-v-5cad34c7>...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(visiblePages.value, (page) => {
          _push(`<li data-v-5cad34c7><a href="#" role="button" class="${ssrRenderClass({ active: page === currentPageValue.value })}" data-v-5cad34c7>${ssrInterpolate(page)}</a></li>`);
        });
        _push(`<!--]-->`);
        if (showRightDots.value) {
          _push(`<li data-v-5cad34c7><a href="#" role="button" data-v-5cad34c7>...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (showLast.value) {
          _push(`<li data-v-5cad34c7><a href="#" data-v-5cad34c7>${ssrInterpolate(lastPageValue.value)}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></li><li data-v-5cad34c7><a href="#" class="${ssrRenderClass([{ disabled: currentPageValue.value === lastPageValue.value }, "btn1 primary-btn subscribe-btn"])}" data-v-5cad34c7>Next</a></li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Partials/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5cad34c7"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=Pagination-BPep5orQ.js.map
