<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Create a New Role</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-role' }" class="gradient-btn">
						<i class="fas fa-list"></i>
						Role List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<form @submit.prevent="handelSubmit">
				<div class="custom-card-body">
					<div class="row gy-4 mt-1">
						<FormGroupInput col="col-md-12" v-model="form.name" :error="form.errors.get('name')" label="Role Name" placeholder="Enter role name" />
						<div class="table-heading mt-20">
							<h5>Assign Permission</h5>
						</div>
					</div>
					<div class="row gy-4 mt-1">
						<div v-for="permission in permissionLists" :key="permission.id" class="col-sm-6 col-lg-3 col-md-4">
							<div class="form-group">
								<input type="checkbox" :id="permission.id" class="checkBox" v-model="form.selectedPermissions" :value="permission.id" />
								<label :for="permission.id">
									{{ permission.name }}
									<span v-if="form.selectedPermissions.includes(permission.id)">
										<i class="fa-solid fa-check"></i>
									</span>
								</label>
							</div>
						</div>
					</div>
					<div class="card-line"></div>
					<div class="custom-card-footer">
						<div class="form-group d-flex justify-content-end align-items-center g30">
							<button type="submit" :disabled="form.busy" class="gradient-btn">
								<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
								Create Role
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Create Role',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const form = useVForm({
		name: '',
		selectedPermissions: [],
	});

	const permissionLists = ref([]);
	const { useOnlyFetch } = useApi();
	await useOnlyFetch('/manage-permissions', {
		method: 'get',
		onResponse: ({ response }) => {
			permissionLists.value = response._data;
		}
	});

	const { toastSuccess, toastError } = useToastAlert();
	import { navigateTo } from '#app';

	const handelSubmit = async () => {
		await form.submit('/manage-roles').then((res) => {
			form.reset();
			form.clear();
			toastSuccess('Role Created successfully.');
			navigateTo('/dashboard/manage-role');
		});
	}
</script>

<style>
</style>