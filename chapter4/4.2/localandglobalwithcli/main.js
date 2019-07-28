import Vue from 'vue'
import App from './App.vue'

// import ChildComponent from './components/ChildComponent.vue'
// import CompArticle from './components/CompArticle.vue'

Vue.config.productionTip = false

// Vue.component('child-component', ChildComponent);
// Vue.component('comp-article', CompArticle);

new Vue({
  render: h => h(App),
}).$mount('#app')
