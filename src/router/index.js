import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsView from '@/components/NewsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:site',
      name: 'Home',
      component: Home
    },
    {
      path: '/view',
      name: 'NewsView',
      component: NewsView
    }
  ]
})
