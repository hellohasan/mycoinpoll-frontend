<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">
			{{ label }}:
			<code v-if="message">{{ message }}</code>
		</label>
		<VueEditor class="border-image" v-model="model" :id="inputId" :editorOptions="editorOptions"></VueEditor>

		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { VueEditor } from 'vue3-editor';

	const props = defineProps({
		label: {
			type: String,
			default: null
		},
		message: {
			type: String,
			default: null
		},
		id: {
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
		placeholder: {
			type: String,
			default: "Write your content"
		}
	});

	const model = defineModel();

	const inputId = computed(() => props.id || `editor-${Math.random().toString(36).substr(2, 9)}`);

	const editorOptions = {
		placeholder: props.placeholder,
		modules: {
			toolbar: [
				['bold', 'italic', 'underline', 'strike'],
				['blockquote', 'code-block'],
				[{ 'header': 1 }, { 'header': 2 }],
				[{ 'list': 'ordered' }, { 'list': 'bullet' }],
				[{ 'script': 'sub' }, { 'script': 'super' }],
				[{ 'indent': '-1' }, { 'indent': '+1' }],
				[{ 'direction': 'rtl' }],
				[{ 'size': ['small', false, 'large', 'huge'] }],
				[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
				[{ 'color': [] }, { 'background': [] }],
				[{ 'font': [] }],
				[{ 'align': [] }],
				['clean'],
				['link', 'image', 'video']
			]
		}
	};
</script>

<style>
	.quillWrapper {
		width: 100%;
	}
	.ql-toolbar.ql-snow,
	.ql-container.ql-snow {
		border: none !important;
	}
	.ql-container {
		border-radius: 0;
	}
	.ql-toolbar {
		border-radius: 0;
	}
	.ql-toolbar button,
	.ql-toolbar .ql-picker-label {
		color: #fff !important;
	}
	.ql-toolbar .ql-stroke {
		stroke: #fff !important;
	}
	.ql-toolbar .ql-fill {
		fill: #fff !important;
	}
</style>
