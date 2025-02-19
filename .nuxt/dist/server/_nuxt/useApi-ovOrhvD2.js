import { a as useAuthStore, c as useRuntimeConfig, n as navigateTo } from "../server.mjs";
import { a as useLazyFetch, u as useFetch, b as useToastAlert } from "./useToastAlert-BKJHFXvC.js";
import { ref } from "vue";
function useApi() {
  const config = useRuntimeConfig();
  const auth = useAuthStore();
  const { toastError } = useToastAlert();
  const fetchOptions = () => ({
    baseURL: config.public.apiBase,
    // Request Interceptor
    onRequest({ options }) {
      if (auth.token) {
        if (!(options.headers instanceof Headers)) {
          options.headers = new Headers(options.headers);
        }
        options.headers.set("Authorization", `Bearer ${auth.token}`);
      }
    },
    // Handle Request Errors
    onRequestError({ error }) {
      return Promise.reject(error);
    },
    // Response Interceptor
    onResponse({ response }) {
      return response._data;
    },
    // Handle Response Errors
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
  const useOnlyFetch = (url, opts = {}) => {
    const data = ref(null);
    const pending = ref(false);
    const error = ref(null);
    const fetchData = async () => {
      pending.value = true;
      error.value = null;
      try {
        const response = await $fetch(url, { ...fetchOptions(), ...opts, method: opts.method || "GET" });
        data.value = response;
      } catch (err) {
        error.value = err.message || "Something went wrong!";
      } finally {
        pending.value = false;
      }
    };
    fetchData();
    return { data, pending, error, refresh: fetchData };
  };
  return {
    // For mutations (POST, PUT, DELETE)
    myFetch: async (url, opts = {}) => {
      return await $fetch(url, { ...fetchOptions(), ...opts, method: opts.method || "GET" });
    },
    // ✅ my Fetch for GET requests with pending/error states (POST, PUT, DELETE)
    useOnlyFetch,
    // For SSR-supported data fetching
    useMyFetch: (url, opts = {}) => {
      return useFetch(url, { ...fetchOptions(), ...opts, method: opts.method || "GET" }, "$UqgiltlUfE");
    },
    // For lazy loading data
    useMyLazyFetch: (url, opts = {}) => {
      return useLazyFetch(url, { ...fetchOptions(), ...opts, method: opts.method || "GET" }, "$HgqqyPIEgZ");
    }
  };
}
export {
  useApi as u
};
//# sourceMappingURL=useApi-ovOrhvD2.js.map
