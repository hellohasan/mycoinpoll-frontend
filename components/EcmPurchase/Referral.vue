<template>
	<div v-if="wallet.isConnected" class="d-flex flex-column g-10 mt-20">
		<div class="address-text input-group d-flex align-items-center secondary-btn-sm">
			<span class="gradient-color" id="wallet_address">Your Address:</span>
			<input type="text" class="form-control" :value="wallet.address" readonly="" id="wallet_address" placeholder="Your Address" />
		</div>
		<div v-if="referralLink" class="address-text input-group d-flex align-items-center position-relative secondary-btn-sm">
			<span class="gradient-color" id="referral_link">Referral Link:</span>
			<input type="text" class="form-control" :value="referralLink" readonly="" id="referral_link" placeholder="Referral Link" />
			<button class="text-copy-btn" type="button" @click.prevent="copyToClipboard" id="referred_by"><i class="far fa-copy"></i></button>
		</div>
		<div class="address-text input-group d-flex align-items-center secondary-btn-sm">
			<span class="gradient-color" id="referred_by">Referred By:</span>
			<input type="text" class="form-control" v-model="store.referral" @blur="validateReferral" id="referred_by" placeholder="Enter Referred By Wallet" />
		</div>
		<div class="line-divider2 w-100 mb20 mt10"></div>
	</div>
</template>

<script setup>
	import { useAppKitAccount } from '@reown/appkit/vue';
	import { isAddress } from 'ethers';

	const wallet = useAppKitAccount();
	const store = useReferralStore();
	const authStore = useAuthStore();
	const { authenticated, user } = storeToRefs(authStore);
	const referralLink = ref('');
	const config = useRuntimeConfig();
	const { copyNow } = useClipboard();


	const copyToClipboard = async () => {
		await copyNow(referralLink.value);
	}

	if (process.client) {
		watch(authenticated, (newAuth) => {
			if (newAuth) {
				referralLink.value = `${config.public.appUrl}?ref=${user.value.unique_id}`
			} else {
				referralLink.value = '';
			}
		}, { immediate: true })
	}

	const validateReferral = (event) => {
		const input = event.target.value;
		if ((!input || !isAddress(input)) || input == wallet.value.address) {
			store.updateReferral('0x0000000000000000000000000000000000000000')
		} else {
			store.updateReferral(input)
		}
	}

</script>

<style lang="scss" scoped>
</style>
