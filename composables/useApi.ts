// composables/useApi.ts
import { UseFetchOptions } from "nuxt/app";

export function useApi() {
  const auth = useAuthStore();
  const { toastError } = useToastAlert();

  const fetchOptions = (): UseFetchOptions<any> => ({
    baseURL: useRuntimeConfig().public.apiBase,

    // Request Interceptor
    onRequest({ options }) {
      if (auth.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${auth.token}`,
        };
        options.credentials = "include";
      }
    },

    // Request Error
    onRequestError({ error }) {
      toastError("An error occurred while sending the request");
      return Promise.reject(error);
    },

    // Response Interceptor
    onResponse({ response }) {
      return response._data;
    },

    // Response Error
    onResponseError({ error, response }) {
      switch (response?.status) {
        case 401:
          auth.$reset();
          toastError(response._data?.message || "Unauthorized! Please log in.");
          navigateTo("/auth/login");
          break;

        case 403:
          toastError("Access denied! or Invalid request!");
          break;

        case 404:
          toastError("Requested resource not found.");
          break;

        case 500:
          toastError("Internal server error.");
          break;

        default:
          if (!response) {
            toastError("Network error or server is unreachable.");
          } else {
            toastError(response._data?.message || "An error occurred");
          }
      }
      return Promise.reject(error);
    },
  });

  return {
    // For mutations (POST, PUT, DELETE)
    fetch: async <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts,
      };
      return await $fetch<T>(url, options);
    },

    // For data fetching with SSR support
    useFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts,
      };
      return useFetch<T>(url, options);
    },

    // For lazy loading data
    useLazyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      const options = {
        ...fetchOptions(),
        ...opts,
      };
      return useLazyFetch<T>(url, options);
    },
  };
}
