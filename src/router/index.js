import Vue from 'vue'
import Router from 'vue-router'
import DatePage from '@/page/datePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DatePage',
      component: DatePage
    }
  ]
})
