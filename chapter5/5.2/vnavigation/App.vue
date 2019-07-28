<template>
  <div>
    <app-navigation></app-navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
export default {
  name: 'App',
  components: { AppNavigation }
}
</script>
