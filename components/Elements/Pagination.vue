<template>
	<nav class="pagination-container">
		<ul class="pagination">
			<li :class="{ disabled: currentPage === 1 }">
				<button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
			</li>

			<li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
				<button @click="changePage(page)">{{ page }}</button>
			</li>

			<li :class="{ disabled: currentPage === totalPages }">
				<button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	const props = defineProps({
		totalPages: Number,
		currentPage: Number
	});

	const emit = defineEmits(['changePage']);

	const changePage = (page) => {
		if (page > 0 && page <= props.totalPages) {
			emit('changePage', page);
		}
	};
</script>

<style scoped>
	.pagination-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.pagination {
		list-style: none;
		display: flex;
		gap: 5px;
	}
	.pagination li {
		display: inline-block;
	}
	.pagination button {
		padding: 8px 12px;
		border: none;
		cursor: pointer;
		background: #007bff;
		color: white;
		border-radius: 5px;
	}
	.pagination button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
	.active button {
		background: #0056b3;
	}
</style>
