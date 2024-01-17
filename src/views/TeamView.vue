<template>
  <div class="parentContainer">
    <div id="topInfo">
      <h1 class="title">{{ team.name }}</h1>
      <img id="teamFlag" :src="`/src/assets/flagIcons/${team.flagIcon}`" alt="" />
      <img id="iconFavorite" @click="toggleFavoriteTeam" v-if="!favorite" src="/src/assets/favoriteIcon.svg"/>
      <img id="iconFavorite" @click="toggleFavoriteTeam" v-else src="/src/assets/favoriteIconFilled.svg"/>
    </div>
    <div id="teamPictureDiv">
      <img :src="team.picture" alt="" />
    </div>
    <div id="centerInfo">
      <div id="coachesDiv">
        <h1 class="title">Coaches</h1>
        <ul id="coachesList">
          <li v-for="(coach, index) in team.coachesName" :key="index" class="coachesItem">
            {{ coach }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="title">Olympic Medals</h1>
        <div id="teamMedals">
          <div class="medalsTextAlign" id="teamSilverMedals">
            <img src="../assets/iconsAthlete/silverMedal.svg" alt="" />
            <p class="medalsNumber">{{ team.silver }}</p>
          </div>
          <div class="medalsTextAlign" id="teamGoldMedals">
            <img src="../assets/iconsAthlete/goldMedal.svg" alt="" />
            <p class="medalsNumber">{{ team.gold }}</p>
          </div>
          <div class="medalsTextAlign" id="teamBronzeMedals">
            <img src="../assets/iconsAthlete/bronzeMedal.svg" alt="" />
            <p class="medalsNumber">{{ team.bronze }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="athletesList">
      <h1 class="title">Athletes</h1>
      <div class="athletesGrid">
        <div v-for="(athleteName, index) in team.athletesList" :key="index" class="athleteItem">
          <router-link v-if="getAthleteIdByName(athleteName) != null" :to="{ name: 'athlete', params: { id: getAthleteIdByName(athleteName) } }">
          {{ athleteName }}
        </router-link>
          <router-link v-else-if="getAthleteIdByName(athleteName) == null" :to="{ name: 'pageNotFound' }">
          {{ athleteName }}
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAthleteStore } from "@/stores/athlete";
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
    };
  },
  created() {
    this.teamStore.fetchTeams();
    this.athleteStore.fetchAthletes();
    this.acronym = this.$route.params.acronym;
    this.isFavorite()
    this.addLastSeen()
  },

  methods: {
    toggleFavoriteTeam() {
      this.userStore.addRemoveFavorite(this.acronym, "favoriteTeams");
      this.favorite = !this.favorite;
    },

    addLastSeen(){
      this.userStore.addLastSeenTeams(this.team.acronym)
    },

    isFavorite(){
        let favoriteTeam = this.user.favoriteTeams.find((favorite) => favorite == this.team.acronym)
        if(favoriteTeam){
            this.favorite = true
        }
    },

    getAthleteIdByName(athleteName){
      const athlete = this.athleteStore.getAthletes.find(a => a.name === athleteName);
      return athlete ? athlete.id : null;
    }
  },

  computed: {
    team() {
        return this.teamStore.getTeam(this.acronym)
    },

    user(){
        return this.userStore.getUserLogged
    }
  },
};
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

.parentContainer {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-left: 6em;
}

#headerInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#topInfo{
    display: flex;
    flex-direction: row;
    align-items: center;
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

.medalsTextAlign {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    color: #ed2e2f;
    font-family: Saphile;
    font-size: 36px;
}

.subTitle {
    color: #ed2e2f;
    font-family: Lexend Deca Regular;
}

.lastResultText {
    color: #f16a64;
    font-family: Lexend Deca Light;
}

.medalsNumber {
    color: #f16a64;
    font-family: Lexend Deca Bold;
}

.text {
    color: black;
    font-family: Lexend Deca ExtraLight;
}

.flagContainer {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
}

#teamFlag{
  max-width: 57px;
  max-height: 30px; 
  margin-left: 6.8rem;
  margin-right: 6.8rem;
}

.flagHover {
    position: absolute;
    display: none;
    left: 100%;
}

.flagHover img {
    width: 201px;
    height: 99px;
}

.flagHover p {
    margin-top: 0;
    text-align: center;
    color: #ed2e2f;
}

.flagContainer:hover .flagHover {
    display: flex;
}

#teamPictureDiv {
    height: 15.6rem;
    overflow: hidden;
    border-radius: 1.3215rem;
    margin-top: 3rem;
}

#teamPictureDiv img {
    width: 100%;
    border-radius: 1.3215rem;
}

#centerInfo {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    column-gap: 50%;
}

.coachesItem {
    color: black;
    font-family: Lexend Deca ExtraLight;
    margin-left: 3rem;
    font-size: 1.25rem;
}

#teamMedals {
    display: flex;
}

#teamSilverMedals {
     margin-top: 4.8rem;
}

#teamGoldMedals {
    margin-top: 1.4rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

#teamBronzeMedals {
     margin-top: 6.6rem;
}

#athletesList {
    margin-top: 2rem;
    font-family: Lexend Deca ExtraLight;
}

.athletesGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.athleteItem {
    padding: 1rem;
    color: black;
    font-size: 1.25rem;
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

#iconFavorite:hover{
  cursor: pointer;
}

#centerInfo{
  text-align: left;
}
</style>