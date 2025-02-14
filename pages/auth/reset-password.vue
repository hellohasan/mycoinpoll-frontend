<template>
	<div>
		<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<!--start login Modal -->
			<div class="recover-form ptb80">
				<div class="modal-custom-width page-modal-width">
					<div class="modal-content custom-modal">
						<form @submit.prevent="handelSubmit">
							<div class="modal-header-area d-flex align-items-center justify-content-between">
								<h4 class="text-shadow">Change Password</h4>
							</div>
							<div class="modal-body-inner">
								<div class="row gy-3">
									<div class="form-group col-md-12">
										<label for="unique_id">Unique ID</label>
										<div class="input bg-border-input">
											<input v-model="form.unique_id" readonly type="unique_id" class="form-control" :class="{ 'is-invalid': form.errors.has('unique_id') }" id="unique_id" placeholder="Enter Unique ID" />
										</div>
										<FormGroupHasError :form="form" field="unique_id" />
									</div>
									<div class="form-group col-md-12">
										<label for="Password">Create Password</label>
										<div class="input bg-border-input">
											<input v-model="form.password" type="password" class="form-control" id="Password" placeholder="At least 8 characters long" />
										</div>
										<FormGroupHasError :form="form" field="password" />
									</div>
									<div class="form-group col-md-12">
										<label for="Password2">Confirm Password</label>
										<div class="input bg-border-input">
											<input v-model="form.password_confirmation" type="password" class="form-control" id="Password2" placeholder="At least 8 characters long" />
										</div>
									</div>

									<div class="form-group col-md-12 mt-4">
										<button type="submit" :disabled="form.busy" class="btn1 primary-btn subscribe-btn w-100">
											<template v-if="form.busy">
												<i class="fas fa-spinner fa-spin me-1"></i>
												Processing for
											</template>
											Update Password
											<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- end login modal -->
		</div>
		<div class="roadmap1 circle-effect4"></div>
		<div class="roadmap2 circle-effect-center"></div>
		<div class="roadmap3 circle-effect5"></div>
	</div>
</template>

<script setup>

	const router = useRouter();
	const form = useVForm({
		unique_id: '',
		password: '',
		password_confirmation: '',
	});

	const handelSubmit = async () => {
		const queryString = window.location.search;
		await form.post(`/auth/reset-password${queryString}`).then((res) => {
			console.log(res);
			toast.success('Password Updated, Login now.');
			form.reset();
			navigateTo('/auth/login');
		}).catch((error) => { })
	}

	onMounted(() => {
		const queryParams = new URLSearchParams(window.location.search);
		form.unique_id = queryParams.get('unique_id') || '';
	});

</script>

<style lang="scss" scoped>
</style>
