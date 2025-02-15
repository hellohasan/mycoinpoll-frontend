// stageDataStore.js
import { defineStore } from "pinia";
import { ethers, formatUnits, formatEther } from "ethers";

const CACHE_DURATION_MS = 3 * 60 * 1000;

export const useStageDataStore = defineStore("stageData", {
  state: () => ({
    currentStage: {
      index: null,
      price: "",
      usdtPrice: "",
      target: null,
      tokensSold: null,
      percentageSold: null,
    },
    isStageLoading: false,
    lastUpdated: null,
  }),

  getters: {
    isDataStale() {
      if (!this.lastUpdated) return true;
      const now = new Date().getTime();
      return now - this.lastUpdated > CACHE_DURATION_MS;
    },
  },

  actions: {
    async fetchStageData(forceLoad = false) {
      if (!process.client) return;
      if (!forceLoad && !this.isDataStale) return;
      try {
        this.isStageLoading = true;
        const { alchemyLink, SaleAddress, SaleContractABI } = useWeb3();
        if (!alchemyLink) {
          throw new Error("Alchemy link is not configured");
        }
        const provider = new ethers.JsonRpcProvider(alchemyLink);
        if (!SaleAddress || !SaleContractABI) {
          throw new Error("Contract address or ABI is missing");
        }

        const contract = new ethers.Contract(SaleAddress, SaleContractABI, provider);
        const stageData = await contract.currentStageInfo();

        const index = Number(formatUnits(stageData[0], 0)) + 1;
        const target = formatEther(stageData[1]);
        const price = formatEther(stageData[2]);
        const usdtPrice = formatUnits(stageData[3], 6);
        const tokensSold = Number(formatEther(stageData[6])).toFixed(4);
        const percentageSold = parseFloat(target) > 0 ? (parseFloat(tokensSold) / parseFloat(target)) * 100 : 0;

        this.currentStage = {
          index,
          price,
          usdtPrice,
          target,
          tokensSold,
          percentageSold: percentageSold.toFixed(1),
        };

        this.lastUpdated = new Date().getTime();
      } catch (error) {
        throw error;
      } finally {
        this.isStageLoading = false;
      }
    },

    async forceLoadStageData() {
      await this.fetchStageData(true);
    },
  },
  persist: true,
});
