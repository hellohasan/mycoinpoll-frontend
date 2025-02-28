import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Status",
  __ssrInlineRender: true,
  props: {
    status: {
      type: Boolean,
      required: true
    },
    onText: {
      type: String,
      default: "Activated"
    },
    offText: {
      type: String,
      default: "Deactivated"
    },
    onClass: {
      type: String,
      default: "completed-status"
    },
    offClass: {
      type: String,
      default: "pending-status"
    }
  },
  setup(__props) {
    const props = __props;
    const badgeClass = computed(() => props.status ? props.onClass : props.offClass);
    const statusText = computed(() => props.status ? props.onText : props.offText);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["badge", unref(badgeClass)]
      }, _attrs))}>${ssrInterpolate(unref(statusText))}</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Elements/Status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Status-BqHMV6Wp.js.map
