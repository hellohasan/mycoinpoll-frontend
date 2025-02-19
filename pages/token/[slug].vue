<template>
	<div>
		<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<div class="breadcrumbs-area mt-20 breadcrumbs-mobile-padding">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="breadcrumbs">
								<ul class="d-flex align-items-center flex-wrap">
									<li><NuxtLink to="/">Home</NuxtLink></li>
									<li>
										<a href="#"><i class="fa-solid fa-angle-right"></i></a>
									</li>
									<li><a href="#" class="active">Token Details</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FrontendTokenStat />
		</div>
		<EcmPurchase />
		<FrontendTokenInfo />
		<ClientOnly>
			<FrontendTokenRoadmap />
		</ClientOnly>
	</div>
</template>

<script  setup>
	const route = useRoute();

	const tokenStore = useTokenStore();
	onMounted(async () => {
		await tokenStore.getSingleToken(route.params.slug);
	});
</script>

<style>
</style>