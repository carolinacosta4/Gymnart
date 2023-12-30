<template>
    <div id="body">
        <h1>Manage Teams</h1>
        <div id="filterOptions">
            <input type="text" v-if="isVisible" label="Search" v-model="searchTeams" id="search">
            <img @click="toggleBtn" src="../assets/search.png">
            <div>
                <img src="../assets/filter.png">
                <p>Filter</p>
            </div>
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
                <div>
                    <img src="../assets/delete.png" @click="deleteTeam(team.acronym)">
                    <img src="../assets/edit.svg" @click="editTeam(team.acronym)">
                </div>
            </div>
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
            }
       },

        created () {
            this.teamStore.fetchTeams();
        },

        methods: {
            toggleBtn() {
                return this.isVisible = !this.isVisible
            },

            deleteTeam(){

            },

            editTeam(){

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
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
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
    color: #4857A0;
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