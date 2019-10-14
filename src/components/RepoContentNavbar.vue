<template>
	<div class="px-5 flex justify-start p-2 mt-3 max-w-5xl mx-auto">
		<div class="bg-gray-100 font-sans px-3 py-1 mr-2 -mb-3 border-2 border-solid border-gray-100 repo-tab-active">
			Code
		</div>
		<div class="bg-gray-200 font-sans px-3 py-1 mr-2 -mb-2">
			Pull Requests
		</div>
		<div class="bg-gray-200 font-sans px-3 py-1 mr-2 -mb-2">
			Projects
		</div>
		<div class="bg-gray-200 font-sans px-3 py-1 mr-2 -mb-2">
			Security
		</div>
		<div class="bg-gray-200 font-sans px-3 py-1 mr-2 -mb-2">
			Insights
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RepoContentNavbar'
	}
</script>