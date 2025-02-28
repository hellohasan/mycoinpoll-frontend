<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">
			{{ label }}:
			<code v-if="message">{{ message }}</code>
		</label>
		<div class="input bg-border-input">
			<vue3-tags-input class="form-control" :modelValue="inputValue" :tags="tags" @update:modelValue="updateInputValue" @on-tags-changed="handleChangeTag" :placeholder="computedPlaceholder" />
		</div>
		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import Vue3TagsInput from 'vue3-tags-input';
	import { computed, ref, watch } from 'vue';

	const model = defineModel({ type: Array, default: [] });

	const props = defineProps({
		label: String,
		type: { type: String, default: 'text' },
		step: { type: String, default: null },
		col: { type: String, default: 'col-md-12' },
		id: String,
		placeholder: String,
		required: Boolean,
		error: String,
		message: String,
		options: {
			type: Array,
			default: () => []
		},
	});

	const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);

	const computedPlaceholder = computed(() => {
		return props.placeholder || props.label || '';
	});

	const inputValue = ref('');
	const tags = ref([]);

	watch(model, (newValue) => {
		tags.value = newValue;
	}, { immediate: true });

	const updateInputValue = (newValue) => {
		inputValue.value = newValue;
	};

	const handleChangeTag = (newTags) => {
		tags.value = newTags;
		model.value = newTags;
	};
</script>
<style>
	.v3ti {
		background-color: #0b121c !important;
		border: 1px solid #000000 !important;
	}
</style>
