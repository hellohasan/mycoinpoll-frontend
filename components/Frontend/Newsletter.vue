<template>
	<div>
		<h4>Newsletter</h4>
		<p>Subscribe to our newsletter for latest update & stay with us.</p>
		<div class="subscribe-form">
			<div class="message-container">
				<p v-if="error" class="error-message">{{ error }}</p>
				<p v-if="success" class="success-message">{{ success }}</p>
			</div>
			<form @submit.prevent="subscribe">
				<div class="subscribe-email">
					<input v-model="email" :class="{ error: error }" required type="email" placeholder="Enter Your Email" />
				</div>
				<input type="submit" class="btn1 primary-btn subscribe-btn mt-1" :disabled="loading" :value="loading ? 'Subscribing...' : 'Subscribe'" />
			</form>
		</div>
	</div>
</template>

<script setup>
	const config = useRuntimeConfig();

	const email = ref('');
	const loading = ref(false);
	const error = ref('');
	const success = ref('');

	const subscribe = async () => {
		loading.value = true;
		error.value = '';
		success.value = '';

		try {
			await $fetch(`${config.public.apiBase}/newsletter-subscribe`, {
				method: 'POST',
				body: { email: email.value }
			});
			success.value = 'Successfully subscribed!';
			email.value = '';
		} catch (err) {
			error.value = err.response?._data?.message || 'Subscription failed.';
		} finally {
			loading.value = false;
		}
	};
</script>

<style lang="scss" scoped>
	input.error {
		border-color: red;
	}

	.error-message {
		color: red;
	}

	.success-message {
		color: green;
	}

	button:disabled {
		background-color: #cccccc;
	}
</style>
