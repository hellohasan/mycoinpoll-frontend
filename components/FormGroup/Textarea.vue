<template>
	<div class="form-group" :class="col">
		<label v-if="label" class="label" :for="inputId">
			<div v-html="label"></div>
			<code v-if="message">{{ message }}</code>
		</label>
		<div class="input bg-border-input">
			<textarea v-model="model" :class="{ 'is-invalid': error }" :rows="rows" :id="inputId" :placeholder="computedPlaceholder" :required="required" :readonly="readonly"></textarea>
		</div>
		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		message: {
			type: String,
			default: null
		},
		rows: {
			type: Number,
			default: 3
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		error: {
			type: String,
			default: null
		},
		col: {
			type: String,
			default: "col-md-12"
		},
		required: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		placeholder: String,
	});

	const model = defineModel();

	const inputId = computed(() => props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`);

	const computedPlaceholder = computed(() => {
		return props.placeholder || props.label || '';
	});

</script>

<style scoped>
</style>
