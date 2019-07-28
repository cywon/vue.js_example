var Home = { template: '<div><h3>Home</h3></div>'}
var Admin = { template: `
<div>
  <h3>Admin</h3>
  <ul class="white">
    <li><router-link to="/admin">제품 리스트</router-link> | </li>
    <li><router-link to="/admin/details">제품 상세 정보</router-link></li>
  </ul>
</div>
` }
var Pro_List = { template: '<div>product_list</div>' }
var Pro_Details = { template: '<div>product_details</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'home',
      component: Home  
    },
    {
      path: '/admin',
      components: {
        default: Admin,
        first: Pro_List,
        second: Pro_Details
      }
    },    
    {
      path: '/admin/details',
      components: {
        default: Admin,
        first: Pro_Details,
        second: Pro_List
      }
    }
  ]
})
