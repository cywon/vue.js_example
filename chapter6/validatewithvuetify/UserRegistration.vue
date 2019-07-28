<template>
  <v-layout justify-center>     
     <v-flex xs12 sm6 md4 ma-4>
      <v-card class="rounded-card mb-3">
        <v-card-title class="justify-center">
          <div>
            <h3 class="headline mb-1">Vue.js 뉴스 가입하기</h3>
          </div>
        </v-card-title>
        <v-form v-model="valid" ref="myForm" @submit.prevent="handleSubmit" action="http://localhost:8080" method="post">
        <!-- <v-form v-model="valid" ref="form"> -->
          <v-text-field class="pa-2" label="이메일" id="email" name="email" v-model="user.email" :rules="emailRules" required ></v-text-field>
          <v-text-field type="password" class="pa-2" label="비밀번호" id="password" name="password" v-model="user.password" :rules="passwordRules" required></v-text-field>
          <v-checkbox class="pl-2" label="진행할까요?"  v-model="checkbox" :rules="checkboxRules" required ></v-checkbox>
          <v-btn type="submit" :class="{ red: !valid, green: valid }">전송</v-btn>
          <!-- <v-btn @click="submit" :class="{ red: !valid, green: valid }">전송</v-btn> -->
          <v-btn @click="clear">취소</v-btn>
        </v-form>
      </v-card> 
     </v-flex>
  </v-layout> 
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      user: {
        email: '',
        password:''
      },
      emailRules: [
        (v) => !!v || '이메일을 입력하세요',
        (v) => /.+@.+/.test(v) || '유효한 이메일을 입력하세요.'
      ],  
      passwordRules: [
        (v) => !!v || '비밀번호를 입력하세요',
        (v) => v && v.length >= 6 || '비밀번호는 적어도 6 자리 이상 입력하세요.'
      ],
      checkboxRules: [
        (v) => !!v || '등록하려면 동의해야 합니다!'
      ],
      checkbox: false
    }
  },
  methods: {
    handleSubmit () {
      if(this.$refs.myForm.validate() == true){
        //alert('전송 데이터\n\n' + JSON.stringify(this.user));
        //console.log(this.$refs.myForm.$el);
        this.$refs.myForm.$el.submit();
      }        
    },
    clear () {
      this.$refs.myForm.reset() //모든 input에 대해 검증오류를 제거합니다.
    }
  }
}
</script>
<style>
  .rounded-card{
      border-radius:10px;
  }
</style>


