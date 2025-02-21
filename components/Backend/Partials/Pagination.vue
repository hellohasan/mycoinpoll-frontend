<!-- components/CustomPagination.vue -->
<template>
	<div v-if="showPagination" class="d-flex justify-content-center">
		<div class="pagination mt-20">
			<ul class="d-flex align-items-center w-100">
				<!-- Previous -->
				<li>
					<a href="#" role="button" class="btn1 primary-btn subscribe-btn" @click.prevent="changePage(data.current_page - 1)" :class="{ disabled: data.current_page === 1 }">Previous</a>
				</li>

				<li>
					<ul class="d-flex align-items-center pagination-inner">
						<!-- First Page -->
						<li v-if="showFirst">
							<a href="#" role="button" @click.prevent="changePage(1)">1</a>
						</li>

						<!-- Left Dots -->
						<li v-if="showLeftDots">
							<a href="#" role="button">...</a>
						</li>

						<!-- Page Numbers -->
						<li v-for="page in visiblePages" :key="page">
							<a href="#" role="button" @click.prevent="changePage(page)" :class="{ active: page === data.current_page }">
								{{ page }}
							</a>
						</li>

						<!-- Right Dots -->
						<li v-if="showRightDots">
							<a href="#" role="button">...</a>
						</li>

						<!-- Last Page -->
						<li v-if="showLast">
							<a href="#" @click.prevent="changePage(data.last_page)">
								{{ data.last_page }}
							</a>
						</li>
					</ul>
				</li>

				<!-- Next -->
				<li>
					<a href="#" class="btn1 primary-btn subscribe-btn" @click.prevent="changePage(data.current_page + 1)" :class="{ disabled: data.current_page === data.last_page }">Next</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		data: {
			type: Object,
			default: null
		},
		limit: {
			type: Number,
			default: 2
		}
	});

	const emit = defineEmits(['pagination-change-page']);
	const currentPage = computed(() => props.data?.current_page || 1);
	const lastPage = computed(() => props.data?.last_page || 1);
	const showPagination = computed(() => props.data && props.data.last_page > 1);
	// Calculate visible pages with limit
	const visiblePages = computed(() => {
		if (!props.data?.last_page) return [];
		let start = Math.max(1, currentPage.value - Math.floor(props.limit / 2));
		let end = Math.min(lastPage.value, start + props.limit - 1);

		if (end === lastPage.value) {
			start = Math.max(1, end - props.limit + 1);
		}

		if (start === 1) {
			end = Math.min(lastPage.value, start + props.limit - 1);
		}

		const pages = [];
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	});

	// Show/hide dots and first/last pages
	const showFirst = computed(() => visiblePages.value[0] > 1);
	const showLast = computed(() => visiblePages.value[visiblePages.value.length - 1] < props.data.last_page);
	const showLeftDots = computed(() => visiblePages.value[0] > 2);
	const showRightDots = computed(() => visiblePages.value[visiblePages.value.length - 1] < props.data.last_page - 1);

	// Handle page change
	const changePage = (page) => {
		if (page >= 1 && page <= props.data.last_page) {
			emit('pagination-change-page', page);
		}
	};
</script>
<style scoped>
	.disabled {
		cursor: not-allowed !important;
		opacity: 0.6;
	}
</style>