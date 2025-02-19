<template>
	<div class="row align-items-center">
		<div class="col-lg-6">
			<div class="token-details-card-thumnails box-bg">
				<div class="token-card-thumnails position-relative m-0">
					<Skeletor width="540" height="370" />
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="token-details-right-box">
				<div class="token-card-heading">
					<h3 class="text-shadow">
						<Skeletor height="52" />
					</h3>
				</div>
				<div class="token-shear-counter-box d-flex align-items-center">
					<div class="token-view-shear">
						<p class="mb20"><Skeletor width="355" /></p>
						<p class="mb20"><Skeletor width="355" /></p>
						<p class="mb20"><Skeletor width="355" /></p>
					</div>
					<div class="countdown-area">
						<div class="social-menud mb-4">
							<ul class="d-flex align-items-center">
								<li v-for="i in 2" :key="i" style="background: none">
									<Skeletor circle size="44" />
								</li>
							</ul>
						</div>
						<h5><Skeletor /></h5>
						<ul class="d-flex align-items-center">
							<li><Skeletor size="52" /></li>
							<li><span>:</span></li>
							<li><Skeletor size="52" /></li>
							<li><span>:</span></li>
							<li><Skeletor size="52" /></li>
							<li><span>:</span></li>
							<li><Skeletor size="52" /></li>
						</ul>
					</div>
				</div>
				<div class="token-details-terget-area d-flex align-items-center justify-content-between">
					<ul class="d-flex align-items-center mt-20">
						<li>
							<p><Skeletor width="100" height="30" /></p>
							<span><Skeletor width="100" height="20" /></span>
						</li>
						<li>
							<p><Skeletor width="100" height="30" /></p>
							<span><Skeletor width="100" height="20" /></span>
						</li>
					</ul>
					<ul class="d-flex align-items-center text-right mt-20">
						<li>
							<p class="text-end"><Skeletor width="100" height="30" /></p>
							<span><Skeletor width="100" height="20" /></span>
						</li>
					</ul>
				</div>
				<div class="token-details-btn-group mt40">
					<ul class="d-flex align-items-center">
						<li class="w-100 w-md-50">
							<Skeletor width="303" height="65" />
						</li>
						<li class="w-md-50 w-100">
							<Skeletor width="303" height="65" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor';
</script>

<style>
</style>