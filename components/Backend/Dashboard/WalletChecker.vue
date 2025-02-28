<template>
	<div>
		<div v-if="!wallet.isConnected" class="user-notification-box-section mt30">
			<div class="user-notification-box warning-bg-notification flex-wrap d-flex align-items-center justify-content-between">
				<div class="notification-text-box d-flex">
					<div class="notification-icon yellow-color">
						<i class="fas fa-exclamation-triangle"></i>
					</div>
					<div class="notification-text">
						<h5>Wallet Not Connected</h5>
						<p>
							This account not associate with any
							<span class="gradient-color">web3 wallet.</span>
							Please connect a wallet for next innovation.
						</p>
					</div>
				</div>
				<a href="#" role="button" @click.prevent="modal.open()" class="border-gradient btn3">Connect Wallet</a>
			</div>
		</div>

		<div v-if="multipleAccount.length" class="user-notification-table warning-bg-notification mt30">
			<div class="notification-text-box d-flex">
				<div class="notification-icon yellow-color">
					<i class="fas fa-exclamation-triangle"></i>
				</div>
				<div class="notification-text">
					<h5>We got another {{ multipleAccount.length }} account with this same wallet address. Please choose one and other account will be null.</h5>
				</div>
			</div>
			<div class="common-table mt30">
				<table class="warning-table custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>Unique ID</th>
							<th>Username</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{ user.unique_id }}</td>
							<td>{{ user.username }}</td>
							<td>{{ user.email }}</td>
							<td class="text-center">
								<a href="#" role="button" @click.prevent="choseWallet(user.unique_id, false)" class="gradient-btn-small">
									<i class="fas fa-link"></i>
									Select This
								</a>
							</td>
						</tr>
						<tr v-for="ma in multipleAccount" :key="ma.unique_id">
							<td>{{ ma.unique_id }}</td>
							<td>{{ ma.username ?? 'N/A' }}</td>
							<td>{{ ma.email }}</td>
							<td class="text-center">
								<a href="#" role="button" @click.prevent="choseWallet(ma.unique_id, true)" class="gradient-btn-small">
									<i class="fas fa-link"></i>
									Select This
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useAppKitAccount } from '@reown/appkit/vue';
	import { getAddress } from "ethers";
	const wallet = useAppKitAccount();
	const { modal, myDisconnect } = useWeb3();
	const multipleAccount = ref([]);
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	const isChecking = ref(false);
	watch(wallet, async (newValue) => {
		if (newValue.isConnected) {
			if (process.client) {
				await checkWalletFromServer(getAddress(newValue.address));
			}
		}
	}, { deep: true });

	const { useOnlyFetch } = useApi();
	const { alert, confirm } = useSweetAlert();

	const checkWalletFromServer = async (address) => {
		if (isChecking.value) return;
		isChecking.value = true;
		try {

			if (user.value?.eth_address) {
				const { data: existingAccounts } = await useOnlyFetch(`/get-wallet-existence`, {
					method: 'POST',
					body: { address }
				});
				if (existingAccounts.value.length > 1) {
					alert(`We found ${existingAccounts.value.length} account(s) connected to this same wallet. Choose one account to continue.`, "warning", 'Attention');
					multipleAccount.value = existingAccounts.value;
					return;
				}

				if (address != null && getAddress(user.value.eth_address) !== address) {
					alert(`Log Out! We found wallet mismatch.`, "warning", 'Warning');
					myDisconnect(true);
					return;
				}
			} else {
				const isConfirmed = await confirm('Wallet not associated yet. Do you want to connect this wallet?', 'warning', 'Attention');
				if (!isConfirmed) return;
				const { data } = await useOnlyFetch('/update-wallet-existence', {
					method: 'POST',
					body: { address }
				});
				authStore.updateUser(data.value.user);
				alert("Wallet connected successfully.");
			}
		} catch (error) {
			console.error('Error checking wallet from server:', error);
			throw error;
		}
	}

	const choseWallet = async (unique_id) => {
		let isConfirmed = await confirm(`Are you sure? You choose ${unique_id} for this account`, 'warning', 'Attention');
		if (!isConfirmed) return;
		await useOnlyFetch('accept-wallet-existence', {
			method: 'POST',
			body: { unique_id, address: wallet.value.address },
			onResponse({ response }) {
				alert('Account wallet updated successfully.');
				multipleAccount.value = [];
				if (unique_id !== user.value.unique_id) {
					disconnect(true);
				}
			}
		});
	}

</script>

<style>
</style>