<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Blog List</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ path: '/dashboard/manage-blog/create' }" class="gradient-btn">
						<i class="fas fa-plus"></i>
						Add New Blog
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<div class="row gy-4 mt-15">
				<div class="col-xl-4 col-md-6" v-for="blog in blogList" :key="blog.id">
					<div class="blog-post-card blog-post-card-color h-100">
						<div class="blog-post-thumbnails position-relative">
							<nuxt-img :src="blog.featured_image" loading="lazy" format="webp" placeholder alt="img" class="w-100" />
							<div class="blog-status badge" :class="blog.status == 1 ? 'active-status gradient-bg' : 'deactivated-status gradient-bg-red'">
								{{ blog.status == 1 ? 'Published' : 'Unpublished' }}
							</div>
						</div>
						<div class="blog-post-content mt-20">
							<span class="publish-date d-flex align-items-center">
								<i class="fa-solid fa-clock"></i>
								{{ blog.publish_date }}
							</span>
							<h4>{{ blog.title }}</h4>
							<p class="mt-3">{{ blog.short_content }}.</p>
							<div class="line-1 mt-20"></div>
							<div class="d-flex justify-content-between mt-15">
								<span class="publish-date d-flex align-items-center">
									<i class="fa-solid fa-eye"></i>
									{{ blog.views_count }} Views
								</span>
								<span class="publish-date d-flex align-items-center">
									<i class="fa-solid fa-comments"></i>
									{{ blog.comments_count }} Comments
								</span>
							</div>
							<ul class="btn-group-card d-flex align-items-center justify-content-between mt-2">
								<li>
									<nuxt-link :to="{ path: `/blog-detail/${blog.slug}` }" target="_blank">
										<i class="fa-solid fa-eye green"></i>
										View
									</nuxt-link>
								</li>
								<li v-if="hasPermission('manage-blogs-edit')">
									<nuxt-link :to="{ path: `/dashboard/manage-blog/edit`, query: { id: blog.id } }">
										<i class="fa-solid fa-pen skyblue"></i>
										Edit
									</nuxt-link>
								</li>
								<li v-if="hasPermission('manage-blogs-delete')">
									<button type="button" data-bs-toggle="modal" @click.prevent="deleteBlog(blog.id)">
										<i class="fa-solid fa-trash-can red"></i>
										Delete
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Blog List',
		layout: 'backend',
		authenticated: true,
		permissions: ['manage-blog']
	});
	const { hasPermission } = useAuthAccess();
	const { useOnlyFetch } = useApi();

	const blogList = ref([]);
	const { refresh } = await useOnlyFetch('/manage-blogs', {
		method: 'get',
		async onResponse({ response }) {
			blogList.value = response._data;
		}
	});

	const { alert, confirm } = useSweetAlert();
	const deleteBlog = async (id) => {
		const isConfirmed = await confirm("Are you sure you want to delete this blog?", "warning");
		if (isConfirmed) {
			await useOnlyFetch(`/manage-blogs/${id}`, {
				method: 'DELETE',
				async onResponse({ response }) {
					await refresh();
					alert("Blog deleted successfully.");
				}
			});
		}
	}
</script>

<style>
</style>