<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>News List</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-news-create' }" class="gradient-btn">
						<i class="fas fa-plus"></i>
						Create News
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<div class="common-table mt30">
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
						<tr v-for="(news, i) in newsList" :key="news.id">
							<td>{{ ++i }}</td>
							<td>{{ news.title }}</td>
							<td>
								<nuxt-img width="150px" :src="news.image" placeholder loading="lazy" alt="" />
							</td>
							<td>{{ news.category.name }}</td>
							<td>
								<ElementsStatus :status="news.status" />
							</td>
							<td>
								<ul class="d-flex align-items-center action-group justify-content-center">
									<li>
										<nuxt-link :to="{ name: 'dashboard-manage-news-id-edit', params: { id: news.id } }">
											<i class="fas fa-pencil-alt skyblue"></i>
										</nuxt-link>
									</li>
									<li>
										<a href="#" role="button" @click.prevent="deleteNews(news.id)">
											<i class="fa-solid fa-trash-can red"></i>
										</a>
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'News List',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const { useOnlyFetch } = useApi();
	const { data: newsList, refresh } = await useOnlyFetch('/manage-news');

	const { alert, confirm } = useSweetAlert();
	const deleteNews = async (id) => {
		const isConfirmed = await confirm("Are you sure you want to delete this news?", "warning");
		if (isConfirmed) {
			await useOnlyFetch(`/manage-news/${id}`, {
				method: 'DELETE',
				async onResponse({ response }) {
					await refresh();
					alert("News deleted successfully.");
				}
			});
		}
	}
</script>

<style>
</style>