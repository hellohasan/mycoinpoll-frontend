import { _ as __nuxt_component_0 } from "./nuxt-link-Bojkr02_.js";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, withDirectives, vModelText, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import draggable from "vuedraggable";
import "hookable";
import { _ as _export_sfc, b as useRoute } from "../server.mjs";
import "vue-toastification";
import { u as useVForm } from "./useVForm-BndtwnoY.js";
import { u as useApi } from "./useApi-BM86DZuP.js";
import "ufo";
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
import "vform";
const _sfc_main = {
  __name: "roadmap",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = ref(route.params.slug);
    const form = useVForm({
      groups: [
        {
          name: "",
          heading: "",
          tasks: [{ name: "", status: false }]
        }
      ]
    });
    const removeTask = (groupIndex, taskIndex) => {
      form.groups[groupIndex].tasks.splice(taskIndex, 1);
    };
    const toggleStatus = (groupIndex, taskIndex) => {
      const task = form.groups[groupIndex].tasks[taskIndex];
      task.status = !task.status;
    };
    const { useOnlyFetch } = useApi();
    [__temp, __restore] = withAsyncContext(() => useOnlyFetch(`manage-tokens/${slug.value}/roadmap`, {
      onResponse({ response }) {
        form.groups = response._data.roadmap_data;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-body mt30" }, _attrs))} data-v-f374d578><div class="dashboard-box mt30 custom-card-form" data-v-f374d578><div class="custom-card-header d-flex align-items-center justify-content-between" data-v-f374d578><div class="table-heading" data-v-f374d578><h5 data-v-f374d578>Token Roadmap</h5></div><div class="add-new-btn" data-v-f374d578>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { name: "dashboard-manage-tokens" },
        class: "gradient-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-list" data-v-f374d578${_scopeId}></i> Token List `);
          } else {
            return [
              createVNode("i", { class: "fas fa-list" }),
              createTextVNode(" Token List ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-line" data-v-f374d578></div><div class="custom-card-body" data-v-f374d578><div class="d-flex justify-content-between" data-v-f374d578><h3 class="mb20 text-white" data-v-f374d578>Add Roadmap Groups and Tasks</h3><button class="gradient-btn mb20" data-v-f374d578>Add Group</button></div>`);
      if (unref(form).errors.any()) {
        _push(`<div class="alert alert-danger alert-dismissible fade show" role="alert" data-v-f374d578><strong data-v-f374d578>Oops! There were some problems with your input.</strong><ol class="mb-0 mt-2" data-v-f374d578><!--[-->`);
        ssrRenderList(unref(form).errors.all(), (error) => {
          _push(`<li class="error" data-v-f374d578>${ssrInterpolate(error[0])}</li>`);
        });
        _push(`<!--]--></ol><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" data-v-f374d578></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(form).groups, (group, groupIndex) => {
        _push(`<div class="border-image-gradient p-3 mb20" data-v-f374d578><div class="row d-flex justify-content-between align-items-center mb-2" data-v-f374d578><h6 class="text-white col-md-8" data-v-f374d578><label for="" data-v-f374d578>Group ${ssrInterpolate(groupIndex + 1)}:</label><div class="row" data-v-f374d578><div class="col-md-6" data-v-f374d578><div class="input bg-border-input" data-v-f374d578><input type="text"${ssrRenderAttr("value", group.name)} class="form-control" placeholder="Enter Group Name" data-v-f374d578></div></div><div class="col-md-6" data-v-f374d578><div class="input bg-border-input" data-v-f374d578><input type="text"${ssrRenderAttr("value", group.heading)} class="form-control" placeholder="Enter Group Heading" data-v-f374d578></div></div></div></h6><div class="col-md-4 text-end" data-v-f374d578><button class="gradient-btn small-btn me-1" data-v-f374d578>Add Task</button><button class="gradient-btn small-btn delete-btn" data-v-f374d578>Remove Group</button></div></div><table class="table table-bordered" style="${ssrRenderStyle({ "background": "#09111b" })}" data-v-f374d578><thead data-v-f374d578><tr data-v-f374d578><th width="5%" data-v-f374d578></th><th width="45%" data-v-f374d578>Task Name</th><th width="25%" data-v-f374d578>Task Status</th><th width="25%" data-v-f374d578>Action</th></tr></thead>`);
        _push(ssrRenderComponent(unref(draggable), {
          modelValue: group.tasks,
          "onUpdate:modelValue": ($event) => group.tasks = $event,
          tag: "tbody",
          handle: ".drag-handle",
          animation: 200,
          itemKey: "taskIndex"
        }, {
          item: withCtx(({ element: task, index: taskIndex }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<tr data-v-f374d578${_scopeId}><td data-v-f374d578${_scopeId}><i class="fas fa-bars drag-handle" data-v-f374d578${_scopeId}></i></td><td data-v-f374d578${_scopeId}><div class="input bg-border-input" data-v-f374d578${_scopeId}><input type="text"${ssrRenderAttr("value", task.name)} placeholder="Task name" class="form-control" data-v-f374d578${_scopeId}></div></td><td data-v-f374d578${_scopeId}><div class="task-status" data-v-f374d578${_scopeId}><button class="${ssrRenderClass([task.status ? "active-status" : "deactivate-status", "badge"])}" data-v-f374d578${_scopeId}>${ssrInterpolate(task.status ? "Complete" : "Pending")}</button></div></td><td data-v-f374d578${_scopeId}><button class="gradient-btn small-btn delete-btn" data-v-f374d578${_scopeId}>Remove Task</button></td></tr>`);
            } else {
              return [
                createVNode("tr", null, [
                  createVNode("td", null, [
                    createVNode("i", { class: "fas fa-bars drag-handle" })
                  ]),
                  createVNode("td", null, [
                    createVNode("div", { class: "input bg-border-input" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => task.name = $event,
                        placeholder: "Task name",
                        class: "form-control"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, task.name]
                      ])
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("div", { class: "task-status" }, [
                      createVNode("button", {
                        onClick: ($event) => toggleStatus(groupIndex, taskIndex),
                        class: ["badge", task.status ? "active-status" : "deactivate-status"]
                      }, toDisplayString(task.status ? "Complete" : "Pending"), 11, ["onClick"])
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("button", {
                      onClick: ($event) => removeTask(groupIndex, taskIndex),
                      class: "gradient-btn small-btn delete-btn"
                    }, "Remove Task", 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</table></div>`);
      });
      _push(`<!--]--></div><div class="card-line" data-v-f374d578></div><div class="custom-card-footer" data-v-f374d578><div class="form-group d-flex justify-content-end align-items-center g30" data-v-f374d578><button type="submit"${ssrIncludeBooleanAttr(unref(form).busy) ? " disabled" : ""} class="gradient-btn" data-v-f374d578>`);
      if (unref(form).busy) {
        _push(`<i class="fas fa-spinner fa-spin me-1" data-v-f374d578></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Update Token Roadmap </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/manage-tokens/[slug]/roadmap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roadmap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f374d578"]]);
export {
  roadmap as default
};
//# sourceMappingURL=roadmap-_J4FMCd3.js.map
