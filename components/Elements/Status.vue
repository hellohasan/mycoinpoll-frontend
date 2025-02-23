<template>
	<span class="badge" :class="badgeClass">
		{{ statusText }}
	</span>
</template>

<script setup>

	const props = defineProps({
		status: {
			type: Boolean,
			required: true
		},
		onText: {
			type: String,
			default: 'Activated'
		},
		offText: {
			type: String,
			default: 'Deactivated'
		},
		onClass: {
			type: String,
			default: "completed-status"
		},
		offClass: {
			type: String,
			default: "pending-status"
		}
	});

	// Compute the badge class based on the status prop
	const badgeClass = computed(() => props.status ? props.onClass : props.offClass);

	// Compute the text to display inside the badge based on the status prop
	const statusText = computed(() => props.status ? props.onText : props.offText);
</script>

<style scoped>
</style>
