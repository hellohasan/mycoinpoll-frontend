<template>
	<div class="dashboard-body mt30">
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Recent Transactions</h5>
				</div>
				<div class="search-box-area">
					<form @submit.prevent>
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="fas fa-search"></i>
							</div>
							<input v-model="searchQuery" type="text" class="form-control" id="search" placeholder="Search here" />
						</div>
					</form>
				</div>
			</div>

			<div class="common-table mt30">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Date Time</th>
							<th>Transaction Hash</th>
							<th>Type</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<template v-if="pending">
							<tr v-for="n in 10" :key="n">
								<td colspan="5">
									<Skeletor height="30" width="100%" />
								</td>
							</tr>
						</template>
						<template v-else>
							<tr v-for="(transaction, i) in filteredTransactions" :key="transaction.hash">
								<td>{{ i + 1 }}</td>
								<td>{{ transaction.timestamp }}</td>
								<td>
									<a :href="transaction.explorer_url" target="_blank" rel="noopener">
										{{ transaction.short_hash }}
									</a>
								</td>
								<td>
									<span :class="['badge', transaction.direction === 'in' ? 'active-status' : 'deactivate-status']">
										{{ transaction.direction === 'in' ? 'IN' : 'OUT' }}
									</span>
								</td>
								<td>{{ transaction.converted_value }} ECM</td>
							</tr>
							<tr v-if="!filteredTransactions?.length">
								<td colspan="5" class="text-center">No transactions found</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';

	definePageMeta({
		title: "Transactions",
		layout: 'backend',
		authenticated: true
	});

	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	const { useOnlyFetch } = useApi();
	const params = new URLSearchParams({
		address: user.value.eth_address
	});
	const { data: transactions, pending, error } = await useOnlyFetch(`get-transactions?${params.toString()}`);

	const searchQuery = ref('');

	const filteredTransactions = computed(() => {
		if (!transactions.value?.result) return [];
		if (!searchQuery.value) return transactions.value.result;
		const query = searchQuery.value.toLowerCase();
		return transactions.value.result.filter(tx =>
			tx.short_hash.toLowerCase().includes(query) ||
			tx.timestamp.toLowerCase().includes(query) ||
			tx.converted_value.toString().includes(query) ||
			tx.direction.toLowerCase().includes(query)
		);
	});
</script>

<style scoped>
</style>