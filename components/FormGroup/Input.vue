<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">
			{{ label }}:
			<code v-if="message">{{ message }}</code>
		</label>
		<div class="input bg-border-input d-flex align-items-center">
			<input :id="inputId" :type="type" v-model="model" class="form-control" :class="{ 'is-invalid': error }" :placeholder="computedPlaceholder" :step="step" :required="required" :readonly="readonly" />
		</div>
		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'

	const model = defineModel();

	const props = defineProps({
		label: String,
		type: { type: String, default: 'text' },
		step: { type: String, default: null },
		col: { type: String, default: 'col-md-12' },
		id: String,
		placeholder: String,
		required: Boolean,
		readonly: { type: Boolean, default: false },
		error: String,
		message: String
	});

	const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

	const computedPlaceholder = computed(() => {
		return props.placeholder || props.label || '';
	});

</script>
