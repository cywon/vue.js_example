new Vue({
  el:'#app',
  data: {
    employees:[]
  },
  created() {
    axios.get('http://localhost:3000/employees')
    .then((res) => {
      console.log(res); //성공시
      this.employees = res.data;
    })
    .catch((err) => {
      console.log(err); //에러 발생시
    });
  }
})
