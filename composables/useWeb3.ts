import { useNuxtApp } from "#app";
import { useAppKit, useDisconnect } from "@reown/appkit/vue";
import SaleContractABI from "~/abi/SaleContractABI.json";
import ECMContractABI from "~/abi/ECMContractABI.json";
import ECMStakingContractABI from "~/abi/ECMStakingContractABI.json";
import IERC20ABI from "~/abi/IERC20ABI.json";

export const useWeb3 = () => {
  const config = useRuntimeConfig();

  const modal = computed(() => {
    if (!process.client) return null;
    return useAppKit();
  });

  const { disconnect } = useDisconnect();

  const myDisconnect = async (shouldLogout = true) => {
    const { logout } = useAuthHelper();
    disconnect();
    if (shouldLogout) {
      await logout();
    }
  };

  return {
    modal: modal.value,
    disconnect,
    myDisconnect,
    SaleContractABI,
    ECMContractABI,
    ECMStakingContractABI,
    IERC20ABI,
    alchemyLink: config.public.alchemyLink,
    SaleAddress: config.public.tokenSaleAddress,
    TokenAddress: config.public.tokenAddress,
    USDTAddress: config.public.usdtAddress,
    StakingAddress: config.public.StakingAddress,
  };
};
