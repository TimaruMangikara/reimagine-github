<template>
	<div class="table-row">
		<div class="table-cell px-4 py-1 w-full border-2 border-solid border-gray-300">
			<div class="flex">
				<!-- Content -->
				<div class="flex w-1/4">
					<svg v-if="isDirectory" aria-label="directory" class="fill-current text-indigo-800 inline-block h-4 w-4 m-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>

					<svg v-else aria-label="file" class="fill-current text-indigo-300 inline-block h-4 w-4 m-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
					
					<router-link :to="repoContentLink">
						<span class="font-sans text-indigo-700 text-sm hover:underline">
							{{ content.name }}
						</span>
					</router-link>
				</div>

				<!-- Last commit message -->
				<div class=" w-1/2 font-sans font-sm text-sm" style="overflow: hidden; text-overflow: ellipsis; white-space: pre">{{ message }}</div>
				
				<!-- Commited date -->
				<div class=" w-1/4 text-right font-sans font-sm text-sm">{{ date }}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['content', 'author', 'repo'],
		name: 'RepoContentTableRow',
		data() {
			return {
				params: this.$router.currentRoute.params,
				commitMsg: '',
				commitDate: '',
				branch: 'master'
			}
		},
		computed: {
			message() {
				return this.commitMsg.split('\n')[0];
			},
			date() {
				return this.commitDate;
			},
			isDirectory() {
				return (this.content.type == 'dir') ? true : false;
			},
			repoContentLink() {
				let path = this.content.name;
				if (this.params.path) {
					path = this.params.path + '/' + this.content.name;
				}
				return '/' + this.author + '/' + this.repo + '/tree/' + this.branch + '/' + path;
			}
		},
		beforeRouteUpdate(to, from, next) {
			console.log("Route Updated");
			console.log(this.params);
		},
		methods: {
			getCommitUrl() {
				if (this.params.path) {
					window.path = this.params.path + '/' + this.content.name;
		    		let url = `https://api.github.com/repos/${this.author}/${this.repo}/commits?path=${window.path}&page=1&per_page=1`;
		    		return url;
		    	} else {
		    		let url = `https://api.github.com/repos/${this.author}/${this.repo}/commits?path=${this.content.name}&page=1&per_page=1`;
		    		return url;
		    	}
			},
			getLastCommitData() {
				axios.get(this.getCommitUrl(), {
			        headers: {
			          Accept: 'application/vnd.github.mercy-preview+json'
			        }
			    }).then(response => {
			    	this.commitMsg = response.data[0].commit.message;
			    	
			    	this.commitDate = moment(new Date(
			    		response.data[0].commit.committer.date
			    	).toISOString())
			    	.fromNow();
				
				}).catch(e => {
					console.log(e);
				})	
			}
		},
		mounted() {
			this.getLastCommitData()
		}
	}
</script>