<template>
    <div id="body">
        <h1>Manage Athletes</h1>
        <div id="filterOptions">
            <input type="text" v-if="isVisible" label="Search" v-model="searchAthletes" id="search">
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
            <div id="tableBody" v-for="athlete in search">
                <p>{{ athlete.name }}</p>
                <p>{{ athlete.gold }}</p>
                <p>{{ athlete.silver }}</p>
                <p>{{ athlete.bronze }}</p>
                <div>
                    <img src="../assets/delete.png" @click="deleteAthlete(athlete.name)">
                    <img src="../assets/edit.svg" @click="editTeam(athlete.name)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useAthleteStore } from '../stores/athlete';

    export default {
        data() {
            return {
                athleteStore: useAthleteStore(),
                searchAthletes: "",
                isVisible: false
            }
        },

        computed: {
            athletes() {
                return this.athleteStore.getAthletes
            },

            search() {
                return this.athletes.filter((athlete) => athlete.name.toLowerCase().startsWith(this.searchAthletes.toLowerCase()))
            }
       },

        methods: {
            toggleBtn() {
                return this.isVisible = !this.isVisible
            },

            deleteAthlete(){

            },

            editAthlete(){

            }
        },

        created () {
            this.athleteStore.fetchAthletes();
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

body{
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