<template>
	<div>
		<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<FrontendBreadcrumb />
			<div v-if="!pending" class="coin-hero-area ptb50 position">
				<div class="frequently-circle"></div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-7">
							<div class="learn-earn-hero-left">
								<div class="hero-area-text">
									<h3>{{ news.title }}</h3>
									<p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our news section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="box-bg">
								<div class="token-card-thumnails position-relative m-0">
									<nuxt-img :src="news.image" loading="lazy" placeholder alt="img" class="w-100 h-100 object-fit-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section v-if="!pending" class="learn-earn-card-section mt80 position-relative">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="token-card-thumnail-text">
							<div class="position-relative rgb-border mb40">
								<div class="news-thumnails">
									<nuxt-img :src="news.image_large" placeholder loading="lazy" alt="token" class="w-100" />
								</div>
							</div>
							<div class="token-card-middle w-100">
								<span class="publish-date d-flex align-items-center">
									<i class="fa-solid fa-clock"></i>
									{{ news.created_at }}
								</span>
								<h4>{{ news.title }}</h4>
								<div class="news-poin-list" v-html="news.description"></div>
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
	definePageMeta({
		title: 'News Details'
	});

	const route = useRoute();
	const slug = route.params.slug;
	const { useMyFetch } = useApi();
	const { data: news, pending } = await useMyFetch(`get-news/${slug}`);
</script>
  
<style>
</style>