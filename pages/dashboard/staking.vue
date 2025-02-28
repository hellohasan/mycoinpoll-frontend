<template>
	<div class="dashboard-body mt30">
		<div class="staking-section">
			<div class="row">
				<div class="col-md-12">
					<form action="">
						<div class="d-flex h-100 justify-content-between g-20 flex-xl-nowrap flex-wrap">
							<div class="staking-header-item">
								<div class="taking-value-area d-flex align-items-center g-10 justify-content-between">
									<div class="staking-value d-flex align-items-center g-10">
										<nuxt-img src="/images/icon/ecm.png" loading="lazy" placeholder placeholder-class="rounded-circle" alt="ecm-logo" />
										<input type="text" v-model="amount" placeholder="Enter ECM amount" />
									</div>
									<div class="balance">
										<p>Balance</p>
										<p>
											<span>{{ ecm }}</span>
											ECM
										</p>
									</div>
								</div>

								<div class="d-flex align-items-center mt-3 g-20 flex-wrap">
									<div class="form-group">
										<div class="staking-days-select-btn bg-border-input">
											<input type="radio" id="one" class="public-radio" @change="handlePercentageSelect" name="stakingPercentage" value="1" />
											<label for="one">
												25%
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="two" class="public-radio" @change="handlePercentageSelect" name="stakingPercentage" value="2" />
											<label for="two">
												50%
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="three" class="public-radio" @change="handlePercentageSelect" name="stakingPercentage" value="3" />
											<label for="three">
												75%
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="four" class="public-radio" @change="handlePercentageSelect" name="stakingPercentage" value="4" />
											<label for="four">
												Max
												<span></span>
											</label>
										</div>
									</div>
								</div>
							</div>

							<div class="staking-header-item">
								<div class="taking-value-area d-flex align-items-center g-10 justify-content-between">
									<div class="staking-value d-flex align-items-center g-10">
										<nuxt-img src="/images/icon/timer.png" loading="lazy" placeholder placeholder-class="rounded-circle" alt="timer" />
										<p>{{ duration }}</p>
									</div>
									<div class="days-value">
										<p>Days</p>
									</div>
								</div>
								<div class="d-flex align-items-center mt-3 g-20 flex-wrap">
									<div v-for="(plan, i) in plans" :key="i" class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" :id="`stakingweek_${i + 1}`" :value="plan.duration" @change="handleDurationSelection(plan)" class="public-radio" name="stakingweek" />
											<label :for="`stakingweek_${i + 1}`">
												{{ plan.name }}
												<span></span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-4">
							<span class="label">Lock Overview</span>
						</div>
						<div class="lock-overview d-flex align-items-center justify-content-center mt-2">
							<div class="selected-staking-title d-flex align-items-center g-10">
								<nuxt-img src="/images/icon/ecm.png" width="30" loading="lazy" placeholder placeholder-class="rounded-circle" alt="icon" />
								<h6 class="page-title">My {{ amount }} ECM Stack for {{ duration }} Days</h6>
							</div>
						</div>
						<div class="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap g-10 mt-4">
							<div class="milestone-offer-card w-100">
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Stack amount</p>
									<span>{{ amount }} ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Estimated Profit</p>
									<span class="text-color-1CD691">{{ estimate_profit }} ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Total with Reward</p>
									<span>{{ estimate_total }} ECM</span>
								</div>
							</div>
							<div class="milestone-offer-card w-100">
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>ECM to be locked</p>
									<span>{{ amount }} ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Duration</p>
									<span class="text-color-1CD691">{{ duration }} days</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Unlocked on</p>
									<span>{{ unlockDate() }}</span>
								</div>
							</div>
						</div>
						<div class="d-flex align-items-center justify-content-md-between justify-content-center flex-wrap flex-md-nowrap g-10 mt-4">
							<button type="button" :disabled="isLoading" @click.prevent="handleStakeNow" class="gradient-btn w-50">
								<i v-show="isLoading" class="fa fa-spinner fa-spin me-1"></i>
								{{ btnText }}
								<span v-show="!isLoading" class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
							</button>

							<nuxt-link :to="{ name: 'dashboard-ico' }" class="transparent-btn border-gradient w-50">
								Buy ECM
								<i class="fa-solid fa-cart-shopping"></i>
							</nuxt-link>
						</div>
						<div class="w-100 mt-4" v-if="trxHash">
							<a :href="`https://etherscan.io/tx/${trxHash}`" target="_blank" class="transparent-btn border-gradient d-flex align-items-center justify-content-center g-10">
								<span><b>Hash :</b></span>
								<span class="clip-text w-auto">{{ trxHash }}</span>
								<span class="text-copy-btn rotate-50"><i class="fa-solid fa-arrow-right-long"></i></span>
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Staking History</h5>
				</div>
				<div class="search-box-area">
					<form action="">
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="search-icon fas fa-search"></i>
							</div>
							<input type="text" class="form-control" id="search" placeholder="Search here..." />
						</div>
					</form>
				</div>
			</div>
			<client-only>
				<div class="common-table mt30" v-if="!pending">
					<table class="custom-table display nowrap mobile-table">
						<thead>
							<tr>
								<th>SL</th>
								<th>Date</th>
								<th>Amount</th>
								<th>Percentage</th>
								<th>Duration</th>
								<th>Reward</th>
								<th>Total Receive</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, i) in history" :key="i">
								<td>{{ i + 1 }}</td>
								<td>{{ item.created_at_formatted }}</td>
								<td>{{ item.amount }} ECM</td>
								<td>{{ item.percentage }}%</td>
								<td>{{ item.duration }} day</td>
								<td>{{ item.reward }} ECM</td>
								<td>{{ item.total_receive }} ECM</td>
								<td class="text-start">
									<template v-if="item.status === 'pending'">
										<vue-countdown :time="item.remaining_time * 1000" v-slot="{ days, hours, minutes, seconds }">{{ days }}d:{{ hours }}h:{{ minutes }}m:{{ seconds }}s</vue-countdown>
									</template>
									<template v-else-if="item.status === 'completed'">
										<span class="completed-status badge">Completed</span>
									</template>
									<template v-else>
										<a href="#" @click.prevent="unstake(item.id)" class="gradient-btn-small bg-red">Unstake Now</a>
									</template>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</client-only>
		</div>
	</div>
</template>

<script  setup>
	import '@/assets/css/staking.css';
	import VueCountdown from '@chenfengyuan/vue-countdown';
	import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/vue';
	import { BrowserProvider, Contract, formatEther, formatUnits, parseUnits } from 'ethers';

	const wallet = useAppKitAccount();
	const { modal } = useWeb3();

	definePageMeta({
		title: 'ECM Staking',
		layout: 'backend',
		authenticated: true
	});

	const ecm = ref(0);
	const amount = ref(0);
	const duration = ref(0);
	const percentage = ref(0);
	const planIndex = ref(0);
	const estimate_profit = ref(0);
	const estimate_total = ref(0);
	const trxHash = ref(null);

	const { useOnlyFetch } = useApi();
	const { data: plans } = await useOnlyFetch('/get-staking-plans');

	const { data: history, pending, refresh } = await useOnlyFetch('/get-staking-history');

	const handlePercentageSelect = (event) => {
		const value = parseInt(event.target.value);
		const balance = parseFloat(ecm.value);
		switch (value) {
			case 1: // 25%
				amount.value = (balance * 0.25).toFixed(4);
				break;
			case 2: // 50%
				amount.value = (balance * 0.50).toFixed(4);
				break;
			case 3: // 75%
				amount.value = (balance * 0.75).toFixed(4);
				break;
			case 4: // Max (100%)
				amount.value = balance.toFixed(4);
				break;
		}
	}
	const handleDurationSelection = (plan) => {
		duration.value = parseInt(plan.duration);
		percentage.value = parseInt(plan.reward_percentage);
		planIndex.value = parseInt(plan.id - 1);
	}
	const loadUserEcm = async () => {
		if (wallet.value.isConnected) {
			const { walletProvider } = useAppKitProvider('eip155');
			const ethersProvider = new BrowserProvider(walletProvider)
			const signer = await ethersProvider.getSigner();
			const { ECMContractABI, TokenAddress } = useWeb3();

			const ecmContract = new Contract(TokenAddress, ECMContractABI, signer);
			const balance = await ecmContract.balanceOf(wallet.value.address);
			ecm.value = Number(parseFloat(formatEther(balance)).toFixed(4));
		}
		return 0;
	}
	onMounted(async () => {
		await loadUserEcm();
	});

	const unlockDate = () => {
		if (!duration.value) return '-';
		const date = new Date();
		date.setDate(date.getDate() + duration.value);
		const day = date.getDate();
		const month = date.toLocaleString('en-US', { month: 'long' });
		const year = date.getFullYear();
		const hours = date.getHours() % 12 || 12;
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
		const suffix = ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : (day % 100 - day % 10 != 10) * (day % 10)];
		return `${day}${suffix}, ${month} ${year} ${hours}:${minutes} ${ampm}`;
	};

	watch([amount, percentage, duration], () => {
		if (amount.value > 0 && duration.value > 0 && percentage.value > 0) {
			const profitValue = parseFloat(amount.value) * percentage.value / 100;
			estimate_profit.value = Number(profitValue.toFixed(3));
			estimate_total.value = Number((parseFloat(amount.value) + profitValue).toFixed(3));
		} else {
			estimate_profit.value = 0;
			estimate_total.value = 0;
		}
	}, { immediate: true });

	const btnText = ref("Stake Now");
	const isLoading = ref(false);
	const { toastError, toastSuccess } = useToastAlert();
	const handleStakeNow = async () => {
		if (wallet.value.isConnected) {
			if (amount.value > 0 && duration.value > 0 && percentage.value > 0) {
				try {
					isLoading.value = true;
					btnText.value = "Wallet Connecting...";
					const { walletProvider } = useAppKitProvider('eip155');
					const ethersProvider = new BrowserProvider(walletProvider)
					const signer = await ethersProvider.getSigner();
					const { ECMStakingContractABI, StakingAddress, ECMContractABI, TokenAddress } = useWeb3();

					const stakeAmount = parseUnits(amount.value, 18);
					const ecmContract = new Contract(TokenAddress, ECMContractABI, signer);

					btnText.value = "Approving Stake Amount";
					const approveTx = await ecmContract.approve(StakingAddress, stakeAmount);
					await approveTx.wait();

					btnText.value = "Staking on Processing...";
					const stakingContract = new Contract(StakingAddress, ECMStakingContractABI, signer);
					const transaction = await stakingContract.stake(stakeAmount, planIndex.value);

					const receipt = await transaction.wait();
					trxHash.value = receipt.hash;
					btnText.value = "Staking Done!";
					await loadUserEcm();
					receipt.logs.forEach(async (log) => {
						const parsedLog = stakingContract.interface.parseLog(log);
						if (parsedLog?.name === 'Staked') {
							const payload = {
								staker: parsedLog.args[0],
								stakeId: formatUnits(parsedLog.args[1], 0),
								amount: formatEther(parsedLog.args[2]),
								planIndex: formatUnits(parsedLog.args[3], 0),
								endTime: formatUnits(parsedLog.args[4], 0),
							}
							await useOnlyFetch('staking-created', {
								method: 'POST',
								body: payload
							});
						}
					});
					toastSuccess('Staking successfully Done!');
				} catch (error) {
					const errorMessage = error.shortMessage
						? error.shortMessage.charAt(0).toUpperCase() + error.shortMessage.slice(1)
						: error.message || 'Unknown error occurred';
					toastError(errorMessage);
				} finally {
					isLoading.value = false;
					btnText.value = "Stake Now";
					ecm.value = 0;
					amount.value = 0;
					duration.value = 0;
					percentage.value = 0;
					planIndex.value = 0;
					estimate_profit.value = 0;
					estimate_total.value = 0;
				}
			} else {
				toastError('Please enter amount and select a plan');
			}
		} else {
			modal.open();
		}
	}
</script>

<style scoped>
	:disabled {
		cursor: not-allowed;
	}
</style>