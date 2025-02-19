<template>
	<div>
		<div class="coin-hero-area ptb50 position">
			<div class="frequently-circle"></div>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="token-details-card-thumnails box-bg">
							<div class="token-card-thumnails position-relative m-0">
								<Skeletor v-if="!token" width="540" height="370" />
								<NuxtImg v-else :src="token.feature_image" :alt="token.full_name" loading="lazy" width="540" height="370" format="webp" :placeholder="[445, 370]" class="w-100 object-fit-cover" />
								<ul class="d-flex align-items-center">
									<template v-if="!token">
										<Skeletor v-for="i in 2" pill :key="i" width="113" height="38" />
									</template>
									<template v-else>
										<li v-for="(label, index) in token.tags" :key="index">
											<a
												href="#"
												class="token-btn"
												:class="{
													'token-btn-active': index % 2 === 0,
													'token-btn-hover': index % 2 !== 0
												}">
												{{ label }}
											</a>
										</li>
									</template>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="token-details-right-box">
							<div class="token-card-heading">
								<template v-if="!token">
									<Skeletor height="52" />
								</template>
								<template v-else>
									<h3 class="text-shadow">{{ token.name }}</h3>
								</template>
							</div>
							<div class="token-shear-counter-box d-flex align-items-center">
								<div class="token-view-shear">
									<template v-if="!token">
										<p class="mb-10"><Skeletor width="350" /></p>
										<p class="mb-10"><Skeletor width="350" /></p>
										<p class="mb-10"><Skeletor width="350" /></p>
									</template>
									<template v-else>
										<p class="mb20">{{ token.short_description }}</p>
									</template>
								</div>
								<div class="countdown-area">
									<div class="social-menu mb-4">
										<template v-if="!token">
											<ul class="d-flex align-items-center">
												<li v-for="i in 2" :key="i" style="background: none">
													<Skeletor circle size="44" />
												</li>
											</ul>
										</template>
										<template v-else>
											<ul class="d-flex align-items-center">
												<li v-if="token.social_media?.facebook" style="background: none">
													<a :href="token.social_media?.facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
												</li>
												<li v-if="token.social_media?.twitter" style="background: none">
													<a :href="token.social_media?.twitter" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
												</li>
												<li v-if="token.social_media?.telegram" style="background: none">
													<a :href="token.social_media?.telegram" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a>
												</li>
												<li v-if="token.social_media?.linkedin" style="background: none">
													<a :href="token.social_media?.linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
												</li>
											</ul>
										</template>
									</div>

									<template v-if="!token">
										<h5><Skeletor /></h5>
										<ul class="d-flex align-items-center">
											<li><Skeletor size="52" /></li>
											<li><span>:</span></li>
											<li><Skeletor size="52" /></li>
											<li><span>:</span></li>
											<li><Skeletor size="52" /></li>
											<li><span>:</span></li>
											<li><Skeletor size="52" /></li>
										</ul>
									</template>
									<template v-else>
										<h5>Countdown</h5>
										<ClientOnly>
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
										</ClientOnly>
									</template>
								</div>
							</div>

							<div class="token-details-terget-area d-flex align-items-center justify-content-between">
								<template v-if="!token">
									<ul class="d-flex align-items-center mt-20">
										<li>
											<p><Skeletor width="100" height="30" /></p>
											<span><Skeletor width="100" height="20" /></span>
										</li>
										<li>
											<p><Skeletor width="100" height="30" /></p>
											<span><Skeletor width="100" height="20" /></span>
										</li>
									</ul>
									<ul class="d-flex align-items-center text-right mt-20">
										<li>
											<p class="text-end"><Skeletor width="100" height="30" /></p>
											<span><Skeletor width="100" height="20" /></span>
										</li>
									</ul>
								</template>
								<template v-else>
									<ul class="d-flex align-items-center mt-20">
										<li>
											<p>Supporter</p>
											<span>{{ token.supporter }}</span>
										</li>
										<li>
											<p>Progress</p>
											<span>{{ token.sell_percentage }}%</span>
										</li>
									</ul>
									<ul class="d-flex align-items-center text-right mt-20">
										<li>
											<p class="text-end">Raised</p>
											<span>{{ token.already_sell }}/{{ token.sell_target }}</span>
										</li>
									</ul>
								</template>
							</div>

							<div class="token-details-btn-group mt40">
								<ul class="d-flex align-items-center">
									<template v-if="!token">
										<li class="w-100 w-md-50">
											<Skeletor width="303" height="65" />
										</li>
										<li class="w-md-50 w-100">
											<Skeletor width="303" height="65" />
										</li>
									</template>
									<template v-else>
										<li class="w-100 w-md-50">
											<a href="#" role="button" @click.prevent="downloadWhitePaper" class="primary-btn btn4 text-center">
												<h4>White Paper</h4>
											</a>
										</li>
										<li class="w-md-50 w-100">
											<a href="https://ecmcoin.com" target="_blank" class="primary-btn btn4 text-center">
												<h4>Official Website</h4>
											</a>
										</li>
									</template>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	import VueCountdown from '@chenfengyuan/vue-countdown';

	const tokenStore = useTokenStore();
	const { token, loading } = storeToRefs(tokenStore);

	const downloadWhitePaper = () => {
		let fileUrl = '/pdf/ECM-Whitepaper.pdf';
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = fileUrl.split('/').pop();
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

</script>

<style>
</style>