<template>
	<div class="flex-row border-2 border-solid border-gray-300">
		<div class="flex p-2 m-0 bg-gray-300">
			<svg class="fill-current text-gray-700 inline-block h-4 w-4 m-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
			<span class="font-bold font-sm">readme.md</span>
		</div>
		<div class="p-16 overflow-hidden">
			<VueShowdown :markdown="getContent"></VueShowdown>
		</div>		
	</div>
</template>

<script>
	import { VueShowdown } from 'vue-showdown'
	export default {
		props: ['readme'],
		name: 'ReadMe',
		components: {
			VueShowdown
		},
		data() {
			return {
				params: this.$router.currentRoute.params,
				content: '',
				contentLoaded: false,
				triedLoading: false
			}
		},
		computed: {
			getContent() {
				return this.content;
			}
		},
		methods: {
			getReadmeContent() {
				let url = `https://api.github.com/repos/${this.params.author}/${this.params.repo}/contents/${this.readme}`;
				axios.get(url, {
			        headers: {
			          Accept: 'application/vnd.github.VERSION.raw'
			        }
			    }).then(response => {
			    	if (response.data.content) {
						this.content = Buffer.from(response.data.content, 'base64').toString();
			    	} else {
						this.content = response.data;
			    	}
				}).catch(e => {
					console.log(e);
				})
			}
		},
		mounted() {
			if (this.readme != null) {
				this.getReadmeContent();
			}
		}
	}
</script>