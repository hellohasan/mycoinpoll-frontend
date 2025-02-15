import { _ as __nuxt_component_0 } from './nuxt-link-3pynsLqV.mjs';
import { _ as _sfc_main$4 } from './NuxtImg-CDXWn6Zd.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useAuthStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$4;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-area-bg-color" }, _attrs))}><div class="container"><nav class="navbar navbar-expand-xl menu-bg clip-path"><div class="container-fluid">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/logo.png",
              preloading: "lazy",
              placeholder: [220, 32],
              alt: "logo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/images/logo.png",
                preloading: "lazy",
                placeholder: [220, 32],
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fa fa-bars" aria-hidden="true"></i></span></button><div class="collapse navbar-collapse" id="navbarText"><ul class="navbar-nav mx-auto" id="outside-click"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-link",
        "aria-current": "page",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-link",
        to: "/androverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Androverse`);
          } else {
            return [
              createTextVNode("Androverse")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-link",
        to: "/learn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn &amp; Earn`);
          } else {
            return [
              createTextVNode("Learn & Earn")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-link",
        to: "/news"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News`);
          } else {
            return [
              createTextVNode("News")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="header-right d-flex align-items-center"><div class="button-wrapper d-flex align-items-center border-gradient"><a href="#" role="button"> Affiliate Program <span>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/icon/affiliate.png",
        loading: "lazy",
        alt: "icon"
      }, null, _parent));
      _push(`</span></a></div><div class="button-wrapper d-flex align-items-center border-gradient">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(authenticated) ? "/dashboard" : "/auth/login",
        role: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(authenticated) ? "Dashboard" : "Connect Wallet")} <span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/icon/wallet.png",
              alt: "icon"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(authenticated) ? "Dashboard" : "Connect Wallet") + " ", 1),
              createVNode("span", null, [
                createVNode(_component_nuxt_img, {
                  src: "/images/icon/wallet.png",
                  alt: "icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></nav></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const loading = ref(false);
    const error = ref("");
    const success = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-051b95d0><h4 data-v-051b95d0>Newsletter</h4><p data-v-051b95d0>Subscribe to our newsletter for latest update &amp; stay with us.</p><div class="subscribe-form" data-v-051b95d0><div class="message-container" data-v-051b95d0>`);
      if (unref(error)) {
        _push(`<p class="error-message" data-v-051b95d0>${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<p class="success-message" data-v-051b95d0>${ssrInterpolate(unref(success))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form data-v-051b95d0><div class="subscribe-email" data-v-051b95d0><input${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass({ error: unref(error) })}" required type="email" placeholder="Enter Your Email" data-v-051b95d0></div><input type="submit" class="btn1 primary-btn subscribe-btn mt-1"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}${ssrRenderAttr("value", unref(loading) ? "Subscribing..." : "Subscribe")} data-v-051b95d0></form></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Newsletter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-051b95d0"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_img = _sfc_main$4;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_FrontendNewsletter = __nuxt_component_2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-main-section pt120 position-relative center-effect1" }, _attrs))}><div class="footer-circle circle-effect-center"></div><div class="container"><div class="row"><div class="col-md-12"><div class="footer-area d-flex justify-content-between"><div class="footer-description">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_img, {
          src: "images/logo.png",
          alt: "logo"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_img, {
            src: "images/logo.png",
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mt40">Empowering Your Crypto Journey: Explore, Invest, and Engage with the Future of Finance!</p><div class="social-menu"><span>Follow us</span><ul class="d-flex align-items-center"><li><a href="https://twitter.com/mycoinpoll" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a></li><li><a href="https://t.me/MyCoinPolldotCom" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a></li><li><a href="https://www.youtube.com/@mycoinpollcom/featured" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></li><li><a href="https://coinmarketcap.com/community/profile/MyCoinPoll/" target="_blank" rel="noopener noreferrer">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "images/icon/coinmarketcap.png",
    style: { width: "20px" },
    alt: ""
  }, null, _parent));
  _push(`</a></li><li><a href="https://www.linkedin.com/company/mycoinpoll" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li></ul></div></div><div class="footer-widgets-area d-flex"><div class="footer-widgets"><h4>Company</h4><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/androverse" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Androverse`);
      } else {
        return [
          createTextVNode("Androverse")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/learn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn &amp; Earn`);
      } else {
        return [
          createTextVNode("Learn & Earn")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-widgets contactinfo"><h4>Contact Info.</h4><ul><li> Customer Support: <br><a href="mailto:support@mycoinpoll.com">support@mycoinpoll.com</a></li><li><p class="or-divider">OR</p></li><li> Listing Enquiries: <br><a href="mailto:listing@mycoinpoll.com">listing@mycoinpoll.com</a></li></ul></div><div class="footer-widgets footer-subscribe">`);
  _push(ssrRenderComponent(_component_FrontendNewsletter, null, null, _parent));
  _push(`</div></div></div></div><div class="col-md-12"><div class="post-info mb-4"><p><b class="gradient-color">Legal Information:</b> BigBull Capital LLC. Registered address: Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, S.t Vincent and the Grenadines. Registration number: 3846 LLC 2024 </p><p>Risk Warning: Investing in cryptocurrencies and blockchain projects involves a high degree of risk, including the potential loss of your entire investment. The following risks are associated with participating in mycoinpoll launchpad.</p><p>Market Volatility: Cryptocurrency markets are highly volatile, with prices subject to rapid and unpredictable fluctuations. Past performance is not indicative of future results.</p><p>Project Viability: Early-stage blockchain projects may fail or underperform due to technical issues, market conditions, regulatory changes, or lack of adoption. Investing in these projects may result in financial loss.</p><p>Regulatory Uncertainty: Cryptocurrencies and token sales operate in an uncertain regulatory environment, which may evolve over time. Changes in regulations or legal actions may negatively impact the value and liquidity of your investments.</p><p>Security Risks: The security of crypto assets and platforms can be compromised due to hacking, phishing attacks, or other malicious activities. Always ensure you&#39;re using secure methods to protect your private keys and personal information.</p><p>Liquidity Risk: Tokens issued on a crypto launchpad may have limited liquidity in the early stages. It may be challenging to buy or sell tokens, and prices may vary significantly due to low trading volumes.</p><p>Technical Risks: Blockchain technology and smart contracts are still evolving. Bugs, vulnerabilities, or failures in the underlying technology can lead to the loss of funds or delays in the project\u2019s progress.</p><p>Speculative Nature: Many crypto projects are highly speculative. There is no guarantee that a project will succeed, and even promising ideas may not achieve widespread adoption or reach commercial viability.</p><p>Tax Implications: Cryptocurrency investments may have tax implications. It is your responsibility to understand and comply with tax obligations in your jurisdiction.</p><p>By participating in MyCoinPoll crypto launchpad, you acknowledge that you fully understand the risks involved and accept full responsibility for your investment decisions. We strongly encourage you to conduct thorough research and seek professional advice before engaging in any token sale or cryptocurrency investment.</p></div></div><div class="col-md-12"><div class="footer-bottom-copyright d-flex flex-wrap align-items-center justify-content-between"><div class="copyright-text"><p> \xA9 2025 <a href="#" class="gradient-color">MyCoinPoll.com</a> All Rights Reserved. </p></div><div class="terms-conditions"><ul class="d-flex align-items-center"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "terms-conditions" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms &amp; Conditions`);
      } else {
        return [
          createTextVNode("Terms & Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "privacy-policy" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Frontend/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FrontendHeader = _sfc_main$3;
  const _component_FrontendFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FrontendHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_FrontendFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-B_k9s2Uo.mjs.map
