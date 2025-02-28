<template>
	<div class="dashboard-body mt30">
		<div class="custom-card-header d-flex align-items-center justify-content-between">
			<div class="table-heading">
				<h5>Permissions</h5>
			</div>
			<div class="add-new-btn">
				<nuxt-link :to="{ name: 'dashboard-manage-permissions-create' }" class="gradient-btn">
					<i class="fas fa-plus"></i>
					Create Permission
				</nuxt-link>
			</div>
		</div>
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Permissions List</h5>
				</div>
				<div class="search-box-area">
					<form @submit.prevent="searchPermission">
						<div class="input bg-border-input position-relative">
							<div class="search-icon">
								<i class="search-icon fas fa-search"></i>
							</div>
							<input v-model="searchQuery" type="search" class="form-control" id="search" placeholder="Search here." />
						</div>
					</form>
				</div>
			</div>
			<div class="common-table mt30" v-if="!pending">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Permission Name</th>
							<th>Guard Name</th>
							<th>Date Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<template v-if="permissions && permissions.length > 0">
							<tr v-for="(permission, i) in permissions" :key="permission.id">
								<td>{{ i + 1 }}</td>
								<td>{{ permission.name }}</td>
								<td>{{ permission.guard_name }}</td>
								<td>{{ formatDate(permission.created_at) }}</td>
								<td>
									<ul class="d-flex align-items-center action-group justify-content-center">
										<li>
											<nuxt-link :to="{ name: 'dashboard-manage-permissions-edit', query: { id: permission.id } }"><i class="fas fa-pencil-alt skyblue"></i></nuxt-link>
										</li>
										<li>
											<button type="button" @click.prevent="deletePermission(permission.id)" class="bg-transparent">
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
		title: 'Permission List',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const { formatDate } = useFilters();
	const { useOnlyFetch } = useApi();
	const permissions = ref([]);

	const { pending, refresh } = await useOnlyFetch('/manage-permissions', {
		onResponse({ response }) {
			permissions.value = response._data;
		}
	});

	const searchQuery = ref('');
	const searchPermission = async () => {
		const params = new URLSearchParams({
			search: searchQuery.value
		});
		await useOnlyFetch(`/manage-permissions?${params.toString()}`, {
			onResponse({ response }) {
				permissions.value = response._data;
			}
		});
	};

	const { confirm, alert } = useSweetAlert();
	const deletePermission = async (id) => {
		const isConfirm = await confirm('Are you sure you want to delete this permission?', 'warning');
		if (!isConfirm) return;
		await useOnlyFetch(`/manage-permissions/${id}`, {
			method: 'DELETE',
			onResponse({ response }) {
				refresh();
				alert('Permission deleted successfully.');
			}
		});
	};
</script>

<style>
</style>