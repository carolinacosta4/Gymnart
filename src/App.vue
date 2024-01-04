<script>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

  export default {
    components: {
      NavBar,
},
  }
</script>



<template id="app">
  <NavBar v-if="this.$route.name !== 'login' && this.$route.name !== 'landingPage' && this.$route.name !== 'pageNotFound'"></NavBar>
  <RouterView />
  
</template>

<style lang="css">
  body{
    background-color: #fcf3f3;
  }
</style>