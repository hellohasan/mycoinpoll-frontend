<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">{{ label }}:</label>
		<div class="input bg-border-input d-flex align-items-center">
			<span v-if="prependText" class="group-text group-text-left">{{ prependText }}</span>
			<input class="form-control" :type="type" v-model="model" :class="{ 'is-invalid': error }" :step="step" :id="inputId" :placeholder="computedPlaceholder" :required="required" :readonly="readonly" />
			<span v-if="appendText" class="group-text group-text-right">{{ appendText }}</span>
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
		type: {
			type: String,
			default: 'text'
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			required: true
		},
		placeholder: String,
		step: {
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
		prependText: {
			type: String,
			default: null
		},
		appendText: {
			type: String,
			default: null
		}
	});

	const model = defineModel();

	const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);

	const computedPlaceholder = computed(() => {
		return props.placeholder || props.label || '';
	});
</script>

