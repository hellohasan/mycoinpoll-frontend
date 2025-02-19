<template>
	<div>
		<div class="header-cover-area">
			<section class="hero-section">
				<div class="metaverse-container">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="d-flex">
									<div class="hero-area-text index-hero-text">
										<h3>Welcome to Androverse: The Future of Digital Ownership</h3>
										<p>Explore a Vibrant Metaverse Where You Can Buy Land, Build Businesses, and Unlock Endless Opportunities! Trade NFT Properties with ECM Tokens and Connect with a Thriving Community of Innovators and Entrepreneurs!</p>
										<ul class="d-flex align-items-center">
											<li>
												<nuxt-link :to="{ name: 'index' }" class="btn1 primary-btn">
													Go Back to Home
													<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
												</nuxt-link>
											</li>
										</ul>
									</div>
									<div class="coinpool-hero-rights metaverse-thumnails">
										<nuxt-img src="/images/thumbnail/metavers-world.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<FrontendHomeChain />
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Androverse'
	});
</script>

<style lang="scss" scoped>
</style>