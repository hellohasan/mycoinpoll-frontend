<template>
	<section class="ecm-section position-relative ptb120">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-6">
					<EcmPurchaseIcoInfo />
				</div>
				<div class="col-xl-6">
					<div class="ecm-right-box">
						<EcmPurchaseIcoStat :isLoading="isLoading" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const isLoading = ref(true);
	const disableBtn = ref(false);

	const stageDataStore = useStageDataStore();

	onMounted(async () => {
		await loadStageData();
	});

	const loadStageData = async (forceLoad = false) => {
		isLoading.value = true;
		try {
			await stageDataStore.fetchStageData(forceLoad);
		} catch (error) {
			//toast.error('Failed to load stage data. Please try again.');
		} finally {
			isLoading.value = false;
		}
	};
</script>

<style>
</style>