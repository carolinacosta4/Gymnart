<template>
    <h1>Manage Users</h1>
    <div>
        <img @click="toggleBtn" src="../assets/search.png" alt="">
        <v-text-field v-if="isVisible" label="Search" v-model="searchUsers" append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
        <p>filter</p>
    </div>
    <div id="table">
        <div id="tableHead">
            <h3>Username</h3>
            <h3>Email</h3>
            <h3>Role</h3>
            <h3>Options</h3>
        </div>
        <div id="tableBody" v-for="user in search">
            <p>{{ user.username }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.type }}</p>
            <p>{{ user.username }}</p>
        </div>
    </div>
  </template>

<script>
import { useUserStore } from '../stores/users';

    export default {
        data() {
            return {
                userStore: useUserStore(),
                searchUsers: "",
                isVisible: false
            }
        },

        computed: {
            users() {
                return this.userStore.getUsers
            },

            search() {
                return this.users.filter((user) => user.username.toLowerCase().startsWith(this.searchUsers.toLowerCase()))
            },

            toggleBtn() {
                return this.isVisible = !this.isVisible
            }
       },
    }
</script>

<style lang="css" scoped>
@font-face {
    font-family: Lexend Deca Regular;
    src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
  font-family: Lexend Deca ExtraLight;
  src: url(../assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
} 

#tableHead, #tableBody{
    display: flex;
    flex-direction: row;
}

#tableHead{
    background-color: #F8E2D6;
    border-radius: 15px;
}

#tableHead h3{
    /* padding: 0 2em; */
    text-align: center;
    font-family: Lexend Deca Regular;
    color: #F16A64;
    font-size: 22px;
}

#tableBody p{
    text-align: center;
    font-family: Lexend Deca ExtraLight;
    color: #ED2E2F;
    font-size: 18px;
}

#tableBody, #tableHead{
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 2fr;
    height: 4em;
    align-items: center;
}
</style>