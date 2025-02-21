import { computed, unref, mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as useAuthStore, b as useRuntimeConfig } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "destr";
import "klona";
import "defu";
import { storeToRefs } from "pinia";
import { u as useClipboard } from "./useClipboard-scHTkX45.js";
import { u as useApi } from "./useApi-CoUeKmPG.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "deep-pick-omit";
import "cookie-es";
import "ohash";
import "./useToastAlert-BBJ771Vo.js";
import "vue-toastification";
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: null
    },
    limit: {
      type: Number,
      default: 3
    }
  },
  emits: ["pagination-change-page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentPage = computed(() => {
      var _a;
      return ((_a = props.data) == null ? void 0 : _a.current_page) || 1;
    });
    const lastPage = computed(() => {
      var _a;
      return ((_a = props.data) == null ? void 0 : _a.last_page) || 1;
    });
    const showPagination = computed(() => props.data && props.data.last_page > 1);
    const visiblePages = computed(() => {
      var _a;
      if (!((_a = props.data) == null ? void 0 : _a.last_page)) return [];
      let start = Math.max(1, currentPage.value - Math.floor(props.limit / 2));
      let end = Math.min(lastPage.value, start + props.limit - 1);
      if (end === lastPage.value) {
        start = Math.max(1, end - props.limit + 1);
      }
      if (start === 1) {
        end = Math.min(lastPage.value, start + props.limit - 1);
      }
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });
    const showFirst = computed(() => visiblePages.value[0] > 1);
    const showLast = computed(() => visiblePages.value[visiblePages.value.length - 1] < props.data.last_page);
    const showLeftDots = computed(() => visiblePages.value[0] > 2);
    const showRightDots = computed(() => visiblePages.value[visiblePages.value.length - 1] < props.data.last_page - 1);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(showPagination)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-center" }, _attrs))} data-v-3a676eda><div class="pagination" data-v-3a676eda><ul class="d-flex align-items-center w-100" data-v-3a676eda><li data-v-3a676eda><a href="#" role="button" class="${ssrRenderClass([{ disabled: __props.data.current_page === 1 }, "btn1 primary-btn subscribe-btn"])}" data-v-3a676eda>Previous</a></li><li data-v-3a676eda><ul class="d-flex align-items-center pagination-inner" data-v-3a676eda>`);
        if (unref(showFirst)) {
          _push(`<li data-v-3a676eda><a href="#" role="button" data-v-3a676eda>1</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(showLeftDots)) {
          _push(`<li data-v-3a676eda><a href="#" role="button" data-v-3a676eda>...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(visiblePages), (page) => {
          _push(`<li data-v-3a676eda><a href="#" role="button" class="${ssrRenderClass({ active: page === __props.data.current_page })}" data-v-3a676eda>${ssrInterpolate(page)}</a></li>`);
        });
        _push(`<!--]-->`);
        if (unref(showRightDots)) {
          _push(`<li data-v-3a676eda><a href="#" role="button" data-v-3a676eda>...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(showLast)) {
          _push(`<li data-v-3a676eda><a href="#" data-v-3a676eda>${ssrInterpolate(__props.data.last_page)}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></li><li data-v-3a676eda><a href="#" class="${ssrRenderClass([{ disabled: __props.data.current_page === __props.data.last_page }, "btn1 primary-btn subscribe-btn"])}" data-v-3a676eda>Next</a></li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Backend/Partials/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a676eda"]]);
const _imports_0 = publicAssetsURL("/images/dashboard/icon/copy.png");
const _sfc_main = {
  __name: "referrals",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    const referralLink = computed(() => {
      return `${config.public.appUrl}/?ref=${user.value.unique_id}`;
    });
    useClipboard();
    const users = ref([]);
    const searchQuery = ref("");
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const { useOnlyFetch } = useApi();
    const getUsers = async (page = 1) => {
      const params = new URLSearchParams({
        page: page.toString(),
        search: searchQuery.value
      });
      const { data: response } = await useOnlyFetch(`get-referral-users?${params.toString()}`);
      users.value = response.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_BackendPartialsPagination = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="input bg-border-input"><div class="refer-link-box-inner d-flex align-items-center g30 position-relative"><p>Referral Link :</p><input type="text" id="refer-url" readonly${ssrRenderAttr("value", unref(referralLink))}><img${ssrRenderAttr("src", _imports_0)} alt="copy"></div></div><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Referral Users (${ssrInterpolate(((_a = unref(users)) == null ? void 0 : _a.total) || 0)})</h5></div><div class="search-box-area"><form><div class="input bg-border-input position-relative"><div class="search-icon"><i class="fas fa-search"></i></div><input${ssrRenderAttr("value", unref(searchQuery))} type="search" class="form-control" id="search" placeholder="Search here."></div></form></div></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Reg. Date</th><th>Name</th><th>Username</th><th>Email</th></tr></thead><tbody>`);
      if (((_c = (_b = unref(users)) == null ? void 0 : _b.data) == null ? void 0 : _c.length) > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(users).data, (user2, i) => {
          _push(`<tr><td>${ssrInterpolate((unref(users).current_page - 1) * unref(users).per_page + i + 1)}</td><td>${ssrInterpolate(formatDate(user2.created_at))}</td><td>${ssrInterpolate(user2.name)}</td><td>${ssrInterpolate(user2.username)}</td><td>${ssrInterpolate(user2.email)}</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<tr><td colspan="100%" class="text-center">No user found!</td></tr>`);
      }
      _push(`</tbody></table>`);
      _push(ssrRenderComponent(_component_BackendPartialsPagination, {
        data: unref(users),
        onPaginationChangePage: getUsers,
        limit: 3,
        class: "mt-4"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/referrals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=referrals-DfcE2UpV.js.map
