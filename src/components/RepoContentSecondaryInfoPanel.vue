<template>
	<div class="px-5 flex-row justify-between p-2 mt-3 max-w-5xl mx-auto">
		<p class="font-sans text-lg"> {{this.data.description }}
			<span class="text-indigo-700">{{ this.data.homepage }}</span> </p>
		<div class="flex mt-2">
	      <span class="text-xs text-indigo-800 px-2 bg-indigo-200 mr-2 hover:bg-indigo-200" v-for="(topic) in topics">{{ topic }} </span>
	    </div>
	</div>
</template>
<script>
	export default {
		props: ['data', 'repoInfoLoaded'],
		name: 'RepoContentSecondaryInfoPanel',
		computed: {
			topics() {
				if (this.repoInfoLoaded)
		    		return this.data.topics.slice(0, 3);
		    },
		}
	}
</script>