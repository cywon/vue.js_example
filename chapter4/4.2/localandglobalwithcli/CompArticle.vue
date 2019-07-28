<template>
  <div class="container">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum mollitia ab earum nam alias repellendus asperiores! Vel, dolorum dolorem.</div>
    <child-component />
  </div>  
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    'child-component' : ChildComponent
  }
}
</script>
<style scoped>
  div{
    background: #00897b;
    color:white;
    padding: 10px 20px;
  }
</style>


