<template>
	<div class="dashboard-body mt30">
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Total Users ({{ loading ? '...' : users?.total }})</h5>
				</div>
				<div class="search-box-area d-flex">
					<form @submit.prevent="searchUsers">
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="search-icon fas fa-search"></i>
							</div>
							<input v-model="searchQuery" type="search" class="form-control" id="search" placeholder="Search here." />
						</div>
					</form>
					<div class="export-area ms-1">
						<ClientOnly>
							<BackendSuperAdminPartialsExportUser />
						</ClientOnly>
					</div>
				</div>
			</div>
			<div class="common-table mt30">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Reg. Date</th>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>ETH Address</th>
						</tr>
					</thead>
					<tbody>
						<template v-if="loading">
							<tr v-for="n in 10" :key="n">
								<td colspan="100%">
									<Skeletor height="30" width="100%" />
								</td>
							</tr>
						</template>
						<template v-else>
							<tr v-for="(user, i) in users.data" :key="user.id">
								<td>{{ (users.current_page - 1) * users.per_page + i + 1 }}</td>
								<td>{{ formatDate(user.created_at) }}</td>
								<td>{{ user.name }}</td>
								<td>{{ user.username }}</td>
								<td>{{ user.email }}</td>
								<td>{{ user.eth_address }}</td>
							</tr>
							<tr v-if="!users.data?.length">
								<td colspan="100%" class="text-center">No transactions found</td>
							</tr>
						</template>
					</tbody>
				</table>
				<BackendPartialsPagination :data="users" @pagination-change-page="getUsers" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';

	definePageMeta({
		title: "User List",
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const { useOnlyFetch } = useApi();
	const users = ref([]);
	const loading = ref(true);
	const searchQuery = ref('');

	const getUsers = async (page) => {
		try {
			const params = new URLSearchParams({
				page, search: searchQuery.value
			});
			const { data, pending, error } = await useOnlyFetch(`get-users?${params.toString()}`);
			users.value = data.value;
			loading.value = pending.value;
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	}

	const searchUsers = async () => {
		await getUsers(1);
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
	onMounted(async () => {
		await getUsers();
	});

</script>

<style>
</style>