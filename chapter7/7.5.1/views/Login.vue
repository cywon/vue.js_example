<template>
  <div>
      <h3>Login 페이지</h3>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next){
    console.log('beforeRouteEnter : ' + 'to : ', to, 'from : ',  from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave : '+ 'to : ', to, 'from : ',  from);
    next();
  },
  // created(){
  //   console.log('Login 컴포넌트 created')
  // }
}
</script>
