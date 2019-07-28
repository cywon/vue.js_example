<template>
  <v-container fluid fill-height class="home-head" >
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">JUNGFRAUJOCH</div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
      TOP OF EUROPE</div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
      Join a memorable trip to Jungfraujoch and the Top of Europe</div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'HomeHead'
};
</script>
<style scoped>
.home-head {
    background: url('~@/assets/interlaken2.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>

