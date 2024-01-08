<template>
  <div class="search">
    <h1>GYMNART</h1>
    <div id="searchAlign">
      <input type="text" label="Search" v-model="search" id="searchInput" placeholder="Search...">
    </div>
    <div id="lastSeen" v-if="search == ''">
      <div id="athletesLastSeen">
        <p class="fontSize18">Last seen in <span class="bold">Athletes</span></p>
        <div class="athletes">
          <div v-for="athlete in lastAthletes" :key="athlete.id" class="athlete">
            <img :src="athlete.thumbnailPath">
            <h3>{{ athlete.name }}</h3>
          </div>
        </div>
      </div>
      <div id="teamsLastSeen">
        <p class="fontSize18">Last seen in <span class="bold">Teams</span></p>
        <div class="teams">
          <div v-for="team in lastTeams" class="team" :key="team.acronym">
            <img :src="team.picture">
            <h3>{{ team.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div v-else id="searched">
      <div v-if="athletesFilter.length > 0">
        <p class="fontSize18">Athlete</p>
        <div class="athletes">
          <div v-for="athlete in athletesFilter" :key="athlete.id" class="athlete">
            <img :src="athlete.thumbnailPath">
            <h3>{{ athlete.name }}</h3>
          </div>
        </div>
      </div>
      <div v-if="teamsFilter.length > 0">
        <p class="fontSize18">Teams</p>
        <div class="teams">
          <div v-for="team in teamsFilter" class="team" :key="team.acronym">
            <img :src="team.picture">
            <h3>{{ team.name }}</h3>
          </div>
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
        search: "",
        lastTeamsArray: [],
        lastAthletesArray: []
      }
    },

    computed: {
      athletesFilter(){
        return this.athletes.filter((athlete) => {
          let fullName = athlete.name.toLowerCase()
          const [firstName, lastName] = fullName.split(' ')
          return(firstName.startsWith(this.search.toLowerCase()) || lastName.startsWith(this.search.toLowerCase()) || athlete.teamName.toLowerCase().startsWith(this.search.toLowerCase()))
        })
      },

      teamsFilter(){
        return this.teams.filter((team) => this.athletesFilter.some((athlete) => athlete.teamName === team.name))
      },

      athletes() {
        return this.athleteStore.getAthletes
      },

      teams() {
        return this.teamStore.getTeams
      },

      user(){
        return this.userStore.getUserLogged
      },

      lastTeams(){
        this.lastSeenTeams()
        return this.lastTeamsArray
      },

      lastAthletes(){
        this.lastSeenAthletes()
        return this.lastAthletesArray
      }
    },

    methods: {
      lastSeenTeams(){
        let userLastSeen = this.user.lastSeenTeams
        userLastSeen.forEach(element => {
          let team = this.teams.find((team) => team.acronym == element)
          this.lastTeamsArray.push(team)
        });
      },

      lastSeenAthletes(){
        let userLastSeen = this.user.lastSeenAthletes
        userLastSeen.forEach(element => {
          let athlete = this.athletes.find((athlete) => athlete.id == element)
          this.lastAthletesArray.push(athlete)
        });
      },
    },
  }
</script>

<style lang="css" scoped>
@font-face {
    font-family: Lexend Deca Regular;
    src: url(@/assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: Lexend Deca ExtraLight;
    src: url(@/assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
}

@font-face {
  font-family: Saphile;
  src: url(@/assets/Saphile/Saphile-Regular.otf);
}

h1{
  font-family: Saphile;
  color: #4857A0;
  font-size: 40px;
  text-align: center;
  margin-bottom: 1em;
}

.search{
  padding: 2rem;
  margin-left: 6em;
  display: flex;
  flex-direction: column;
}

#searchAlign{
  display: flex;
  align-items: center;
  justify-content: center;
}

#searchInput{
  background-color: #4857A030;
  width: 70%;
  height: 3em;
  border-radius: 10px;
  margin-bottom: 4em;
  padding-left: 1.5em;
  color: #4857A0;
  font-family: Lexend Deca ExtraLight;
  font-size: 18px;
}

#searchInput::placeholder{
  color: #4857A0;
  font-family: Lexend Deca ExtraLight;
  font-size: 18px;
}

#searchInput:focus{
  border-color: transparent;
  outline: none;
}

.team, .athlete{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.team img, .athlete img{
  width: 12.5em;
  border-radius: 20px;
}

.athlete h3, .team h3{
  text-align: center;
}

.teams, .athletes{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2em;
}

.bold{
  font-family: Lexend Deca Regular;
  color: #F16A64;
  font-size: 18px;
}

.fontSize18{
  font-size: 18px;
  font-family: Lexend Deca ExtraLight;
  color: #F16A64;
}

#lastSeen div, #searched div{
  margin-bottom: 1.5em;
}

#lastSeen, #searched{
  width: 70%;
  margin: 0 auto;
}

h3{
  font-family: Lexend Deca ExtraLight;
  font-size: 16px;
  margin-top: 0.5em;
  color: #4857A0;
}
</style>