<template>
	<div class="dashboard-left position-relative" data-simplebar style="height: calc(100svh - 60px)">
		<div class="logo mb40">
			<nuxt-link :to="{ name: 'index' }"><img src="/images/logo.png" alt="" class="w-100" /></nuxt-link>
		</div>
		<div class="logo2 mb40">
			<nuxt-link :to="{ name: 'index' }"><img src="/images/dashboard/icon/small-logo.png" alt="logo" class="w-100" /></nuxt-link>
		</div>
		<div class="dashboard-left-menu">
			<ul>
				<li>
					<nuxt-link :to="{ name: 'dashboard' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/dashboard.png" alt="icon" />
						<span class="left-menu-text">Dashboard</span>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'dashboard-transactions' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/transactions.png" alt="icon" />
						<span class="left-menu-text">Transactions</span>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'dashboard-ico' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/ico.png" alt="icon" />
						<span class="left-menu-text">ECM ICO</span>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'dashboard-staking' }" class="d-flex align-items-center justify-content-between text-decoration-none">
						<div class="d-flex align-items-center">
							<nuxt-img src="/images/dashboard/icon/staking.png" alt="icon" class="me-2" width="20" height="20" />
							<span class="left-menu-text">ECM Staking</span>
						</div>
						<IconsFire class="ms-auto text-danger fire-icon" />
					</nuxt-link>
				</li>
				<li>
					<nuxt-link :to="{ name: 'dashboard-referrals' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/referral.png" alt="icon" />
						<span class="left-menu-text">Referral User</span>
					</nuxt-link>
				</li>

				<li v-if="hasRole(['Super Admin'])">
					<nuxt-link :to="{ name: 'dashboard-users' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/users.svg" alt="icon" />
						<span class="left-menu-text">Manage Users</span>
					</nuxt-link>
				</li>
				<li v-if="hasRole(['Super Admin'])">
					<nuxt-link :to="{ name: 'dashboard-manage-tokens' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/token.svg" alt="icon" />
						<span class="left-menu-text">Manage Token</span>
					</nuxt-link>
				</li>
				<li v-if="hasRole(['Super Admin'])">
					<nuxt-link :to="{ name: 'dashboard-manage-news' }" active-class="menu-active-bg">
						<img src="/images/dashboard/icon/news.svg" alt="icon" />
						<span class="left-menu-text">Manage News</span>
					</nuxt-link>
				</li>
				<!-- <li v-role="['Super Admin']">
					<nuxt-link :to="{ name: 'manage-blog.index' }" active-class="menu-active-bg">
						<img src="/assets/images/dashboard/icon/news.png" alt="icon" />
						<span class="left-menu-text">Manage Blog</span>
					</nuxt-link>
				</li>
				<li v-role="['Super Admin']">
					<nuxt-link :to="{ name: 'manage-learn.index' }" active-class="menu-active-bg">
						<img src="/assets/images/dashboard/icon/learn.svg" alt="icon" />
						<span class="left-menu-text">Manage Learn</span>
					</nuxt-link>
				</li>-->

				<li>
					<nuxt-link :to="{ name: 'dashboard-profile' }" active-class="menu-active-bg">
						<nuxt-img src="/images/dashboard/icon/profile.png" alt="icon" />
						<span class="left-menu-text">Profile</span>
					</nuxt-link>
				</li>
				<li>
					<a href="#" role="button" @click.prevent="logout()">
						<nuxt-img src="/images/dashboard/icon/logout.png" alt="icon" />
						<span class="left-menu-text">Logout</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	const { hasRole } = useAuthAccess();
	const { logout } = useAuthHelper();
</script>

<style scoped>
	.fire-icon {
		animation: fire-pulse 1.5s ease-in-out infinite;
		color: #ff4d4d;
	}

	@keyframes fire-pulse {
		0% {
			transform: scale(1);
			filter: brightness(100%);
		}
		50% {
			transform: scale(1.1);
			filter: brightness(120%);
		}
		100% {
			transform: scale(1);
			filter: brightness(100%);
		}
	}
</style>