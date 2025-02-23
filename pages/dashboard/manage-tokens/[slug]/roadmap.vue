<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Token Roadmap</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-tokens' }" class="gradient-btn">
						<i class="fas fa-list"></i>
						Token List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<div class="custom-card-body">
				<div class="d-flex justify-content-between">
					<h3 class="mb20 text-white">Add Roadmap Groups and Tasks</h3>
					<button @click="addGroup" class="gradient-btn mb20">Add Group</button>
				</div>
				<div v-if="form.errors.any()" class="alert alert-danger alert-dismissible fade show" role="alert">
					<strong>Oops! There were some problems with your input.</strong>
					<ol class="mb-0 mt-2">
						<li v-for="error in form.errors.all()" :key="error" class="error">{{ error[0] }}</li>
					</ol>
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
				<div v-for="(group, groupIndex) in form.groups" :key="groupIndex" class="border-image-gradient p-3 mb20">
					<div class="row d-flex justify-content-between align-items-center mb-2">
						<h6 class="text-white col-md-8">
							<label for="">Group {{ groupIndex + 1 }}:</label>
							<div class="row">
								<div class="col-md-6">
									<div class="input bg-border-input">
										<input type="text" v-model="group.name" class="form-control" placeholder="Enter Group Name" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="input bg-border-input">
										<input type="text" v-model="group.heading" class="form-control" placeholder="Enter Group Heading" />
									</div>
								</div>
							</div>
						</h6>
						<div class="col-md-4 text-end">
							<button @click="addTask(groupIndex)" class="gradient-btn small-btn me-1">Add Task</button>
							<button @click="removeGroup(groupIndex)" class="gradient-btn small-btn delete-btn">Remove Group</button>
						</div>
					</div>
					<table class="table table-bordered" style="background: #09111b">
						<thead>
							<tr>
								<th width="5%"></th>
								<th width="45%">Task Name</th>
								<th width="25%">Task Status</th>
								<th width="25%">Action</th>
							</tr>
						</thead>
						<draggable v-model="group.tasks" tag="tbody" handle=".drag-handle" :animation="200" itemKey="taskIndex">
							<template #item="{ element: task, index: taskIndex }">
								<tr>
									<td><i class="fas fa-bars drag-handle"></i></td>
									<td>
										<div class="input bg-border-input">
											<input type="text" v-model="task.name" placeholder="Task name" class="form-control" />
										</div>
									</td>
									<td>
										<div class="task-status">
											<button @click="toggleStatus(groupIndex, taskIndex)" class="badge" :class="task.status ? 'active-status' : 'deactivate-status'">{{ task.status ? 'Complete' : 'Pending' }}</button>
										</div>
									</td>
									<td>
										<button @click="removeTask(groupIndex, taskIndex)" class="gradient-btn small-btn delete-btn">Remove Task</button>
									</td>
								</tr>
							</template>
						</draggable>
					</table>
				</div>
			</div>
			<div class="card-line"></div>
			<div class="custom-card-footer">
				<div class="form-group d-flex justify-content-end align-items-center g30">
					<button type="submit" :disabled="form.busy" @click="submitForm" class="gradient-btn">
						<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
						Update Token Roadmap
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import draggable from 'vuedraggable';

	definePageMeta({
		title: 'Token Roadmap',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin'],
	});

	const route = useRoute();
	const slug = ref(route.params.slug);
	const { toastSuccess } = useToastAlert();

	const form = useVForm({
		groups: [
			{
				name: '',
				heading: '',
				tasks: [{ name: '', status: false }],
			},
		],
	});

	const addGroup = () => {
		form.groups.push({ name: '', heading: '', tasks: [{ name: '', status: false }] });
	};

	const addTask = (groupIndex) => {
		form.groups[groupIndex].tasks.push({ name: '', status: false });
	};

	const removeTask = (groupIndex, taskIndex) => {
		form.groups[groupIndex].tasks.splice(taskIndex, 1);
	};

	const removeGroup = (groupIndex) => {
		form.groups.splice(groupIndex, 1);
	};

	const toggleStatus = (groupIndex, taskIndex) => {
		const task = form.groups[groupIndex].tasks[taskIndex];
		task.status = !task.status;
	};

	const submitForm = async () => {
		try {
			await form.submit(`/manage-tokens/${slug.value}/roadmap`).then(() => {
				form.clear();
				toastSuccess('Roadmap saved successfully!');
			});
		} catch (error) {
			console.error('Error saving roadmap:', error);
		}
	};

	const { useOnlyFetch } = useApi();
	await useOnlyFetch(`manage-tokens/${slug.value}/roadmap`, {
		onResponse({ response }) {
			form.groups = response._data.roadmap_data;
		},
	});
</script>

<style scoped>
	.table tr th,
	.table tr td {
		background-color: #040c16;
		color: white;
	}

	.drag-handle {
		cursor: move;
	}

	.small-btn {
		padding: 4px 8px;
		font-size: 12px;
	}

	.delete-btn {
		background-color: red;
		border-color: red;
		color: white;
	}
</style>
