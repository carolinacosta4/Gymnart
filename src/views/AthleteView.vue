<template>
    <div id="parentContainer">
        <div id="headerInfo">
            <h1 class="title">{{ athleteStore.getAthlete(id).name }}</h1>
            <img :src="teamStore.getTeam(athleteStore.getAthlete(id).teamAcronym).flagIcon" alt="">
            <img src="../assets/iconsAthlete/favouriteIcon.svg" alt="">
            <img src="../assets/iconsAthlete/liveIcon.svg" alt="">
        </div>
        <div id="athleteInfo">
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/ageIcon.svg" alt="">
                <p>{{ athleteStore.getAthlete(id).age }} years</p>
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/birthPlaceIcon.svg" alt="">
                <!-- <p>{{ athleteStore.getAthlete(id).birthPlace }}</p> -->
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/heightIcon.svg" alt="">
                <!-- <p>{{ athleteStore.getAthlete(id).height }}({{ athleteStore.getAthlete(id).height * 3.2808 }}ft)</p> -->
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/firstOlympicsIcon.svg" alt="">
                <!-- <p>{{ athleteStore.getAthlete(id).firstOlympics}}</p> -->
            </div>
        </div>
        
        <h1 class="title">Olympic Medals</h1>
        <div id="medals">
            <div class="medalsTextAlign" id="silverMedals">
                <img src="../assets/iconsAthlete/silverMedal.svg" alt="">
                <p class="medalsNumber">{{ athleteStore.getAthlete(id).silver }}</p>

            </div>
            <div class="medalsTextAlign" id="goldMedals">
                <img src="../assets/iconsAthlete/goldMedal.svg" alt="">
                <p class="medalsNumber">{{ athleteStore.getAthlete(id).gold }}</p>
            </div>
            <div class="medalsTextAlign" id="bronzeMedals">
                <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="">
                <p class="medalsNumber">{{ athleteStore.getAthlete(id).bronze }}</p>

            </div>
            <div id="lastResult">
                <p class="subTitle">Last Result:</p>
                <p class="lastResultText">{{ athleteStore.getAthlete(id).lastResult }}</p>
            </div>
        </div>
        <div>
            <h1 class="title">Curiosities</h1>
            <p class="text">{{ athleteStore.getAthlete(id).curiosities }}</p>
        </div>
        <div>
            <img :src="athleteStore.getAthlete(id).picturePath" alt="">
        </div>
    </div>
</template>

<script>
import { useAthleteStore } from "@/stores/athlete"
import { useTeamStore } from "@/stores/team";
export default {
    data() {
        return {
            athleteStore: useAthleteStore(),
            teamStore: useTeamStore(),
            id: 1,
            // curAthlete: "",
            // athleteTeamAcronym: "",
        }
    },
    created() {
        this.athleteStore.fetchAthletes();
        this.teamStore.fetchTeams();
        // this.curAthlete = this.athleteStore.getAthlete(this.id)
        // this.athleteTeam = this.athleteStore.getAthlete(this.id).teamAcronym
    },
}
</script>

<style>
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

#parentContainer{
    padding: 2rem;
    margin-left: 6em;
}

#headerInfo {
    display: flex;
    flex-direction: row;
}

.smallInfo {
    display: flex;
    flex-direction: row;
    color: black;
    font-family: Lexend Deca ExtraLight;
}

#medals {
    display: flex;
    flex-direction: row;
}

.medalsTextAlign{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    color: #ED2E2F;
    font-family: Saphile;
    font-size: 36px;
}

.subTitle{
    color: #ED2E2F;
    font-family: Lexend Deca Regular;
}

.lastResultText{
    color: #F16A64;
    font-family: Lexend Deca Light;
}

.medalsNumber{
    color: #F16A64;
    font-family: Lexend Deca Bold;
}

.text{
    color: black;
    font-family: Lexend Deca ExtraLight;
}
</style>