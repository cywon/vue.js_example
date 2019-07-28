<template>
  <div>
    <v-toolbar flat app dark color="teal">
      <v-toolbar-side-icon class="white--text hidden-sm-and-up" 
      @click="nav_drawer = !nav_drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Best Travel</span>
        <span>Tips</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link in links" :key="link.icon" :to="link.route">{{ link.text }}</v-btn>
      </v-toolbar-items>             
    </v-toolbar>
    <v-navigation-drawer app v-model="nav_drawer" class="hidden-sm-and-up">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.name" router :to="link.route">
          <v-list-tile-action>
            <v-icon left>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>    
  </div>  
</template>
<script>
export default {
  name:'AppNavigation',
  data() {
    return {
      nav_drawer:false,
      links: [
        {icon:'home', text:'홈', name:'home',  route: '/'},
        {icon:'place', text:'관광명소', name:'attractions', route: '/attractions'},
        {icon:'account_circle', text:'로그인', name:'login', route: '/log-in'},
      ]
    }
  }
}
</script>

