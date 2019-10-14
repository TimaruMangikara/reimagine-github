<template>
	<div class="flex-row relative">
		<input type="" 
			class="bg-teal-900 p-2 h-10 w-64 focus:bg-white" 
			placeholder="Search R-GitHub" 
			@keyup="searching"
			@keyup.enter="getSearchResults($event)"
			@blur="isSearching = false"
			v-model="searchKey"
		>
		<div v-if="isSearching" class="flex justify-between text-white p-2 bg-indigo-600 absolute h-10 w-full text-left">
			<div class="flex">
     <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white w-6">
      <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
      </svg>
      <span class="ml-2">{{ searchKey }}</span>   
      </div>
			<span class="bg-gray-300 text-gray-700 px-2 py-1 m-0 text-xs">All Github ↵</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
  	return {
  		isSearching: false,
  		searchKey: ''
  	}
  },
  methods: {
  	searching() {
  		this.isSearching = (this.searchKey != '') ? true : false;
  	},
  	getSearchResults(event) {
  		this.$router.push({ 
  			path: '/search', 
  			query: { 
  				q: this.searchKey 
  			} 
  		}).catch(err => {});

  		this.searchKey = '';
  		event.target.blur();
  	}
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
