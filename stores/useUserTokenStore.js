import { defineStore } from "pinia";

const EXPIRATION_TIME = 3 * 60 * 1000; // 5 minutes

export const useUserTokenStore = defineStore("userToken", {
  state: () => ({
    tokens: [],
    isLoading: false,
    error: null,
    expirationTime: null,
  }),

  getters: {
    getTokenById: (state) => (id) => state.tokens.find((token) => token.id === id),

    isDataExpired: (state) => {
      return !state.expirationTime || Date.now() >= state.expirationTime;
    },

    userETHAddress() {
      const authStore = useAuthStore();
      return authStore.user?.eth_address || "";
    },
  },

  actions: {
    async fetchFeatureTokens() {
      if (!this.isDataExpired) return;
      const { myFetch } = useApi();
      this.isLoading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const data = await myFetch(`${config.public.apiBase}/feature-tokens`);
        const tokensWithBalances = await Promise.all(
          data.map(async (token) => {
            const balance = await this.fetchTokenBalance(token);
            return {
              ...token,
              balance,
            };
          })
        );
        this.tokens = tokensWithBalances;
        this.setExpirationTime();
      } catch (error) {
        this.error = "Failed to fetch feature tokens";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchTokenBalance(token) {
      if (!this.userETHAddress) return 0;
      if (token.contract_address == null) return 0;
      const { myFetch } = useApi();
      try {
        const data = await myFetch(`token-balance/${token.contract_address}/${this.userETHAddress}`);
        return data.balance;
      } catch (error) {}
    },

    setExpirationTime() {
      this.expirationTime = Date.now() + EXPIRATION_TIME;
    },

    resetIfExpired() {
      if (this.isDataExpired) {
        this.tokens = [];
        this.expirationTime = null;
        this.fetchFeatureTokens();
      }
    },
  },

  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    beforeRestore: (context) => {
      context.store.resetIfExpired();
    },
  },
});
