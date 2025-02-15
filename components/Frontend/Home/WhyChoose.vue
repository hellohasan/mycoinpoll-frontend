<template>
	<section class="why-choose-section position-relative">
		<div class="chain-circle2 circle-effect4"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-heading multi-chain-power-heading">
						<h3 class="text-shadow">
							<Skeletor v-if="!allImagesLoaded" height="55" width="350" />
							<template v-else>Why Choose Us?</template>
						</h3>
					</div>
				</div>
			</div>
			<div v-if="!allImagesLoaded" class="row mt40 gy-4">
				<Skeletor as="div" class="col-md-4 ms-2" width="306" height="335" />
				<Skeletor as="div" class="col-md-4 ms-3" width="306" height="335" />
				<Skeletor as="div" class="col-md-4 ms-3" width="306" height="335" />
				<Skeletor as="div" class="col-md-4 ms-3" width="306" height="335" />
			</div>
			<div v-else class="row mt40 gy-4">
				<div v-for="card in cards" :key="card.title" class="col-xl-3 col-lg-6">
					<div class="why-choose-card common-card text-center">
						<nuxt-img :src="card.icon" :placeholder="75" loading="lazy" format="webp" :alt="card.title" />
						<h4>{{ card.title }}</h4>
						<p>{{ card.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	const allImagesLoaded = ref(false);

	const cards = ref([
		{
			icon: '/images/icon/Vibrant-Community.png',
			title: 'Vibrant Community',
			description: 'Join a growing community of 10,000+ active investors and crypto enthusiasts.'
		},
		{
			icon: '/images/icon/Innovative-Roadmap.png',
			title: 'Innovative Roadmap',
			description: 'Be part of a platform with a strong vision, including our upcoming ECM Meta World and future blockchain developments.'
		},
		{
			icon: '/images/icon/Token-Distribution.png',
			title: 'Token Distribution',
			description: 'Your token will immediately be distributed to a large user base that hold your token.'
		},
		{
			icon: '/images/icon/Exclusive-Access.png',
			title: 'Exclusive Access',
			description: 'Gain access to early investment opportunities and special projects through ECM Token.'
		}
	]);

	onMounted(async () => {
		const imageLoadPromises = cards.value.map(card => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(card.icon);
				img.onerror = () => reject(new Error(`Failed to load image: ${card.icon}`));
				img.src = card.icon;
			});
		});
		await Promise.all(imageLoadPromises);
		allImagesLoaded.value = true;
	});
</script>
