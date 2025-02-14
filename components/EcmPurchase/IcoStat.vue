<template>
	<div class="ecm-right-header">
		<ul class="d-flex align-items-center justify-content-between flex-wrap">
			<template v-if="stageData.index === null">
				<li>
					<Skeletor width="215" height="30" pill />
				</li>
				<li>
					<Skeletor width="180" height="30" pill />
				</li>
			</template>
			<template v-else>
				<li>Stage {{ stageData.index }}: {{ stageData.tokensSold }} ECM</li>
				<li>Max: {{ stageData.target }} ECM</li>
			</template>
		</ul>
		<div class="ico-progress">
			<Skeletor v-if="stageData.index === null" height="30" pill />
			<div v-else class="progress">
				<div class="progress-bar align-items-end" role="progressbar" :style="{ width: stageData.percentageSold + '%' }" :aria-valuenow="stageData.percentageSold" aria-valuemin="0" aria-valuemax="100">
					<span>{{ stageData.percentageSold }}%</span>
				</div>
			</div>
		</div>
		<div class="line-divider2 w-100 mt-20 mb20"></div>
		<EcmPurchaseReferral></EcmPurchaseReferral>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
	const stageDataStore = useStageDataStore();
	const { currentStage: stageData } = storeToRefs(stageDataStore);

</script>

<style>
</style>