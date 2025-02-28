import { mergeModels, useModel, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: String,
    type: { type: String, default: "text" },
    step: { type: String, default: null },
    col: { type: String, default: "col-md-12" },
    id: String,
    placeholder: String,
    required: Boolean,
    readonly: { type: Boolean, default: false },
    error: String,
    message: String
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
    const computedPlaceholder = computed(() => {
      return props.placeholder || props.label || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["form-group", __props.col]
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", inputId.value)} class="label">${ssrInterpolate(__props.label)}: `);
        if (__props.message) {
          _push(`<code>${ssrInterpolate(__props.message)}</code>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="input bg-border-input d-flex align-items-center"><input${ssrRenderAttr("id", inputId.value)}${ssrRenderAttr("type", __props.type)}${ssrRenderDynamicModel(__props.type, model.value, null)} class="${ssrRenderClass([{ "is-invalid": __props.error }, "form-control"])}"${ssrRenderAttr("placeholder", computedPlaceholder.value)}${ssrRenderAttr("step", __props.step)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""}></div>`);
      if (__props.error) {
        _push(`<div class="invalid-feedback d-block">${ssrInterpolate(__props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormGroup/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Input-CYTDhVcw.js.map
