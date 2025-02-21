import { a as useAuthStore, b as useRuntimeConfig, n as navigateTo } from "../server.mjs";
import { a as useLazyFetch, u as useFetch, b as useToastAlert } from "./useToastAlert-BBJ771Vo.js";
function useApi() {
  const config = useRuntimeConfig();
  const auth = useAuthStore();
  const { toastError } = useToastAlert();
  const fetchOptions = () => ({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      if (auth.token) {
        if (!(options.headers instanceof Headers)) {
          options.headers = new Headers(options.headers);
        }
        options.headers.set("Authorization", `Bearer ${auth.token}`);
      }
    },
    onRequestError({ error }) {
      return Promise.reject(error);
    },
    onResponse({ response }) {
      return response._data;
    },
    onResponseError({ error, response }) {
      var _a, _b;
      switch (response == null ? void 0 : response.status) {
        case 401:
          auth.$reset();
          toastError(((_a = response._data) == null ? void 0 : _a.message) || "Unauthorized! Please log in.");
          navigateTo("/auth/login");
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
        default:
          toastError(((_b = response == null ? void 0 : response._data) == null ? void 0 : _b.message) || "An error occurred");
      }
      return Promise.reject(error);
    }
  });
  return {
    // For mutations (POST, PUT, DELETE)
    myFetch: async (url, opts = {}) => {
      return await $fetch(url, {
        ...fetchOptions(),
        ...opts,
        method: opts.method || "GET"
      });
    },
    useOnlyFetch: (url, opts = {}) => {
      return useFetch(url, {
        ...fetchOptions(),
        ...opts,
        method: opts.method || "GET",
        server: false
      }, "$UqgiltlUfE");
    },
    // For SSR-supported data fetching
    useMyFetch: (url, opts = {}) => {
      return useFetch(url, {
        ...fetchOptions(),
        ...opts,
        method: opts.method || "GET"
      }, "$HgqqyPIEgZ");
    },
    // For lazy loading data
    useMyLazyFetch: (url, opts = {}) => {
      return useLazyFetch(url, {
        ...fetchOptions(),
        ...opts,
        method: opts.method || "GET"
      }, "$szE3KFZK0G");
    }
  };
}
export {
  useApi as u
};
//# sourceMappingURL=useApi-CoUeKmPG.js.map
