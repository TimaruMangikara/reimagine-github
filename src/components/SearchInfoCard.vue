<template>
<div class="flex p-2 mt-3 border-t-2 border-gray-300 border-solid">
  
  <div class="flex-row m-0 p-2 w-full">
    <div class="font-bold text-indigo-700 text-2xl hover:underline">
     <router-link :to="repoLink"> {{ authorName }}/<span class="italic">{{ repoName }}</span></router-link>
    </div>
    <div>
      <p class="font-sans text-sm" style="overflow: hidden; text-overflow: ellipsis; white-space: pre-line">{{ description }}</p>
    </div>
    <div class="flex mt-2 w-auto">
      <span class="text-xs text-indigo-700 px-2 bg-indigo-100 mr-2 hover:bg-indigo-200" v-for="(tag) in topics">{{ tag }}</span>
    </div>
    <div>
      <p class="font-sans text-xs mt-2">
      Updated {{ repoUpdatedAt }}
      </p>
    </div>
  </div>
  
  <div class="flex mt-4 mr-32">
    <span class="repo-language-color bg-indigo-700 mr-1"></span>
    <span class="-mt-1">{{info.language}}</span>
  </div>

  <div class="flex mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-600 inline-block h-4 w-4" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <span class="-mt-1">{{ watchersCount }}</span>
  </div>
</div>
</template>

<script>
	export default {
    props: ['info'],
		name: 'SearhcInfoCard',
    data() {
      return {

      }
    },
    computed: {
      authorName() {
        return this.info.full_name.split("/")[0];
      },
      repoName() {
        return this.info.full_name.split("/")[1];
      },
      description() {
        return this.info.description.split('.')[0];
      },
      repoUpdatedAt() {
        return moment(new Date(this.info.updated_at)
          .toISOString())
        .fromNow(); 

      },
      watchersCount() {
        return numeral(this.info.watchers_count).format('0 a').replace(/\s/g,'');
      },
      topics() {
        return this.info.topics.slice(0, 3);
      },
      repoLink() {
        let name = this.info.full_name.split("/");
        return '/' + name[0] + '/' + name[1];
      }
    },
    mounted() {
      console.log("I am here")
      console.log(this.info);
    }
	}
</script>