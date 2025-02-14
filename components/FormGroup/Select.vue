<!-- FormSelect2Input.vue -->
<template>
	<div class="form-group" :class="col">
		<label v-if="label" :for="inputId" class="label">{{ label }}:</label>
		<select :id="inputId" class="form-control form-select" :disabled="disabled" :multiple="multiple"></select>
		<div v-if="error" class="invalid-feedback d-block">
			{{ error }}
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, watch, nextTick, onUnmounted, inject } from 'vue'
	import jQuery from 'jquery'
	import select2 from 'select2';
	select2(jQuery)
	import 'select2/dist/css/select2.min.css';

	const model = defineModel();
	const select2Instance = ref(null);

	const props = defineProps({
		label: String,
		id: String,
		error: String,
		col: { type: String, default: 'col-md-12' },
		options: {
			type: Array,
			default: () => []
		},
		multiple: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: null
		},
		inModal: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		settings: {
			type: Object,
			default: () => ({
				width: '100%',
				allowClear: true,
				theme: "bootstrap-5",
			})
		}
	})

	const inputId = computed(() => props.id || `select2-${Math.random().toString(36).substr(2, 9)}`)

	const computedPlaceholder = computed(() => {
		if (props.placeholder) {
			return props.placeholder
		}
		return props.multiple
			? "Select Multiple"
			: "Select One";
	})

	const initSelect2 = (options = props.options) => {
		const dropdownParent = props.inModal ? jQuery(`#${inputId.value}`).closest('.modal') : jQuery('body')

		select2Instance.value = jQuery(`#${inputId.value}`).empty().select2({
			placeholder: computedPlaceholder.value,
			dropdownParent: dropdownParent,
			data: options,
			multiple: props.multiple,
			theme: "bootstrap-5",
			...props.settings,
		}).on('select2:select select2:unselect', () => {
			model.value = select2Instance.value.val();
		});

		// Set initial value
		setValue(model.value);
		// Apply error styles if there's an error
		applyErrorStyles();
	}

	const setValue = (value) => {
		if (select2Instance.value) {
			const valuesToSet = props.multiple ? (Array.isArray(value) ? value : []) : (value || '');
			select2Instance.value.val(valuesToSet).trigger('change');
		}
	}

	const applyErrorStyles = () => {
		if (select2Instance.value) {
			const container = select2Instance.value.next('.select2-container')
			const selectionElement = container.find('.select2-selection')
			if (props.error) {
				selectionElement.addClass('is-invalid')
			} else {
				selectionElement.removeClass('is-invalid')
			}
		}
	}

	onMounted(() => {
		nextTick(() => {
			initSelect2();
		})
	})

	watch(() => props.options, (newOptions) => {
		nextTick(() => {
			if (select2Instance.value) {
				select2Instance.value.select2('destroy')
				initSelect2(newOptions);
			}
		});
	})

	watch(model, (newValue) => {
		setValue(newValue);
	})

	watch(() => props.error, () => {
		nextTick(() => {
			applyErrorStyles();
		})
	})

	// Cleanup on component unmount
	onUnmounted(() => {
		if (select2Instance.value) {
			select2Instance.value.select2('destroy')
		}
	});

</script>

<style>
	.select2-container--bootstrap-5 .select2-selection--single {
		background-color: #652f9f !important;
		border-color: #875db4 !important;
		border-radius: 5px !important;
		color: white !important;
		height: 44px !important;
		display: flex !important;
		align-items: center !important;
		padding-left: 5px !important;
	}

	.select2-container--bootstrap-5 .select2-selection--single .select2-selection__arrow b {
		border-color: white transparent transparent transparent !important;
		border-width: 5px !important;
	}

	.select2-container--bootstrap-5 .select2-selection--single:focus,
	.select2-container--bootstrap-5 .select2-selection--single:active {
		border: none !important;
		box-shadow: none !important;
	}

	.select2-container--bootstrap-5 .select2-selection--single .select2-selection__placeholder {
		color: rgba(255, 255, 255, 0.7) !important;
	}

	.select2-container--bootstrap-5 .select2-dropdown {
		border-radius: 5px !important;
		border: 1px solid #3d0c79 !important;
	}

	.select2-container--bootstrap-5 .select2-results__option {
		color: black !important;
	}

	.select2-container--bootstrap-5 .select2-results__option--highlighted {
		background-color: #652f9f !important;
		color: white !important;
	}

	.select2-container--bootstrap-5 .select2-dropdown {
		background-color: white !important;
		border: 1px solid #3d0c79 !important;
		border-radius: 5px !important;
	}

	.select2-container--bootstrap-5 .select2-search--dropdown .select2-search__field {
		background-color: #0b121c !important;
		color: white !important;
		border: none !important;
		border-radius: 5px !important;
		padding-left: 10px !important;
	}

	.select2-container--bootstrap-5 .select2-results__option--selected {
		background-color: #652f9f !important;
		color: white !important;
	}

	.select2-container--bootstrap-5 .select2-selection--single .select2-selection__rendered {
		color: #ffffff !important;
	}
</style>
