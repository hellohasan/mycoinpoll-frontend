<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">
			{{ label }}:
			<code>{{ message }}</code>
		</label>
		<div class="input bg-border-input d-flex align-items-center">
			<input type="text" class="form-control pointer" :value="imageName" placeholder="Choose image" readonly :id="inputId" />
			<button type="button" class="group-text group-text-right" v-show="imageName" @click="previewClear">Remove</button>
			<button type="button" class="group-text group-text-right" @click="openFile">{{ selectText }}</button>
			<input type="file" :id="`${inputId}_1`" class="d-none" ref="fileInput" accept="image/*" @change="onSelectFile" />
		</div>
		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, watch } from 'vue';
	import Swal from 'sweetalert2'
	import { Popover } from 'bootstrap';

	const props = defineProps({
		id: {
			type: String,
			default: null
		},
		error: {
			type: String,
			default: null
		},
		label: {
			type: String,
			required: true
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
		size: {
			default: 500,
		},
		preview: {
			type: String,
			default: null
		},
		message: {
			type: String,
			default: null
		}
	})

	const model = defineModel();
	const selectText = ref('Browse');
	const imageName = ref("");
	const fileInput = ref(null);
	let popover = null;

	const inputId = computed(() => props.id || `image-${Math.random().toString(36).substring(7)}`)

	const openFile = () => {
		fileInput.value.click()
	}

	const onSelectFile = (e) => {
		const file = e.target.files[0]
		if (!file) return;

		if (file.size > (props.size * 1000)) {
			Swal.fire({
				icon: 'error',
				title: 'Warning!',
				text: `Please select an image which size is less than ${props.size}kb.`
			})
			return;
		}

		const reader = new FileReader();
		reader.onload = (e) => {
			selectText.value = 'Change';
			imageName.value = file.name;
			model.value = e.target.result;
			updatePopover(e.target.result);
		}
		reader.readAsDataURL(file);
	}

	const previewClear = () => {
		selectText.value = 'Browse';
		imageName.value = "";
		model.value = null;
		if (fileInput.value) {
			fileInput.value.value = '';
		}
		updatePopover("No Image Selected");
	}

	const updatePopover = (content) => {
		if (popover) {
			popover.dispose();
		}

		if (content && (content.startsWith('data:image') || isImageUrl(content))) {
			imageName.value = imageName.value || getImageFileName(content);
			const img = document.createElement('img');
			img.src = content;
			img.style.width = '100%';
			content = img;
		}

		const options = {
			trigger: 'hover',
			html: true,
			title: 'Image Preview',
			content: content,
			placement: 'bottom',
			boundary: 'viewport',
		}
		popover = new Popover(document.getElementById(inputId.value), options);
	}

	const isImageUrl = (url) => {
		return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
	};

	const getImageFileName = (url) => {
		if (!url) return null;
		// Handle data URLs
		if (url.startsWith('data:')) {
			return 'image.' + url.split(';')[0].split('/')[1];
		}
		// Extract file name from URL
		const urlParts = url.split('/');
		return urlParts[urlParts.length - 1];
	};

	onMounted(() => {
		updatePopover(props.preview || "No image selected");
	});

	watch(model, (newValue) => {
		if (newValue) {
			updatePopover(newValue)
		}
	});

	watch(() => props.preview, (newPreview) => {
		if (newPreview) {
			imageName.value = getImageFileName(newPreview);
			updatePopover(newPreview);
		}
	});
</script>

<style scoped>
	.pointer {
		cursor: pointer;
	}
	.radius-5 {
		border-radius: 0px 5px 5px 0px !important;
	}
</style>
