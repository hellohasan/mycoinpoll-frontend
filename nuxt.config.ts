// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins: ["~/plugins/jquery.client.ts", "~/plugins/bootstrap.client.ts", "~/plugins/appkit.client.ts"],
  css: ["bootstrap/dist/css/bootstrap.css", "slick-carousel/slick/slick.css", "slick-carousel/slick/slick-theme.css", "@/assets/css/flipbox.css", "@/assets/css/main.css", "@/assets/css/responsive.css", "vue-skeletor/dist/vue-skeletor.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "MyCoinPoll.Com | World's No 1 Crypto Launchpad",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oxanium:wght@200..800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          media: "print",
          onload: "this.media='all'",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          tagPosition: "bodyClose",
          defer: false,
        },
        {
          src: "/js/flipbox.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        {
          src: "/js/main.js",
          tagPosition: "bodyClose",
          defer: true,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      appName: process.env.NUXT_APP_NAME || "MyCoinPoll Crypto Launchpad",
      appUrl: process.env.NUXT_APP_URL || "http://localhost:3000",
      apiBase: process.env.NUXT_API_BASE_URL || "http://mycoinpoll-backend.test/api",

      tokenSaleAddress: process.env.NUXT_TOKEN_SALE_ADDRESS,
      tokenAddress: process.env.NUXT_TOKEN_ADDRESS,
      usdtAddress: process.env.NUXT_USDT_ADDRESS,
      StakingAddress: process.env.NUXT_STAKING_ADDRESS,

      web3ProjectId: process.env.NUXT_WEB3_PROJECT_ID,
      alchemyLink: process.env.NUXT_ALCHEMY_LINK,
    },
  },

  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", "@nuxt/image"],
  image: {
    quality: 20,
    format: ["webp", "jpg", "png"],
    modifiers: {
      placeholder: "blur",
      quality: 10,
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  vite: {
    server: {
      allowedHosts: ["app.mycoionpoll-nano.test"],
    },
  },
});
