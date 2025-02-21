<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Update Profile Information</h5>
				</div>
			</div>
			<div class="card-line"></div>

			<div class="custom-card-body">
				<div class="row gy-4">
					<div class="col-md-12">
						<div class="form-group">
							<div class="profile-view-status d-flex align-items-center g20">
								<div class="profile-lg-icon">
									<nuxt-img src="/images/dashboard/icon/user.png" loading="lazy" placeholder alt="user" />
								</div>
								<div class="verify-btn">
									<div class="transparent-btn-sm border-gradient mt10">
										<span class="gradient-color">
											<i class="fa-solid fa-circle-check"></i>
											Verified LV.1
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<form @submit.prevent="updateProfile">
						<div class="row gy-4">
							<FormGroupInput col="col-md-6" v-model="form.name" :error="form.errors.get('name')" label="Name" />
							<FormGroupInput col="col-md-6" v-model="form.eth_address" :error="form.errors.get('eth_address')" label="Wallet" :readonly="true" />
							<FormGroupInput col="col-md-4" v-model="form.username" :error="form.errors.get('username')" label="Username" />
							<FormGroupInput col="col-md-4" v-model="form.email" :error="form.errors.get('email')" label="Email Address" />
							<FormGroupInput col="col-md-4" v-model="form.phone" :error="form.errors.get('phone')" label="Phone Number" />
							<div class="card-footer">
								<FormGroupButton :processing="form.busy" label="Update Profile" />
							</div>
						</div>
					</form>

					<div class="card-line"></div>
					<div class="table-heading">
						<h5>
							<nuxt-img src="/images/icon/launch.png" loading="lazy" placeholder alt="icon" />
							Update Your Password
						</h5>
					</div>
					<div class="dashboard-box">
						<form @submit.prevent="handelPassword">
							<div class="row gy-4">
								<FormGroupInput col="col-md-6" v-model="passwordForm.password" type="password" :error="passwordForm.errors.get('password')" label="New Password" />
								<FormGroupInput col="col-md-6" v-model="passwordForm.password_confirmation" type="password" :error="passwordForm.errors.get('password_confirmation')" label="Confirm Password" />
								<div class="custom-card-footer">
									<FormGroupButton :processing="passwordForm.busy" label="Update Password" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script  setup>
	definePageMeta({
		title: 'Profile',
		layout: 'backend',
		authenticated: true
	});

	const form = useVForm({
		name: '',
		username: '',
		email: '',
		phone: '',
		eth_address: ''
	});

	const { toastSuccess } = useToastAlert();
	const authStore = useAuthStore();
	const { getUser: user } = storeToRefs(authStore);
	watch(user, (newUser) => {
		if (newUser) {
			form.fill(newUser);
		}
	}, { immediate: true });

	const updateProfile = async () => {
		await form.submit('/update-profile').then((res) => {
			authStore.updateUser(res.user);
			toastSuccess('Profile Updated Successfully.');
		});
	}

	const passwordForm = useVForm({
		password: '',
		password_confirmation: '',
	});

	const handelPassword = async () => {
		await passwordForm.submit('/update-password').then((res) => {
			passwordForm.clear();
			passwordForm.reset();
			toastSuccess('Password updated successfully.');
		}).catch((error) => { });
	}
</script>

<style>
</style>