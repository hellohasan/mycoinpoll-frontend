<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Edit Blog</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ path: '/dashboard/manage-blog' }" class="gradient-btn">
						<i class="fas fa-list"></i>
						Blog List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<ClientOnly>
				<form @submit.prevent="handelSubmit">
					<div class="custom-card-body">
						<div class="row gy-4">
							<FormGroupInput col="col-md-6" v-model="form.title" :error="form.errors.get('title')" label="Blog Title" :message="`(${form.title.length} / 255 max length)`" />
							<FormGroupSelect col="col-md-6" v-model="form.blog_category_id" :options="categories" :error="form.errors.get('blog_category_id')" label="Blog Category" />
							<FormGroupEditor col="col-md-12" v-model="form.content" :error="form.errors.get('content')" label="Blog Content" />
							<FormGroupTextarea col="col-md-12" v-model="form.summary" :error="form.errors.get('summary')" label="Excerpt/Summary" :message="`(${form.summary.length} / 300 max length)`" />

							<FormGroupPhoto col="col-md-6" v-model="form.featured_image" :preview="form.featured_image" :error="form.errors.get('featured_image')" message="Size: 1260X640" label="Featured Image" />
							<FormGroupInput col="col-md-6" v-model="form.publication_date" type="date" :error="form.errors.get('publication_date')" label="Publication Date" />

							<FormGroupTag col="col-md-6" v-model="form.tags" :error="form.errors.get('tags')" label="Tags" />
							<FormGroupToggle col="col-md-6" v-model="form.status" :error="form.errors.get('status')" label="Blog Status" onText="Publish" offText="Unpublished" />

							<FormGroupInput col="col-md-12" v-model="form.meta_title" :error="form.errors.get('meta_title')" label="Meta Title" :message="`(${form.meta_title.length} / 60 max length)`" />
							<FormGroupTextarea col="col-md-12" v-model="form.meta_description" :error="form.errors.get('meta_description')" label="Meta Description" :message="`(${form.meta_description.length} / 160 max length)`" />
							<FormGroupTag col="col-md-12" v-model="form.meta_keywords" :error="form.errors.get('meta_keywords')" label="Meta Keywords" placeholder="Keywords (Comma Separate)" />
						</div>
					</div>
					<div class="card-line"></div>
					<div class="custom-card-footer">
						<div class="form-group d-flex justify-content-end align-items-center g30">
							<button type="submit" :disabled="form.busy" class="gradient-btn">
								<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
								Update Blog
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
		title: 'Edit Blog',
		layout: 'backend',
		authenticated: true,
		permissions: ['manage-blog-edit']
	});

	const form = useVForm({
		title: '',
		content: '',
		summary: '',
		featured_image: '',
		blog_category_id: '',
		tags: [],
		publication_date: '',
		meta_title: '',
		meta_description: '',
		meta_keywords: [],
		status: false,
	});

	const { toastSuccess } = useToastAlert();
	const categories = ref([]);
	const { useOnlyFetch } = useApi();
	await useOnlyFetch('/get-blog-category', {
		onResponse({ response }) {
			categories.value = response._data
		}
	});

	const route = useRoute();
	const blogId = route.query.id;
	await useOnlyFetch(`/manage-blogs/${blogId}`, {
		onResponse({ response }) {
			form.fill(response._data);
		}
	});

	const { alert, toast } = useSweetAlert();
	const handelSubmit = async () => {
		await form.submit(`/manage-blogs/${blogId}`, "PUT").then((res) => {
			toast('Blog Updated successfully.');
		}).catch((error) => { });
	}
</script>

<style>
</style>