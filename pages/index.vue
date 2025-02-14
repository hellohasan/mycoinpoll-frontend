<template>
	<div>
		<FrontendHomeHero />
		<FrontendHomeChain />
		<FrontendHomeRunningToken />
		<EcmPurchase />
	</div>
</template>

<script setup>

	const tokenStore = useTokenStore();
	onMounted(async () => {
		await tokenStore.getTokens();
	});
</script>

<style lang="scss" scoped>
</style>