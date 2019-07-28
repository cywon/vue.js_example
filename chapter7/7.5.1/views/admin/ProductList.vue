<template>
  <div>
    <table>
      <thead>
        <tr><th>제품코드</th><th>제품명</th><th>가격</th><th>설명</th></tr>
      </thead>  
      <tbody>
        <tr v-for="product in products" :key="product.pcode" v-on:click="sendCode(product.pcode)">
          <td>{{product.pcode}}</td>
          <td>{{product.pname}}</td>
          <td>{{product.price}}</td>
          <td>{{product.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import EventBus from '../../eventBus.js'
export default {
  name: 'home',
  data () {
    return {
      products: [ 
        { pcode:'p01', pname:'LG gram 노트북', description:'OS: Windows 10 Home, CPU:Intel Core i7, RAM : DDR4 8GB', 
          price: 1745160 },
        { pcode:'p02', pname:'페레가모 선글라스', description:'병행수입제품', price: 139400 },
        { pcode:'p03', pname:'단골언니 신발', description:'저렴한 가격의 신발', price:12800 } 
      ],
      // product:{
      //   pcode:'', pname:'', price:0, description:''
      // }
    }
  },
  methods: {
    sendCode(inCode){ 
      //console.log(inproduct);
      // this.product.pcode = inproduct.pcode;
      // this.product.pname = inproduct.pname;
      // this.product.price = inproduct.price;
      // this.product.description = inproduct.description;
      //const payload = inproduct; 
      //EventBus.$emit('sendproduct', payload);
      //console.log(payload);
      const id = inCode;
      //this.$router.push({path:`edit/${id}`});
      this.$router.push({name:'productedit', params:{id} });
      //router.push({ path: `/user/${userId}` })
    } 
  }
}
</script>

