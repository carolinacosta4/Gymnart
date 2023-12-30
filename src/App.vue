<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

  export default {
    components: {
      Header,
},
  }
</script>



<template id="app">
  <Header v-if="this.$route.name !== 'login' && this.$route.name !== 'landingPage' && this.$route.name !== 'pageNotFound'"></Header>
  <RouterView />
  
</template>

<style lang="css">
  body{
    background-color: #fcf3f3;
  }
</style>