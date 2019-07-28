<template>
  <div id="app">
    <products></products>
    <product-detail></product-detail>
  </div>
</template>
<script>
import Products from './components/Products.vue'   
import ProductDetail from './components/ProductDetail.vue'

export default {
  name: 'app',
  components: { Products, ProductDetail }      
}
</script>



