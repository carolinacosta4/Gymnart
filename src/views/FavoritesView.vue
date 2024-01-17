<template>
  <div class="main">
    <h1 class="mainTitle red saphile">Favorites</h1>
    <div class="favorites">

      <div id="favAthlete">
        <p class="subtitle  saphile red">Favorite Athletes</p>
        <v-carousel :continuous="false" class="carousel mx-auto" v-if="user.favoriteAthletes.length > 0" hide-delimiters>
          <v-carousel-item v-for="athlete in favAthletes" :key="athlete.id" class="carouselInfo">
            <div class="info">
              <router-link :to="{ name: 'athlete', params:{id: athlete.id}  }">
                <img :src="athlete.picturePath" class="img">
              </router-link>
              <h3 class="description">{{ athlete.description }}</h3>
            </div>
          </v-carousel-item>
        </v-carousel>
        <div id="noFavAthlete" v-else>
          <p class="lexendRegular blue emptyList" >Your favorite <b>athletes</b> list is empty! <br> Try filling it by clickling on the heart icon on the page of any athlete you like.</p>
        </div>
      </div>

      <div id="favTeam">
        <p class="subtitle  saphile red">Favorite Teams</p>
        <v-carousel :continuous="false" class="carousel mx-auto" v-if="user.favoriteTeams.length > 0" hide-delimiters>
          <v-carousel-item v-for="team in favTeams" :key="team.acronym" class="carouselInfo">
            <div class="info">
              <router-link :to="{ name: 'team', params:{acronym: team.acronym}  }">
                <img :src="team.picturePath" class="img">
              </router-link>
              <h3 class="description">{{ team.description }}</h3>
            </div>
          </v-carousel-item>
        </v-carousel>
        <div id="noFavAthlete" v-else>
          <p class="lexendRegular blue emptyList" >Your favorite <b>teams</b> list is empty! <br> Try filling it by clickling on the heart icon on the page of any team you like.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useTeamStore } from '../stores/team';
  import { useAthleteStore } from '../stores/athlete';
  import { useUserStore } from '../stores/users';

  export default {
    data() {
      return {
        teamStore: useTeamStore(),
        athleteStore: useAthleteStore(),
        userStore: useUserStore(),
        favoritesTeamsArray: [],
        favoritesAthletesArray: []
      }
    },

    computed: {
      user(){
        return this.userStore.getUserLogged
      },

      athletes() {
        return this.athleteStore.getAthletes
      },

      teams() {
        return this.teamStore.getTeams
      },

      favAthletes(){
        this.favoritesAthletes()
        return this.favoritesAthletesArray
      },

      favTeams(){
        this.favoritesTeams()
        return this.favoritesTeamsArray
      }
    },
    methods: {
      favoritesAthletes(){
        let favoritesList = this.user.favoriteAthletes
        favoritesList.forEach(element =>{
          let athlete = this.athletes.find((athlete) => athlete.id == element)
          // console.log(athlete);
          this.favoritesAthletesArray.push({
            id: athlete.id,
            picturePath: athlete.thumbnailPath,
            description: athlete.description
          })
          console.log(this.favoritesAthletesArray);
          
        })
      },
      favoritesTeams(){
        let favoritesTeamsList = this.user.favoriteTeams
        favoritesTeamsList.forEach(element =>{
          let team = this.teams.find((team) => team.acronym == element)
          this.favoritesTeamsArray.push({
            acronym: team.acronym,
            picturePath: team.picture,
            description: team.description
          })
          
        })
      }
    }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: LexendDecaRegular;
  src: url('../assets/Lexend_Deca/LexendDeca-Regular.ttf');
}

@font-face {
  font-family: LexendDecaMedium;
  src: url('../assets/Lexend_Deca/LexendDeca-Light.ttf');
}

@font-face {
  font-family: Saphile;
  src: url('../assets/Saphile/Saphile-Regular.otf');
}

@font-face {
  font-family: LexendDecaSemiBold;
  src: url('../assets/Lexend_Deca/LexendDeca-SemiBold.ttf');
}

.main{
  padding: 2rem;
  margin-left: 6em;
}

.red{
  color: #ed2e2f;
}

.blue{
  color: #4857A0;
}

.lexendRegular{
  font-family: LexendDecaRegular;
}

.mainTitle{
  font-size: 3em;
}

.saphile{
  font-family: Saphile;
}

.emptyList{
  text-align: center;
}

.favorites{
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  row-gap: 4em;
}
.subtitle{
  font-size: 1.8em;
}

.img{
  width: 20em;
  border-radius: 2em;
}

.description{
  font-family: LexendDecaMedium;
  font-size: 1.1em;
  max-width: 40em;
}

.info{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 3em;
  align-items: center;
  margin-left: 6em;
  margin-right: 6em;
}

.carouselInfo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.carousel{
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:70em;
  margin-bottom: -9em;
}
</style>
