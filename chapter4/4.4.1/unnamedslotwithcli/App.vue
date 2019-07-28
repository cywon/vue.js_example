<template>
  <div id="app">
    <child-com>
      <!-- <div v-for="(city, idx) in cities" :key="idx">
        <h4>{{city.name}}</h4>
        <p>{{city.text}}</p>
      </div> -->
      <p>파리(Paris)에 가면 이른 저녁에 에펠탑 구경을 추천한다.</p>
    </child-com>
  </div>
</template>

<script>
import ChildCom from './components/Child'
export default {
  name: 'app',
  components: { 
    'child-com' : ChildCom
  },
  data() {
    return {
      // cities:[
      //   {name: '비엔나', text:'비엔나는 구경할 곳이 참 많은 도시 중의 하나이다.'},
      //   {name: '파리', text:'파리행 고속열차 속에서 친절한 사람들을 만났다.'},
      //   {name: '암스테르담', text:'암스테르담은 정말로 자전거가 많고 무료 운행 배를 통해 경치좋은 곳으로 이동이 가능하다.'},
      // ]
      //city : {name: '비엔나', text:'비엔나는 구경할 곳이 참 많은 도시 중의 하나이다.'}
    }
  }
}
</script>