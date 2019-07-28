<template>
  <span>
      <home-head></home-head>
      <home-body></home-body>
  </span>
</template>

<script>
  import HomeHead from '@/components/HomeHead';
  import HomeBody from '@/components/HomeBody';
  export default {
    components: { HomeHead, HomeBody }
  }
</script>
