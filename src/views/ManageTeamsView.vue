<template>
    <h1>Manage Users</h1>
    <div>
        <img @click="toggleBtn" src="../assets/search.png" alt="">
        <v-text-field v-if="isVisible" label="Search" v-model="searchTeams" append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
        <p>filter</p>
    </div>
    <div id="table">
        <div id="tableHead">
            <h3>Name</h3>
            <h3>Ouro</h3>
            <h3>Prata</h3>
            <h3>Bronze</h3>
            <h3>Options</h3>
        </div>
        <div id="tableBody" v-for="team in search">
            <p>{{ team.name }}</p>
            <p>{{ team.gold }}</p>
            <p>{{ team.silver }}</p>
            <p>{{ team.bronze }}</p>
            <p>{{ team.name }}</p>
        </div>
    </div>
  </template>

<script>
import { useTeamStore } from '../stores/team';

    export default {
        data() {
            return {
                teamStore: useTeamStore(),
                searchTeams: "",
                isVisible: false
            }
        },

        computed: {
            teams() {
                return this.teamStore.getTeams
            },

            search() {
                return this.teams.filter((team) => team.name.toLowerCase().startsWith(this.searchTeams.toLowerCase()))
            },

            toggleBtn() {
                return this.isVisible = !this.isVisible
            }
       },

       created () {
        this.teamStore.fetchTeams();
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
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
    height: 4em;
    align-items: center;
}
</style>