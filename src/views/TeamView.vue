    <template>
    <div class="parentContainer">
        <div id="topInfo">
            <h1 class="title">{{ teamStore.getTeam(acronym)?.name }}</h1>
            <img id="teamFlag" :src="teamStore.getTeam(acronym)?.flagIcon" alt=""/>
            <img id="iconFavorite" @click="toggleFavoriteTeam" :src="favorite ? 'src/assets/iconsAthlete/favoriteIconFilled.svg' : 'src/assets/iconsAthlete/favoriteIcon.svg'" alt=""/>
        </div>
        <div id="teamPictureDiv">
            <img :src="teamStore.getTeam(acronym)?.picture" alt="">
        </div>
        <div id="centerInfo">
            <div id="coachesDiv">
                <h1 class="title">Coaches</h1>
                <ul id="coachesList">
                    <li v-for="(coach, index) in teamStore.getTeam(acronym)?.coachesName" :key="index" class="coachesItem">
                        {{ coach }}
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="title">Olympic Medals</h1>
                <div id="teamMedals">
                    <div class="medalsTextAlign" id="teamSilverMedals">
                        <img src="../assets/iconsAthlete/silverMedal.svg" alt="">
                        <p class="medalsNumber">{{ teamStore.getTeam(acronym)?.silver }}</p>
                    </div>
                    <div class="medalsTextAlign" id="teamGoldMedals">
                        <img src="../assets/iconsAthlete/goldMedal.svg" alt="">
                        <p class="medalsNumber">{{ teamStore.getTeam(acronym)?.gold }}</p>
                    </div>
                    <div class="medalsTextAlign" id="teamBronzeMedals">
                        <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="">
                        <p class="medalsNumber">{{ teamStore.getTeam(acronym)?.bronze }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="athletesList">
            <h1 class="title">Athletes</h1>
            <div class="athletesGrid">
                <div v-for="(athleteName, index) in teamStore.getTeam(acronym)?.athletesList" :key="index" class="athleteItem">
                    <router-link :to="{ name: 'athlete', params: { id: 1 } }">{{ athleteName }}</router-link>
                </div>
            </div>
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
                acronym: "",
                favorite: false,
            }
        },
        created () {
            this.teamStore.fetchTeams();
            this.athleteStore.fetchAthletes();
            this.acronym = this.$route.params.acronym
        },
        methods: {
            toggleFavoriteTeam() {
                this.userStore.addRemoveFavorite(this.acronym, "favoriteTeams");
                this.favorite = !this.favorite;
            },
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

.parentContainer{
    padding: 2rem;
    margin-left: 15em;
    display: flex;
}

#headerInfo {
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
    width: 300px;
}

#athleteTeamFlag {
    width: 57px;
    height: 30px; 
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
    position: absolute;
    z-index: 1;
    top: 0;
    left: 1.7rem;
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

#flagHover img {
    width: 201px;
    height: 99px;
    align-self: center;
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
    margin-left: 5.9rem;
    display: flex;
}

#iconFavorite{
    margin-left: 15rem;
}

#liveIcon{
    margin-left: 10rem;
}


    </style>