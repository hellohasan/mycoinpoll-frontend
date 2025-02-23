
<script setup>
	const props = defineProps({
		variant: {
			type: String,
			default: 'primary',
			validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
		},
		pill: {
			type: Boolean,
			default: false
		},
		textVariant: {
			type: String,
			default: null
		}
	});

	const badgeClasses = computed(() => {
		let classes = ['badge'];
		classes.push(`bg-${props.variant}`);
		if (props.pill) {
			classes.push('rounded-pill');
		}
		if (props.textVariant) {
			classes.push(`text-${props.textVariant}`);
		}
		return classes.join(' ');
	});
</script>

<template>
	<span :class="badgeClasses">
		<slot></slot>
	</span>
</template>
