<template>
	<div class="user-coin-balance d-flex align-items-center">
		<div class="coin-balance-logo text-center">
			<img :src="token.logo" alt="icon" />
		</div>
		<div class="coin-balance-info">
			<h6>{{ token.name }}</h6>
			<h6 v-if="token.balance !== null">
				<span>{{ formattedBalance }}</span>
				<sup>{{ token.symbol }}</sup>
			</h6>
			<p v-else>Loading balance...</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		tokenId: {
			type: Number,
			required: true
		}
	});

	const userTokenStore = useUserTokenStore();
	const token = userTokenStore.getTokenById(props.tokenId);

	const formattedBalance = computed(() => {
		if (token.balance === null) return '';
		return (Number(token.balance) / Math.pow(10, 18)).toFixed(4);
	});
/* 
		onMounted(async () => {
			await userTokenStore.fetchTokenBalance(props.tokenId);
		}); */

</script>

<style>
</style>