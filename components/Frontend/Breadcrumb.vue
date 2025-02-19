<template>
	<div class="breadcrumbs-area mt-20 breadcrumbs-mobile-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="breadcrumbs">
						<ul class="d-flex align-items-center flex-wrap">
							<li><NuxtLink to="/">Home</NuxtLink></li>
							<li>
								<a href="#"><i class="fa-solid fa-angle-right"></i></a>
							</li>
							<li>
								<a href="#" class="active">{{ pageTitle }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

	const route = useRoute();
	const pageTitle = computed(() => {
		return route.meta.title || 'Current Page';
	});

</script>

<style>
</style>