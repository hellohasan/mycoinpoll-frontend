<template>
	<div>
		<h1>Dashboard</h1>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Dashboard'
	});

	const api = useApi();
	const { data } = api.useFetch('/user');
	console.log(data.value);
</script>

<style>
</style>