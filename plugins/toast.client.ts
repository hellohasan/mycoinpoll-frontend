// plugins/toast.client.ts
import "vue-toastification/dist/index.css";
export default defineNuxtPlugin((nuxtApp) => {
  import("vue-toastification").then(({ default: Toast }) => {
    const options = {
      position: "bottom-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false,
    };
    nuxtApp.vueApp.use(Toast, options);
  });
});
