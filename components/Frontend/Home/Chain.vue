<template>
	<section class="coin-logo-section">
		<div class="container">
			<div class="coin-logo-area">
				<ul class="d-flex align-items-center flex-wrap">
					<li v-for="(logo, index) in logos" :key="index">
						<nuxt-img :src="logo.src" loading="lazy" :placeholder="[170, 45]" format="webp" width="170" height="45" :alt="logo.alt" />
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>

	const logos = [
		{ src: "images/logo/bitcoin.png", alt: "Bitcoin" },
		{ src: "images/logo/etherreum.png", alt: "Ethereum" },
		{ src: "images/logo/binance.png", alt: "Binance" },
		{ src: "images/logo/polygon.png", alt: "Polygon" },
		{ src: "images/logo/crypto.png", alt: "Crypto" }
	];
</script>

<style lang="scss" scoped>
</style>
