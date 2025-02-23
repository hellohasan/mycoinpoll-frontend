<template>
	<button @click="exportUsers" :disabled="isLoading" class="border-gradient btn3">
		{{ isLoading ? 'Exporting...' : 'Export Users' }}
	</button>
</template>

<script  setup>
	const isLoading = ref(false);

	const config = useRuntimeConfig()
	const auth = useAuthStore()

	const exportUsers = async () => {
		try {
			isLoading.value = true

			const response = await $fetch('/export-users', {
				baseURL: config.public.apiBase,
				responseType: 'blob',
				method: 'GET',
				credentials: 'include',
				headers: {
					'Authorization': `Bearer ${auth.token}`,
					'Accept': 'application/octet-stream'
				}
			});
			// Create blob link and trigger download
			const url = window.URL.createObjectURL(new Blob([response]))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', `users_${new Date().toISOString().split('T')[0]}.xlsx`)
			document.body.appendChild(link)
			link.click()

			// Clean up
			window.URL.revokeObjectURL(url)
			document.body.removeChild(link)
		} catch (error) {
			console.error('Error exporting users:', error)
			alert('Failed to export users. Please try again.')
		} finally {
			isLoading.value = false
		}
	}
</script>

<style>
</style>