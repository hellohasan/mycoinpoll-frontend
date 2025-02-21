<template>
	<div class="dashboard-right-header-area d-flex align-items-center justify-content-between">
		<div class="page-info d-flex align-items-center">
			<div class="resize-icon" @click="toggleDashboard">
				<i class="fa-solid fa-expand"></i>
			</div>
			<h5 class="page-title">{{ pageTitle }}</h5>
		</div>

		<div class="dashboard-header-right">
			<div class="d-flex align-items-center dashboard-header-right-group">
				<div role="button" @click.prevent="modal.open()" class="text-btn d-flex align-items-center border-gradient">
					{{ walletText }}
					<span><nuxt-img src="/images/icon/wallet.png" loading="lazy" placeholder width="30" alt="icon" /></span>
				</div>

				<div class="profile-mini-icon">
					<nuxt-link :to="{ name: 'dashboard-profile' }">
						<nuxt-img src="/images/dashboard/icon/user.png" width="50" height="50" placeholder alt="user" />
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useAppKitAccount } from '@reown/appkit/vue';

	const route = useRoute();
	const pageTitle = computed(() => {
		return route.meta.title || 'Current Page';
	});

	const { modal } = useWeb3();
	const wallet = useAppKitAccount();
	const walletText = ref('Connect Wallet');
	const { logout } = useAuthHelper();

	watch(wallet, async (newValue) => {
		if (newValue.address) {
			try {
				walletText.value = formatAddress(newValue.address);
			} catch (error) { }
		} else {
			walletText.value = 'Connect Wallet';
		}
		if (newValue?.status == 'disconnected') {
			await logout();
		}
	}, { deep: true });

	const formatAddress = (address) => {
		if (!address) return '';
		return `${address.slice(0, 4)}...${address.slice(-4)}`;
	};

	onMounted(() => {
		if (wallet.value.isConnected) {
			walletText.value = formatAddress(wallet.value.address);
		}
	});

	const toggleDashboard = () => {
		document.querySelector('.dashboard-area')?.classList.toggle('menu-icon-show');
	};
</script>

<style>
</style>