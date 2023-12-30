<template>
    <div id="body">
        <h1>Manage Users</h1>
        <div id="filterOptions">
            <input type="text" v-if="isVisible" label="Search" v-model="searchUsers" id="search">
            <img @click="toggleBtn" src="../assets/search.png">
            <div>
                <img src="../assets/filter.png">
                <p>Filter</p>
            </div>
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
                <div>
                    <img src="../assets/block.png" @click="blockUser(user.username)">
                    <img src="../assets/delete.png" @click="deleteUser(user.username)">
                </div>
            </div>
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
            }
         },

        methods: {
            toggleBtn() {
                return this.isVisible = !this.isVisible
            },

            blockUser(username) {
                this.userStore.blocked(username)
            },

            deleteUser(username){
                this.userStore.delete(username)
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

#body{
  padding: 2rem;
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

#tableBody div{
    display: flex;
    align-items: center;
    justify-content: center;
}

#tableBody div img{
    width: 2em;
    margin: 0 1em;
}

#filterOptions{
    display: flex;
    flex-direction: row;
    margin-bottom: 2em;
    justify-content: right;
    align-items: center;
}

#filterOptions img{
    width: 2em;
    height: 2em;
}

#filterOptions div{
    display: flex;
    flex-direction: row;
    margin: 0 1em;
    align-items: center;
}

#filterOptions p{
    font-size: 24px;
    color: #F16A64;
    font-family: Lexend Deca Regular;
}

#filterOptions div img{
    width: 2.4em;
    height: 1.6em;
    margin: 0 1em;
}

#search{
    background-color: #fcf3f3;
    border-bottom: 3px solid #F16A64;
    outline: none;
}
</style>