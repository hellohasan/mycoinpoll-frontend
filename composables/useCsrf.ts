export function useCsrf() {
  const config = useRuntimeConfig();

  const formatApiUrl = (endpoint: string) => {
    if (endpoint.startsWith("/sanctum/csrf-cookie")) {
      return config.public.apiBase.replace(/\/api\/v\d+$/, "") + endpoint;
    }
    return config.public.apiBase + endpoint;
  };

  const getCsrfToken = async () => {
    try {
      const url = formatApiUrl("/sanctum/csrf-cookie");
      await $fetch(url);
    } catch (error) {
      throw new Error("CSRF token fetch failed");
    }
  };

  return { getCsrfToken };
}
