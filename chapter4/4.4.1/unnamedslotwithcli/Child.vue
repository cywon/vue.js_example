<template>
  <div>
    <p>Child 컴포넌트</p>
    <!-- 아래에 slot을 통해 부모 컴포넌트인 App.vue 데이터가 표시됨 -->
    <!-- <slot></slot>
    <slot></slot> -->
  </div>
</template>
<style scoped>
  p{
    border: 3px solid teal;
    padding: 4px;
  }
</style>
