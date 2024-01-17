<template>
    <div class="parentContainer">
        <div>
            <div id="headerInfo">
                <h1 class="title">{{ athlete.name }}</h1>
                <router-link :to="{ name: 'team', params: { acronym: athlete.teamAcronym } }">
                    <img @mouseenter="showFlagHover" @mouseleave="hideFlagHover" id="athleteTeamFlag" :src="getTeamIconPath" alt=""/>
                </router-link>
                <div id="flagHover" v-if="hovered">
                    <img src="../assets/iconsAthlete/flagHover.svg" alt=""/>
                    <div id="teamNameHover">
                        <p id="teamTitle">Team</p>
                        <p v-if="athlete.teamAcronym"> {{ athlete.teamAcronym }}</p>
                    </div>
                </div>
                <img id="iconFavorite" @click="toggleFavoriteAthlete" v-if="!favorite" src="/src/assets/favoriteIcon.svg"/>
                <img id="iconFavorite" @click="toggleFavoriteAthlete" v-else src="/src/assets/favoriteIconFilled.svg"/>
            </div>
            <div id="athleteInfo">
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/ageIcon.svg" alt="">
                    <p>{{ athlete.age }} years</p>
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/birthPlaceIcon.svg" alt="">
                    <p>{{ athlete.location }}</p>
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/heightIcon.svg" alt="">
                    <p>{{ athlete.height }}({{ (athlete.height * 3.2808).toFixed(1) }}ft)</p>  
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/firstOlympicsIcon.svg" alt="">
                    <p>{{ athlete.firstOlympics}}</p>
                </div>
            </div>
            
            <h1 class="title">Olympic Medals</h1>
            <div id="medals">
                <div class="medalsTextAlign" id="silverMedals">
                    <img src="../assets/iconsAthlete/silverMedal.svg" alt="">
                    <p class="medalsNumber">{{ athlete.silver }}</p>
                </div>
                <div class="medalsTextAlign" id="goldMedals">
                    <img src="../assets/iconsAthlete/goldMedal.svg" alt="">
                    <p class="medalsNumber">{{ athlete.gold }}</p>
                </div>
                <div class="medalsTextAlign" id="bronzeMedals">
                    <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="">
                    <p class="medalsNumber">{{ athlete.bronze }}</p>
                </div>
                <div id="lastResult">
                    <p class="subTitle">Last Result:</p>
                    <p class="lastResultText">{{ athlete.lastResult }}</p>
                </div>
            </div>
            <div id="athleteCuriosities" v-if="athlete.curiosities != ''">
                <h1 class="title">Curiosities</h1>
                <p class="text">{{ athlete.curiosities }}</p>
            </div>
        </div>
        <div id="athleteImg">
            <img :src="athlete.picturePath" alt="">
        </div>
    </div>
</template>

<script>
import { useAthleteStore } from "@/stores/athlete"
import { useTeamStore } from "@/stores/team";
import { useUserStore } from "@/stores/users";

export default {
    data() {
        return {
            athleteStore: useAthleteStore(),
            teamStore: useTeamStore(),
            userStore: useUserStore(),
            hovered: false,
            favorite: false,
        }
    },

    created() {
        this.athleteStore.fetchAthletes();
        this.teamStore.fetchTeams();
        this.id = this.$route.params.id;
        this.isFavorite()
        this.addLastSeen()
    },

    methods: {
        showFlagHover() {
            this.hovered = true;
        },

        hideFlagHover() {
            this.hovered = false;
        },

        toggleFavoriteAthlete() {
            this.userStore.addRemoveFavorite(this.athlete.id, "favoriteAthletes");
            this.favorite = !this.favorite;
        },

        addLastSeen(){
            this.userStore.addLastSeenAthletes(this.athlete.id)
        },

        isFavorite(){
            let favoriteAthlete = this.user.favoriteAthletes.find((favorite) => favorite == this.athlete.id)
            if(favoriteAthlete){
                this.favorite = true
            }
        },
    },

    computed: {
        athlete() {
            return this.athleteStore.getAthlete(this.id)
        },

        teamIcon(){
            console.log(this.teamStore.getTeam(this.athlete.teamAcronym).flagIcon);
            return this.teamStore.getTeam(this.athlete.teamAcronym).flagIcon
        },

        user(){
            return this.userStore.getUserLogged
        },

        getTeamIconPath(){
            if (this.teamIcon) {
            return `/src/assets/flagIcons/${this.teamIcon}`;
        }
        return ''
        }
    },
}
</script>

<style lang="css" scoped>
    @font-face {
    font-family: Saphile;
    src: url(@/assets/Saphile/Saphile-Regular.otf);
}

@font-face {
    font-family: Lexend Deca Regular;
    src: url(@/assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: Lexend Deca Medium;
    src: url(@/assets/Lexend_Deca/LexendDeca-Medium.ttf);
}

@font-face {
    font-family: Lexend Deca ExtraLight;
    src: url(@/assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
}

@font-face {
    font-family: Lexend Deca Thin;
    src: url(@/assets/Lexend_Deca/LexendDeca-Thin.ttf);
}

@font-face {
    font-family: Lexend Deca Light;
    src: url(@/assets/Lexend_Deca/LexendDeca-Light.ttf);
}

@font-face {
    font-family: Lexend Deca Bold;
    src: url(@/assets/Lexend_Deca/LexendDeca-Bold.ttf);
}

.parentContainer{
    padding: 2rem;
    margin-left: 6em;
    display: flex;
}

#headerInfo {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 105px;
    width: 60vw;
}

.smallInfo {
    display: flex;
    flex-direction: row;
    color: black;
    font-family: Lexend Deca Light;
    font-size: 1.25rem;
}

.smallInfo img{
    width: 1.6rem;
    height: auto;
}

#medals {
    display: flex;
    flex-direction: row;
    margin-bottom:  4.25rem;
}

.medalsTextAlign{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#silverMedals{
    margin-top: 6.2rem;
    margin-left: 4.3em;
}

#goldMedals{
    margin-top: 3.2rem;
    margin-right: 1.4rem;
    margin-left: 1.4rem;
}

#bronzeMedals{
    margin-top: 7.8rem;
}

#lastResult{
    margin-left: 8rem;
    align-self: center;
    font-size: 1.25rem;
}

.lastResultText{
    color: #F16A64;
    font-family: Lexend Deca Light;
    margin-top: 2.6rem;
}

.medalsNumber{
    color: #F16A64;
    font-family: Lexend Deca Bold;
}

.title {
    color: #ED2E2F;
    font-family: Saphile;
    font-size: 2.25rem;
}

.subTitle{
    color: #ED2E2F;
    font-family: Lexend Deca Regular;
}

.text{
    color: black;
    font-family: Lexend Deca ExtraLight;
}

.flagContainer {
    position: relative;
    display: flex;
    align-items: center;
}

#flagHover{
    display: flex;
}

#athleteTeamFlag {
    max-width: 57px;
    max-height: 30px; 
    margin-left: 6.8rem;
}

#teamTitle{
    color: #ED2E2F;
    font-family: Lexend Deca Regular;
    align-self: center;
}

#teamNameHover{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1rem;
    left: 5rem;
    font-size: 1.25rem;
}

#teamNameHover:last-child{
    color:#F16A64;
    font-family: Lexend Deca ExtraLight;
    text-align: center;
}

#flagHover{
    position: relative;
}

#athleteInfo {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
}

#athleteInfo img {
    margin-right: 1.3rem;
    margin-bottom: 1.3rem;
}

#athleteCuriosities {
    width: 45rem;
}

#athleteCuriosities h1 {
    margin-bottom: 1.4rem;
}

#athleteCuriosities p{
    font-size: 1.1rem;
}

#athleteImg{
    display: flex;
}

#iconFavorite{
    position: absolute;
    margin-left: 40rem;
}

#iconFavorite:hover{
    cursor: pointer;
}

</style>
