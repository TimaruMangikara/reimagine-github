import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/SearchResults.vue')
    },
    {
      path: '/:author/:repo',
      name: 'author-repo',
      component: () => import(/* webpackChunkName: "search" */ './views/AuthorRepo.vue')
    },
    {
      path: '/:author/:repo/tree/:branch/:path(.*)',
      name: 'author-repo-content',
      component: () => import(/* webpackChunkName: "search" */ './views/AuthorRepo.vue')
    }
  ]
})
