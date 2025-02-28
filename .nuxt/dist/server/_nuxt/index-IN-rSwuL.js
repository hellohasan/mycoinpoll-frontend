import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { a as useAuthStore } from "../server.mjs";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "sweetalert2";
/* empty css              */
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
const useAuthAccess = () => {
  const authStore = useAuthStore();
  const SUPER_ADMIN_ROLE = "Super Admin";
  const isSuperAdmin = () => {
    return authStore.roles.includes(SUPER_ADMIN_ROLE);
  };
  const hasRole = (roles) => {
    if (isSuperAdmin()) return true;
    const userRoles = authStore.roles;
    if (!Array.isArray(roles)) roles = [roles];
    return roles.some((role) => userRoles.includes(role));
  };
  const hasPermission = (permissions) => {
    if (isSuperAdmin()) return true;
    const userPermissions = authStore.permissions;
    if (!Array.isArray(permissions)) permissions = [permissions];
    return permissions.some((permission) => userPermissions.includes(permission));
  };
  const hasAnyRoleOrPermission = (roles = [], permissions = []) => {
    if (isSuperAdmin()) return true;
    return hasRole(roles) || hasPermission(permissions);
  };
  const hasAllRoles = (roles) => {
    if (isSuperAdmin()) return true;
    if (!Array.isArray(roles)) roles = [roles];
    return roles.every((role) => authStore.roles.includes(role));
  };
  const hasAllPermissions = (permissions) => {
    if (isSuperAdmin()) return true;
    if (!Array.isArray(permissions)) permissions = [permissions];
    return permissions.every((permission) => authStore.permissions.includes(permission));
  };
  return {
    hasRole,
    hasPermission,
    hasAnyRoleOrPermission,
    hasAllRoles,
    hasAllPermissions,
    isSuperAdmin
  };
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { hasPermission } = useAuthAccess();
    const { useOnlyFetch } = useApi();
    const blogList = ref([]);
    const { refresh } = ([__temp, __restore] = withAsyncContext(() => useOnlyFetch("/manage-blogs", {
      method: "get",
      async onResponse({ response }) {
        blogList.value = response._data;
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))}><div class="dashboard-box mt30 custom-card-form"><div class="custom-card-header d-flex align-items-center justify-content-between"><div class="table-heading"><h5>Blog List</h5></div><div class="add-new-btn">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { path: "/dashboard/manage-blog/create" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-plus"${_scopeId}></i> Add New Blog `);
          } else {
            return [
              createVNode("i", { class: "fas fa-plus" }),
              createTextVNode(" Add New Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line"></div><div class="row gy-4 mt-15"><!--[-->`);
      ssrRenderList(unref(blogList), (blog) => {
        _push(`<div class="col-xl-4 col-md-6"><div class="blog-post-card blog-post-card-color h-100"><div class="blog-post-thumbnails position-relative">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: blog.featured_image,
          loading: "lazy",
          format: "webp",
          placeholder: "",
          alt: "img",
          class: "w-100"
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([blog.status == 1 ? "active-status gradient-bg" : "deactivated-status gradient-bg-red", "blog-status badge"])}">${ssrInterpolate(blog.status == 1 ? "Published" : "Unpublished")}</div></div><div class="blog-post-content mt-20"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-clock"></i> ${ssrInterpolate(blog.publish_date)}</span><h4>${ssrInterpolate(blog.title)}</h4><p class="mt-3">${ssrInterpolate(blog.short_content)}.</p><div class="line-1 mt-20"></div><div class="d-flex justify-content-between mt-15"><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-eye"></i> ${ssrInterpolate(blog.views_count)} Views </span><span class="publish-date d-flex align-items-center"><i class="fa-solid fa-comments"></i> ${ssrInterpolate(blog.comments_count)} Comments </span></div><ul class="btn-group-card d-flex align-items-center justify-content-between mt-2"><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: { path: `/blog-detail/${blog.slug}` },
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-eye green"${_scopeId}></i> View `);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-eye green" }),
                createTextVNode(" View ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
        if (unref(hasPermission)("manage-blogs-edit")) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: { path: `/dashboard/manage-blog/edit`, query: { id: blog.id } }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fa-solid fa-pen skyblue"${_scopeId}></i> Edit `);
              } else {
                return [
                  createVNode("i", { class: "fa-solid fa-pen skyblue" }),
                  createTextVNode(" Edit ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasPermission)("manage-blogs-delete")) {
          _push(`<li><button type="button" data-bs-toggle="modal"><i class="fa-solid fa-trash-can red"></i> Delete </button></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-IN-rSwuL.js.map
