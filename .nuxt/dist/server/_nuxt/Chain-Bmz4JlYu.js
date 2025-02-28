import { _ as _sfc_main$1 } from "./NuxtImg-Cvt1lRnM.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Chain",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      { src: "images/logo/bitcoin.png", alt: "Bitcoin" },
      { src: "images/logo/etherreum.png", alt: "Ethereum" },
      { src: "images/logo/binance.png", alt: "Binance" },
      { src: "images/logo/polygon.png", alt: "Polygon" },
      { src: "images/logo/crypto.png", alt: "Crypto" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "coin-logo-section" }, _attrs))}><div class="container"><div class="coin-logo-area"><ul class="d-flex align-items-center flex-wrap"><!--[-->`);
      ssrRenderList(logos, (logo, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: logo.src,
          loading: "lazy",
          placeholder: [170, 45],
          format: "webp",
          width: "170",
          height: "45",
          alt: logo.alt
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Home/Chain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Chain-Bmz4JlYu.js.map
