<!-- FormToggleInput.vue -->
<template>
	<div class="form-group" :class="col">
		<label v-if="label" class="label" :for="inputId">
			{{ label }}:
			<code v-if="message">{{ message }}</code>
		</label>
		<br />
		<input :id="inputId" type="checkbox" v-model="model" data-toggle="toggle" data-width="100%" data-size="large" data-onstyle="success" data-offstyle="danger" :data-onlabel="onText" :data-offlabel="offText" />
		<div v-if="error" class="invalid-feedback d-block mt-1">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { computed, onMounted, watch } from 'vue'
	import 'bootstrap5-toggle/css/bootstrap5-toggle.min.css'
	import 'bootstrap5-toggle'

	const model = defineModel()

	const props = defineProps({
		label: String,
		id: String,
		error: String,
		message: String,
		col: {
			type: String,
			default: 'col-md-12'
		},
		onText: {
			type: String,
			default: "Activate"
		},
		offText: {
			type: String,
			default: "Deactivate"
		},
	})

	const inputId = computed(() => props.id || `toggle-${Math.random().toString(36).substr(2, 9)}`)

	onMounted(() => {
		const element = document.getElementById(inputId.value)
		if (element) {
			element.bootstrapToggle();
		}
	})

	watch(model, (newValue) => {
		const element = document.getElementById(inputId.value)
		if (element) {
			element.bootstrapToggle(newValue ? 'on' : 'off');
		}
	})
</script>

<style>
	.toggle.btn {
		min-width: 100% !important;
		min-height: 44px !important;
		border-radius: 5px;
	}
	.toggle-on,
	.toggle-off {
		font-size: 17px !important;
	}
</style>
