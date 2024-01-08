<template>
    <div class="parentContainer">
        <div>
            <div id="headerInfo">
                <h1 class="title">{{ athleteStore.getAthlete(id)?.name }}</h1>
                <router-link :to="{ name: 'team', params: { acronym: athleteStore.getAthlete(id)?.teamAcronym } }">
                    <img @mouseenter="showFlagHover" @mouseleave="hideFlagHover" id="athleteTeamFlag" :src="teamStore.getTeam(athleteStore.getAthlete(id)?.teamAcronym)?.flagIcon " alt=""/>
                </router-link>
                <div id="flagHover" v-if="hovered">
                    <img src="../assets/iconsAthlete/flagHover.svg" alt=""/>
                    <div id="teamNameHover">
                        <p id="teamTitle">Team</p>
                        <p v-if="athleteStore.getAthlete(id).teamAcronym"> {{ teamStore.getTeam(athleteStore.getAthlete(id).teamAcronym)?.name }}</p>
                    </div>
                </div>
                <img id="iconFavorite" @click="toggleFavoriteAthlete" :src="favorite ? 'src/assets/iconsAthlete/favoriteIconFilled.svg' : 'src/assets/iconsAthlete/favoriteIcon.svg'" alt=""/>
                <img id="liveIcon" v-if="athleteStore.getAthlete(id)?.isLive" src="../assets/iconsAthlete/liveIcon.svg" alt="" />
                
            </div>
            <div id="athleteInfo">
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/ageIcon.svg" alt="">
                    <p>{{ athleteStore.getAthlete(id)?.age }} years</p>
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/birthPlaceIcon.svg" alt="">
                    <p>{{ athleteStore.getAthlete(id)?.location }}</p>
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/heightIcon.svg" alt="">
                    <p>{{ athleteStore.getAthlete(id)?.height }}({{ (athleteStore.getAthlete(id)?.height * 3.2808).toFixed(1) }}ft)</p>     <!--Converts metres to feet with 1 decimal place-->
                </div>
                <div class="smallInfo">
                    <img src="../assets/iconsAthlete/firstOlympicsIcon.svg" alt="">
                    <p>{{ athleteStore.getAthlete(id)?.firstOlympics}}</p>
                </div>
            </div>
            
            <h1 class="title">Olympic Medals</h1>
            <div id="medals">
                <div class="medalsTextAlign" id="silverMedals">
                    <img src="../assets/iconsAthlete/silverMedal.svg" alt="">
                    <p class="medalsNumber">{{ athleteStore.getAthlete(id)?.silver }}</p>
                </div>
                <div class="medalsTextAlign" id="goldMedals">
                    <img src="../assets/iconsAthlete/goldMedal.svg" alt="">
                    <p class="medalsNumber">{{ athleteStore.getAthlete(id)?.gold }}</p>
                </div>
                <div class="medalsTextAlign" id="bronzeMedals">
                    <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="">
                    <p class="medalsNumber">{{ athleteStore.getAthlete(id)?.bronze }}</p>
                </div>
                <div id="lastResult">
                    <p class="subTitle">Last Result:</p>
                    <p class="lastResultText">{{ athleteStore.getAthlete(id)?.lastResult }}</p>
                </div>
            </div>
            <div id="athleteCuriosities">
                <h1 class="title">Curiosities</h1>
                <p class="text">{{ athleteStore.getAthlete(id)?.curiosities }}</p>
            </div>
        </div>
        <div id="athleteImg">
            <img :src="athleteStore.getAthlete(id)?.picturePath" alt="">
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
            id: 0,
            hovered: false,
            favorite: false,
            // curAthlete: "",
            // athleteTeamAcronym: "",
        }
    },

    created() {
        this.athleteStore.fetchAthletes();
        this.teamStore.fetchTeams();
        this.id = this.$route.params.id;
        // this.curAthlete = this.athleteStore.getAthlete(this.id)
        // this.athleteTeam = this.athleteStore.getAthlete(this.id).teamAcronym
    },

    methods: {
        showFlagHover() {
            this.hovered = true;
        },

        hideFlagHover() {
            this.hovered = false;
        },

        toggleFavoriteAthlete() {
            this.userStore.addRemoveFavorite(this.id, "favoriteAthletes");
            this.favorite = !this.favorite;
        },
  },
}
</script>

<style>
    @import '../assets/athletePageStyle.css';
</style>
