<template>
	<div class="dashboard-body mt30">
		<!--start refer -->
		<div class="input bg-border-input">
			<div class="refer-link-box-inner d-flex align-items-center g30 position-relative">
				<p>Referral Link :</p>
				<input type="text" id="refer-url" ref="referralInput" readonly :value="referralLink" />
				<img src="/images/dashboard/icon/copy.png" alt="copy" @click.prevent="copyReferralLink" />
			</div>
		</div>
		<!--end refer -->

		<!--Start user referable-list -->
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Referral Users ({{ users?.total || 0 }})</h5>
				</div>
				<div class="search-box-area">
					<form @submit.prevent="searchUsers">
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="fas fa-search"></i>
							</div>
							<input v-model="searchQuery" type="search" class="form-control" id="search" placeholder="Search here." />
						</div>
					</form>
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
						</tr>
					</thead>
					<tbody>
						<template v-if="users?.data?.length > 0">
							<tr v-for="(user, i) in users.data" :key="user.id">
								<td>{{ (users.current_page - 1) * users.per_page + i + 1 }}</td>
								<td>{{ formatDate(user.created_at) }}</td>
								<td>{{ user.name }}</td>
								<td>{{ user.username }}</td>
								<td>{{ user.email }}</td>
							</tr>
						</template>
						<tr v-else>
							<td colspan="100%" class="text-center">No user found!</td>
						</tr>
					</tbody>
				</table>
				<BackendPartialsPagination :data="users" @pagination-change-page="getUsers" />
			</div>
		</div>
	</div>
</template>

<script setup>

	definePageMeta({
		title: 'Referrals',
		layout: 'backend',
		authenticated: true
	});

	const config = useRuntimeConfig();
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	// Referral link logic
	const referralLink = computed(() => {
		return `${config.public.appUrl}?ref=${user.value.unique_id}`;
	});

	const { copyNow } = useClipboard();
	const copyReferralLink = async () => {
		copyNow(referralLink.value);
	};

	// Users data and pagination logic
	const users = ref([]);
	const searchQuery = ref('');

	// Date formatter
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	};

	// API calls
	const { myFetch } = useApi();
	const getUsers = async (page = 1) => {
		const params = new URLSearchParams({
			page: page.toString(),
			search: searchQuery.value
		});

		const response = await myFetch(`get-referral-users?${params.toString()}`);
		users.value = response;
	};

	const searchUsers = () => {
		getUsers(1);
	};

	// Initial data fetch
	onMounted(() => {
		getUsers();
	});
</script>