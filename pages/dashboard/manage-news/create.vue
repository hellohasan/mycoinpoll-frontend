<template>
	<div class="dashboard-body mt30">
		<!--Start user referable-list -->
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Create News</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-news' }" class="gradient-btn">
						<i class="fas fa-newspaper"></i>
						News List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<ClientOnly>
				<form @submit.prevent="handelSubmit">
					<div class="custom-card-body">
						<div class="row gy-4">
							<FormGroupInput col="col-md-6" v-model="form.title" :error="form.errors.get('title')" label="News Title" />
							<FormGroupSelect col="col-md-6" v-model="form.news_category_id" :options="categories" :error="form.errors.get('news_category_id')" label="News Category" />
							<FormGroupPhoto col="col-md-6" v-model="form.image" :error="form.errors.get('image')" message="Size: 428x358" label="News Small Image" />
							<FormGroupPhoto col="col-md-6" v-model="form.image_large" :error="form.errors.get('image_large')" message="Size: 1232X626" label="News Large Image" />
							<FormGroupToggle col="col-md-6" v-model="form.status" :error="form.errors.get('status')" label="News Status" />
							<FormGroupTag col="col-md-6" v-model="form.tags" :error="form.errors.get('tags')" label="News Tag" />
							<FormGroupEditor col="col-md-12" v-model="form.description" :error="form.errors.get('description')" label="News Description" />
						</div>
					</div>
					<div class="card-line"></div>
					<div class="custom-card-footer">
						<div class="form-group d-flex justify-content-end align-items-center g30">
							<button type="submit" :disabled="form.busy" class="gradient-btn">
								<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
								Create News
							</button>
						</div>
					</div>
				</form>
			</ClientOnly>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'News Create',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const form = useVForm({
		title: '',
		news_category_id: '',
		image: '',
		image_large: '',
		status: '',
		tags: [],
		description: ''
	});
	const categories = ref([]);

	const { useOnlyFetch } = useApi();
	await useOnlyFetch('/get-news-category', {
		onResponse({ response }) {
			categories.value = response._data;
		}
	});

	const { alert } = useSweetAlert();
	const handelSubmit = async () => {
		await form.submit('/manage-news/store').then((res) => {
			form.reset();
			form.clear();
			alert('News Created successfully.');
		}).catch((error) => { })
	}

</script>

<style>
</style>