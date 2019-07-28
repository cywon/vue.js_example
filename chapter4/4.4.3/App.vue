<template>
  <div id="app">
    <!-- <travel-list>
      <template slot-scope="{childitems}">
        <p v-for="item in childitems" :key="item"> {{item}}</p>
      </template>
    </travel-list> -->

    <travel-list :items="cities">
      <template slot-scope="{items}">
        <p v-for="item in items" :key="item"> {{item}}</p>
      </template>
    </travel-list>
  </div>
</template>
<script>
import TravelList from './components/TravelList'
export default {
  name: 'app',
  components: { TravelList },
  data() {
    return {
      cities: ['Paris', 'Budapest', 'Seattle', 'Vancouver', 'Prague']
    }
  }
}
</script>
<!--



  <div id="app">
    <travel-list v-slot="{ items }" :items="cities">
      <p v-for="item in items" :key="item"> {{ item }} </p>
    </travel-list>
  </div>
-->