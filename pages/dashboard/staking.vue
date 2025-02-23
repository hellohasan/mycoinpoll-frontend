<template>
	<div class="dashboard-body mt30">
		<template v-if="!wallet.isConnected">
			<h1>Oops Wallet should connect</h1>
		</template>

		<div v-else class="staking-section">
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
									<div class="form-group">
										<div class="staking-days-select-btn bg-border-input">
											<input type="radio" id="stakingweek_one" checked @change="handleWeekSelection" class="public-radio" name="stakingweek" value="1" />
											<label for="stakingweek_one">
												1W
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="stakingweek_two" @change="handleWeekSelection" class="public-radio" name="stakingweek" value="2" />
											<label for="stakingweek_two">
												2W
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="stakingweek_three" @change="handleWeekSelection" class="public-radio" name="stakingweek" value="3" />
											<label for="stakingweek_three">
												3W
												<span></span>
											</label>
										</div>
									</div>
									<div class="form-group">
										<div class="bg-border-input staking-days-select-btn">
											<input type="radio" id="stakingweek_four" @change="handleWeekSelection" class="public-radio" name="stakingweek" value="4" />
											<label for="stakingweek_four">
												4W
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
									<span>30 ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Estimated Profit</p>
									<span class="text-color-1CD691">06 ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Total</p>
									<span>36 ECM</span>
								</div>
							</div>
							<div class="milestone-offer-card w-100">
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>ECM to be locked</p>
									<span>30 ECM</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Duration</p>
									<span class="text-color-1CD691">07 days</span>
								</div>
								<!-- item -->
								<div class="milestone-offer-info-item d-flex align-items-center justify-content-between">
									<p>Unlocked on</p>
									<span>Feb 13 2025, 15:30</span>
								</div>
							</div>
						</div>
						<div class="d-flex align-items-center justify-content-md-between justify-content-center flex-wrap flex-md-nowrap g-10 mt-4">
							<button class="gradient-btn w-50">
								Stake Now
								<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
							</button>
							<button class="transparent-btn border-gradient w-50">
								Buy ECM
								<i class="fa-solid fa-cart-shopping"></i>
							</button>
						</div>
						<div class="w-100 mt-4">
							<a href="#" target="_blank" class="transparent-btn border-gradient d-flex align-items-center justify-content-center g-10">
								<span><b>Hash :</b></span>
								<span class="clip-text w-auto">0x41924ee204e47c6aeea1c45e8ed19f5b94bff42a55493f65665fdd8045a9abde</span>
								<span class="text-copy-btn rotate-50"><i class="fa-solid fa-arrow-right-long"></i></span>
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>

		<!-- <div class="data-show-table-area dashboard-box mt30">
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
			<div class="common-table mt30">
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
						<tr>
							<td>01</td>
							<td>12/10/2024</td>
							<td>100 ECM</td>
							<td>10%</td>
							<td>14 day</td>
							<td>15 ECM</td>
							<td>115 ECM</td>
							<td class="text-start">
								<span class="pending-status badge">Pending</span>
								7d : 2h : 10m
							</td>
						</tr>
						<tr>
							<td>02</td>
							<td>12/10/2024</td>
							<td>100 ECM</td>
							<td>10%</td>
							<td>14 day</td>
							<td>15 ECM</td>
							<td>115 ECM</td>
							<td class="text-start"><span class="completed-status badge">Completed</span></td>
						</tr>
						<tr>
							<td>02</td>
							<td>12/10/2024</td>
							<td>100 ECM</td>
							<td>10%</td>
							<td>14 day</td>
							<td>15 ECM</td>
							<td>115 ECM</td>
							<td class="text-start">
								<a href="#" class="gradient-btn-small bg-red">Unstack Now</a>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="pagination mt50">
					<ul class="d-flex align-items-center w-100">
						<li><a href="#" class="btn1 primary-btn subscribe-btn">Previous</a></li>
						<li>
							<ul class="d-flex align-items-center pagination-inner">
								<li><a href="#">1</a></li>
								<li><a href="#" class="active">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">...</a></li>
								<li><a href="#">10</a></li>
							</ul>
						</li>
						<li><a href="#" class="btn1 primary-btn subscribe-btn">Next</a></li>
					</ul>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script  setup>
	import '@/assets/css/staking.css'
	import { Skeletor } from 'vue-skeletor';
	import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/vue';
	import { BrowserProvider, Contract, formatEther } from 'ethers';

	const wallet = useAppKitAccount();

	definePageMeta({
		title: 'ECM Staking',
		layout: 'backend',
		authenticated: true
	});

	const ecm = ref(0);
	const amount = ref(0);
	const duration = ref(7);

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
	const handleWeekSelection = (event) => {
		const weeks = parseInt(event.target.value);
		duration.value = weeks * 7;
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

	onMounted(() => {
		loadUserEcm();
	});
</script>

<style scoped>
</style>