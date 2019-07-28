<template>
  <div>
    <p><input v-model="inputFilter" /></p>
    <!-- <slot :childitems="childitems" /> -->
    <slot :items="filteredList" />
  </div>
</template>
<script>
export default {
  props:["items"],
  data(){
    return {
      inputFilter:"",
      //childitems:['one', 'two', 'three']
    }
  },
  computed: {
    filteredList() {
      return this.items.filter(item => item.includes(this.inputFilter))
    }
  }
}
</script>

