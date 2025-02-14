// composables/useWeb3.ts
import { useAppKit, useDisconnect, useAppKitAccount } from "@reown/appkit/vue";
import SaleContractABI from "~/Abi/SaleContractABI.json";
import ECMContractABI from "~/Abi/ECMContractABI.json";
import IERC20ABI from "~/Abi/IERC20ABI.json";

export const useWeb3 = () => {
  const config = useRuntimeConfig();

  // Wait for AppKit to be initialized
  const modal = computed(() => {
    if (!process.client) return null;
    return useAppKit();
  });

  const { disconnect: customDisconnect } = useDisconnect();

  const myDisconnect = async (shouldLogout = true) => {
    if (customDisconnect) {
      customDisconnect();
      if (shouldLogout) {
        //await logout();
      }
    }
  };

  return {
    modal: modal.value,
    disconnect: myDisconnect,
    alchemyLink: config.public.alchemyLink,
    SaleContractABI,
    ECMContractABI,
    IERC20ABI,
    SaleAddress: config.public.tokenSaleAddress,
    TokenAddress: config.public.tokenAddress,
    USDTAddress: config.public.usdtAddress,
  };
};
