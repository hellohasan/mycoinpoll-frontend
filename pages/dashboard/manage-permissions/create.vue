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
					<div class="form-group">
						<div class="form-check ml-2 mb-2">
							<input type="checkbox" class="form-check-input" v-model="form.crud" name="crud" id="exampleCheck1" />
							<label class="form-check-label text-white" for="exampleCheck1">Check me out for ( *-create *-store *-edit *-update *-destroy )</label>
						</div>
					</div>
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
		crud: ''
	});

	const { useOnlyFetch } = useApi();
	const { data: roleLists } = await useOnlyFetch('/manage-roles');
	const { toastSuccess } = useToastAlert();

	const handelSubmit = async () => {
		await form.submit('/manage-permissions').then((res) => {
			form.reset();
			form.clear();
			toastSuccess('Permission Created successfully.');
			navigateTo('/dashboard/manage-permissions');
		});
	};
</script>

<style>
</style>