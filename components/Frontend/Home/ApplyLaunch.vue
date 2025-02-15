<template>
	<section class="subscribe-section pt120">
		<div class="container">
			<div class="row subscribe-bg">
				<div class="col-lg-12">
					<div class="subscribe-text">
						<div class="section-heading text-center">
							<h3 class="text-shadow">{{ title }}</h3>
							<p>{{ description }}</p>
						</div>
						<div class="token-view-more-btn mt40">
							<nuxt-link :to="{ name: 'apply-launch' }" class="btn1 primary-btn">
								{{ buttonText }}
								<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const title = ref('Launch Your Token on MyCoinPoll!');
	const description = ref('Empower Your Project with Our Supportive Ecosystem – Apply Now to Gain Visibility, Funding, and Access to a Vibrant Community of Investors Eager to Support Innovative Crypto Ventures! Unlock the Potential of Your Idea and Take the Next Step Towards Success!');
	const buttonText = ref('Apply for Launch');
</script>

<style scoped>
	/* You can add any component-specific styles here if needed */
</style>
