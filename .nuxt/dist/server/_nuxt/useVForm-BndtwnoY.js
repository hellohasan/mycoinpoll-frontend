import Form from "vform";
import { reactive } from "vue";
import { a as useAuthStore, e as useRuntimeConfig } from "../server.mjs";
function useVForm(data) {
  const config = useRuntimeConfig();
  const auth = useAuthStore();
  class CustomForm extends Form {
    async submit(path, method = "post", options = {}) {
      this.busy = true;
      const headers = {};
      if (auth.token) {
        headers.Authorization = `Bearer ${auth.token}`;
      }
      try {
        const response = await $fetch(`${config.public.apiBase}${path}`, {
          method: method.toUpperCase(),
          body: this.data(),
          headers: {
            ...headers,
            ...options.headers || {}
          },
          ...options
        });
        this.busy = false;
        return response;
      } catch (error) {
        if (error.statusCode === 422) {
          this.errors.set(error.data.errors);
        }
        this.busy = false;
        throw error;
      }
    }
  }
  return reactive(new CustomForm(data));
}
export {
  useVForm as u
};
//# sourceMappingURL=useVForm-BndtwnoY.js.map
