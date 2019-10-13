<template>
	<div class="flex-row mt-6">
		<div class="flex bg-teal-100 max-w-md mx-auto sm:max-w-xl lg:max-w-5xl p-2 mb-3">
      <div class="p-2 w-1/3">
        <div class="table border-collapse">
          <div class="table-row">
            <div class="table-cell px-4 py-2 w-64 border-2 border-solid border-gray-300">
              <a href="" class="font-bold">Repositories</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell px-4 py-2 w-64 border-2 border-solid border-gray-300">
              <a href="" class="font-bold">Code</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell px-4 py-2 w-64 border-2 border-solid border-gray-300">
              <a href="" class="font-bold">Codes</a>
            </div> 
          </div>
          <div class="table-row">
            <div class="table-cell px-4 py-2 w-64 border-2 border-solid border-gray-300">
              <a href="" class="font-bold">Commits</a>
            </div>
          </div>
        </div>
      </div>

      <div class="p-2 w-full">
        <!-- <div class="border-2 border-solid border-gray-300">
          Results here
        </div> -->
        <div class="mt-6">
          <h1 class="font-bold text-2xl">
            {{ formattedResultCount }} repository results
          </h1>
        </div>
          
        <SearchInfoCard v-for="(item, i) in resultItems" :info="item"/>
        
        <div class="m-4 p-6 max-w-2xl mx-auto w-full">
          <paginate
            :page-count="pageCount"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :no-li-surround="true"
            :page-link-class="'pageLinkClass'"
            :prev-link-class="'prevLinkClass'"
            :next-link-class="'nextLinkClass'">
          </paginate>
        </div>
      </div>  
    </div>
    <div>
      
    </div>
	</div>
</template>

<script>
import SearchInfoCard from '@/components/SearchInfoCard.vue'

export default {
  name: 'SearchResults',
  components: {
    SearchInfoCard
  },
  data() {
  	return {
      resultItems: [],
      resultCount: null,
      perPage: '10',
      page: '1'
  	}
  },
  beforeRouteUpdate(to, from, next) {
    this.getResults(to.query.q);
    next()
  },
  computed: {
    formattedResultCount() {
      return numeral(this.resultCount).format(0,0);
    },
    pageCount() {
      return Math.round(this.resultCount/10);
    }
  },
  methods: {
    getResults(query) {
      axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=${this.perPage}&page=${this.page}`, {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      }).then(response => {
        this.resultItems = response.data.items;
        this.resultCount = response.data.total_count;

        console.log(this.resultItems);
      }).catch(e => {
        console.log(e);
      })
    },
    clickCallback(pageNum) {
      this.page = pageNum;
      this.getResults(this.$router.currentRoute.query.q);
    }
  },
  mounted() {
    this.getResults(this.$router.currentRoute.query.q);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
