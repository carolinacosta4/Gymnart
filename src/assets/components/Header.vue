<template>
    <div id="header">
        <RouterLink :to="{ name: 'home' }" class="text">Home</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{name: 'dashboard'}" class="text">Dashboard</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'login' }" class="text">Login</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'quiz' }" class="text">Quizzes</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'landingPage' }" class="text" @click="logout()">Logout</RouterLink>
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
        isUser(){
            return this.store.isUser
        },
    },
    methods: {
        logout() {
            const store = useUserStore()
            // if (store.isUser) {
                store.logout();
            // }
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
