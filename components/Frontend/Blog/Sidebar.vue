<template>
	<div class="col-lg-3">
		<div class="widget position-relative z-2">
			<h5 class="widget-title">Categories</h5>
			<div class="line-1 mt-15"></div>
			<ul class="categories-list d-flex ql-align-center flex-wrap mt-20">
				<li v-for="category in categoryList" :key="category.slug">
					<nuxt-link :to="{ name: 'blog-category-slug', params: { slug: category.slug } }" class="border-gradient btn3">{{ category.text }}</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="widget position-relative z-2 mt-20">
			<h5 class="widget-title">Popular Post</h5>
			<div class="line-1 mt-15 mb-4"></div>
			<div class="popular-post-items d-flex flex-lg-column flex-wrap">
				<div class="popular-post-item" v-for="blog in popularBlogs" :key="blog.id">
					<div class="popular-post-thumbnails d-flex flex-xxl-row flex-column">
						<img :src="blog.featured_image" loading="lazy" placeholder width="82" height="82" alt="img" class="clip-path-2&quot;" />
						<nuxt-link :to="{ name: 'blog-detail-slug', params: { slug: blog.slug } }">
							<div class="popular-post-content">
								<h5>{{ blog.title }}</h5>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const popularBlogs = ref([]);
	const categoryList = ref([]);

	const { useOnlyFetch } = useApi();
	await useOnlyFetch('/get-blog-category', {
		onResponse: ({ response }) => {
			categoryList.value = response._data;
		}
	});

	await useOnlyFetch('/get-popular-blogs', {
		onResponse: ({ response }) => {
			popularBlogs.value = response._data;
		}
	});
</script>

<style>
</style>