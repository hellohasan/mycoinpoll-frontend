<script setup>
	import { computed } from 'vue';

	const model = defineModel();

	const props = defineProps({
		label: {
			type: String,
			required: true
		},
		id: {
			type: String,
			default: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`
		},
		value: {
			type: [String, Number, Boolean],
			default: true
		},
		error: String,
		required: Boolean,
		disabled: Boolean
	});

	const inputId = computed(() => props.id);

	const isChecked = computed({
		get() {
			return Array.isArray(model.value)
				? model.value.includes(props.value)
				: model.value === props.value;
		},
		set(checked) {
			if (Array.isArray(model.value)) {
				const newValue = [...model.value];
				if (checked) {
					newValue.push(props.value);
				} else {
					const index = newValue.indexOf(props.value);
					if (index > -1) newValue.splice(index, 1);
				}
				model.value = newValue;
			} else {
				model.value = checked ? props.value : null;
			}
		}
	});
</script>

<template>
	<div class="form-group">
		<input :id="inputId" type="checkbox" class="checkBox" :value="value" v-model="isChecked" :required="required" :disabled="disabled" />
		<label :for="inputId">
			{{ label }}
			<span><i class="fa-solid fa-check"></i></span>
		</label>
		<div v-if="error" class="invalid-feedback">
			{{ error }}
		</div>
	</div>
</template>
