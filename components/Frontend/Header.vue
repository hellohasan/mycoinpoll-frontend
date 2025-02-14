<template>
	<header class="header-area-bg-color">
		<div class="container">
			<nav class="navbar navbar-expand-xl menu-bg clip-path">
				<div class="container-fluid">
					<NuxtLink class="navbar-brand" to="/">
						<NuxtImg src="/images/logo.png" preloading="lazy" :placeholder="[220, 32]" alt="logo" />
					</NuxtLink>
					<button class="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"><i class="fa fa-bars" aria-hidden="true"></i></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarText">
						<ul class="navbar-nav mx-auto" id="outside-click">
							<li class="nav-item">
								<nuxt-link class="nav-link" aria-current="page" to="/">Home</nuxt-link>
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link" to="/androverse">Androverse</nuxt-link>
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link" to="/learn">Learn & Earn</nuxt-link>
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link" to="/news">News</nuxt-link>
							</li>
						</ul>
						<div class="header-right d-flex align-items-center">
							<div class="button-wrapper d-flex align-items-center border-gradient">
								<a href="#" role="button" @click.prevent="downloadAffiliate">
									Affiliate Program
									<span><NuxtImg src="images/icon/affiliate.png" loading="lazy" alt="icon" /></span>
								</a>
							</div>

							<div class="button-wrapper d-flex align-items-center border-gradient">
								<nuxt-link :to="authenticated ? '/dashboard' : '/auth/login'" role="button">
									{{ authenticated ? 'Dashboard' : 'Connect Wallet' }}
									<span><nuxt-img src="/images/icon/wallet.png" alt="icon" /></span>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
	const authStore = useAuthStore();
	const { authenticated } = storeToRefs(authStore);

	const downloadAffiliate = () => {
		let fileUrl = '/pdf/MyCoinPoll-Affiliate-Program.pdf';
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = fileUrl.split('/').pop();
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<style lang="scss" scoped>
</style>