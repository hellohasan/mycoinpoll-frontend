<template>
	<div>
		<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<FrontendBreadcrumb />
			<div class="coin-hero-area ptb50 position">
				<div class="frequently-circle"></div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-7">
							<div class="learn-earn-hero-left">
								<div class="hero-area-text">
									<h3>Welcome to Our Blog Page</h3>
									<p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our blog section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="box-bg">
								<div class="token-card-thumnails position-relative m-0">
									<nuxt-img src="/images/thumbnail/blog.png" alt="image" format="webp" :modifiers="{ width: 455, height: 380, quality: 80 }" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
										<Skeletor v-if="!isLoaded" width="455" height="380" />
										<img v-else v-bind="imgAttrs" :src="src" class="w-100 h-100 object-fit-cover" />
									</nuxt-img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="blog-layout-section mt-120 position-relative">
			<div class="learn-circle1 circle-effect1"></div>
			<div class="ellipse ellipse-2"></div>
			<div class="ellipse ellipse-3"></div>
			<div class="container">
				<div class="row gy-4">
					<FrontendBlogSidebar />
					<div v-bind="!pending" class="col-lg-9">
						<div class="position-relative rgb-border p30 h-100">
							<div class="row gy-4">
								<div v-if="blogList?.data?.length === 0" class="d-flex flex-column align-items-center justify-content-center text-center">
									<div class="p-1 rounded-circle mb-3" style="background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)">
										<div class="rounded-circle p-3">
											<nuxt-img src="/images/icon/no-data.svg" width="200" loading="lazy" placeholder alt="No data" />
										</div>
									</div>
									<h4 class="mt-3 text-white">No blogs in this category</h4>
								</div>
								<div class="col-xl-6 col-md-6" v-for="blog in blogList.data" :key="blog.id">
									<div class="blog-post-card h-100">
										<div class="blog-post-thumbnails">
											<nuxt-img :src="blog.featured_image" width="389" alt="img" class="w-100 clip-path-2" />
										</div>
										<div class="blog-post-content mt-20">
											<div class="d-flex align-items-center justify-content-between">
												<span class="publish-date d-flex align-items-center">
													<i class="fa-solid fa-clock"></i>
													{{ blog.publish_date }}
												</span>
												<span class="publish-date d-flex align-items-center">
													<i class="fa-solid fa-list"></i>
													{{ blog.category.name }}
												</span>
											</div>
											<h4 class="text-white">
												{{ blog.title }}
											</h4>
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
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	definePageMeta({
		title: 'Category Blogs'
	});

	const slug = useRoute().params.slug;
	const blogList = ref({});

	const { useOnlyFetch } = useApi();
	const { pending } = await useOnlyFetch(`/get-category-blogs/${slug}`, {
		onResponse({ response }) {
			blogList.value = response._data;
			console.log(blogList.value);
		}
	});
</script>

<style>
</style>