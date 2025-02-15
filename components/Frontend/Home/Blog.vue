<template>
	<section class="blog-section pt120 position-relative">
		<div class="circle circle-1"></div>
		<div class="container">
			<div class="row gy-4 align-items-center">
				<div class="col-lg-7">
					<div class="section-heading text-center text-lg-start">
						<h3 class="text-shadow">Our Blog</h3>
						<p>Explore our blog for insights on ECM, blockchain innovations, e-commerce trends, and strategies to maximize your cryptocurrency investments.</p>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="d-flex justify-content-lg-end justify-content-center">
						<div class="d-inline-block">
							<nuxt-link to="/blogs" class="btn-1">
								View More
								<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row gy-4 mt-5">
				<div class="col-lg-4 col-md-6" v-for="blog in blogList" :key="blog.id">
					<div class="blog-post-card h-100">
						<div class="blog-post-thumbnails">
							<img :src="blog.featured_image" alt="img" class="w-100 clip-path-2" />
						</div>
						<div class="blog-post-content mt-20">
							<span class="publish-date d-flex align-items-center">
								<i class="fa-solid fa-clock"></i>
								{{ blog.publish_date }}
							</span>
							<h4>{{ blog.title }}</h4>
							<p class="mt-3">{{ blog.short_content }}</p>
							<div class="d-inline-block mt-4">
								<nuxt-link :to="{ name: 'blog-detail-slug', params: { slug: blog.slug } }" class="btn-1-sm">
									Learn more
									<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>

	const config = useRuntimeConfig();
	const { data: blogList, pending, error } = await useFetch(`${config.public.apiBase}/blogs`, {
		onResponse({ response }) {
			console.log(response._data);
		}
	});
</script>