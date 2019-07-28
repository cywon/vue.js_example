<template>
  <div>
    <h3>{{title}}</h3>
      <ul class="white">
      <li><router-link :to="{name:'productlist'}">제품 리스트(Product List)</router-link> |</li>
      <li><router-link :to="{name:'productinsert'}">제품 추가(New Product)</router-link></li>
    </ul>
      
    <!-- <ul class="white">
      <li><router-link to="/admin/list">제품 리스트(Product List)</router-link> |</li>
      <li><router-link to="/admin/insert">제품 추가(New Product)</router-link></li>
    </ul> -->


    <!-- children 라우트 -->
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Admin 페이지'
      }
    },
    beforeRouteEnter(to, from, next){
      console.log('beforeRouteEnter : ' + 'to : ', to, 'from : ',  from);
      //next();
      //next(false);
      //next('/login');
      next({name:'login', params: { id: 'cywon', pw: '1234'} });
    },
    // beforeRouteUpdate(to, from, next) {
    //   console.log('beforeRouteUpdate : ' + 'to : ', to, 'from : ',  from);
    //   next();  
    // }

  }
</script>
<style scoped>
li {
  display:inline-block;
  padding: 5px;
}

li a {
  font-weight: bold;
  color: black;
}
</style>