const EventBus = new Vue();

Vue.component('result-component',{
  template: `<div>
              <h2>저희 은행을 방문해주셔서 감사합니다.</h2>
              <p>현재 대기자 수 : {{ count }} 입니다.</p>  
             </div>`,
  data(){
    return {
      count: 0,
    }
  },
  created(){
    EventBus.$on('subtract',()=>{
      if(this.count >= 1){
        this.count -= 1 ;
      }      
    }),
    EventBus.$on('add',()=>{
      this.count += 1 ;
    })
  }  
});

Vue.component('cust-component',{
  template: `<button @click="add">대기표 뽑기</button>`,
  methods:{
    add(){
      EventBus.$emit('add');
    }
  }
});

Vue.component('teller-component',{
  template: `<button @click="subtract">서비스 처리완료</button>`,
  methods:{
    subtract(){
      EventBus.$emit('subtract');
    }
  }
});
new Vue({
  el : '#app',  
});
