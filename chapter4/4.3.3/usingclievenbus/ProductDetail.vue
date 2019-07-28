<template>
  <div>
    <p>{{products[1]}}</p>
    <ul v-for="pd in products_details" :key="pd.pcode">
      <li v-if="pd.pcode == products[0]">제품코드 : {{pd.pcode}} 상세: {{pd.text}}</li>
    </ul>
  </div>
</template>
<script>

import EventBus from '../eventBus.js'

export default {
  data(){
    return{
      products_details:[{pcode:"p01", text:"Samsung, LG 노트북은..." },
        {pcode:"p02", text:"선글라스는 강렬한 햇빛과 자외선..."},
        {pcode:"p03", text:"가방은..."}
      ],
      products:[]
    }
  },
  created(){
    EventBus.$on('sendcode', (payload) => {
      this.products = payload;
    })
    // EventBus.$on('sendcode', (payload) => {
    //   this.products = payload;
    // })
    // EventBus.$off('sendcode', (payload) => {
    //   this.products = payload;
    // })   
  }
}
</script>
<style scoped>
  div {
    background: #ff4081;
    color:white;
    padding: 10px;
    font-weight: bold;
  }
  ul{ list-style: none;}
</style>
