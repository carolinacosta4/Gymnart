<template>
    <div id="body">
        <h1>Manage Teams</h1>
        <div id="filterOptions">
            <input type="text" v-if="isVisible" label="Search" v-model="searchTeams" id="search" @keydown="changeFilterFlag('search')">
            <img @click="toggleBtn" src="../assets/search.png">
            <div class="dropdown" @mouseover="toggleDropdown(true)">
                <div class="dropbtn">
                    <img src="../assets/filter.png">
                    <p id="filterP">Filter</p>
                </div>
                <div v-if="isDropdownOpen" class="dropdownContent">
                    <p @click="changeFilterFlag('gold')">Gold Medals</p>
                    <p @click="changeFilterFlag('silver')">Silver Medals</p>
                    <p @click="changeFilterFlag('bronze')">Bronze Medals</p>
                </div>
            </div>
            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <button v-bind="props" class="addBtn">Add Team</button>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <div id="head">
                            <h1 class="modalTitle">Add Team</h1>
                        </div>
                    <v-card-text class="data">
                        <div>
                            <p for="txtTeamName" class="label">Name:</p>
                            <input type="text" placeholder="Type here..." id="txtTeamName" v-model="name"/>
                        </div>
                        <div>
                            <label for="txtFlagIcon" class="label">Flag Icon Url:</label>
                            <br/>
                            <input type="text" placeholder="Type here..." id="txtFlagIcon" v-model="flag"/>
                        </div>
                        <div>
                            <label for="txtTeamPic" class="label">Team Picture Url:</label>
                            <br/>
                            <input type="text" placeholder="Type here..." id="txtTeamPic" v-model="picture"/>
                        </div>
                        <div>
                            <label for="txtCoaches" class="label">Coaches:</label>
                            <br/>
                            <input type="text" placeholder="Type here..." id="txtCoaches" v-model="coaches"/>
                        </div>
                        <div>
                            <label for="txtTeamAcronym" class="label">Team Acronym:</label><br>
                            <br/>
                            <input type="text" placeholder="Choose Team..." id="txtTeamAcronym" v-model="acronym"/>
                        </div>
                        <div>
                            <label for="numGoldMedalsTeam" class="label">Gold Medals:</label><br>
                            <br/>
                            <input type="number" placeholder="Type here..." id="numGoldMedalsTeam" v-model="gold"/>
                        </div>
                        <div>
                            <label for="numSilverMedalsTeam" class="label">Silver Medals:</label>
                            <br/>
                            <input type="number" placeholder="Type here..." id="numSilverMedalsTeam" v-model="silver"/>
                        </div>
                        <div>
                            <label for="numBronzeMedalsTeam" class="label">Bronze Medals:</label>
                            <br/>
                            <input type="number" placeholder="Type here..." id="numBronzeMedalsTeam" v-model="bronze"/>
                        </div>
                        <div>
                            <label for="descriptionTeam" class="label">Description:</label>
                            <br/>
                            <input type="text" placeholder="Type here..." id="descriptionTeam" v-model="description"/>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                        <v-btn @click="addTeam" class="btnSave">SAVE</v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
        <div id="table">
            <div id="tableHead">
                <h3>Name</h3>
                <h3>Ouro</h3>
                <h3>Prata</h3>
                <h3>Bronze</h3>
                <h3>Options</h3>
            </div>
            <div id="tableBody" v-for="team in filters">
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
                isVisible: false,
                name: "",
                flag: "",
                picture: "",
                coaches: "",
                acronym: "",
                gold: 0,
                silver: 0,
                bronze: 0,
                description: "",
                isDropdownOpen: false,
                filterFlag: "search"
            }
        },

        computed: {
            teams() {
                return this.teamStore.getTeams
            },

            filters(){
                if(this.filterFlag == "search") return this.teams.filter((team) => team.name.toLowerCase().startsWith(this.searchTeams.toLowerCase()))
                if(this.filterFlag == "gold") return this.teams.filter((team) => team.gold > 0).sort((a, b) => b.gold - a.gold)
                if(this.filterFlag == "silver") return this.teams.filter((team) => team.silver > 0).sort((a, b) => b.silver - a.silver)
                if(this.filterFlag == "bronze") return this.teams.filter((team) => team.bronze > 0).sort((a, b) => b.bronze - a.bronze)
            }
       },

        created () {
            this.teamStore.fetchTeams();
        },

        methods: {
            toggleBtn() {
                this.changeFilterFlag('search')
                return this.isVisible = !this.isVisible
            },

            deleteTeam(acronym){
                this.teamStore.delete(acronym)
            },

            editTeam(){

            },

            addTeam(){
                this.teamStore.add(this.name, this.flag, this.picture, this.coaches, this.acronym, this.gold, this.silver, this.bronze, this.description)
            },

            toggleDropdown(isOpen) {
                this.isDropdownOpen = isOpen;
            },

            changeFilterFlag(change){
                this.filterFlag = change
            }
        },
    }
</script>

<style lang="css" scoped>
@import url(../assets/modals.css);
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
  margin-left: 6em;
}

#tableHead, #tableBody{
    display: flex;
    flex-direction: row;
}

#tableHead{
    background-color: #F8E2D6;
    border-radius: 15px;
}

h1{
    color: #F16A64;
    font-family: Saphile;
    font-size: 30px;
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

.dropbtn{
    display: flex;
    flex-direction: row;
    margin: 0 1em;
    align-items: center;
}

#filterP{
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

.addBtn{
    background-color: #F16A64;
    border-radius: 10px;
    color: #fcf3f3;
    height: 2em;
    width: 8em;
    font-size: 20px;
    font-family: Lexend Deca ExtraLight;
}
.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: #F16A64;
  min-width: 160px;
  z-index: 1;
  top: 100%;
  border-radius: 10px;
}

.dropdownContent p {
  color: #fcf3f3;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 18px;
  font-family: Lexend Deca Regular;
}

.dropdownContent p:hover {
  background-color: #fcf3f3;
  color: #F16A64;
  border-radius: 10px;
}

.dropdown:hover .dropdownContent {
  display: block;
}
</style>