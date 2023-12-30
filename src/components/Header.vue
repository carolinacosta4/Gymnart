<template>
    <div id="header">
        <RouterLink :to="{ name: 'user' }" class="text">User Page</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'home' }" class="text">Home</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{name: 'dashboard'}" class="text">Dashboard</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'quiz' }" class="text">Quizzes</RouterLink>
        <span class="pr-3"></span>
        <RouterLink v-if="!store.isUser" :to="{ name: 'login' }" class="text">Login</RouterLink>
        <RouterLink v-else :to="{ name: 'account', params:{id: user.username} }" class="text">Account</RouterLink>
        <span class="pr-3"></span>
        <RouterLink v-if="store.isUser" :to="{ name: 'landingPage' }" class="text" @click="logout()">Logout</RouterLink>
        <span class="pr-3"></span>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/users";

export default {
    data() {
        return {
            store: useUserStore(),
        }
    },
    computed: {
        userLogged(){
            return this.store.isUser
        },
        
        user(){
            return this.store.getUser
        }
    },
    methods: {
        logout() {
            this.store.logout();
        }
    },
}
</script>


<style lang="css" scoped>
#header {
    text-align: left;
    display: flex;
    flex-direction: column;

} 
.text {
    color: #4857a0;
}
</style>
