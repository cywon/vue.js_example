import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/admin/Admin.vue'
import ProductList from './views/admin/ProductList.vue'
import ProductInsert from './views/admin/ProductInsert.vue'
import ProductEdit from './views/admin/ProductEdit.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'

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
      path: '/admin',
      name:'admin',
      component: Admin,
      // beforeEnter(to, from, next) {
      //   console.log('beforeEnter : ' + 'to : ', to, 'from : ',  from);
      //   next('/login');  
      // },
      children: [
        {
          path: 'list',
          name: 'productlist',
          component: ProductList
        },
        {
          path: 'insert',
          name: 'productinsert',
          component: ProductInsert
        },
        {
          path: 'edit/:id',
          name: 'productedit',
          component: ProductEdit
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },  
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
