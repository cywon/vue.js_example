<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <h2>연락처 리스트</h2>
      <data-table></data-table>
    </v-content>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable';
export default {
  name: 'App',
  components: {
    DataTable
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>
  h2{
    margin-top:20px;
    margin-left: 10px;
    color:blue;
  }
</style>
