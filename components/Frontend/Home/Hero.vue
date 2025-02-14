<template>
	<div class="header-cover-area">
		<section class="hero-section">
			<div class="hero-container">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="hero-section-outter d-flex">
								<div class="hero-area-text index-hero-text">
									<h3>Blockchain’s Ultimate Crypto Launchpad for Innovation</h3>
									<p>Unlock early access to the next wave of crypto innovations. Stake, participate, and launch in IDOs across top blockchains with fortified security and transparency. Experience multi-chain flexibility on a platform trusted by projects worldwide.</p>
									<ul class="d-flex align-items-center">
										<li>
											<NuxtLink to="/apply-launch" class="btn1 primary-btn">
												Apply for Listing
												<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
											</NuxtLink>
										</li>
										<li>
											<a href="#" @click.prevent="modal.open()" class="btn2 primary-btn">
												{{ wallet.isConnected ? formatAddress(wallet.address) : 'Connect Wallet' }}
											</a>
										</li>
									</ul>
								</div>
								<div class="coinpool-hero-rights">
									<div class="logo-flip-box">
										<FrontendHomeFlipbox />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { useAppKitAccount } from '@reown/appkit/vue';
	const wallet = useAppKitAccount();
	const { modal } = useWeb3();
	function formatAddress(myAddress) {
		if (typeof myAddress !== 'string' || !myAddress) {
			return '';
		}
		return myAddress.slice(0, 6) + '......' + myAddress.slice(-6);
	}
</script>

<style lang="scss" scoped>
</style>
