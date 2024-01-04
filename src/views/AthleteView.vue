<template>
    <div style="margin-left: 200px">
        <div id="headerInfo">
            <h1 class="title">{{ athleteStore.getAthlete(id).name }}</h1>
            <img :src="teamStore.getTeam(athleteStore.getAthlete(id).teamAcronym).flagIcon" alt="">
            <img src="../assets/iconsAthlete/favouriteIcon.svg" alt="">
            <img src="../assets/iconsAthlete/liveIcon.svg" alt="">
        </div>
        <div id="athleteInfo">
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/ageIcon.svg" alt="">
                <p style="color: purple">{{ athleteStore.getAthlete(id).age }} years</p>
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/birthPlaceIcon.svg" alt="">
                <!-- <p style="color: purple">{{ athleteStore.getAthlete(id).birthPlace }}</p> -->
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/heightIcon.svg" alt="">
                <!-- <p style="color: purple">{{ athleteStore.getAthlete(id).height }}({{ athleteStore.getAthlete(id).height * 3.2808 }}ft)</p> -->
            </div>
            <div class="smallInfo">
                <img src="../assets/iconsAthlete/firstOlympicsIcon.svg" alt="">
                <!-- <p style="color: purple">{{ athleteStore.getAthlete(id).firstOlympics}}</p> -->
            </div>
        </div>
        <h1 style="color: blue">Olympic Medals</h1>

        <div id="medals">
            <div id="silverMedals">
                <img src="../assets/iconsAthlete/silverMedal.svg" alt="">
                <p style="color: silver">{{ athleteStore.getAthlete(id).silver }}</p>

            </div>
            <div id="goldMedals">
                <img src="../assets/iconsAthlete/goldMedal.svg" alt="">
                <p style="color: gold">{{ athleteStore.getAthlete(id).gold }}</p>
            </div>
            <div id="bronzeMedals">
                <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="">
                <p style="color: brown">{{ athleteStore.getAthlete(id).bronze }}</p>

            </div>
            <div id="lastResult">
                <p style="color: brown">Last Result: {{ athleteStore.getAthlete(id).lastResult }}</p>
            </div>
        </div>
        <div>
            <h1 style="color: blue">Curiosities</h1>
            <p style="color: pink">{{ athleteStore.getAthlete(id).curiosities }}</p>
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


#headerInfo {
    display: flex;
    flex-direction: row;
}

.smallInfo {
    display: flex;
    flex-direction: row;
}

#medals {
    display: flex;
    flex-direction: row;
}

.title {
    color: #ED2E2F;
    font-family: Saphile;
    font-size: 36px;
}
</style>