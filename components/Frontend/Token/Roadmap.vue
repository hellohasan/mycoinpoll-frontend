<template>
	<div>
		<section class="ptb120 position-relative">
			<div class="roadmap1 circle-effect4"></div>
			<div class="roadmap2 circle-effect-center"></div>
			<div class="roadmap3 circle-effect5"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-heading text-center">
							<h3 v-if="token" class="text-shadow">Discover Our Visionary Roadmap</h3>
							<Skeletor v-else as="h3" class="text-shadow" width="60%" />
							<p v-if="token">Transforming E-Commerce Through Blockchain: ECM Coin is revolutionizing the future with secure transactions, staking, exchanges, and an integrated metaverse—driving innovation from 2022 to 2028.</p>
							<Skeletor v-else as="p" width="100%" v-for="i in 2" :key="i" />
						</div>
					</div>
				</div>
				<div class="row mt80">
					<div class="col-md-12">
						<div class="row">
							<div class="col-xl-6">
								<div class="roadmap-item d-flex align-items-center justify-content-end">
									<div class="roadmap-start d-flex align-items-center justify-content-center flex-column position-relative">
										<h3 v-if="token" class="text-shadow">Road map</h3>
										<Skeletor v-else circle class="text-shadow" size="150" />
									</div>
								</div>
							</div>
						</div>

						<template v-if="token?.roadmap?.roadmap_data">
							<div v-for="(roadmap, i) in token.roadmap.roadmap_data" :key="i" class="row roadmap-cover">
								<div v-if="i % 2 == 0" class="col-xl-6 offset-xl-6">
									<div class="roadmap-item d-flex align-items-center">
										<div class="roadmap-item-year d-flex align-items-center justify-content-center flex-column position-relative">
											<h4>{{ roadmap.name }}</h4>
										</div>
										<div class="roadmap-item-text">
											<span class="roadmap-item-text-btn">{{ roadmap.heading }}</span>
											<ul>
												<li v-for="(task, k) in displayedTasks(roadmap, i)" :key="k">
													<img :src="`/images/icon/${task.status ? 'checked' : 'time'}.png`" alt="" />
													{{ task.name }}
												</li>
											</ul>
											<a href="#" role="button" v-if="roadmap.tasks.length > showTask && !expandedSections[i]" @click.prevent="showOtherRoadMap(roadmap)" class="gradient-btn-small cursor-pointer">
												<i class="fas fa-link"></i>
												Show Other Roadmap
											</a>
										</div>
									</div>
								</div>
								<div v-else class="col-xl-6">
									<div class="roadmap-item d-flex align-items-center">
										<div class="roadmap-item-text roadmap-item-left">
											<span class="roadmap-item-text-btn">{{ roadmap.heading }}</span>
											<ul>
												<li v-for="(task, k) in displayedTasks(roadmap, i)" :key="k">
													<img :src="`/images/icon/${task.status ? 'checked' : 'time'}.png`" alt="" />
													{{ task.name }}
												</li>
											</ul>
											<a href="#" role="button" v-if="roadmap.tasks.length > showTask && !expandedSections[i]" @click.prevent="showOtherRoadMap(roadmap)" class="gradient-btn-small cursor-pointer">
												<i class="fas fa-link"></i>
												Show Other Roadmap
											</a>
										</div>
										<div class="roadmap-item-year d-flex align-items-center justify-content-center flex-column position-relative custome-ordering">
											<h4>{{ roadmap.name }}</h4>
										</div>
									</div>
								</div>
							</div>
						</template>
						<template v-else>
							<div v-for="i in 10" :key="i" class="row roadmap-cover">
								<div v-if="i % 2 !== 0" class="col-xl-6 offset-xl-6">
									<div class="roadmap-item d-flex align-items-center">
										<div class="roadmap-item-year d-flex align-items-center justify-content-center flex-column position-relative">
											<Skeletor circle width="100" height="100" />
										</div>
										<div class="roadmap-item-text">
											<Skeletor as="span" class="roadmap-item-text-btn"></Skeletor>
											<ul>
												<li v-for="i in 3" :key="i">
													<Skeletor :tag="text" />
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div v-else class="col-xl-6">
									<div class="roadmap-item d-flex align-items-center">
										<div class="roadmap-item-text roadmap-item-left">
											<Skeletor as="span" class="roadmap-item-text-btn"></Skeletor>
											<ul>
												<li v-for="i in 3" :key="i">
													<Skeletor :tag="'span'" :class="'skeleton-text skeleton-effect'" :count="1" />
												</li>
											</ul>
										</div>
										<div class="roadmap-item-year d-flex align-items-center justify-content-center flex-column position-relative custome-ordering">
											<Skeletor circle width="100" height="100" />
										</div>
									</div>
								</div>
							</div>
						</template>
					</div>
				</div>
			</div>
		</section>

		<ClientOnly>
			<div v-if="specificRoadmap" ref="roadmapModal" class="modal fade bg-gradient-add" id="roadmap-modal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-custom-width" style="width: 40%">
					<div class="modal-content custom-modal">
						<div class="modal-header-area mb-3 pb-3 d-flex align-items-center justify-content-between">
							<h4 class="text-shadow">{{ specificRoadmap.name }}</h4>
							<div class="modal-close-btn">
								<span data-bs-dismiss="modal" aria-label="Close">
									<i class="fas fa-times"></i>
								</span>
							</div>
						</div>
						<div class="modal-body-inner">
							<div class="row">
								<div class="col-md-12">
									<div class="ps-3 py-2 input bg-border-input position-relative roadmap-item d-flex align-items-center">
										<div data-simplebar class="roadmap-item-text roadmap-item-left m-0 p-0 background-image-none" style="background-image: none">
											<span class="roadmap-item-text-btn box-bg-color text-white mt-2">{{ specificRoadmap.heading }}</span>
											<ul>
												<li class="text-white" v-for="(task, k) in specificRoadmap.tasks" :key="k">
													<img :src="`/images/icon/${task.status ? 'checked' : 'time'}.png`" alt="" />
													{{ task.name }}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ClientOnly>
	</div>
</template>

<script setup>
	import { Skeletor } from 'vue-skeletor'

	const tokenStore = useTokenStore()
	const { token } = storeToRefs(tokenStore)

	const showTask = ref(4)
	const expandedSections = ref({})
	const modalInstance = ref(null)
	const specificRoadmap = ref(null)

	const expandSection = (index) => {
		expandedSections.value[index] = true
	}

	const displayedTasks = (roadmap, index) => {
		if (expandedSections.value[index]) {
			return roadmap.tasks
		}
		return roadmap.tasks.slice(0, showTask.value)
	}

	const showOtherRoadMap = async (roadmap) => {
		specificRoadmap.value = roadmap
		if (process.client) {
			if (!modalInstance.value) {
				const { Modal } = await import('bootstrap')
				const modalEl = document.getElementById('roadmap-modal')
				if (modalEl) {
					modalInstance.value = new Modal(modalEl)
				}
			}
			modalInstance.value?.show()
		}
	}

	const closeModal = () => {
		modalInstance.value?.hide()
	}

	onMounted(async () => {
		if (process.client) {
			const { Modal } = await import('bootstrap')
			const modalEl = document.getElementById('roadmap-modal')
			if (modalEl) {
				modalInstance.value = new Modal(modalEl)
			}
		}
	})

	onUnmounted(() => {
		if (process.client && modalInstance.value) {
			modalInstance.value.dispose()
		}
	})
</script>

<style lang="scss" scoped>
</style>
