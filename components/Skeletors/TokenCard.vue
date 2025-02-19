<template>
	<div class="token-card-main-area d-flex align-items-center">
		<div class="token-card-thumnail-text d-flex">
			<div class="token-card-thumnails position-relative">
				<Skeletor width="445" height="370"></Skeletor>
				<ul class="d-flex align-items-center">
					<li v-for="i in 2" :key="i">
						<span role="button" href="#" class="token-btn">
							<Skeletor width="113" height="38" pill></Skeletor>
						</span>
					</li>
				</ul>
			</div>
			<div class="token-card-middle-area">
				<div class="token-card-middle">
					<h4><Skeletor width="444" height="38" pill></Skeletor></h4>
					<p><Skeletor v-for="i in 3" :key="i" /></p>
				</div>
				<div class="token-supporter">
					<h6><Skeletor width="80" height="25" pill /></h6>
					<h4><Skeletor width="60" /></h4>
				</div>
				<div class="token-view-terget">
					<p><Skeletor width="80" height="25" pill /></p>
					<div class="token-terget-box position-relative">
						<ul class="d-flex align-items-center justify-content-between">
							<li><Skeletor width="60" /></li>
							<li>
								<Skeletor width="100" />
								<span><Skeletor width="100" /></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="token-card-right">
				<div class="social-menu">
					<ul class="d-flex align-items-center">
						<li v-for="i in 2" :key="i">
							<Skeletor circle size="44" />
						</li>
					</ul>
				</div>
				<div class="countdown-area">
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
				<div class="free-btn">
					<Skeletor width="186" height="54" pill />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { Skeletor } from 'vue-skeletor';

</script>
<style scoped>
</style>
