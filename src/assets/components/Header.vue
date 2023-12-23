<template>
    <div id="header">
        <RouterLink :to="{ name: 'home' }" class="text">Home</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{name: 'dashboard'}" class="text">Dashboard</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'login' }" class="text">Login</RouterLink>
        <span class="pr-3"></span>
        <RouterLink :to="{ name: 'landingPage' }" class="text" @click="logout()">Logout</RouterLink>
        <span class="pr-3"></span>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
    data() {
        return {
            user: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null 
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("loggedUser")
            this.$router.push({ name: "landingPage" });
        }
    },
}
</script>


<style lang="scss" scoped>
#header {
    text-align: left;
    display: flex;
    flex-direction: column;

} 
.text {
    color: #4857a0;
}
</style>
