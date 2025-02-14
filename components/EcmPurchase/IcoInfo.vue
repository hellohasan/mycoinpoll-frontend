<template>
	<div class="ecm-left-side">
		<div class="section-heading">
			<h3 class="text-shadow">Unlocking eCommerce Potential with Digital Coin Solutions</h3>
			<p>Explore the ECM Cloud for Seamless eCommerce Integration, Unlocking Innovative Tools to Elevate your Metaverse Experience.</p>
		</div>
		<div class="ecm-address mt40">
			<h5>ECM Contact Address</h5>
			<Skeletor v-if="isLoading" class="bordered" height="30px" pill />
			<p v-else>{{ ecmContactAddress }}</p>
		</div>
		<ul class="d-flex align-items-center mt40 g30 flex-wrap">
			<li><a role="button" @click.prevent="downloadPDF('whitepaper')" class="btn1 primary-btn">White Paper</a></li>
			<li><a href="https://ecmcoin.com" target="_blank" class="btn2 primary-btn">Official Website</a></li>
		</ul>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';

	const ecmContactAddress = ref('');
	const isLoading = ref(true);
	const config = useRuntimeConfig();

	onMounted(async () => {
		const response = await $fetch(`${config.public.apiBase}/get-ecm-info`);
		ecmContactAddress.value = response.contract_address;
		isLoading.value = false;
	});

	const getEcm = async () => {

	}

	const downloadPDF = (type) => {
		let fileUrl;
		if (type === 'whitepaper') {
			fileUrl = '/pdf/ECM-Whitepaper.pdf';
		} else if (type === 'affiliate') {
			fileUrl = '/pdf/MyCoinPoll-Affiliate-Program.pdf';
		}
		// create a link element and click it to trigger the download
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = fileUrl.split('/').pop();
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<style>
</style>