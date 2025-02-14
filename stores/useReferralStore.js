import { defineStore } from "pinia";

export const useReferralStore = defineStore("referral", {
    state: () => ({
        referral: "0x0000000000000000000000000000000000000000",
    }),
    actions: {
        updateReferral(value) {
            this.referral = value;
        },
    },
});
