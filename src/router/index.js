import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = () => import('@/components/HelloWorld');
const store = () => import('@/components/Store');

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
