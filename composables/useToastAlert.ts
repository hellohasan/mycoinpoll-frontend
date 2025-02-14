// composables/useToast.ts
import { useToast } from "vue-toastification";

export const useToastAlert = () => {
  const toast = process.client ? useToast() : null;

  return {
    toastSuccess: (message: string) => {
      if (process.client) {
        toast?.success(message);
      }
    },
    toastError: (message: string) => {
      if (process.client) {
        toast?.error(message);
      }
    },
    toastWarning: (message: string) => {
      if (process.client) {
        toast?.warning(message);
      }
    },
    toastInfo: (message: string) => {
      if (process.client) {
        toast?.info(message);
      }
    },
  };
};
