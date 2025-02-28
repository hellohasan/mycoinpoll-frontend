<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Lesson List</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-learn-create' }" class="gradient-btn">
						<i class="fas fa-plus"></i>
						Create Lesson
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<div v-if="!loading" class="common-table mt30">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Title</th>
							<th>Image</th>
							<th>Category</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(lesson, i) in lessons.data" :key="lesson.id">
							<td>{{ ++i }}</td>
							<td>{{ lesson.title }}</td>
							<td>
								<img :src="lesson.image" width="120px" alt="" />
							</td>
							<td>{{ lesson.category.name }}</td>
							<td>
								<ElementsStatus :status="lesson.status" />
							</td>
							<td>
								<div class="d-flex align-content-between">
									<nuxt-link :to="{ name: 'dashboard-manage-learn-edit', query: { id: lesson.id } }" class="gradient-btn-small">
										<i class="fas fa-edit"></i>
										Edit
									</nuxt-link>
									<a href="#" role="button" @click.prevent="deleteLesson(lesson.id)" class="gradient-btn-small">
										<i class="fas fa-trash"></i>
										Delete
									</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<BackendPartialsPagination :data="lessons" @pagination-change-page="fetchLessons" />
			</div>
		</div>
	</div>
</template>

<script setup>

	definePageMeta({
		title: 'Lesson List',
		layout: 'backend',
		authenticated: true,
		permissions: ['manage-lean']
	});

	const { useOnlyFetch } = useApi();
	const lessons = ref([]);
	const loading = ref(false);

	const fetchLessons = async (page) => {
		const params = new URLSearchParams({ page });
		const { data, pending, error } = await useOnlyFetch(`manage-lessons?${params.toString()}`);
		lessons.value = data.value;
		loading.value = pending.value;
	};
	//await fetchLessons();
	onMounted(async () => {
		await fetchLessons();
	});

	const { confirm, alert } = useSweetAlert();
	const deleteLesson = async (id) => {
		const isConfirmed = await confirm("Are you sure you want to delete this lesson?", "warning");
		if (isConfirmed) {
			await useOnlyFetch(`/manage-lessons/${id}`, {
				method: 'DELETE',
				async onResponse({ response }) {
					await fetchLessons();
					alert("Lesson deleted successfully.");
				}
			});
		}
	}
</script>

<style>
</style>