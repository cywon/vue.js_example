<template>
  <div id="app">
    <child-component />
    <comp-article />
  </div>
</template>
// <script>
import ChildComponent from './components/ChildComponent'
import CompArticle from './components/CompArticle.vue'

export default {
  components: {
    'child-component': ChildComponent,
    'comp-article': CompArticle
  }
}
</script>


