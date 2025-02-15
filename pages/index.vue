<template>
	<div>
		<FrontendHomeHero />
		<FrontendHomeChain />
		<FrontendHomeRunningToken />
		<EcmPurchase />
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