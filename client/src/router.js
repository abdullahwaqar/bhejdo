import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Home from './views/Home.vue'

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
