<template>
	<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
		<div class="login-form ptb80">
			<div class="modal-custom-width page-modal-width">
				<div class="modal-content custom-modal">
					<form @submit.prevent="handelForm">
						<div class="modal-header-area d-flex align-items-center justify-content-between">
							<h4 class="text-shadow">Log In</h4>
						</div>
						<div class="modal-body-inner">
							<div class="row gy-3">
								<div class="form-group col-md-12">
									<label for="username">Email or Username</label>
									<div class="input bg-border-input">
										<input v-model="form.username" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('username') }" id="username" placeholder="Enter email or username or Unique ID" />
									</div>
									<FormGroupHasError :form="form" field="username" />
								</div>
								<div class="form-group col-md-12">
									<label for="password">Password</label>
									<div class="input bg-border-input">
										<input v-model="form.password" type="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" id="password" placeholder="Enter valid password" />
									</div>
									<FormGroupHasError :form="form" field="password" />
								</div>
								<div class="form-group col-md-12 d-flex align-items-center justify-content-between flex-wrap">
									<nuxt-link to="/auth/forgot-password" class="gradient-color">Forgot Password?</nuxt-link>
								</div>

								<div class="form-group col-md-12">
									<button type="submit" :disabled="form.busy" class="btn1 primary-btn subscribe-btn w-100">
										<template v-if="form.busy">
											<i class="fas fa-spinner fa-spin me-1"></i>
											Processing for
										</template>
										Login Now
										<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
									</button>
								</div>
								<div class="d-flex justify-content-center mt20 mb20">
									<p class="modal-or-divider or-divider w-80">OR</p>
								</div>
								<!-- <div class="form-group col-md-12 m-0">
									<button type="button" :disabled="isLoadingWallet" @click="handelWeb3Login" class="btn1 primary-btn subscribe-btn w-100">
										<template v-if="isLoadingWallet">
											<i class="fas fa-spinner fa-spin me-1"></i>
											Processing for
										</template>
										{{ walletText }}
										<span :class="{ 'icon-rotate': wallet.isConnected }"><i class="fa-solid" :class="wallet.isConnected ? 'fa-arrow-right' : 'fa-wallet'"></i></span>
									</button>
								</div>
								<div v-if="wallet.isConnected" class="form-group col-md-12">
									<button type="button" @click="disconnect" class="btn1 primary-btn subscribe-btn w-100">
										Disconnect Wallet
										<span class="icon-rotate"><i class="fas fa-unlink"></i></span>
									</button>
								</div> -->
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

	const { loginAction } = useAuthStore();
	const { toastSuccess } = useToastAlert();

	const form = useVForm({
		username: '',
		password: '',
	});

	const handelForm = async () => {
		await form.submit('/auth/login').then((data) => {
			loginAction(data);
			toastSuccess("Login successfully Completed.");
			navigateTo('/dashboard');
		}).catch((error) => { });
	}
</script>

<style>
</style>	