import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Players from '@/components/Players'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    }
  ]
})
