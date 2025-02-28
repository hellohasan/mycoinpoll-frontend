<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Create Lesson</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-learn' }" class="gradient-btn">
						<i class="fas fa-video"></i>
						Lesson List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<ClientOnly>
				<form @submit.prevent="handelSubmit">
					<div class="custom-card-body">
						<div class="row gy-4">
							<FormGroupInput col="col-md-6" v-model="form.title" :error="form.errors.get('title')" label="Lesson Title" />
							<FormGroupSelect col="col-md-6" v-model="form.lesson_category_id" :options="categories" :error="form.errors.get('lesson_category_id')" label="Lesson Category" />
							<FormGroupPhoto col="col-md-6" v-model="form.image" :error="form.errors.get('image')" message="Size: 428x358" label="Lesson Small Image" />
							<FormGroupPhoto col="col-md-6" v-model="form.image_large" :error="form.errors.get('image_large')" message="Size: 1232X626" label="Lesson Large Image" />
							<FormGroupToggle col="col-md-6" v-model="form.status" :error="form.errors.get('status')" label="Lesson Status" />
							<FormGroupInput col="col-md-6" v-model="form.video_id" :error="form.errors.get('video_id')" message="Ony Youtube Video ID" label="Video Id" />
							<FormGroupEditor col="col-md-12" v-model="form.description" :error="form.errors.get('description')" label="Lesson Description" />
						</div>
					</div>
					<div class="card-line"></div>
					<div class="custom-card-footer">
						<div class="form-group d-flex justify-content-end align-items-center g30">
							<button type="submit" :disabled="form.busy" class="gradient-btn">
								<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
								Create Lesson
							</button>
						</div>
					</div>
				</form>
			</ClientOnly>
		</div>
	</div>
</template>

<script  setup>
	import { ClientOnly } from '#components';

	definePageMeta({
		title: 'Lesson Create',
		layout: 'backend',
		authenticated: true,
		permissions: ['manage-lean-create']
	});

	const form = useVForm({
		title: '',
		lesson_category_id: '',
		image: '',
		image_large: '',
		status: '',
		video_id: '',
		description: ''
	});

	const categories = ref([]);
	const { useOnlyFetch } = useApi();
	await useOnlyFetch('/get-learn-category', {
		onResponse({ response }) {
			categories.value = response._data
		}
	});

	const { toastSuccess } = useToastAlert();
	const handelSubmit = async () => {
		await form.submit('/manage-lessons').then((res) => {
			form.reset();
			form.clear();
			toastSuccess('Lesson Created successfully.');
			navigateTo('/dashboard/manage-learn');
		});
	}
</script>

<style>
</style>