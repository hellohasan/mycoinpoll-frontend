import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { _ as __nuxt_component_1 } from "./Pagination-BPep5orQ.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const { useOnlyFetch } = useApi();
    const users = ref([]);
    const loading = ref(true);
    const searchQuery = ref("");
    const getUsers = async (page) => {
      try {
        const params = new URLSearchParams({
          page,
          search: searchQuery.value
        });
        const { data, pending, error } = await useOnlyFetch(`get-users?${params.toString()}`);
        users.value = data.value;
        loading.value = pending.value;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ClientOnly = __nuxt_component_0;
      const _component_BackendPartialsPagination = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Total Users (${ssrInterpolate(unref(loading) ? "..." : (_a = unref(users)) == null ? void 0 : _a.total)})</h5></div><div class="search-box-area d-flex"><form><div class="input bg-border-input position-relative"><div class="search-icon"><i class="search-icon fas fa-search"></i></div><input${ssrRenderAttr("value", unref(searchQuery))} type="search" class="form-control" id="search" placeholder="Search here."></div></form><div class="export-area ms-1">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Reg. Date</th><th>Name</th><th>Username</th><th>Email</th><th>ETH Address</th></tr></thead><tbody>`);
      if (unref(loading)) {
        _push(`<!--[-->`);
        ssrRenderList(10, (n) => {
          _push(`<tr><td colspan="100%">`);
          _push(ssrRenderComponent(unref(Skeletor), {
            height: "30",
            width: "100%"
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(unref(users).data, (user, i) => {
          _push(`<tr><td>${ssrInterpolate((unref(users).current_page - 1) * unref(users).per_page + i + 1)}</td><td>${ssrInterpolate(formatDate(user.created_at))}</td><td>${ssrInterpolate(user.name)}</td><td>${ssrInterpolate(user.username)}</td><td>${ssrInterpolate(user.email)}</td><td>${ssrInterpolate(user.eth_address)}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!((_b = unref(users).data) == null ? void 0 : _b.length)) {
          _push(`<tr><td colspan="100%" class="text-center">No transactions found</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=users-CNQEfxP9.js.map
