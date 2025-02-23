<template>
	<div class="dashboard-body mt30">
		<div class="dashboard-box mt30 custom-card-form">
			<div class="custom-card-header d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Edit Token</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ path: '/dashboard/manage-tokens' }" class="gradient-btn">
						<i class="fas fa-list"></i>
						Token List
					</nuxt-link>
				</div>
			</div>
			<div class="card-line"></div>
			<ClientOnly>
				<form @submit.prevent="handelSubmit">
					<div class="custom-card-body">
						<div class="row gy-4">
							<FormGroupInput col="col-md-6" v-model="form.name" :error="form.errors.get('name')" label="Token Name" />
							<FormGroupInput col="col-md-6" v-model="form.symbol" :error="form.errors.get('symbol')" label="Token Symbol" />
							<FormGroupPhoto col="col-md-6" v-model="form.logo" :preview="form.logo" message="Size: 95x95" :error="form.errors.get('logo')" label="Token Logo" />
							<FormGroupPhoto col="col-md-6" v-model="form.feature_image" :preview="form.feature_image" message="Size: 445x370" :error="form.errors.get('feature_image')" label="Feature Image" />
							<FormGroupInput col="col-md-6" v-model="form.contract_address" :error="form.errors.get('contract_address')" label="Contract Address" />
							<FormGroupInput col="col-md-6" v-model="form.short_description" message="Max: 140 Character" :error="form.errors.get('short_description')" label="Short Message" />

							<FormGroupInputGroup col="col-md-6" v-model="form.sell_target" type="number" :append-text="form.symbol" :error="form.errors.get('sell_target')" label="Sell target" />
							<FormGroupInputGroup col="col-md-6" v-model="form.already_sell" type="number" step="any" :append-text="form.symbol" :error="form.errors.get('already_sell')" label="Already Sold" />

							<FormGroupToggle col="col-md-6" v-model="form.stage_status" onText="Running Stage" offText="Upcoming Stage" :error="form.errors.get('stage_status')" label="Stage Status" />
							<FormGroupInput col="col-md-6" v-model="form.stage_date" type="datetime-local" :error="form.errors.get('stage_date')" label="Stage Date" />

							<FormGroupSelect col="col-md-4" v-model="form.owner_id" :options="merchants" :error="form.errors.get('owner_id')" label="Token Owner" />
							<FormGroupInput col="col-md-4" v-model="form.supporter" :error="form.errors.get('supporter')" label="Supporter" />
							<FormGroupTag col="col-md-4" v-model="form.tags" :error="form.errors.get('tags')" label="Tag" />

							<FormGroupInput col="col-md-4" v-model="form.token_company" :error="form.errors.get('token_company')" label="Token Company" />
							<FormGroupInput col="col-md-4" v-model="form.company_details" :error="form.errors.get('company_details')" label="Company Information" />
							<FormGroupPhoto col="col-md-4" v-model="form.company_logo" :preview="form.company_logo" message="Size: 100x100" :error="form.errors.get('company_logo')" label="Company Logo" />

							<FormGroupEditor col="col-md-12" v-model="form.description" :error="form.errors.get('description')" label="Token description" />
							<h5 class="text-white">Token Distribution:</h5>

							<table class="table table-bordered col-md-12">
								<thead>
									<tr>
										<th>Title</th>
										<th>Distribution percentage</th>
										<th>
											<button type="button" @click="addDistribution" class="gradient-btn py-1 px-2 font-medium">Add</button>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(distribution, index) in form.distributions" :key="index">
										<td>
											<div class="input bg-border-input d-flex align-items-center">
												<input v-model="distribution.title" class="form-control" placeholder="Title" type="text" />
											</div>
										</td>
										<td>
											<div class="input bg-border-input d-flex align-items-center">
												<input v-model="distribution.value" class="form-control" placeholder="Distribution percentage" type="text" />
											</div>
										</td>
										<td>
											<button type="button" @click="removeDistribution(index)" class="gradient-btn py-1 px-2 font-medium">Remove</button>
										</td>
									</tr>
								</tbody>
							</table>
							<FormGroupPhoto col="col-md-6" v-model="form.distribution_image" :preview="form.distribution_image" message="Size: 548x517" :error="form.errors.get('distribution_image')" label="Distribution Image" />
							<FormGroupToggle col="col-md-6" v-model="form.status" :error="form.errors.get('status')" label="Token Status" />
							<FormGroupInput col="col-md-6" v-model="form.social_media.facebook" :error="form.errors.get('social_media.facebook')" label="Facebook" />
							<FormGroupInput col="col-md-6" v-model="form.social_media.twitter" :error="form.errors.get('social_media.twitter')" label="Twitter" />
							<FormGroupInput col="col-md-6" v-model="form.social_media.telegram" :error="form.errors.get('social_media.telegram')" label="Telegram" />
							<FormGroupInput col="col-md-6" v-model="form.social_media.linkedin" :error="form.errors.get('social_media.linkedin')" label="Linkedin" />
						</div>
					</div>
					<div class="card-line"></div>
					<div class="custom-card-footer">
						<div class="form-group d-flex justify-content-end align-items-center g30">
							<button type="submit" :disabled="form.busy" class="gradient-btn">
								<i class="fas fa-spinner fa-spin me-1" v-if="form.busy"></i>
								Update Token
							</button>
						</div>
					</div>
				</form>
			</ClientOnly>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Token Edit',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const form = useVForm({
		name: '',
		symbol: '',
		logo: '',
		feature_image: '',
		short_description: '',
		stage_status: '',
		stage_date: '',
		owner_id: '',
		sell_target: '',
		already_sell: '',
		contract_address: '',
		supporter: '',
		tags: [],
		token_company: '',
		company_details: '',
		company_logo: '',
		description: '',
		distributions: [],
		distribution_image: "",
		status: true,
		social_media: {
			facebook: '',
			twitter: '',
			telegram: '',
			linkedin: '',
		},
	});
	const merchants = ref([]);

	const route = useRoute();
	const { useOnlyFetch } = useApi();

	await useOnlyFetch('/get-merchants', {
		server: false,
		onResponse({ response }) {
			merchants.value = response._data;
		}
	});

	await useOnlyFetch(`/manage-tokens/${route.params.slug}/edit`, {
		server: false,
		onResponse({ response }) {
			form.fill(response._data);
		}
	});

	const addDistribution = () => {
		form.distributions.push({ title: '', value: '' })
	}

	const removeDistribution = (index) => {
		form.distributions.splice(index, 1)
	}

	const { toastSuccess } = useToastAlert();
	const handelSubmit = async () => {
		await form.submit(`/manage-tokens/${route.params.slug}/edit`, 'PUT').then((res) => {
			form.reset();
			toastSuccess('Token Updated successfully.');
			navigateTo('/dashboard/manage-tokens');
		}).catch((error) => { })
	}
</script>

<style>
</style>