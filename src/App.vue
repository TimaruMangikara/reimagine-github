<template>
  <div id="app">
    <div id="" class="flex justify-between bg-gray-800 px-4 py-4">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->

      <div>
        <a href="/"><h1 class="text-white font-bold text-2xl m-0 p-0"><span class="text-indigo-300">Reimagine</span> Github</h1></a>
      </div>

      <div class="flex justify-center text-center">
        <SearchBox/>
        <a href="" class="px-2 py-1 text-white ml-2">
          <span class="text-white text-md font-extrabold">Sign In</span> 
        </a>
        <a href="" class="px-2 py-1 rounded border-2 border-solid  text-white ml-2">
          <span class="text-white text-md font-extrabold">Sign Up</span> 
        </a>

      </div>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>


<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',
  components: {
    SearchBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
