<template>
  <div class="box">
    <button @click="sendMessage()">부모 컴포넌트로 데이터 전달</button>    
  </div>
</template>
<script>
export default {
  data(){
    return {
      message:'ChildComponent에서 보낸 메시지'
    }
  },
  methods: {
    sendMessage: function() {
      this.$emit('sendMessage', this.message);
      //this.$parent.name = this.message;
    }
  }
}
</script>
