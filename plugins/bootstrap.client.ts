// plugins/bootstrap.client.ts
export default defineNuxtPlugin(async () => {
  if (process.client) {
    const bootstrap = await import("bootstrap");
    return {
      provide: {
        bootstrap,
      },
    };
  }
});
