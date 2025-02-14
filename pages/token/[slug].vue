<template>
	<div>Slug</div>
</template>

<script lang="ts" setup>
	const route = useRoute();
	console.log(route.params.slug);
</script>

<style>
</style>