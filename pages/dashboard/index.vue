<template>
	<div class="dashboard-body mt30">
		<div class="user-info-overview-box d-flex align-items-center justify-content-between mt30">
			<div class="user-info-text">
				<h4>Hi, {{ user?.name }}!</h4>
				<h6>Username: {{ user?.username }}</h6>
				<h6>
					Wallet:
					<span class="text-content">{{ user?.eth_address || 'N/A' }}</span>
				</h6>
			</div>
		</div>
		<div class="user-notification-box-section mt30">
			<div class="user-notification-box warning-bg-notification flex-wrap d-flex align-items-center justify-content-between">
				<div class="notification-text-box d-flex">
					<div class="notification-icon yellow-color">
						<i class="fas fa-info-circle"></i>
					</div>
					<div class="notification-text">
						<h5>Under Development</h5>
						<p class="gradient-color">We are currently working on Version 3 to provide you with a better experience. Stay tuned for exciting updates!</p>
					</div>
				</div>
			</div>
		</div>

		<div class="refer-link-box mt30">
			<div class="input bg-border-input">
				<div class="refer-link-box-inner p30">
					<div class="input bg-border-input">
						<div class="refer-link-box-inner d-flex align-items-center g30 position-relative">
							<p>Referral Link :</p>
							<input type="text" id="refer-url" ref="referralInput" readonly :value="referralLink" />
							<nuxt-img src="/images/dashboard/icon/copy.png" alt="copy" width="30" @click.prevent="copyReferralLink" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<BackendDashboardWalletChecker />

		<ClientOnly>
			<BackendDashboardUserInformation />
		</ClientOnly>

		<div class="user-coin-balance-box mt30">
			<div class="row gy-4">
				<div v-for="token in tokens" :key="token.id" class="col-xxl-4 col-xl-6">
					<BackendPartialsTokenCard :tokenId="token.id" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		authenticated: true,
		layout: 'backend',
		title: 'Dashboard'
	});

	const config = useRuntimeConfig();
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	const referralLink = computed(() => {
		return `${config.public.appUrl}/?ref=${user.value.unique_id}`;
	});

	const { copyNow } = useClipboard();
	const copyReferralLink = async () => {
		copyNow(referralLink.value);
	}

	const userTokenStore = useUserTokenStore();
	const { tokens } = storeToRefs(userTokenStore);

	onMounted(async () => {
		await userTokenStore.fetchFeatureTokens();
	});


</script>

<style>
</style>