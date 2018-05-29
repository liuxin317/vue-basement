import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld,
      children: [
        {
          path: 'store',
          component: store
        }
      ]
    },
    {
      path: '/store',
      component: store,
    }
  ]
})
