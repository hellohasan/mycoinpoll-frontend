<template>
	<div>
		<section class="card-listed-section position-relative">
			<div class="card-listed circle-effect1"></div>
			<div class="card-listed2 circle-effect2"></div>
			<div class="card-listed3 circle-effect3"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<!-- start card -->
						<div class="full-w-card ptb80 plr40 client-review-bg mobile-box-bg">
							<div class="upgrade-box border-bottom-c pb30">
								<div class="ido-card-header d-flex align-items-center">
									<div class="ido-card-logo">
										<nuxt-img v-if="token" :src="token.logo" loading="lazy" :placeholder="[95, 95]" format="webp" width="95" height="95" :alt="token.symbol" />
										<Skeletor v-else circle size="80" />
									</div>
									<div class="ido-card-header-text">
										<template v-if="token">
											<h4>{{ token.symbol }}</h4>
											<p>{{ token.full_name }}</p>
										</template>
										<template v-else>
											<Skeletor width="220" height="35" as="h4" />
											<Skeletor width="220" height="20" as="p" />
										</template>
									</div>
								</div>
								<div class="project-introduction mt40">
									<div class="common-heading-2">
										<template v-if="token">
											<h4>Project Introduction</h4>
											<p v-html="token.description" class="w-100"></p>
										</template>
										<template v-else>
											<Skeletor width="25%" height="45" as="h4" />
											<Skeletor v-for="i in 4" :key="i" as="p" class="mb-2" />
										</template>
									</div>
								</div>
							</div>
							<div class="upgrade-box">
								<div class="ido-card-header d-flex align-items-center">
									<div class="ido-card-logo">
										<nuxt-img v-if="token" :src="token.company_logo" class="img-rounded" loading="lazy" :placeholder="[95, 95]" format="webp" width="95" height="95" :alt="token.symbol" />
										<Skeletor v-else circle size="80" />
									</div>
									<div class="ido-card-header-text">
										<template v-if="token">
											<h4>{{ token.token_company }}</h4>
											<p>Founder</p>
										</template>
										<template v-else>
											<Skeletor width="220" height="35" as="h4" />
											<Skeletor width="220" height="20" as="p" />
										</template>
									</div>
								</div>
								<div class="project-introduction mt40">
									<div class="common-heading-2">
										<template v-if="token">
											<p v-html="token.company_details" class="w-100"></p>
										</template>
										<template v-else>
											<Skeletor v-for="i in 4" :key="i" as="p" class="mb-2" />
										</template>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="token-circle1"></div>
			<div class="token-circle2"></div>
			<div class="token-circle3"></div>
		</section>

		<section class="token-rollout-section position-relative mt60">
			<div class="token-rollout1 circle-effect2"></div>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="token-rollout-left-side">
							<div class="section-heading">
								<h3 class="text-shadow">Strategic Token Rollout</h3>
								<p>Our strategic token distribution ensures a balanced, fair launch, maximizing growth and long-term community involvement.</p>
							</div>
							<div v-if="token?.distributions" class="token-roll-controls mobile-box-bg mt40">
								<div v-for="(distribution, i) in token.distributions" :key="i" class="progress-item mb20">
									<div class="token-roll-label progress-label">
										<ul class="d-flex align-items-center justify-content-between">
											<li>{{ distribution.title }}</li>
											<li>{{ distribution.value }}%</li>
										</ul>
									</div>
									<div class="progress">
										<div class="progress-bar align-items-end" role="progressbar" :style="{ width: distribution.value + '%', backgroundColor: getColor(i) }" :aria-valuenow="distribution.value" aria-valuemin="0" aria-valuemax="100">
											<span>{{ distribution.value }}%</span>
										</div>
									</div>
								</div>
							</div>
							<div v-else class="token-roll-controls mobile-box-bg mt40">
								<Skeletor width="100%" height="78" class="mb-3" />
								<Skeletor width="100%" height="78" class="mb-3" />
								<Skeletor width="100%" height="78" class="mb-3" />
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="token-rollout-right-side d-flex justify-content-end position-relative">
							<div v-if="token" class="chart-center-boxf">
								<nuxt-img :src="token.distribution_image" :width="548" :height="517" sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw" fit="cover" loading="lazy" placeholder class="w-full h-auto max-w-full" quality="80" format="webp" alt="Token distribution visualization" />
							</div>
							<div v-else class="chart-center-boxf">
								<Skeletor width="548" height="517" />
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
	const tokenStore = useTokenStore();
	const { token } = storeToRefs(tokenStore);

	const getColor = (index) => {
		const colors = ['#1cd691', '#dfc730', '#359846', '#b92124', '#2682ee']
		return colors[index % colors.length]
	}
</script>

<style>
</style>