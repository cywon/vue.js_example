<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">메시지 입력 후 Enter키를 누르세요 </label>
      <input type="text" name="new-message" v-model="newMessage">
    </form>
  </div>
</template>
<script>
import {db} from '../firebaseinit.js'
export default {
  name: 'NewMessage',
  props:['name'],
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() { 
      if(this.newMessage != null) { 
        db.collection('messages').add({
          content: this.newMessage,
          name : this.name,
          timestamp: Date.now()
        }).catch( (error) =>{ console.log(error) }) 
      } 
      this.newMessage = null;
    }
  }
}
</script>
