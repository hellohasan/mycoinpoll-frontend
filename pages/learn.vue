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
									<h3>Grow Your Crypto Knowledge</h3>
									<p class="mb-0">Gain knowledge and earn free crypto rewards by completing educational courses about blockchain, DeFi, and emerging technologies.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="box-bg h-100">
								<div class="token-card-thumnails position-relative m-0 h-100">
									<nuxt-img src="/images/thumbnail/learnEarn-hero.png" alt="image" format="webp" :modifiers="{ width: 455, height: 380, quality: 80 }" :custom="true" v-slot="{ src, isLoaded, imgAttrs }">
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
				<div class="row learn-earn-area">
					<div class="col-md-12">
						<div class="token-card-heading mb40 d-flex align-items-center flex-wrap justify-content-between g30">
							<h3 class="text-shadow">Learn and Earn</h3>
						</div>
						<div v-for="(lesson, i) in lessons" :key="lesson.id" class="token-card-main-area d-flex align-items-center" :class="{ mt40: i != 0 }">
							<div class="token-card-thumnail-text d-flex align-items-center">
								<div class="token-card-thumnails position-relative">
									<img :src="lesson.image" alt="token" class="clip-path" />
									<ul class="d-flex align-items-center">
										<li>
											<a href="#" class="token-btn token-btn-active token-ongoin d-flex align-items-center">
												<i class="fas fa-tag"></i>
												{{ lesson.category.name }}
											</a>
										</li>
									</ul>
								</div>
								<div class="earn-right-text">
									<div class="token-card-middle">
										<h4>{{ lesson.title }}</h4>
										<p>{{ lesson.short_description }}</p>
									</div>
									<div class="earn-card-btn-group mt40">
										<ul class="d-flex align-items-center justify-content-between flex-wrap">
											<li><nuxt-link :to="{ name: 'lesson-slug', params: { slug: lesson.slug } }" class="btn1 primary-btn subscribe-btn">Start Learning</nuxt-link></li>
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
	import { Skeletor } from 'vue-skeletor';
	definePageMeta({
		title: 'Learn & Earn'
	});

	const { useMyFetch } = useApi();
	const { data: lessons, pending } = useMyFetch('get-lessons');

</script>

<style>
</style>