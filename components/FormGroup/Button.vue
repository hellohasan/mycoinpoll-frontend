<template>
	<div class="form-group d-flex justify-content-end align-items-center g30">
		<button type="submit" :disabled="processing" class="gradient-btn">
			<template v-if="processing">
				<i class="fas fa-spinner fa-spin me-1"></i>
			</template>
			{{ label }}
		</button>
	</div>
</template>

<script setup>
	defineProps({
		label: {
			type: String,
			default: 'Submit'
		},
		type: {
			type: String,
			default: 'submit'
		},
		processing: {
			type: Boolean,
			default: false
		}
	});
</script>

<style lang="scss" scoped>
	button:disabled {
		cursor: not-allowed;
	}
</style>
