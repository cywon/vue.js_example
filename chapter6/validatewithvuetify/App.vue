<template>
  <v-app>
    <v-content>
      <UserRegistration/>
    </v-content>
  </v-app>
</template>

<script>
import UserRegistration from './components/UserRegistration'

export default {
  name: 'App',
  components: {
    UserRegistration
  }
}
</script>
