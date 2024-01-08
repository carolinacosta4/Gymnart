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
        @import '../assets/teamPageStyle.css';
    </style>