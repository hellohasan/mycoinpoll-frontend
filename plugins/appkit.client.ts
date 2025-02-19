import { defineNuxtPlugin } from "#app";
import { createAppKit } from "@reown/appkit/vue";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet, sepolia } from "@reown/appkit/networks";

let appKitInstance: any = null;

const getAppKitConfig = (projectId: string) => ({
  adapters: [new EthersAdapter()],
  networks: [mainnet, sepolia],
  metadata: {
    name: "MyCoinPoll",
    description: "MyCoinPoll.Com | World's No 1 Crypto Launchpad",
    url: "https://mycoinpoll.com",
    icons: ["https://mycoinpoll.com/logo.png"],
  },
  projectId,
  features: {
    email: false,
    emailShowWallets: true,
    socials: false,
    swaps: false,
  },
  allWallets: "SHOW" as const,
  enableWalletConnect: true,
  enableCoinbase: true,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
  ],
});

export default defineNuxtPlugin(async (nuxtApp) => {
  if (!process.client) return;

  try {
    const config = useRuntimeConfig();

    if (!appKitInstance) {
      const appKitConfig = getAppKitConfig(config.public.web3ProjectId);
      appKitInstance = await createAppKit(appKitConfig);
    }

    // Provide only appKit globally
    nuxtApp.provide("appKit", appKitInstance);
  } catch (error) {
    console.error("❌ AppKit Initialization Error:", error);
    nuxtApp.provide("appKit", null);
  }
});
