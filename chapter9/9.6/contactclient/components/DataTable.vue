<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{dialogTitle}}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="번호" v-model="contactInfo.contactId" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="이름"  v-model="contactInfo.name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="이메일"  v-model="contactInfo.email" required></v-text-field>
                </v-flex> 
                <v-flex xs12>
                  <v-text-field label="성별"  v-model="contactInfo.gender" required></v-text-field>
                </v-flex>    
                <v-flex xs12>
                  <v-text-field label="전화"  v-model="contactInfo.phone" required></v-text-field>
                </v-flex> 
                <v-flex xs12>
                  <v-text-field label="등록일"  v-model="contactInfo.register_date" required></v-text-field>
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
    </v-layout>


    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.contactId }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.gender }}</td>
          <td class="text-xs-center">{{ props.item.phone }}</td>
          <td class="text-xs-right">{{ props.item.register_date }}</td>
          <td class="text-xs-center">
            <v-btn color="primary" v-on:click.native="addContact()">추가</v-btn>
            <v-btn color="primary" v-on:click.native="updateContact(props.item)">수정</v-btn>
            <v-btn color="primary" v-on:click.native="deleteContact(props.item)">삭제</v-btn>
          </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';  
export default {
  data () {
    return {
      urlinfo:'http://localhost:8000/contacts',
      contactInfo:{
        _id: null,
        contactId: null,
        name:null,
        email:null,
        gender:null,
        phone:null,
        register_date: null
      },
      dialog: false,
      dialogTitle:null,

      headers: [
        { text: '번호', align: 'right', value: 'contactId'},
        { text: '이름', align: 'center',value: 'name' },
        { text: '이메일', align: 'right', value: 'email' },
        { text: '성별', align: 'center', value: 'gender' },
         { text: '전화', align: 'center', value: 'phone' },
        { text: '등록일', align: 'right', value: 'register_date' },
      ],
      items:[]
    }
  },
  created(){
    axios.get(this.urlinfo) //서버에 요청하기
    .then((res) => {
      console.log(res.data); //성공시
      this.items = res.data;
    })
    .catch((err) => {
      alert('에러 발생: ' + err); //에러 발생
    });
  },
  methods:{
    addContact(){
      this.dialog = true;
      this.dialogTitle = "추가";
      this.contactInfo.register_date = Date.now();
    },
    updateContact(data){
      this.dialog = true;
      this.dialogTitle = "수정";
      this.contactInfo.contactId = data.contactId;
      this.contactInfo.name = data.name;
      this.contactInfo.email = data.email;
      this.contactInfo.gender = data.gender;
      this.contactInfo.phone = data.phone;
      this.contactInfo.register_date = data.register_date;
    },
    deleteContact(data){
      this.dialog = true;
      this.dialogTitle = "삭제";
      this.contactInfo.contactId = data.contactId;
      console.log('deleteContact : ' + data);
    },

    btnClick($event){
      this.dialog = false;
      if($event.target.innerHTML == "확인"){
        if(this.dialogTitle =="추가"){ 
          axios.post(this.urlinfo,{ 
            contactId: this.contactInfo.contactId, name: this.contactInfo.name, email:  this.contactInfo.email, 
            gender: this.contactInfo.gender,
            phone:this.contactInfo.phone  //, register_date:this.contactInfo.register_date
          })
          .then(() => {
            axios.get(this.urlinfo) //서버에 요청하기
            .then((res) => {
              //console.log(res.data); //성공시
              this.items = res.data;
              alert("연락처 추가 성공");
            })
            .catch((err) => {
              alert('에러 발생: ' + err); //에러 발생
            });
            
          })
          .catch((err) => {
            alert('에러 발생: ' + err); //에러 발생
          });          
        }
        else if(this.dialogTitle=="수정"){
          //alert("입력된 정보 : " + "이메일 : " + this.contactInfo.email + " 패스워드 : " + this.contactInfo.password);
          axios.put(this.urlinfo + '/'+ this.contactInfo.contactId, { 
            contactId: this.contactInfo.contactId, name: this.contactInfo.name, email:  this.contactInfo.email, 
            gender: this.contactInfo.gender,
            phone:this.contactInfo.phone, register_date:this.contactInfo.register_date
          })
          .then(() => {          
            axios.get(this.urlinfo) //서버에 요청하기
            .then((res) => {
              //console.log(res.data); //성공시
              this.items = res.data;
              alert("업데이트 성공");
            })
            .catch((err) => {
              alert('에러 발생: ' + err); //에러 발생
            });
          })
          .catch((err) => {
            alert('에러 발생: ' + err); //에러 발생
          }); 

        }
        else {
          axios.delete(this.urlinfo + '/'+ this.contactInfo.contactId, { data: { contactId: this.contactInfo.contactId } })
          .then((result) => { 
            console.log("삭제 후" + result); //성공시
            axios.get(this.urlinfo) //서버에 요청하기
            .then((res) => {
              this.items = res.data;
              alert("삭제 성공");
            })
            .catch((err) => {
              alert(' 삭제 후 데이터 가져오는 중 에러 발생: ' + err); //에러 발생
            });            
          })
          .catch((err) => { alert('에러 발생: ' + err); });          

        }
      }
      this.contactInfo.contactId = null;
      this.contactInfo.name = null;
      this.contactInfo.email = null;
      this.contactInfo.gender = null;
      this.contactInfo.phone = null;
      this.contactInfo.register_date = null;
    }

  }
}
</script>
<style scoped>
  div{
    margin:0 5px 0 5px;
  }
</style>