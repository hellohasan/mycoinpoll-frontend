<template>
	<footer class="footer-main-section pt120 position-relative center-effect1">
		<div class="footer-circle circle-effect-center"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="footer-area d-flex justify-content-between">
						<div class="footer-description">
							<NuxtLink to="/"><nuxt-img src="images/logo.png" alt="logo" /></NuxtLink>
							<p class="mt40">Empowering Your Crypto Journey: Explore, Invest, and Engage with the Future of Finance!</p>
							<div class="social-menu">
								<span>Follow us</span>
								<ul class="d-flex align-items-center">
									<li>
										<a href="https://twitter.com/mycoinpoll" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
									</li>
									<li>
										<a href="https://t.me/MyCoinPolldotCom" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane"></i></a>
									</li>
									<li>
										<a href="https://www.youtube.com/@mycoinpollcom/featured" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
									</li>
									<li>
										<a href="https://coinmarketcap.com/community/profile/MyCoinPoll/" target="_blank" rel="noopener noreferrer"><nuxt-img src="images/icon/coinmarketcap.png" :style="{ width: '20px' }" alt="" /></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/company/mycoinpoll" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="footer-widgets-area d-flex">
							<div class="footer-widgets">
								<h4>Company</h4>
								<ul>
									<li><nuxt-link to="/">Home</nuxt-link></li>
									<li><nuxt-link to="/androverse">Androverse</nuxt-link></li>
									<li><nuxt-link to="/learn">Learn & Earn</nuxt-link></li>
									<li><nuxt-link to="/news">News</nuxt-link></li>
									<li><nuxt-link to="/auth/login">Login</nuxt-link></li>
								</ul>
							</div>
							<div class="footer-widgets contactinfo">
								<h4>Contact Info.</h4>
								<ul>
									<li>
										Customer Support:
										<br />
										<a href="mailto:support@mycoinpoll.com">support@mycoinpoll.com</a>
									</li>
									<li>
										<p class="or-divider">OR</p>
									</li>
									<li>
										Listing Enquiries:
										<br />
										<a href="mailto:listing@mycoinpoll.com">listing@mycoinpoll.com</a>
									</li>
								</ul>
							</div>
							<div class="footer-widgets footer-subscribe">
								<FrontendNewsletter />
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="post-info mb-4">
						<p>
							<b class="gradient-color">Legal Information:</b>
							BigBull Capital LLC. Registered address: Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, S.t Vincent and the Grenadines. Registration number: 3846 LLC 2024
						</p>
						<p>Risk Warning: Investing in cryptocurrencies and blockchain projects involves a high degree of risk, including the potential loss of your entire investment. The following risks are associated with participating in mycoinpoll launchpad.</p>
						<p>Market Volatility: Cryptocurrency markets are highly volatile, with prices subject to rapid and unpredictable fluctuations. Past performance is not indicative of future results.</p>
						<p>Project Viability: Early-stage blockchain projects may fail or underperform due to technical issues, market conditions, regulatory changes, or lack of adoption. Investing in these projects may result in financial loss.</p>
						<p>Regulatory Uncertainty: Cryptocurrencies and token sales operate in an uncertain regulatory environment, which may evolve over time. Changes in regulations or legal actions may negatively impact the value and liquidity of your investments.</p>
						<p>Security Risks: The security of crypto assets and platforms can be compromised due to hacking, phishing attacks, or other malicious activities. Always ensure you're using secure methods to protect your private keys and personal information.</p>
						<p>Liquidity Risk: Tokens issued on a crypto launchpad may have limited liquidity in the early stages. It may be challenging to buy or sell tokens, and prices may vary significantly due to low trading volumes.</p>
						<p>Technical Risks: Blockchain technology and smart contracts are still evolving. Bugs, vulnerabilities, or failures in the underlying technology can lead to the loss of funds or delays in the project’s progress.</p>
						<p>Speculative Nature: Many crypto projects are highly speculative. There is no guarantee that a project will succeed, and even promising ideas may not achieve widespread adoption or reach commercial viability.</p>
						<p>Tax Implications: Cryptocurrency investments may have tax implications. It is your responsibility to understand and comply with tax obligations in your jurisdiction.</p>
						<p>By participating in MyCoinPoll crypto launchpad, you acknowledge that you fully understand the risks involved and accept full responsibility for your investment decisions. We strongly encourage you to conduct thorough research and seek professional advice before engaging in any token sale or cryptocurrency investment.</p>
					</div>
				</div>

				<div class="col-md-12">
					<div class="footer-bottom-copyright d-flex flex-wrap align-items-center justify-content-between">
						<div class="copyright-text">
							<p>
								&copy; 2025
								<a href="#" class="gradient-color">MyCoinPoll.com</a>
								All Rights Reserved.
							</p>
						</div>
						<div class="terms-conditions">
							<ul class="d-flex align-items-center">
								<li><nuxt-link :to="{ name: 'terms-conditions' }">Terms & Conditions</nuxt-link></li>
								<li><nuxt-link :to="{ name: 'privacy-policy' }">Privacy Policy</nuxt-link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>