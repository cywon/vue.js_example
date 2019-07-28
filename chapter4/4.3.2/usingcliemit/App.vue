<template>
  <div id="app">
    {{ name }}
    <child-component v-on:sendMessage="receiveMessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  components: {
    ChildComponent
  },  
  data(){
    return {
        name: 'emit을 이용한 데이터 전달'
    }
  },
  methods: {
    receiveMessage(msg) {
      this.name = msg;
    }
  }
}
</script>
<style>
  #app{
    background: blue;
    padding: 6px;
    color:white;
  }
  .box{ 
    background: teal;
    margin-top:10px;
  }
  .box button{
    margin:4px;
  }
</style>


