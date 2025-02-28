import { _ as __nuxt_component_1 } from "./Pagination-BPep5orQ.js";
import { computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { a as useAuthStore, e as useRuntimeConfig } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import { storeToRefs } from "pinia";
import { u as useClipboard } from "./useClipboard-CEQhz5Du.js";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "cookie-es";
import "ohash";
import "deep-pick-omit";
import "vue-toastification";
const _imports_0 = publicAssetsURL("/images/dashboard/icon/copy.png");
const _sfc_main = {
  __name: "referrals",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    const referralLink = computed(() => {
      return `${config.public.appUrl}?ref=${user.value.unique_id}`;
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
    const { myFetch } = useApi();
    const getUsers = async (page = 1) => {
      const params = new URLSearchParams({
        page: page.toString(),
        search: searchQuery.value
      });
      const response = await myFetch(`get-referral-users?${params.toString()}`);
      users.value = response;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_BackendPartialsPagination = __nuxt_component_1;
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
        onPaginationChangePage: getUsers
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
//# sourceMappingURL=referrals-Bnz1JI7L.js.map
