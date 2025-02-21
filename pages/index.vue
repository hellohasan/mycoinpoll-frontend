<template>
	<div>
		<FrontendHomeHero />
		<FrontendHomeChain />
		<FrontendHomeRunningToken />

		<section class="ecm-section position-relative ptb120">
			<div class="container">
				<EcmPurchase />
			</div>
		</section>

		<FrontendHomeUpcomingToken />
		<FrontendHomeWhyChoose />
		<FrontendHomeMultiChainPower />
		<FrontendHomeFaq />
		<FrontendHomeBlog />
		<FrontendHomeApplyLaunch />
	</div>
</template>

<script setup>
	import { FrontendHomeApplyLaunch } from '#components';


	const tokenStore = useTokenStore();
	onMounted(async () => {
		await tokenStore.getTokens();
	});
</script>

<style lang="scss" scoped>
</style>