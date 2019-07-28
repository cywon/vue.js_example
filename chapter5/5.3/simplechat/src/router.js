import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import TravelIntro from './views/TravelIntro.vue'
import Chat from './views/Chat.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'travelintro',
      component: TravelIntro
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props:true,
      beforeEnter: (to, from, next) => {
        (to.params.name)? next() : next('/') 
      }
    },  
    {
      path: '*',
      redirect:'/'
    }
  ]
})
