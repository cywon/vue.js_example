<template>
  <div class="main">
    <div class="best">
      <h3>추천하는 관광지</h3>
      <slot name="best"></slot>
    </div>
    <div class="city">
      <h3>{{ran_city.cityname}}</h3>
      <img :src="ran_city.pic"/>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div> 
</template>
<script>
export default {
  props: ['ran_city']
}
</script>
<style>
    .main {
      border: 4px Solid blue;
    }
    .best {
      border: 4px solid teal;
      margin : 4px;
    }
    .city {
      border: 4px solid lime;
      margin : 4px;
    }
    figcaption, h3 {
      font-family: sans-serif;
      text-align: center;
      padding: 2px 0;
      width: 100%;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }
    .footer {
      bottom: 0px;
      color: white;
      background-color: teal;
      width: 100%;
      text-align: center;
    }
</style>

