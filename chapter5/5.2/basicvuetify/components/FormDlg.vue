<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" color="primary" dark>로그인(Log in)</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Log in</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Email" v-model="userInfo.email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" type="password" v-model="userInfo.password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="btnClick($event)">취소</v-btn>
        <v-btn color="blue darken-1" flat @click="btnClick($event)">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data(){
    return {
      userInfo :{
        email:'',
        password:''
      },
      dialog: false
    }
  },
  methods: {
    btnClick($event){
      this.dialog = false
      if($event.target.innerHTML == "확인"){
        console.log("입력된 정보 : " + "이메일 : " + this.userInfo.email + " 패스워드 : " + 
                   this.userInfo.password); 
      }
      this.userInfo.email ='',
      this.userInfo.password =''
    } 
  }
}
</script>

