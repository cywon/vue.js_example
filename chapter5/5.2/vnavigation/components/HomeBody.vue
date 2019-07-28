<template>
  <v-container fluid>
    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-2">테마 여행</v-flex>
    <v-tabs color="cyan" slider-color="purple darken-4">
      <v-tab v-for="(item, idx) in items" :key="item.title" :href="'#tab-' +idx">{{item.title}}</v-tab>
      <v-tab-item v-for="(item, idx) in items" :key="item.title" :value="'tab-' + idx">
        <v-card flat height="400px" color="grey lighten-4">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.text}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>
<script>
export default {
  name: 'HomeBody',
  data() {
      return {
        items: [
          {title:'음식', text:'각 나라, 도시별로 특색있는 음식 맛보기'},
          {title:'예술/문화', text:'각 나라, 도시별로 특색있는 공연, 미술 관람하기'},
          {title:'쇼핑', text:'각 나라, 도시별만의 특별한 아이템 쇼핑하기'},
          {title:'이색체험/휴식', text:'색다른 체험이나 자연 속에서 휴식하기'}
        ]
      }
  }
};
</script>
