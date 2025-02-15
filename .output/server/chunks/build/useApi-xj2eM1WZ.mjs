import { a as useAuthStore, c as useRuntimeConfig, n as navigateTo } from './server.mjs';
import { u as useLazyFetch, a as useFetch, b as useToastAlert } from './useToastAlert-Bzdkte1l.mjs';

function useApi() {
  const auth = useAuthStore();
  const { toastError } = useToastAlert();
  const fetchOptions = () => ({
    baseURL: useRuntimeConfig().public.apiBase,
    // Request Interceptor
    onRequest({ options }) {
      if (auth.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${auth.token}`
        };
        options.credentials = "include";
      }
    },
    // Request Error
    onRequestError({ error }) {
      return Promise.reject(error);
    },
    // Response Interceptor
    onResponse({ response }) {
      return response._data;
    },
    // Response Error
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
          if (!response) ;
          else {
            toastError(((_b = response._data) == null ? void 0 : _b.message) || "An error occurred");
          }
      }
      return Promise.reject(error);
    }
  });
  return {
    // For mutations (POST, PUT, DELETE)
    fetch: async (url, opts = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts
      };
      return await $fetch(url, options);
    },
    // For data fetching with SSR support
    useFetch: (url, opts = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts
      };
      return useFetch(url, options, "$UqgiltlUfE");
    },
    // For lazy loading data
    useLazyFetch: (url, opts = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts
      };
      return useLazyFetch(url, options, "$HgqqyPIEgZ");
    }
  };
}

export { useApi as u };
//# sourceMappingURL=useApi-xj2eM1WZ.mjs.map
