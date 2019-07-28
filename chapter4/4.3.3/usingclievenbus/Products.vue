<template>
  <ul>
    <li v-for="product in products" :key="product.pcode" v-on:click="sendCode(product.pcode, $event)">{{product.pname}}</li>
  </ul>
</template>
<script>

import EventBus from '../eventBus.js'

export default {
  data() {
    return {
      products: [ { pcode:'p01', pname:'노트북' },
           { pcode:'p02', pname:'선글라스' },
           { pcode:'p03', pname:'가방' }, 
      ]
    }
  },
  methods: {
    sendCode(incode, $event){
    //sendCode(product, $event){
      //console.log(product, $event)
      // console.log(incode, $event);
      // console.log($event.target.innerHTML);
      // const payload = {
      //   pcode: incode,
      //   pname: $event.target.innerHTML
      // }

      const payload = [ incode,$event.target.innerHTML];  
      EventBus.$emit('sendcode', payload)
    }    
  }
}
</script>
<style scoped>
  ul {
    list-style-type: none;
    background: #3399ff;
    padding: 10px;
  }

  ul li {
    background: #cce5ff;
    margin: 5px;
  }
</style>