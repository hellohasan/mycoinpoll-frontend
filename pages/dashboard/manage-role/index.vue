<template>
	<div class="dashboard-body mt30">
		<div class="custom-card-header d-flex align-items-center justify-content-between">
			<div class="table-heading">
				<h5>Roles</h5>
			</div>
			<div class="add-new-btn">
				<nuxt-link :to="{ name: 'dashboard-manage-role-create' }" class="gradient-btn">
					<i class="fas fa-plus"></i>
					Create Role
				</nuxt-link>
			</div>
		</div>
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Roles List</h5>
				</div>
				<div class="search-box-area">
					<form @submit.prevent="searchRoles">
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="search-icon fas fa-search"></i>
							</div>
							<input v-model="searchQuery" type="search" class="form-control" id="search" placeholder="Search here" />
						</div>
					</form>
				</div>
			</div>
			<div class="common-table mt30">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Role Name</th>
							<th>User Count</th>
							<th>Permissions</th>
							<th>Date Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<template v-if="roles && roles.length > 0">
							<tr v-for="(role, i) in roles" :key="role.id">
								<td>{{ i + 1 }}</td>
								<td>{{ role.name }}</td>
								<td>{{ role.users_count }}</td>
								<td>{{ role.permissions_count }} 's</td>
								<td>{{ formatDate(role.created_at) }}</td>
								<td>
									<ul class="d-flex align-items-center action-group justify-content-center">
										<li>
											<nuxt-link :to="{ name: 'dashboard-manage-role-edit', query: { id: role.id } }"><i class="fas fa-pencil-alt skyblue"></i></nuxt-link>
										</li>
										<li>
											<button type="button" @click.prevent="deleteRole(role.id)" class="bg-transparent">
												<i class="fa-solid fa-trash-can red"></i>
											</button>
										</li>
									</ul>
								</td>
							</tr>
						</template>
						<tr v-else>
							<td colspan="100%" class="text-center">No data found!</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>

	definePageMeta({
		title: 'Role List',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const { formatDate } = useFilters();
	const { useOnlyFetch } = useApi();
	const roles = ref([]);
	const { pending, refresh } = await useOnlyFetch('/manage-roles', {
		onResponse({ response }) {
			roles.value = response._data;
		}
	});

	const searchQuery = ref('');
	const searchRoles = async () => {
		const params = new URLSearchParams({
			search: searchQuery.value
		});
		await useOnlyFetch(`/manage-roles?${params.toString()}`, {
			onResponse({ response }) {
				roles.value = response._data;
			}
		});
	};

	const { confirm, alert } = useSweetAlert();
	const deleteRole = async (id) => {
		const isConfirm = await confirm('Are you sure you want to delete this role?', 'warning');
		if (!isConfirm) return;
		const { data } = await useOnlyFetch(`/manage-roles/${id}`, {
			method: 'delete',
			async onResponse({ response }) {
				await refresh();
				alert('Role deleted successfully.');
			}
		});
	};
</script>

<style>
</style>