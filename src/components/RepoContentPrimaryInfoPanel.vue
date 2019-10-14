<template>
	<div class="px-5 flex justify-between p-2 mt-3 max-w-5xl mx-auto">
		<div class="RepoFullName font-bold text-indigo-500 text-lg font-sans">
			{{ authorName }}/<span class="text-indigo-700">{{ repoName }}</span>
		</div>

		<div class="flex">
			<div class="flex mr-3">
				<div class="flex text-xs h-7 w-18 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 font-sans">
					<svg class="fill-current text-gray-900 inline-block h-5 w-7 mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
					Watch
				</div>
				<div class="text-xs h-7 w-18 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 bg-gray-100 font-sans">
					{{ watchersCount }}
				</div>	
			</div>

			<div class="flex mr-3">
				<div class="flex text-xs h-7 w-18 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 font-sans">
					
				<svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-900 inline-block h-5 w-4 p-0 mr-1" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
					Star
				</div>
				<div class="text-xs h-7 w-18 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 bg-gray-100 font-sans">
					{{ starCount }}
				</div>	
			</div>


			<div class="flex">
				<div class="flex text-xs h-7 w-18 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 font-sans">
					
				<svg class="fill-current text-gray-900 inline-block h-5 w-4 p-0 mr-1" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
					Fork
				</div>
				<div class="text-xs h-7 w-20 text-center -ml-1 py-1 font-bold px-1 border-2 border-solid border-gray-400 bg-gray-100 font-sans">
					{{ forksCount }}
				</div>	
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data', 'repoInfoLoaded'],
		name: 'RepoContentPrimaryInfoPanel',
		computed: {
			authorName() {
				if (this.repoInfoLoaded)
		        	return this.data.full_name.split("/")[0];
		    },
		    repoName() {
				if (this.repoInfoLoaded)
		    		return this.data.full_name.split("/")[1];
		    },
		    watchersCount() {
				if (this.repoInfoLoaded)
		    		return numeral(this.data.watchers_count).format('0,0')
		    },
		    starCount() {
				if (this.repoInfoLoaded)
		    		return numeral(this.data.stargazers_count).format('0,0')		    	
		    },
		    forksCount() {
				if (this.repoInfoLoaded)
		    		return numeral(this.data.forks_count).format('0,0')		    	
		    },
		}
	}
</script>