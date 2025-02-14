// composables/useVForm.ts
import Form from "vform";
import { reactive } from "vue";

export function useVForm(data: object) {
  const config = useRuntimeConfig();

  class CustomForm extends Form {
    async submit(path: string, method: string = "post", options: any = {}) {
      this.busy = true;

      try {
        const response = await $fetch(`${config.public.apiBase}${path}`, {
          method: method.toUpperCase(),
          body: this.data(),
          ...options,
        });

        this.busy = false;
        return response;
      } catch (error: any) {
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
