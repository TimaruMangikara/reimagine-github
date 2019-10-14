<template>
	<div class="repoContainer flex-row">
		<!-- Primary Info Panel -->
		<div class="mainNavigation bg-gray-200 p-0 m-0 border-2 border-solid border-gray-300">
			<RepoContentPrimaryInfoPanel 
				:data="data" 
				:repo-info-loaded="checkRepoInfoLoaded">
			</RepoContentPrimaryInfoPanel>
			
			<RepoContentNavbar/>
		</div>

		<!-- Secondary Info Panel -->
		<div class="repoInfoPanel  bg-gray-100 p-0 m-0">
			<RepoContentSecondaryInfoPanel 
				:data="data" 
				:repo-info-loaded="checkRepoInfoLoaded">
			</RepoContentSecondaryInfoPanel>
		</div>

		<!-- Repo Content Table -->
		<div class="repoContentContainer bg-gray-100 p-0 m-0" v-if="!showFileContent">
			<div class="px-5 flex-row justify-between p-2 mt-3 max-w-5xl mx-auto">
				<RepoContentTable>
					<RepoContentTableRow v-for="(content, i) in repoTableContent" :content="content" 
					:author="params.author" :repo="params.repo">
					</RepoContentTableRow>
				</RepoContentTable>
			</div>
		</div>

		<!-- File Reader -->
		<div class="repoContentContainer bg-gray-100 p-0 m-0" v-if="showFileContent">
			<div class="px-5 flex-row justify-between p-2 mt-3 max-w-5xl mx-auto">
				<LinedTextarea :value="fileContent" :file-size="fileSize"></LinedTextarea>
			</div>
		</div>

		<!-- Readme  -->
		<div class="repoContentContainer bg-gray-100 p-0 m-0">
			<div class="px-5 flex-row justify-between p-2 mt-3 max-w-5xl mx-auto">
				<ReadMe v-if="showReadMe" :readme="readmeFileName"></ReadMe>
			</div>
		</div>
	</div>
</template>

<script>
import RepoContentSecondaryInfoPanel from '@/components/RepoContentSecondaryInfoPanel.vue'
import RepoContentPrimaryInfoPanel from '@/components/RepoContentPrimaryInfoPanel.vue'
import RepoContentNavbar from '@/components/RepoContentNavbar.vue'
import LinedTextarea from '@/components/LinedTextarea.vue'
import RepoContentTable from '@/components/RepoContentTable.vue'
import RepoContentTableRow from '@/components/RepoContentTableRow.vue'
import ReadMe from '@/components/ReadMe.vue'
	export default {
		name: 'AuthorRepo',
		components: {
			RepoContentSecondaryInfoPanel,
			RepoContentPrimaryInfoPanel,
			RepoContentNavbar,
			LinedTextarea,
			RepoContentTable,
			RepoContentTableRow,
			ReadMe
		},
		data() {
			return {
				data: [],
				params: this.$router.currentRoute.params,
				repoInfoLoaded: false,
				repoTableContent: [],
				showFileContent: false,
				fileContent: '',
				fileSize: ''
			}
		},
		beforeRouteUpdate(to, from, next) {
			console.log("Route Updated");
			console.log(this.params);
			next()
		},
		computed: {
			showReadMe() {
				return (!this.params.path && this.readmeFileName != undefined) ? true : false; 
			},
			readmeFileName() {
		    	let readmeFile = this.repoTableContent.filter(function(content) {
		    		return content.name.toLowerCase() == "readme.md";
		    	}).map(function(content) {
			     	return content.name;
			    });
		    	return (readmeFile.length > 0) ? readmeFile[0] : null;
		    },
		    checkRepoInfoLoaded() {
		    	return this.repoInfoLoaded;
		    }
		},
		methods: {
			getRepoContentUrl() {
		    	if (this.params.path) {
		    		return `https://api.github.com/repos/${this.params.author}/${this.params.repo}/contents/${this.params.path}`;
		    	} else {
		    		return `https://api.github.com/repos/${this.params.author}/${this.params.repo}/contents`;
		    	}
		    },
			getRepoInfo() {
				axios.get(`https://api.github.com/repos/${this.params.author}/${this.params.repo}`, {
			        headers: {
			          Accept: 'application/vnd.github.mercy-preview+json'
			        }
			    }).then(response => {
					this.data = response.data;
					this.repoInfoLoaded = true;
				}).catch(e => {
					console.log(e);
				})
			},
			getRepoContent() {
				axios.get(this.getRepoContentUrl(), {
			        headers: {
			          Accept: 'application/vnd.github.mercy-preview+json'
			        }
			    }).then(response => {	
			    	if (response.data.type != undefined && response.data.type == 'file') {
			    		this.showFileContent = true;
			    		this.fileSize = response.data.size;
			    		this.fileContent = Buffer.from(response.data.content, 'base64').toString();
			    	} else {
			    		this.repoTableContent = response.data.sort((a,b) => {
				    		return (a.type == 'dir') ? -1 : (a.type == 'file') ? 1 : 0 
				    	});
				    	this.repoTableContent = this.repoTableContent.sort((a,b) => {
				    		return (a.type == 'dir') ? -1 : (a.type == 'file') ? 1 : 0 
				    	});
			    	}
				}).catch(e => {
					console.log(e);
				})	
			}
		},
		mounted() {
			this.getRepoInfo();	
			this.getRepoContent();		
		}
	}
	
</script>

<style scoped>
	
</style>