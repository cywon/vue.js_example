<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-btn slot="activator" color="primary" dark>결제</v-btn>
      <v-card>
        <v-card-title class="headline">{{ service.name }}</v-card-title>
        <v-card-text>전 과정 4성급 호텔, 한식 및 현지 맛집이 포함된 알찬 
        {{ service.name }} 결제하시겠습니까?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="btn_click($event)">취소</v-btn>
          <v-btn color="green darken-1" flat @click.native="btn_click($event)">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog:false,
      service: {name:'알찬 동유럽 여행(7박 8일)'}
    }
  },
  methods:{ 
    btn_click($event){
      if ($event.target.innerHTML == "확인") { 
        console.log("감사합니다. 결제가 진행됩니다."); 
      }
      this.dialog = false;
    }
  }
}
</script>

