<template>
	<div>
		<div class="ellipse ellipse1"></div>
		<div class="ellipse ellipse2"></div>
		<div class="ellipse ellipse3"></div>

		<div class="dashboard-main-area">
			<ClientOnly>
				<div class="dashboard-area d-flex align-items-start">
					<BackendPartialsSidebar />

					<div class="dashboard-right">
						<BackendPartialsHeader />
						<slot></slot>
					</div>
				</div>
			</ClientOnly>
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

<script setup>
	import "simplebar/dist/simplebar.min.css";
	import "simplebar";
</script>

<style>
	.border-image {
		border: 3px solid;
		border-image: linear-gradient(90deg, rgba(39, 123, 245, 0.3) 0%, rgba(28, 214, 145, 0.3) 100.01%) 1;
	}
	.border-image-gradient {
		border: 3px solid;
		border-radius: 10px;
		background-image: linear-gradient(#040c16, #040c16), linear-gradient(90deg, rgba(39, 123, 245, 0.3) 0%, rgba(28, 214, 145, 0.3) 100.01%) 1;
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
	.swal2-popup,
	.swal2-toast {
		padding: 20px;
		background-color: #040c16;
		border: 1.5px solid #ffffff1a;
		border-radius: 10px;
	}
</style>