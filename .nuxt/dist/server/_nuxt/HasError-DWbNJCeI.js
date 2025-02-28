import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "HasError",
  __ssrInlineRender: true,
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.form.errors.has(__props.field)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "invalid-feedback d-block" }, _attrs))}>${__props.form.errors.get(__props.field) ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormGroup/HasError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=HasError-DWbNJCeI.js.map
