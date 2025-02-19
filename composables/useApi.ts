// composables/useApi.ts
import type { UseFetchOptions } from "nuxt/app";

export function useApi() {
  const config = useRuntimeConfig();
  const auth = useAuthStore();
  const { toastError } = useToastAlert();

  const fetchOptions = <T>(): UseFetchOptions<T> => ({
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
      toastError("An error occurred while sending the request");
      return Promise.reject(error);
    },

    // Response Interceptor
    onResponse({ response }) {
      return response._data;
    },

    // Handle Response Errors
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
          toastError(response?._data?.message || "An error occurred");
      }
      return Promise.reject(error);
    },
  });

  // ✅ my Fetch with `pending`, `error`, and `refresh`
  const useOnlyFetch = <T>(url: string, opts: Partial<UseFetchOptions<T>> = {}) => {
    const data = ref<T | null>(null);
    const pending = ref(false);
    const error = ref<string | null>(null);

    const fetchData = async () => {
      pending.value = true;
      error.value = null;
      try {
        const response = await $fetch<T>(url, { ...(fetchOptions<T>() as any), ...opts, method: opts.method || "GET" });
        data.value = response;
      } catch (err: any) {
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
    myFetch: async <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return await $fetch<T>(url, { ...(fetchOptions<T>() as any), ...opts, method: opts.method || "GET" });
    },

    // ✅ my Fetch for GET requests with pending/error states (POST, PUT, DELETE)
    useOnlyFetch,

    // For SSR-supported data fetching
    useMyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return useFetch<T>(url, { ...(fetchOptions<T>() as any), ...opts, method: opts.method || "GET" });
    },

    // For lazy loading data
    useMyLazyFetch: <T>(url: string, opts: UseFetchOptions<T> = {}) => {
      return useLazyFetch<T>(url, { ...(fetchOptions<T>() as any), ...opts, method: opts.method || "GET" });
    },
  };
}
