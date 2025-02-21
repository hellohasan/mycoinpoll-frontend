import { mergeProps, useSSRContext, reactive } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import Form from "vform";
import { b as useRuntimeConfig } from "../server.mjs";
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
function useVForm(data) {
  const config = useRuntimeConfig();
  class CustomForm extends Form {
    async submit(path, method = "post", options = {}) {
      this.busy = true;
      try {
        const response = await $fetch(`${config.public.apiBase}${path}`, {
          method: method.toUpperCase(),
          body: this.data(),
          ...options
        });
        this.busy = false;
        return response;
      } catch (error) {
        if (error.statusCode === 422) {
          this.errors.set(error.data.errors);
        }
        this.busy = false;
        throw error;
      }
    }
  }
  return reactive(new CustomForm(data));
}
export {
  _sfc_main as _,
  useVForm as u
};
//# sourceMappingURL=useVForm-BdBdNnz_.js.map
