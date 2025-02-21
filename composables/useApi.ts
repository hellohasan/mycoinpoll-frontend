// composables/useApi.ts
import type { UseFetchOptions } from "nuxt/app";

export function useApi() {
  const config = useRuntimeConfig();
  const auth = useAuthStore();
  const { toastError } = useToastAlert();

  const fetchOptions = <T>(): UseFetchOptions<T> => ({
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
      toastError("An error occurred while sending the request");
      return Promise.reject(error);
    },

    onResponse({ response }) {
      return response._data;
    },

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
          //toastError("Internal server error.");
          break;
        default:
          toastError(response?._data?.message || "An error occurred");
      }
      return Promise.reject(error);
    },
  });

  return {
    // For mutations (POST, PUT, DELETE)
    myFetch: async <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return await $fetch<T>(url, {
        ...(fetchOptions<T>() as any),
        ...opts,
        method: opts.method || "GET",
      });
    },

    useOnlyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return useFetch<T>(url, {
        ...(fetchOptions<T>() as any),
        ...opts,
        method: opts.method || "GET",
        server: false,
      });
    },

    // For SSR-supported data fetching
    useMyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return useFetch<T>(url, {
        ...(fetchOptions<T>() as any),
        ...opts,
        method: opts.method || "GET",
      });
    },

    // For lazy loading data
    useMyLazyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return useLazyFetch<T>(url, {
        ...(fetchOptions<T>() as any),
        ...opts,
        method: opts.method || "GET",
      });
    },
  };
}
