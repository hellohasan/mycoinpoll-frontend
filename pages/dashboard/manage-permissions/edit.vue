<template>
	<div class="dashboard-body mt30">
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Create New Permission</h5>
				</div>
			</div>

			<form @submit.prevent="handelSubmit">
				<div class="row gy-4 mt-1">
					<FormGroupInput col="col-md-6" v-model="form.name" :error="form.errors.get('name')" label="Permission Name" placeholder="Enter permission name" />
					<FormGroupInput col="col-md-6" v-model="form.group_name" :error="form.errors.get('group_name')" label="Permission Group" placeholder="Enter permission Group" />
				</div>
				<div class="table-heading mt-20">
					<h5>Assign Role</h5>
				</div>
				<div class="line-1 mt-15"></div>
				<div class="row gy-4 mt-1">
					<div v-for="role in roleLists" :key="role.id" class="col-sm-6 col-lg-3 col-md-4">
						<div class="form-group">
							<input type="checkbox" :id="role.id" class="checkBox" v-model="form.selectedRoles" :value="role.id" />
							<label :for="role.id">
								{{ role.name }}
								<span v-if="form.selectedRoles.includes(role.id)">
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
							Create Permission
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script  setup>
	definePageMeta({
		title: 'Create Permission',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const form = useVForm({
		name: '',
		selectedRoles: [],
		group_name: '',
	});

	const { useOnlyFetch } = useApi();
	const { data: roleLists } = await useOnlyFetch('/manage-roles');
	const { toastSuccess } = useToastAlert();

	await useOnlyFetch(`/manage-permissions/${useRoute().query.id}`, {
		onResponse({ response }) {
			form.name = response._data.name;
			form.group_name = response._data.group_name;
			form.selectedRoles = response._data.roles.map((role) => role.id);
		}
	});

	const handelSubmit = async () => {
		await form.submit(`/manage-permissions/${useRoute().query.id}`, 'PUT').then((res) => {
			form.reset();
			form.clear();
			toastSuccess('Permission Updated successfully.');
			navigateTo('/dashboard/manage-permissions');
		});
	};
</script>

<style>
</style>