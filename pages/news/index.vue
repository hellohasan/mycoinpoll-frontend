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
									<h3>Welcome to Our Update News</h3>
									<p class="mb-0">Stay informed with the latest updates, industry insights, and platform announcements. Our news section keeps you up to date on market trends, new features, and opportunities to enhance your experience.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="box-bg">
								<div class="token-card-thumnails position-relative m-0">
									<nuxt-img src="/images/thumbnail/news-alt.jpg" alt="img" loading="lazy" placeholder class="w-100 h-100 object-fit-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="learn-earn-card-section mt80 position-relative">
			<div class="container">
				<div class="row learn-earn-area">
					<div class="col-md-12">
						<!-- card  item-->
						<div v-for="(news, i) in newsList" :key="news.id" class="token-card-main-area d-flex align-items-center" :class="{ mt40: i != 0 }">
							<div class="token-card-thumnail-text d-flex align-items-center">
								<div class="token-card-thumnails position-relative">
									<nuxt-img :src="news.image" loading="lazy" placeholder alt="token" class="clip-path" />
								</div>
								<div class="earn-right-text">
									<div class="token-card-middle">
										<span class="publish-date d-flex align-items-center">
											<i class="fa-solid fa-clock"></i>
											{{ news.created_at }}
										</span>
										<h4>{{ news.title }}</h4>
										<p>{{ news.short_description }}</p>
									</div>
									<div class="earn-card-btn-group mt40">
										<ul class="d-flex align-items-center justify-content-between">
											<li>
												<nuxt-link :to="{ name: 'news-slug', params: { slug: news.slug } }" class="btn1 primary-btn subscribe-btn">
													Read more
													<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
												</nuxt-link>
											</li>
										</ul>
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
	definePageMeta({
		title: 'News'
	});

	const { useMyFetch } = useApi();
	const { data: newsList, pending, error } = useMyFetch('get-news');
</script>

<style>
</style>