import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokenData", {
  state: () => ({
    tokens: [],
    token: {},
  }),

  getters: {
    runningTokens: (state) => {
      return state.tokens.filter((token) => token.status === true);
    },
    upcomingTokens: (state) => {
      return state.tokens.filter((token) => token.status === false);
    },
  },

  actions: {
    async getTokens() {
      const config = useRuntimeConfig();
      try {
        const data = await $fetch(`${config.public.apiBase}/tokens`);
        this.tokens = data;
      } catch (error) {
        console.error("Error fetching tokens");
      }
    },

    async getSingleToken(slug) {
      const config = useRuntimeConfig();
      try {
        const data = await $fetch(`${config.public.apiBase}/token/${slug}`);
        this.token = data;
      } catch (error) {
        console.error("Error fetching single token");
      }
    },
  },
});
