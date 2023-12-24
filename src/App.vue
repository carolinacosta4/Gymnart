<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './assets/components/Header.vue';

  export default {
    components: {
      Header,
    },
    created(){
      if (!localStorage.users) {
      const users = [
        { name:'Admin', username: "admin", email: 'admin@email.com', password: "1234", type:"admin", favoriteAthletes: [], favoriteTeams: [], medals: []},
        { name:'Maria', username: "maria", email: 'maria@email.com', password: "1234", type:"guest", favoriteAthletes: [], favoriteTeams: [], medals: []},
      ];
      localStorage.users = JSON.stringify(users);
    }
    }
  }
</script>



<template id="app">
  <Header v-if="this.$route.path !== '/login' && this.$route.path !== '/'"></Header>
  <RouterView />
  
</template>

<style lang="css" >
  body{
    background-color: #fcf3f3;
  }
</style>