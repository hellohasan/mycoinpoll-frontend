import { useDisconnect } from "@reown/appkit/vue";
import { s as storages, e as useRuntimeConfig, a as useAuthStore, c as useRouter, h as useCookie } from "../server.mjs";
import { computed } from "vue";
import { u as useApi } from "./useApi-BM86DZuP.js";
import { defineStore } from "pinia";
const SaleContractABI = /* @__PURE__ */ JSON.parse('[{"inputs":[{"internalType":"address","name":"_ecmCoin","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"bonusAmount","type":"uint256"}],"name":"BonusTokensAwarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newStage","type":"uint256"}],"name":"CurrentStageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stage","type":"uint256"},{"indexed":false,"internalType":"enum ECMCoinICO.PaymentType","name":"paymentType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"paymentAmount","type":"uint256"}],"name":"ECMPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"treasury","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ecmAmount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"enum ECMCoinICO.PaymentType","name":"paymentType","type":"uint8"}],"name":"FundsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ecmAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"indexed":false,"internalType":"enum ECMCoinICO.PaymentType","name":"paymentType","type":"uint8"}],"name":"ReferralRewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stageIndex","type":"uint256"}],"name":"StageCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stageIndex","type":"uint256"}],"name":"StageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newWallet","type":"address"}],"name":"TreasuryWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"bonusPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"buyECMWithETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"buyECMWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentStageInfo","outputs":[{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"ethPrice","type":"uint256"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"internalType":"uint256","name":"ecmRefBonus","type":"uint256"},{"internalType":"uint256","name":"paymentRefBonus","type":"uint256"},{"internalType":"uint256","name":"ecmSold","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ecmCoin","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minBonusAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"},{"internalType":"uint256","name":"_percentage","type":"uint256"}],"name":"setBonusParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newStage","type":"uint256"}],"name":"setCurrentStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newWallet","type":"address"}],"name":"setTreasuryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stages","outputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"ethPrice","type":"uint256"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"internalType":"uint256","name":"ecmRefBonus","type":"uint256"},{"internalType":"uint256","name":"paymentRefBonus","type":"uint256"},{"internalType":"uint256","name":"ecmSold","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBonusDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalECMReferralDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalETHReferralDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEcmSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEcmSoldByETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEcmSoldByUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUSDTReferralDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"uint256","name":"ethPrice","type":"uint256"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"}],"name":"updateStagePrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"uint256","name":"target","type":"uint256"}],"name":"updateStageTarget","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawECM","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const ECMContractABI = /* @__PURE__ */ JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AccountFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AccountUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"freezeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAccountFrozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unfreezeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const ECMStakingContractABI = /* @__PURE__ */ JSON.parse('[{"inputs":[{"internalType":"address","name":"_ecmCoin","type":"address"},{"internalType":"uint256","name":"_minimumStake","type":"uint256"},{"internalType":"uint256","name":"_maximumStake","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ECMWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ForceUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MaximumStakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinimumStakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"PenaltyRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"planIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPercent","type":"uint256"}],"name":"PlanAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"planIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPercent","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"PlanUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"planIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_rewardPercent","type":"uint256"}],"name":"addPlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ecmCoin","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeId","type":"uint256"},{"internalType":"bool","name":"_withReward","type":"bool"}],"name":"forceUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getActiveStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getActiveStakes","outputs":[{"components":[{"internalType":"uint256","name":"stakeId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"claimedAt","type":"uint256"}],"internalType":"struct ECMStaking.StakeInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeId","type":"uint256"}],"name":"getStakeInfo","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"finalAmount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"rewardPercent","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"claimedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getUserStakes","outputs":[{"components":[{"internalType":"uint256","name":"stakeId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"claimedAt","type":"uint256"}],"internalType":"struct ECMStaking.StakeInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maximumStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"penaltyRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_planIndex","type":"uint256"}],"name":"stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"stakeId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"claimedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingPlans","outputs":[{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"rewardPercent","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeId","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxAmount","type":"uint256"}],"name":"updateMaximumStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMinimumStake","type":"uint256"}],"name":"updateMinimumStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRate","type":"uint256"}],"name":"updatePenaltyRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_planIndex","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_rewardPercent","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updatePlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeId","type":"uint256"}],"name":"userForceUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawECM","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const IERC20ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const EXPIRATION_TIME = 3 * 60 * 1e3;
const useUserTokenStore = defineStore("userToken", {
  state: () => ({
    tokens: [],
    isLoading: false,
    error: null,
    expirationTime: null
  }),
  getters: {
    getTokenById: (state) => (id) => state.tokens.find((token) => token.id === id),
    isDataExpired: (state) => {
      return !state.expirationTime || Date.now() >= state.expirationTime;
    },
    userETHAddress() {
      var _a;
      const authStore = useAuthStore();
      return ((_a = authStore.user) == null ? void 0 : _a.eth_address) || "";
    }
  },
  actions: {
    async fetchFeatureTokens() {
      if (!this.isDataExpired) return;
      const { myFetch } = useApi();
      this.isLoading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const data = await myFetch(`${config.public.apiBase}/feature-tokens`);
        const tokensWithBalances = await Promise.all(
          data.map(async (token) => {
            const balance = await this.fetchTokenBalance(token);
            return {
              ...token,
              balance
            };
          })
        );
        this.tokens = tokensWithBalances;
        this.setExpirationTime();
      } catch (error) {
        this.error = "Failed to fetch feature tokens";
      } finally {
        this.isLoading = false;
      }
    },
    async fetchTokenBalance(token) {
      if (!this.userETHAddress) return 0;
      if (token.contract_address == null) return 0;
      const { myFetch } = useApi();
      try {
        const data = await myFetch(`token-balance/${token.contract_address}/${this.userETHAddress}`);
        return data.balance;
      } catch (error) {
      }
    },
    setExpirationTime() {
      this.expirationTime = Date.now() + EXPIRATION_TIME;
    },
    resetIfExpired() {
      if (this.isDataExpired) {
        this.tokens = [];
        this.expirationTime = null;
        this.fetchFeatureTokens();
      }
    }
  },
  persist: {
    storage: storages.localStorage(),
    beforeRestore: (context) => {
      context.store.resetIfExpired();
    }
  }
});
const useAuthHelper = () => {
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
    logout
  };
};
const useWeb3 = () => {
  const config = useRuntimeConfig();
  const modal = computed(() => {
    return null;
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
    StakingAddress: config.public.StakingAddress
  };
};
export {
  useUserTokenStore as a,
  useWeb3 as u
};
//# sourceMappingURL=useWeb3-BYnZ8Zbm.js.map
