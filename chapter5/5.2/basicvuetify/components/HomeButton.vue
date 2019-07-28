<template>
  <div>
    <v-btn round @click="roundBtnClick">Round 버튼</v-btn>
    <v-btn class="teal white--text">기본 버튼</v-btn>
    <v-btn color="teal" flat>기본 버튼</v-btn>
    <v-btn color="teal" dark>
      <v-icon>bluetooth</v-icon>
      <span>bluetooth</span>
    </v-btn>
    <v-btn fab color="teal" dark>
      <v-icon>bluetooth</v-icon>
      <span>bluetooth</span>
    </v-btn>
  </div>
</template>
<!--
<style>
h1{ margin:10px;}
p{
  padding : 10px;
  margin: 5px 10px;
}
</style> -->
<script>
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint)
  },
  methods: {
    roundBtnClick(){
      console.log("round button");
    }
  }
}
</script>

