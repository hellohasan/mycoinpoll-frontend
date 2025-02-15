<template>
	<section class="frequently-asked-question-section pt120 position-relative">
		<div class="frequently-circle"></div>
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="frequently-thumnail">
						<nuxt-img src="/images/thumbnail/frequently.png" loading="lazy" format="webp" :placeholder="[614, 527]" alt="FAQ Thumbnail" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="frequently-asked-text-area">
						<div class="section-heading multi-chain-power-heading">
							<h3 class="text-shadow mb40">Frequently asked question?</h3>
						</div>
						<div class="frequently-answere">
							<div class="accordion" id="accordionExample">
								<div v-for="(item, index) in faqItems" :key="index" class="accordion-item">
									<span class="accordion-button" :class="{ collapsed: !item.isOpen }" @click="toggleAccordion(index)">
										{{ item.question }}
									</span>
									<div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: item.isOpen }">
										<div class="accordion-body">
											<p>{{ item.answer }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const faqItems = ref([
		{
			question: "What is MyCoinPoll?",
			answer: "MyCoinPoll is a crypto launchpad that connects investors with promising projects and allows project creators to seek funding through community voting.",
			isOpen: false
		},
		{
			question: "What benefits does the ECM Token offer?",
			answer: "The ECM Token provides exclusive access to investment opportunities, community voting, and educational resources within the MyCoinPoll ecosystem.",
			isOpen: false
		},
		{
			question: "How can I stay updated?",
			answer: "Register at www.mycoinpoll.com and follow us on Twitter and Telegram for the latest news.",
			isOpen: false
		},
		{
			question: "What upcoming events should I know about?",
			answer: "Join us at the Blockchain Life 2024 event in Dubai on October 22-23 and participate in the Phase 2 of the ECM Token ICO starting on October 24.",
			isOpen: false
		}
	]);

	const toggleAccordion = (index) => {
		faqItems.value = faqItems.value.map((item, i) => ({
			...item,
			isOpen: i === index ? !item.isOpen : false
		}));
	};
</script>

<style scoped>
	.accordion-button {
		cursor: pointer;
	}
</style>
