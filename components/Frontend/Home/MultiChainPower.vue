<template>
	<section class="multi-chain-power-section ptb120 position-relative">
		<div class="chain-circle2 circle-effect4 chain-power-circle2"></div>
		<div class="frequently-circle2 line-shap-animation"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-heading text-center multi-chain-power-heading">
						<h3 class="text-shadow">Unlock the Future with Key Features</h3>
						<p>Explore the powerful tools and functionalities designed to enhance your blockchain journey. From multi-chain compatibility to secure staking, our platform is built to support seamless innovation and maximize your potential.</p>
					</div>
				</div>
			</div>
			<div v-if="!allImagesLoaded" class="row mt80 gy-4">
				<Skeletor v-for="i in 6" :key="i" class="ms-2" width="426" height="206"></Skeletor>
			</div>
			<div v-else class="row mt80 gy-4">
				<div v-for="chain in chains" :key="chain.name" class="col-xl-4 col-lg-6">
					<div class="multi-chain-card d-flex align-items-center">
						<div class="multi-chain-card-logo">
							<nuxt-img :src="chain.icon" loading="lazy" placeholder="" :alt="chain.name" />
						</div>
						<div class="multi-chain-card-text">
							<h4>{{ chain.name }}</h4>
							<p>{{ chain.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="chain-circle circle-effect5"></div>
	</section>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	const allImagesLoaded = ref(false);
	const chains = ref([
		{
			name: 'Crypto Launchpad',
			icon: '/images/icon/Crypto-Launchpad.png',
			description: 'Discover and support new cryptocurrency projects with our secure, innovative, and user-friendly platform.'
		},
		{
			name: 'ECM Token',
			icon: '/images/icon/ECM-Token.png',
			description: 'Powering the ecosystem, ECM Token enhances the experience, offering exclusive access to investments.'
		},
		{
			name: 'Community Voting',
			icon: '/images/icon/Community-Voting.png',
			description: 'Our platform integrates community voting to allow users to participate in deciding which projects receive funding.'
		},
		{
			name: 'Educational Resources',
			icon: '/images/icon/Educational-Resources.png',
			description: 'Learn about blockchain, crypto, and launchpads with our comprehensive educational content.'
		},
		{
			name: 'Metaverse Integration',
			icon: '/images/icon/Metaverse-Integration.png',
			description: 'Access Androverse, our innovative metaverse, where users can buy virtual land and enjoy exclusive experiences with ECM Tokens.'
		},
		{
			name: 'Project Launches',
			icon: '/images/icon/Project-Launches.png',
			description: 'Gain early access to exclusive crypto launches and opportunities for ECM Token holders and MyCoinPoll community members.'
		}
	]);

	onMounted(async () => {
		const imageLoadPromises = chains.value.map(chain => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(chain.icon);
				img.onerror = () => reject(new Error(`Failed to load image: ${chain.icon}`));
				img.src = chain.icon;
			});
		});
		await Promise.all(imageLoadPromises);
		allImagesLoaded.value = true;
	});
</script>

<style scoped>
</style>
