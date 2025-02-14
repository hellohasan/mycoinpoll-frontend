<template>
	<div v-if="form.errors.has(field)" class="invalid-feedback d-block" v-html="form.errors.get(field)" />
</template>

<script  setup>

	defineProps({
		form: {
			type: Object,
			required: true
		},

		field: {
			type: String,
			required: true
		}
	});
</script>

<style>
</style>