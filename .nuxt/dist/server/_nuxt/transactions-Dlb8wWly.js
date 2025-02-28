import { withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Skeletor } from "vue-skeletor";
import "hookable";
import { a as useAuthStore } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "ofetch";
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
const _sfc_main = {
  __name: "transactions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    const { useOnlyFetch } = useApi();
    const params = new URLSearchParams({
      address: user.value.eth_address
    });
    const { data: transactions, pending, error } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch(`get-transactions?${params.toString()}`)), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    const filteredTransactions = computed(() => {
      var _a;
      if (!((_a = transactions.value) == null ? void 0 : _a.result)) return [];
      if (!searchQuery.value) return transactions.value.result;
      const query = searchQuery.value.toLowerCase();
      return transactions.value.result.filter(
        (tx) => tx.short_hash.toLowerCase().includes(query) || tx.timestamp.toLowerCase().includes(query) || tx.converted_value.toString().includes(query) || tx.direction.toLowerCase().includes(query)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="data-show-table-area dashboard-box mt30"><div class="table-header-area d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Recent Transactions</h5></div><div class="search-box-area"><form><div class="input bg-border-input position-relative"><div class="search-icon"><i class="fas fa-search"></i></div><input${ssrRenderAttr("value", unref(searchQuery))} type="text" class="form-control" id="search" placeholder="Search here"></div></form></div></div><div class="common-table mt30"><table class="custom-table display nowrap mobile-table"><thead><tr><th>SL</th><th>Date Time</th><th>Transaction Hash</th><th>Type</th><th>Amount</th></tr></thead><tbody>`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(10, (n) => {
          _push(`<tr><td colspan="5">`);
          _push(ssrRenderComponent(unref(Skeletor), {
            height: "30",
            width: "100%"
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(unref(filteredTransactions), (transaction, i) => {
          _push(`<tr><td>${ssrInterpolate(i + 1)}</td><td>${ssrInterpolate(transaction.timestamp)}</td><td><a${ssrRenderAttr("href", transaction.explorer_url)} target="_blank" rel="noopener">${ssrInterpolate(transaction.short_hash)}</a></td><td><span class="${ssrRenderClass(["badge", transaction.direction === "in" ? "active-status" : "deactivate-status"])}">${ssrInterpolate(transaction.direction === "in" ? "IN" : "OUT")}</span></td><td>${ssrInterpolate(transaction.converted_value)} ECM</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!((_a = unref(filteredTransactions)) == null ? void 0 : _a.length)) {
          _push(`<tr><td colspan="5" class="text-center">No transactions found</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/transactions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=transactions-Dlb8wWly.js.map
