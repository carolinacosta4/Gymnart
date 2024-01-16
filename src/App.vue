<script>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { useTeamStore } from './stores/team';
import { useAthleteStore } from './stores/athlete';

  export default {
    components: {
      NavBar,
    },

    data() {
      return {
        teamStore: useTeamStore(),
        athleteStore: useAthleteStore()
      }
    },

created () {
    this.athleteStore.fetchAthletes();
    this.teamStore.fetchTeams()
  },
  }
</script>



<template id="app">
  <RouterView />
  <NavBar v-if="this.$route.name !== 'login' && this.$route.name !== 'landingPage' && this.$route.name !== 'pageNotFound'"></NavBar>
</template>

<style lang="css">
  body{
    background-color: #fcf3f3;
  }
</style>