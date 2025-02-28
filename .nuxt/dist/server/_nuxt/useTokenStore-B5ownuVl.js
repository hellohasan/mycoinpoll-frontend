import { defineStore } from "pinia";
import { e as useRuntimeConfig } from "../server.mjs";
const useTokenStore = defineStore("tokenData", {
  state: () => ({
    tokens: [],
    token: null,
    loading: false,
    error: null
  }),
  getters: {
    runningTokens: (state) => state.tokens.filter((token) => token.status === true),
    upcomingTokens: (state) => state.tokens.filter((token) => token.status === false)
  },
  actions: {
    async getTokens() {
      const config = useRuntimeConfig();
      this.loading = true;
      this.error = null;
      try {
        const data = await $fetch(`${config.public.apiBase}/tokens`);
        this.tokens = data || [];
      } catch (err) {
        this.error = err.message || "Failed to fetch tokens";
      } finally {
        this.loading = false;
      }
    },
    async getSingleToken(slug) {
      if (!slug) {
        this.error = "Slug is required";
        return null;
      }
      const config = useRuntimeConfig();
      this.loading = true;
      this.error = null;
      try {
        this.token = await $fetch(`${config.public.apiBase}/token/${slug}`);
      } catch (err) {
        this.error = err.message || "Failed to fetch token";
        this.token = null;
      } finally {
        this.loading = false;
      }
      return this.token;
    },
    // Reset single token data
    clearToken() {
      this.token = null;
      this.error = null;
    }
  }
});
export {
  useTokenStore as u
};
//# sourceMappingURL=useTokenStore-B5ownuVl.js.map
