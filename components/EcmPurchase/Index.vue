<template>
	<div class="row align-items-center">
		<div class="col-xl-6">
			<EcmPurchaseIcoInfo />
		</div>
		<div class="col-xl-6">
			<div class="ecm-right-box">
				<EcmPurchaseIcoStat />

				<div class="ecm-form mt15">
					<h4 v-if="isStageLoading" class="mb20">
						<Skeletor height="36" pill class="mt-2" />
					</h4>
					<h4 v-else class="mb20">ICO is Live</h4>

					<div class="ico-tab mb20">
						<template v-if="isStageLoading">
							<div class="d-flex align-items-center g-20">
								<Skeletor width="50%" as="div" height="54" pill />
								<Skeletor width="50%" as="div" height="54" pill />
							</div>
						</template>
						<ul v-else class="d-flex align-items-center g-20">
							<li class="ico-tab-btn gradient-btn w-50" :class="{ active: activeTab === 'eth-coin-form' }" @click="switchTab('eth-coin-form')">
								<nuxt-img src="/images/icon/eth.png" loading="lazy" alt="eth" />
								Buy with ETH
								<span class="ico-tab-select-icon"><i class="fa-solid fa-circle-check"></i></span>
							</li>
							<li class="ico-tab-btn gradient-btn w-50" :class="{ active: activeTab === 'usdt-coin-form' }" @click="switchTab('usdt-coin-form')">
								<nuxt-img src="/images/icon/usdt.png" alt="ecm" />
								Buy with USDT
								<span class="ico-tab-select-icon"><i class="fa-solid fa-circle-check"></i></span>
							</li>
						</ul>
					</div>

					<div v-show="activeTab === 'eth-coin-form'" class="ico-tab-content">
						<template v-if="isStageLoading">
							<Skeletor height="30" pill class="mb-4" />
						</template>
						<ul v-else class="d-flex justify-content-center mt-1 mb20">
							<li class="text-white">1 ECM = {{ stageData.price }} ETH</li>
						</ul>

						<div class="subscribe-form">
							<template v-if="isStageLoading">
								<Skeletor v-for="i in 3" :key="i" class="mt-2" height="55"></Skeletor>
							</template>
							<template v-else>
								<form @submit.prevent="purchaseECM('ETH')">
									<div class="subscribe-email mb20 d-flex align-items-center mw-100">
										<nuxt-img src="/images/icon/ecm.png" alt="icon" />
										<input v-model="ecm" type="text" placeholder="ECM Amount" :readonly="isPurchaseProcessing" />
									</div>
									<div class="subscribe-email mb20 d-flex align-items-center mw-100">
										<nuxt-img src="/images/icon/eth.png" alt="icon" />
										<input v-model="eth" type="text" placeholder="ETH Payable" :readonly="isPurchaseProcessing" />
									</div>
									<button v-if="wallet.isConnected" type="submit" :disabled="isPurchaseProcessing" class="btn1 primary-btn submit-btn w-100 mb20">
										<i v-show="isPurchaseProcessing" class="fa fa-spinner fa-spin me-1"></i>
										{{ walletText }}
									</button>
									<button v-else type="button" @click="modal.open()" class="btn1 primary-btn submit-btn w-100 mb20">{{ walletText }}</button>
								</form>
							</template>
						</div>
					</div>
					<div v-show="activeTab === 'usdt-coin-form'" class="ico-tab-content">
						<template v-if="isStageLoading">
							<Skeletor height="30" pill class="mb-4" />
						</template>
						<ul v-else class="d-flex justify-content-center mt-1 mb20">
							<li class="text-white">1 ECM = {{ stageData.usdtPrice }} USDT</li>
						</ul>

						<div class="subscribe-form">
							<template v-if="isStageLoading">
								<Skeletor v-for="i in 3" :key="i" class="mt-2" height="55"></Skeletor>
							</template>
							<template v-else>
								<form @submit.prevent="purchaseECM('USDT')">
									<div class="subscribe-email mb20 d-flex align-items-center mw-100">
										<nuxt-img src="/images/icon/ecm.png" alt="icon" />
										<input v-model="ecm" type="text" placeholder="ECM Amount" :readonly="isPurchaseProcessing" />
									</div>
									<div class="subscribe-email mb20 d-flex align-items-center mw-100">
										<nuxt-img src="/images/icon/usdt.png" alt="icon" />
										<input v-model="usdt" type="text" placeholder="USDT Payable" :readonly="isPurchaseProcessing" />
									</div>

									<button v-if="wallet.isConnected" type="submit" :disabled="isPurchaseProcessing" class="btn1 primary-btn submit-btn w-100 mb20">
										<i v-show="isPurchaseProcessing" class="fa fa-spinner fa-spin me-1"></i>
										{{ walletText }}
									</button>
									<button v-else type="button" @click="modal.open()" class="btn1 primary-btn submit-btn w-100 mb20">{{ walletText }}</button>
								</form>
							</template>
						</div>
					</div>
				</div>

				<template v-if="isStageLoading">
					<Skeletor height="55" />
				</template>
				<template v-else>
					<a v-if="trxHash" :href="`https://etherscan.io/tx/${trxHash}`" target="_blank" class="green-outline-btn d-flex align-items-center justify-content-between mt-20">
						<span class="gradient-color"><b>Hash:</b></span>
						<span class="clip-text">{{ trxHash }}</span>
						<span class="text-copy-btn rotate-50"><i class="fa-solid fa-arrow-right-long"></i></span>
					</a>
				</template>

				<div :class="['mt-3', { 'text-center': !isStageLoading }]">
					<Skeletor v-if="isStageLoading" height="55" />
					<button v-else-if="wallet.isConnected" type="button" class="red-outline-btn w-100 d-flex justify-content-center align-items-center mt-20" :disabled="isPurchaseProcessing" @click.prevent="disconnect">
						Disconnect
						<IconsDisconnect />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/vue';
	import { parseUnits, formatUnits, BrowserProvider, Contract, formatEther } from 'ethers';

	const wallet = useAppKitAccount();
	const config = useRuntimeConfig();
	const { modal, disconnect, SaleAddress, SaleContractABI, USDTAddress, IERC20ABI } = useWeb3();

	const isPurchaseProcessing = ref(false);
	const walletText = ref('Buy ECM');
	const { toastSuccess, toastError } = useToastAlert();

	const stageDataStore = useStageDataStore();
	const { currentStage: stageData, isStageLoading } = storeToRefs(stageDataStore);

	const referralStore = useReferralStore();
	const { referral: purchaseReferral } = storeToRefs(referralStore);

	onMounted(async () => {
		await loadStageData();
	});

	const loadStageData = async (forceLoad = false) => {
		try {
			await stageDataStore.fetchStageData(forceLoad);
		} catch (error) {
			toastError('Failed to load stage data. Please try again.');
		}
	};

	const ecm = ref('');
	const eth = ref('');
	const usdt = ref('');
	const trxHash = ref('');

	if (process.client) {
		watch([ecm, eth, usdt], ([newEcm, newEth, newUsdt], [oldEcm, oldEth, oldUsdt]) => {
			// Case 1: ETH changed
			if (newEth !== oldEth && !isNaN(newEth)) {
				const calculatedEcm = parseFloat((newEth / stageData.value.price).toFixed(6));
				ecm.value = calculatedEcm.toString();
				usdt.value = parseFloat((calculatedEcm * stageData.value.usdtPrice).toFixed(2)).toString();
			}
			// Case 2: USDT changed
			else if (newUsdt !== oldUsdt && !isNaN(newUsdt)) {
				const calculatedEcm = parseFloat((newUsdt / stageData.value.usdtPrice).toFixed(6));
				ecm.value = calculatedEcm.toString();
				eth.value = parseFloat((calculatedEcm * stageData.value.price).toFixed(6)).toString();
			}
			// Case 3: ECM changed
			else if (newEcm !== oldEcm && !isNaN(newEcm)) {
				eth.value = parseFloat((newEcm * stageData.value.price).toFixed(6)).toString();
				usdt.value = parseFloat((newEcm * stageData.value.usdtPrice).toFixed(2)).toString();
			}
		});
	}

	const activeTab = ref('eth-coin-form');
	const switchTab = (tabName) => {
		activeTab.value = tabName;
	}

	const validateInput = (value, type = 'eth') => {
		const num = Number(value);
		if (isNaN(num) || num <= 0) return false;
		return type === 'ecm' ? num <= stageData.value.target : true;
	};

	const purchaseECM = async (paymentType) => {
		if (isPurchaseProcessing.value) return;
		try {
			trxHash.value = null;
			isPurchaseProcessing.value = true;
			walletText.value = "Wallet connecting...";

			const maxPurchasable = parseFloat(stageData.value.target) - parseFloat(stageData.value.tokensSold);
			const purchaseAmount = parseFloat(ecm.value);

			if (!validateInput(eth.value) || !validateInput(ecm.value, 'ecm') || !validateInput(usdt.value, 'usdt')) {
				throw new Error('Enter valid ECM or ETH amount.');
			}

			if (purchaseAmount > maxPurchasable) {
				throw new Error(`Purchase amount (${purchaseAmount.toFixed(2)} ECM) exceeds maximum purchasable amount (${maxPurchasable.toFixed(2)} ECM)`);
			}

			const { walletProvider } = useAppKitProvider('eip155');
			const ethersProvider = new BrowserProvider(walletProvider)
			const signer = await ethersProvider.getSigner();

			let usdtAmount;
			if (paymentType === 'USDT') {
				// First approve USDT spending
				const usdtContract = new Contract(USDTAddress, IERC20ABI, signer);
				walletText.value = "Approving USDT...";

				const balance = await usdtContract.balanceOf(wallet.value.address);
				usdtAmount = parseUnits(usdt.value, 6);

				if (BigInt(balance) < BigInt(usdtAmount)) {
					throw new Error(`Insufficient USDT balance. You have ${formatUnits(balance, 6)} USDT`);
				}
				const approveTx = await usdtContract.approve(SaleAddress, usdtAmount);
				await approveTx.wait();
			}

			const contract = new Contract(SaleAddress, SaleContractABI, signer);
			walletText.value = "Transaction Processing...";

			let transaction;
			if (paymentType === 'ETH') {
				transaction = await contract.buyECMWithETH(purchaseReferral.value, { value: parseUnits(eth.value, 18) });
			} else if (paymentType === 'USDT') {
				transaction = await contract.buyECMWithUSDT(usdtAmount, purchaseReferral.value);
			}

			const receipt = await transaction.wait();
			trxHash.value = receipt.hash;

			await forceLoadStageData();

			let payload = {
				hash: receipt.hash,
				buyer: "",
				amount: "",
				stage: "",
				referralAddress: null,
				referralAmount: null,
				referralETH: null,
				paymentType: null
			};

			receipt.logs.forEach(log => {
				try {
					const parsedLog = contract.interface.parseLog(log);
					if (parsedLog?.name === 'ECMPurchased') {
						payload.buyer = parsedLog.args[0];
						payload.amount = formatEther(parsedLog.args[1]);
						payload.stage = parsedLog.args[2].toString();
						payload.paymentType = parsedLog.args[3].toString();
					} else if (parsedLog?.name === 'ReferralRewardPaid') {
						payload.referralAddress = parsedLog.args[0];
						payload.referralAmount = formatEther(parsedLog.args[1]);
						payload.referralETH = formatEther(parsedLog.args[2]);
					}
				} catch { }
			});

			await $fetch(`${config.public.apiBase}/purchase-ecm-completed`, {
				method: 'POST',
				body: JSON.stringify(payload),
			})
			toastSuccess('ECM purchase successfully completed.');

		} catch (error) {
			const errorMessage = error.shortMessage
				? error.shortMessage.charAt(0).toUpperCase() + error.shortMessage.slice(1)
				: error.message || 'Unknown error occurred';
			toastError(errorMessage);
		} finally {
			isPurchaseProcessing.value = false;
			walletText.value = "Buy ECM";
			ecm.value = '';
			eth.value = '';
			usdt.value = '';
		}
	}

	const forceLoadStageData = async () => {
		await loadStageData(true);
	};
</script>

<style>
</style>