<template>
	<div class="modal fade bg-gradient-add" id="user-email-phone-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-custom-width">
			<div class="modal-content custom-modal">
				<form @submit.prevent="updateUserInformation" method="post">
					<div class="modal-header-area d-flex align-items-center justify-content-between">
						<h4 class="text-shadow">Update Information</h4>
					</div>
					<div class="modal-body-inner">
						<div class="row gy-3">
							<div class="form-group col-md-12">
								<label for="Name">Full Name:</label>
								<div class="input bg-border-input">
									<input type="text" v-model="form.name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" id="name" placeholder="Enter Full name" />
								</div>
								<div class="text-danger mt-1" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
							</div>
							<div class="form-group col-md-12">
								<label for="email">Email Address:</label>
								<div class="input bg-border-input">
									<input type="email" v-model="form.email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="email" placeholder="Enter Email Address" />
								</div>
								<div class="text-danger mt-1" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
							</div>
							<div class="form-group col-md-12">
								<label for="phone">Phone Number:</label>
								<div class="input bg-border-input">
									<vue-tel-input type="tel" v-model="form.phone" mode="international" :class="{ 'is-invalid': form.errors.has('phone') }" :enabledFlags="true" :enabledCountryCode="true" :inputOptions="{ showDialCode: false }" :autoDefaultCountry="true" class="dropdown-fix" @validate="validatePhone"></vue-tel-input>
								</div>
								<div class="text-danger mt-1" v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
							</div>
						</div>
					</div>
					<div class="line mt30"></div>
					<div class="d-flex align-items-center modal-footer-area flex-wrap mt-20 g30 justify-content-end">
						<button type="submit" :disabled="form.busy" class="gradient-btn">
							<i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
							Update Now
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	let userUpdateModal = null;
	import { Modal } from "bootstrap";
	onMounted(() => {
		userUpdateModal = new Modal(document.getElementById('user-email-phone-modal'), {
			backdrop: 'static',
			keyboard: false,
		});
	});

	const form = useVForm({
		name: '',
		email: '',
		phone: '',
		isPhoneValid: false
	});

	const validatePhone = (validation) => {
		form.isPhoneValid = validation.valid;
	}

	const { useOnlyFetch } = useApi();
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	await useOnlyFetch('check-user-email-phone', {
		method: 'POST',
		onResponse({ response }) {
			if (!response._data.verified) {
				const userData = { ...user.value };
				if (userData.email && userData.email.includes('@mycoinpoll.com')) {
					userData.email = null;
				}
				form.fill(userData);
				userUpdateModal.show();
			}
		}
	});

	const { toastSuccess } = useToastAlert();
	const updateUserInformation = async () => {
		await form.submit('/update-user-email-phone').then((data) => {
			toastSuccess(data.message);
			authStore.updateUser(data.user);
			userUpdateModal.toggle();
		});
	};
</script>

<style>
	/* Increase z-index for the dropdown to appear above other elements */
	.dropdown-fix .vti__dropdown-list {
		z-index: 1056 !important; /* Bootstrap modals use 1055, so we go higher */
		position: absolute !important;
	}

	/* Optional: ensure the dropdown container has proper positioning */
	.dropdown-fix .vti__dropdown {
		position: relative !important;
	}
</style>