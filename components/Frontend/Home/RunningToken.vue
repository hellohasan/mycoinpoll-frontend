<template>
	<section class="running-token-section">
		<div class="container">
			<div class="running-token-view-box d-flex align-items-center justify-content-between border-indexcing flex-wrap">
				<div class="token-view-box-text d-flex align-items-center">
					<NuxtImg src="/images/icon/bell.png" alt="icon" />
					<p>Stake now and secure your early position in the ECM Token launch. Stay tuned for the upcoming CDC Token, set to revolutionize the next phase of IDOs.</p>
				</div>
				<div class="token-view-btn">
					<a href="#" class="border-gradient btn3">View Details</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 token-card-width">
					<div class="token-card-heading mb40">
						<h3 class="text-shadow">Running Tokens</h3>
					</div>
					<SkeletonsTokenCardSkeleton v-if="tokens.length === 0" />
					<div v-else v-for="(token, i) in tokens" :key="token.id" class="token-card-main-area d-flex align-items-center" :class="{ mt40: i !== 0 }">
						<div class="token-card-thumnail-text d-flex">
							<div class="token-card-thumnails position-relative">
								<NuxtImg :src="token.feature_image" :alt="token.full_name" loading="lazy" :placeholder="[445, 370]" class="clip-path w-100" />
								<ul class="d-flex align-items-center">
									<li v-for="(label, index) in token.tags" :key="index">
										<span
											role="button"
											href="#"
											class="token-btn"
											:class="{
												'token-btn-active': index % 2 === 0,
												'token-btn-hover': index % 2 !== 0
											}">
											{{ label }}
										</span>
									</li>
								</ul>
							</div>
							<!-- card middle -->
							<div class="token-card-middle-area">
								<div class="token-card-middle">
									<h4>{{ token.full_name }}</h4>
									<p>{{ token.short_description }}</p>
								</div>
								<div class="token-supporter">
									<h6>Supporter</h6>
									<h4>{{ token.supporter }}</h4>
								</div>
								<div class="token-view-terget">
									<p>Raised</p>
									<div class="token-terget-box position-relative">
										<ul class="d-flex align-items-center justify-content-between">
											<li>{{ token.sell_percentage }} %</li>
											<li>
												{{ token.already_sell }}
												<span>/ {{ token.sell_target }}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- token right box -->
						<div class="token-card-right">
							<div class="social-menu">
								<ul class="d-flex align-items-center">
									<li v-if="token.social_media?.facebook">
										<a :href="token.social_media?.facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li v-if="token.social_media?.twitter">
										<a :href="token.social_media?.twitter" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
									</li>
									<li v-if="token.social_media?.telegram">
										<a :href="token.social_media?.telegram" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a>
									</li>
									<li v-if="token.social_media?.linkedin">
										<a :href="token.social_media?.linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
							<div class="countdown-area">
								<h5>Countdown</h5>
								<vue-countdown :time="token.stage_date_timestamp" v-slot="{ days, hours, minutes, seconds }">
									<ul class="d-flex align-items-center">
										<li>{{ days }}D</li>
										<li><span>:</span></li>
										<li>{{ hours }}</li>
										<li><span>:</span></li>
										<li>{{ minutes }}</li>
										<li><span>:</span></li>
										<li>{{ seconds }}</li>
									</ul>
								</vue-countdown>
							</div>
							<div class="free-btn">
								<nuxt-link :to="{ name: 'token-slug', params: { slug: token.slug } }" class="btn1 primary-btn">
									View Token
									<span class="icon-rotate"></span>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="token-circle1 circle-effect1"></div>
		<div class="token-circle2 circle-effect2"></div>
		<div class="token-circle3 circle-effect3"></div>
	</section>
</template>

<script setup>
	import VueCountdown from '@chenfengyuan/vue-countdown';

	import { useTokenStore } from "~/stores/useTokenStore";
	import { storeToRefs } from "pinia";

	const tokenStore = useTokenStore();
	const { runningTokens: tokens } = storeToRefs(tokenStore);
</script>

<style lang="scss" scoped>
</style>
