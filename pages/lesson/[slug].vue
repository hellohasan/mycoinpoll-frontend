<template>
	<div>
		<div v-if="!pending" class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<FrontendBreadcrumb />
			<div class="coin-hero-area ptb50 position">
				<div class="frequently-circle"></div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-7">
							<div class="learn-earn-hero-left">
								<div class="hero-area-text">
									<h3>{{ lesson.title }}</h3>
									<p class="mb-0">{{ lesson.short_description }}</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="box-bg h-100">
								<div class="token-card-thumnails position-relative m-0 h-100">
									<nuxt-img :src="lesson.image" alt="img" class="w-100 h-100 object-fit-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="learn-earn-card-section mt80 position-relative">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="position-relative rgb-border">
							<div class="learning-video-box">
								<iframe :src="`https://www.youtube.com/embed/${lesson.video_id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							</div>
						</div>
					</div>
					<div class="col-md-12 mt40">
						<div class="news-poin-list" v-html="lesson.description"></div>
					</div>
				</div>
			</div>
			<div class="learn-circle1 circle-effect1"></div>
			<div class="learn-circle2 circle-effect2"></div>
			<div class="learn-circle3 circle-effect2"></div>
			<div class="learn-circle4 circle-effect5"></div>
			<div class="line-shap-animation learn-circle5"></div>
		</section>
		<section class="risk-warning-section pt120">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="full-w-card mobile-box-bg risk-warning d-flex align-items-start">
							<span><i class="fa-solid fa-circle-exclamation"></i></span>
							<p>
								Disclaimer and Risk Warning: This content is presented to you on an “as is” basis for general information and educational purposes only, without representation or warranty of any kind. It should not be construed as financial advice, nor is it intended to recommend the purchase of any specific product or service. Please read our full disclaimer here for further details. Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance Academy is not liable for any losses you may incur. Not financial advice. For more information, see our
								<a href="#">Terms of Use</a>
								and
								<a href="#">Risk Warning</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Lesson'
	});
	const route = useRoute();
	const { useMyFetch } = useApi();
	const { data: lesson, pending, error } = await useMyFetch(`get-lessons/${route.params.slug}`);
</script>

<style>
</style>