<template>
  <div class="intro container">
    <div class="card">
      <div class="card-content center-align">
        <h4 class="white-text left">여행이란?</h4>
        <form @submit.prevent="enterChat">
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">입장하기</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TravelIntro',
  data(){
    return{
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      (this.name)?  this.$router.push({name:'Chat', params:{name:this.name} }) : 
                   this.feedback = "대화를 하려면 이름을 입력하세요."
    }
  }
}
</script>
<style scoped>
  .intro{ max-width: 480px; margin-top: 50px; font-size: 2em; } 
  p{ font-size: 12px; }
  .card{ background-image: url('../assets/paris.jpg'); }
</style>
