<template>
	<div>
		<div class="coin-details-hero-bg position-relative coin-details-hero-border custom-container">
			<!--start login Modal -->
			<div class="recover-form ptb80">
				<div class="modal-custom-width page-modal-width">
					<div class="modal-content custom-modal">
						<form @submit.prevent="handelSubmit" @keydown="form.onKeydown($event)">
							<div class="modal-header-area d-flex align-items-center justify-content-between">
								<h4 class="text-shadow">Reset Your Password</h4>
							</div>
							<div class="modal-body-inner">
								<div class="row gy-3">
									<div class="form-group col-md-12">
										<label for="unique_id">Enter Unique ID:</label>
										<div class="input bg-border-input">
											<input v-model="form.unique_id" type="unique_id" :class="{ 'is-invalid': form.errors.has('unique_id') }" id="unique_id" placeholder="Enter Unique ID" />
										</div>
										<FormGroupHasError :form="form" field="unique_id" />
									</div>
									<div class="form-group col-md-12 d-flex align-items-center justify-content-between flex-wrap">
										<nuxt-link to="/auth/login" class="gradient-color">Login Now?</nuxt-link>
									</div>

									<div class="form-group col-md-12">
										<button type="submit" :disabled="form.busy" class="btn1 primary-btn subscribe-btn w-100">
											<template v-if="form.busy">
												<i class="fas fa-spinner fa-spin me-1"></i>
												Processing for
											</template>
											Send Reset Request
											<span class="icon-rotate"><i class="fas fa-arrow-right"></i></span>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="roadmap1 circle-effect4"></div>
		<div class="roadmap2 circle-effect-center"></div>
		<div class="roadmap3 circle-effect5"></div>
	</div>
</template>

<script setup>
	const form = useVForm({
		unique_id: ''
	});

	const { toastSuccess } = useToastAlert();

	const handelSubmit = async () => {
		await form.submit('/auth/forget-password').then((res) => {
			toastSuccess('Reset link send to Email Address.');
			form.reset();
			form.clear();
		}).catch((error) => {
			console.log(error);
		})
	}
</script>

<style lang="scss" scoped>
</style>
