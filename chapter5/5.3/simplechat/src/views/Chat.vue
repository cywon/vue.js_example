<template>
  <div class="chat container">
    <div class="card">
      <h4 class="teal-text darken-5">여행에 대한 이야기</h4>
      <div class="card-content" id="cdcontent">
        <ul class="messages">
          <li v-for="message in messages" :key=message.id >
            <i class="material-icons white circle">person </i>
            <span class="blue-text"> {{message.name}} </span>
            <p class="white-text">{{message.content}}<br>
              <span class="white-text time">{{message.timestamp}}</span>
            </p>
            <hr />
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div> 
</template>
<script>
import NewMessage from '../components/NewMessage'
import {db} from '../firebaseinit.js'
import moment from 'moment'
export default {
  name: 'Chat',
  components: { NewMessage },
  props:['name'],
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => { 
       snapshot.docChanges().forEach( change => {
         if(change.type == 'added'){
           let doc = change.doc
           moment.locale('ko')
           this.messages.push({
             id: doc.id,
             name:doc.data().name,
             content:doc.data().content,
             timestamp:moment(doc.data().timestamp).format('lll')
           })
         }
       })      
    })
  },
  updated(){     
    var cdcontent = this.$el.querySelector("#cdcontent");
    cdcontent.scrollTop = cdcontent.scrollHeight;          
  },
}
</script>
<style scoped>
  .chat h4 { font-size: 1.6em; padding: 10px 10px 0 0; }
  .chat span { font-size: 1.4em; }
  .chat .time { display: block; font-size: 0.8em; } 
  .messages { max-height: 400px; } 
  .messages::-webkit-scrollbar{ width: 3px; }
  .messages::-webkit-scrollbar-track { background:#ddd; } 
  .messages::-webkit-scrollbar-thumb { background:#aaa; } 
  .container .card-content{ background-image:url('../assets/amsterdam.jpg'); overflow:auto; }
</style>
