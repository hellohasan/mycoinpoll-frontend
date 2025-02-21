<template>
	<div>
		<div class="ellipse ellipse1"></div>
		<div class="ellipse ellipse2"></div>
		<div class="ellipse ellipse3"></div>

		<div class="dashboard-main-area">
			<div class="dashboard-area d-flex align-items-start">
				<BackendPartialsSidebar />

				<div class="dashboard-right">
					<BackendPartialsHeader />
					<slot></slot>
				</div>
			</div>
			<div class="copyright-box d-flex align-items-center justify-content-center">
				<p>
					&copy;
					<a href="#" class="gradient-color">2024 MyCoinPoll.com All Rights Reserved.</a>
				</p>
				<p class="gradient-color">V3.0.6</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>