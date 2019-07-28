<template>
  <div id="app">
    <our-header />  <!-- 3 -->
    <our-body />
    <our-footer />
  </div>
</template>
<script>
import OurHeader from './components/OurHeader.vue'    //--1
import OurBody from './components/OurBody.vue'
import OurFooter from './components/OurFooter.vue'
export default {
  name: 'app',
  components: {
    OurHeader, OurBody, OurFooter 
  }
}
</script>
