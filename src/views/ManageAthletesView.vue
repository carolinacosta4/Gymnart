<template>
    <div id="body">
        <h1>Manage Athletes</h1>
        <div id="filterOptions">
            <input type="text" v-if="isVisible" label="Search" v-model="searchAthletes" id="search" @keydown="changeFilterFlag('search')">
            <img @click="toggleBtn" src="../assets/search.png">
            <div class="dropdown" @mouseover="toggleDropdown(true)">
                <div class="dropbtn">
                    <img src="../assets/filter.png">
                    <p id="filterP">Filter</p>
                </div>
                <div v-if="isDropdownOpen" class="dropdownContent">
                    <p @click="changeFilterFlag('team')">Team</p>
                    <p @click="changeFilterFlag('gold')">Gold Medals</p>
                    <p @click="changeFilterFlag('silver')">Silver Medals</p>
                    <p @click="changeFilterFlag('bronze')">Bronze Medals</p>
                </div>
            </div>
            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <button class="addBtn" v-bind="props">Add Athlete</button>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <div id="head">
                            <h1 class="modalTitle">Edit your Name</h1>
                        </div>
                    <v-card-text class="data">
                        <div>
                            <p for="txtAthleteName" class="label">Name:</p><br>
                            <input type="text" placeholder="Type here..." id="txtAthleteName" v-model="name"/>
                        </div>
                        <div>
                            <label for="txtAthleteTeamAcronym" class="label">Team Acronym:</label><br/>
                            <input type="text" placeholder="Type here..." id="txtAthleteTeamAcronym" v-model="acronym"/>
                        </div>
                        <div>
                            <label for="txtAthleteDescription" class="label">Description:</label><br>
                            <input type="text" placeholder="Type here..." id="txtAthleteDescription" v-model="description"/>
                        </div>
                        <div>
                            <label for="txtAthleteCuriosities" class="label">Curiosities:</label><br>
                            <input type="text" placeholder="Type here..." id="txtAthleteCuriosities" v-model="curiosities"/>
                        </div>
                        <div>
                            <label for="txtLastResult" class="label">Last Result:</label><br>
                            <input type="text" placeholder="Type here..." id="txtLastResult" v-model="lastResult"/>
                        </div>
                        <div>
                            <label for="txtTeam" class="label">Team:</label><br>
                            <input type="text" placeholder="Choose Team..." id="txtTeam" v-model="teamName"/>
                        </div>
                        <div>
                            <label for="numAge" class="label">Age:</label><br>
                            <input type="number" placeholder="Type here..." id="numAge" v-model="age"/>
                        </div>
                        <div>
                            <label for="numGoldMedalsAthlete" class="label">Gold Medals:</label><br>
                            <input type="number" placeholder="Type here..." id="numGoldMedalsAthlete" v-model="gold"/>
                        </div>
                        <div>
                            <label for="numSilverMedalsAthlete" class="label">Silver Medals:</label><br>
                            <input type="number" placeholder="Type here..." id="numSilverMedalsAthlete" v-model="silver"/>
                        </div>
                        <div>
                            <label for="numBronzeMedalsAthlete" class="label">Bronze Medals:</label><br>
                            <input type="number" placeholder="Type here..." id="numBronzeMedalsAthlete" v-model="bronze"/>
                        </div>
                        <div>
                            <label for="txtThumbPicUrl" class="label">Thumbnail Picture Url:</label><br>
                            <input type="text" placeholder="Type here..." id="txtThumbPicUrl" v-model="picture"/>
                        </div>
                        <div>
                            <label for="txtFirstOlympics" class="label">Date First Olympics:</label><br>
                            <input type="number" placeholder="Type here..." id="txtFirstOlympics" v-model="firstOlympics"/>
                        </div>
                        <div>
                            <label for="txtHeight" class="label">Height:</label><br>
                            <input type="text" placeholder="Type here..." id="txtHeight" v-model="height"/>
                        </div>
                        <div>
                            <label for="txtLocation" class="label">Birth Place:</label><br>
                            <input type="text" placeholder="Type here..." id="txtLocation" v-model="birth"/>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                        <v-btn @click="addAthlete" class="btnSave">SAVE</v-btn>
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
            <div id="tableBody" v-for="athlete in filters" :key="athlete.id">
                <p>{{ athlete.name }}</p>
                <p>{{ athlete.gold }}</p>
                <p>{{ athlete.silver }}</p>
                <p>{{ athlete.bronze }}</p>
                <div>
                    <img src="../assets/delete.png" @click="deleteAthlete(athlete.id)">
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
                isVisible: false,
                name: "",
                acronym: "",
                description: "",
                curiosities: "",
                lastResult: "",
                teamName: "",
                age: 0,
                gold: 0,
                silver: 0,
                bronze: 0,
                picture: "",
                isDropdownOpen: false,
                filterFlag: "search",
                firstOlympics: 0,
                height: "",
                birth: ""
            }
        },

        computed: {
            athletes() {
                return this.athleteStore.getAthletes
            },

            filters(){
                if(this.filterFlag == "search") return this.athletes.filter((athlete) => athlete.name.toLowerCase().startsWith(this.searchAthletes.toLowerCase()))
                if(this.filterFlag == "gold") return this.athletes.filter((athlete) => athlete.gold > 0).sort((a, b) => b.gold - a.gold)
                if(this.filterFlag == "silver") return this.athletes.filter((athlete) => athlete.silver > 0).sort((a, b) => b.silver - a.silver)
                if(this.filterFlag == "bronze") return this.athletes.filter((athlete) => athlete.bronze > 0).sort((a, b) => b.bronze - a.bronze)
                if(this.filterFlag == "team") return this.athletes.filter((athlete) => athlete.teamAcronym).sort((a, b) => {if (a.teamAcronym < b.teamAcronym) return -1; if (a.teamAcronym > b.teamAcronym) return 1; return 0;});
            }
       },

        methods: {
            toggleBtn() {
                this.changeFilterFlag('search')
                return this.isVisible = !this.isVisible
            },

            deleteAthlete(id){
                this.athleteStore.delete(id)
            },

            editAthlete(){

            },

            addAthlete(){
                this.athleteStore.add(this.name, this.acronym, this.description, this.curiosities, this.lastResult, this.teamName, this.age, this.gold, this.silver, this.bronze, this.picture, this.firstOlympics, this.height, this.birth)
            },

            toggleDropdown(isOpen) {
                this.isDropdownOpen = isOpen;
            },

            changeFilterFlag(change){
                this.filterFlag = change
            }
        },

        created () {
            this.athleteStore.fetchAthletes();
        },
    }
</script>

<style lang="css" scoped>
@import '../assets/modals.css';
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
  margin-left: 6em !important;
}

#tableHead, #tableBody{
    display: flex;
    flex-direction: row;
}

h1{
    color: #F16A64;
    font-family: Saphile;
    font-size: 30px;
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