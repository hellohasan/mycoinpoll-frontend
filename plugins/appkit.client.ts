// plugins/appkit.client.ts
import { createAppKit } from "@reown/appkit/vue";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet } from "@reown/appkit/networks";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Initialize AppKit
  const appKit = createAppKit({
    adapters: [new EthersAdapter()],
    networks: [mainnet],
    metadata: {
      name: "MyCoinPoll",
      description: "MyCoinPoll.Com | World's No 1 Crypto Launchpad",
      url: "https://mycoinpoll.com",
      icons: ["https://mycoinpoll.com/logo.png"],
    },
    projectId: config.public.web3ProjectId,
    features: {
      email: false,
      emailShowWallets: true,
      socials: false,
      swaps: false,
    },
    allWallets: "HIDE",
    enableWalletConnect: true,
    enableCoinbase: false,
    featuredWalletIds: [
      "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust
    ],
  });

  // Provide appKit to the app
  nuxtApp.provide("appKit", appKit);
});
