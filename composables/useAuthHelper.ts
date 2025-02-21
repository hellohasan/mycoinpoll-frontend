export const useAuthHelper = () => {
  const router = useRouter();
  const { authenticated } = useAuthStore();
  const { disconnect } = useWeb3();
  const { useOnlyFetch } = useApi();

  const logout = async () => {
    if (authenticated) {
      await useOnlyFetch("/auth/logout", { method: "POST" });
      useAuthStore().$reset();
      useUserTokenStore().$reset();
      await disconnect();
      useCookie("authentication").value = null;
      router.push("/auth/login");
    }
  };

  return {
    logout,
  };
};
