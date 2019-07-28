<template>
  <div class="attractions">
    <v-container fluid class="my-4">
      <v-layout row wrap>
         <v-flex xs12 sm6 md4 lg3 v-for="country in countries" :key="country.name">
           <v-card class="ma-3" flat color="indigo lighten-5">
             <v-img class="white--text" height="200px" :src="country.pic">
               <v-container fill-height fluid>
                 <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Tourist Attractions 
                      in {{country.name}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>                
              </v-img>          
             <v-card-text>
               <div>
                 <div class="teal--text darken-4">{{country.name}}</div>
                 <span>{{country.role}}</span>                 
               </div>
             </v-card-text>
             <v-card-actions>
               <v-btn flat @click="goTo(country.name)">go to {{country.name}}</v-btn>
             </v-card-actions>
           </v-card>
         </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countries : [
        {name: 'Nederland', role: 'Lorem ipsum dolor sit amet', 
         pic:require('@/assets/amsterdam.jpg')},
        {name: 'Germany', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/dresden.jpg')},
        {name: 'Swiss', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/swiss.jpg')},
        {name: 'Italy', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/venezia.jpg')},
        {name: 'Austria', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/vienna.jpg')},
        {name: 'France', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/paris.jpg')},
        {name: 'Czech', role: 'Lorem ipsum dolor sit amet', pic:require('@/assets/praha.jpg')}
      ]
    }
  },
  methods: {
    goTo(value) {
      alert(value + ' 로 이동');
    }
  }
}
</script>
