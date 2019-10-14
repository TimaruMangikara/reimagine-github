<template>
	<div class="flex-row mt-6">
		<div class="flex bg-teal-100 max-w-md mx-auto sm:max-w-xl lg:max-w-5xl p-2 mb-3">
      
      <SearchTypeSideNavbar/>
      
      <div class="p-2 w-full">
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
import SearchTypeSideNavbar from '@/components/SearchTypeSideNavbar.vue'
export default {
  name: 'SearchResults',
  components: {
    SearchInfoCard,
    SearchTypeSideNavbar
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
