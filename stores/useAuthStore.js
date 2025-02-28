import { defineStore } from "pinia";

export const useAuthStore = defineStore("authentication", {
  state: () => ({
    user: null,
    token: null,
    roles: [],
    permissions: [],
  }),

  getters: {
    authenticated: (state) => !!state.token && !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getRoles: (state) => state.roles,
    getPermission: (state) => state.permissions,
  },

  actions: {
    loginAction(response) {
      this.user = response.user;
      this.token = response.token;
      this.roles = response.roles;
      this.permissions = response.permissions;
    },

    updateUser(response) {
      this.user = response;
    },
  },

  persist: {
    storage: piniaPluginPersistedstate.cookies(),
  },
});
