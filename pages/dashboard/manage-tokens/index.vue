<template>
	<div class="dashboard-body mt30">
		<!--Start user referable-list -->
		<div class="data-show-table-area dashboard-box mt30">
			<div class="table-header-area d-flex align-items-center justify-content-between">
				<div class="table-heading">
					<h5>Token List</h5>
				</div>
				<div class="add-new-btn">
					<nuxt-link :to="{ name: 'dashboard-manage-tokens-create' }" class="gradient-btn">
						<i class="fas fa-plus"></i>
						Add New Token
					</nuxt-link>
				</div>
			</div>
			<div class="common-table mt30">
				<table class="custom-table display nowrap mobile-table">
					<thead>
						<tr>
							<th>SL</th>
							<th>Logo</th>
							<th>Token Name</th>
							<th>Owner</th>
							<th>Company</th>
							<th>Stage</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="token in tokens" :key="token.id">
							<td>{{ token.id }}</td>
							<td>
								<nuxt-img :src="token.logo" loading="lazy" placeholder class="img-fluid img-thumbnail" width="50px" alt="" />
							</td>
							<td>
								{{ token.full_name }}
								<br />
								{{ token.sell_target }} {{ token.symbol }}
							</td>
							<td>
								{{ token.owner.name }}
								<br />
								{{ token.owner.email }}
							</td>
							<td>
								<nuxt-img :src="token.company_logo" loading="lazy" placeholder class="img-fluid img-thumbnail mb-1" width="50px" alt="" />
								<br />
								{{ token.token_company }}
							</td>
							<td>
								<ElementsStatus :status="token.stage_status" onText="Running" offText="Upcoming" />
							</td>
							<td>
								<ElementsStatus :status="token.status" />
							</td>
							<td>
								<div class="d-flex justify-content-between">
									<nuxt-link :to="{ path: `/dashboard/manage-tokens/${token.slug}/roadmap` }" title="Roadmap" class="transparent-btn border-gradient">
										<i class="fas fa-bezier-curve"></i>
									</nuxt-link>
									<nuxt-link :to="{ path: `/dashboard/manage-tokens/${token.slug}/edit` }" title="Edit" class="transparent-btn border-gradient">
										<i class="fas fa-edit"></i>
									</nuxt-link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		title: 'Token List',
		layout: 'backend',
		authenticated: true,
		roles: ['Super Admin']
	});

	const { useOnlyFetch } = useApi();
	const { data: tokens } = await useOnlyFetch('/manage-tokens');
</script>

<style>
</style>