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
		<section class="learn-earn-card-section mt80 position-relative">
			<div class="container">
				<div class="row gy-4">
					<FrontendBlogSidebar />

					<div class="col-lg-9">
						<div class="row gy-4">
							<div class="col-md-12">
								<div class="token-card-thumnail-text">
									<div class="position-relative rgb-border mb40">
										<div class="news-thumnails">
											<nuxt-img :src="blog.featured_image" alt="image" format="webp" :modifiers="{ width: 455, height: 380, quality: 80 }" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
												<Skeletor v-if="!isLoaded" width="900" height="548" />
												<img v-else v-bind="imgAttrs" :src="src" class="w-100" />
											</nuxt-img>
										</div>
										<div class="shear-btn">
											<div class="social-menu">
												<ul ul class="flex flex-column align-items-center g-10">
													<li>
														<a href="#"><i class="fab fa-facebook-f"></i></a>
													</li>
													<li>
														<a href="#"><i class="fa-brands fa-x-twitter"></i></a>
													</li>
													<li>
														<a href="#"><i class="fab fa-instagram"></i></a>
													</li>
													<li>
														<a href="#"><i class="fab fa-linkedin-in"></i></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="token-card-middle w-100 card-2">
										<div class="d-flex g-20">
											<span class="publish-date d-flex align-items-center">
												<i class="fa-solid fa-clock"></i>
												{{ blog.publish_date }}
											</span>
											<span class="publish-date d-flex align-items-center">
												<i class="fa-solid fa-user"></i>
												{{ blog.user?.name || 'Unknown' }}
											</span>
										</div>
										<h4>{{ blog.title }}</h4>
										<div v-html="blog.content"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="learn-circle1 circle-effect1"></div>
			<div class="learn-circle2 circle-effect2"></div>
			<div class="learn-circle3 circle-effect2"></div>
			<div class="learn-circle4 circle-effect5"></div>
			<div class="line-shap-animation learn-circle5"></div>
		</section>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	definePageMeta({
		title: 'Blog Detail'
	});

	const slug = useRoute().params.slug;
	const blog = ref({});

	const { useOnlyFetch } = useApi();
	const { pending } = await useOnlyFetch(`/get-blog/${slug}`, {
		method: 'GET',
		onResponse({ response }) {
			if (response.status === 404) {
				navigateTo('/404');
			}
			blog.value = response._data;
		}
	});
</script>

<style>
</style>