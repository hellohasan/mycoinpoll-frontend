<template>
	<div class="dashboard-body mt40">
		<section class="ecm-section dashboard-box ico-section">
			<EcmPurchase />
		</section>
	</div>
</template>

<script  setup>
	definePageMeta({
		title: 'ECM ICO',
		layout: 'backend',
		authenticated: true
	});
</script>

<style>
</style>