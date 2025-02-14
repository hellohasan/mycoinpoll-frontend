<template>
	<div v-show="allImagesLoaded" class="logo-flip-box">
		<div v-for="(image, index) in images" :key="index" class="flip-item">
			<NuxtImg :src="image" alt="logo" loading="lazy" />
		</div>
	</div>
</template>

<script setup>
	const images = [
		'/images/flip-logo/bitcoin.png',
		'/images/flip-logo/solana.png',
		'/images/flip-logo/dogecoin.png',
		'/images/flip-logo/xrp.png',
		'/images/flip-logo/ethereum.png',
		'/images/flip-logo/bancor.png',
		'/images/flip-logo/ecm.png'
	];

	const allImagesLoaded = ref(false);
	onMounted(async () => {
		const imageLoadPromises = images.map(src => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(src);
				img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
				img.src = src;
			});
		});

		try {
			await Promise.all(imageLoadPromises);
			allImagesLoaded.value = true;
			setTimeout(() => {
				$(".logo-flip-box").flipbox({
					autoplay: true,
					autoplayReverse: false,
					autoplayWaitDuration: 1800,
					autoplayPauseOnHover: false,
					animationDuration: 1500,
					animationEasing: "ease",
				});
			}, 0);
		} catch (error) {
			console.error('Error loading images:', error);
		}
	});
</script>

<style scoped>
</style>
