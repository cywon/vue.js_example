<template>
  <v-app>
    <v-content>
      <homebutton /> 
      <!-- <home /> -->
    </v-content>
  </v-app>
</template>

<script>
import homebutton from './components/HomeButton'
//import Home from './components/Home'

export default {
  name: 'App',
  components: {
    //Home
    homebutton
  },
  data () {
    return {
      //
    }
  }
}
</script>
