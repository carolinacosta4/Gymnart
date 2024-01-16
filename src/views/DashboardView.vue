<template>
  <div id="body">
      <h1 class="red">Dashboard</h1>
      <div id="dashboard">
          <div v-if="eventsDelayed.length == 0" id="noAthleteRoutine">
            <img src="@/assets/movements/movement.png" style="width: 10em;">
            <h2 id="noAthlete">NO ATHLETE LIVE :(</h2>
          </div>
          <div v-else id="athleteRoutine">
              <div id="athleteInfo">
                  <img :src="currentAthleteThumbnail" id="thumbnail">
                  <div>
                    <router-link class="link" :to="{ name: 'athlete', params:{id: currentAthleteID}  }">
                      <h2 class="red">{{ currentAthleteName }}</h2>
                    </router-link>
                    <router-link class="link" :to="{ name: 'team', params:{acronym: currentAthleteTeam}  }">
                      <h2 class="red">({{ currentAthleteTeam }})</h2>
                    </router-link>
                    <h3 class="blue fontSize">{{ seconds }}s</h3>
                  </div>
              </div>
              <div id="header">
                  <span></span>
                  <p class="blue light fontSize13">Seconds</p>
                  <p class="red light fontSize13">Pontuation</p>
              </div>
              <div id="live">
                  <div v-for="ev in eventsDelayed" :key="ev.id">
                      <p class="light" id="nameMovement">{{ ev.nameMovement }}</p>
                      <div class="gridEvents">
                          <img :src="ev.movementPicture" class="movementPicture">
                          <p id="movement" class="regular">{{ ev.movement }}</p>
                          <p class="blue seconds fontSize20 regular">{{ ev.seconds }}</p>
                          <p class="red pontuation fontSize20 regular">{{ ev.pontuation }}</p>
                      </div>
                  </div>
              </div>
              <div id="totalGrid">
                  <span></span>
                  <div id="total">
                      <p class="red regular">Total: {{ totalPontuation }}</p>
                  </div>
              </div>
          </div>
          <div id="tops">
            <div v-if="top3TeamsArray.length == 0" id="noTop3">
              <img src="@/assets/backgrounds/leftTop3.png" class="background3 left3">
              <img src="@/assets/backgrounds/rightTop3.png" class="background3 right3">
              <img src="@/assets/movements/turn.png" style="width: 10em;">
              <h2 id="noAthlete">NO TOP 3 YET!</h2>
            </div>
            <div v-else id="top3Teams">
                <img src="@/assets/backgrounds/leftTop3.png" class="background3 left3">
                <img src="@/assets/backgrounds/rightTop3.png" class="background3 right3">
                <h2 class="blue">Top 3 Teams</h2>
                <div v-for="(team, index) in sortPontuationTeam" id="top">
                    <h3 class="blue light fontSize20">{{ index+1 }}</h3>
                    <router-link class="link" :to="{ name: 'team', params:{acronym: team.teamAcronym}  }">
                      <img :src="team.teamThumbnail" style="width: 52px; border-radius: 7px;">
                    </router-link>
                    <router-link class="link" :to="{ name: 'team', params:{acronym: team.teamAcronym}  }">
                      <p class="red light fontSize16">{{ team.teamName }}</p>
                    </router-link>
                    <p class="blue light fontSize20">{{ team.teamPontuation }}</p>
                </div>
            </div>
            <div v-if="top5AthletesArray.length == 0" id="noTop5">
              <img src="@/assets/backgrounds/leftTop5.png" class="background5 left5">
              <img src="@/assets/backgrounds/rightTop5.png" class="background5 right5">
              <div>
                <img src="@/assets/movements/entry.png" style="width: 10em;">
                <h2 id="noAthlete">NO TOP 5 YET!</h2>
              </div>
            </div>
            <div v-else id="top5Athletes">
                <img src="@/assets/backgrounds/leftTop5.png" class="background5 left5">
                <img src="@/assets/backgrounds/rightTop5.png" class="background5 right5">
                <h2 class="red">Top 5 Athletes</h2>
                <div v-for="(athlete, index) in sortPontuationAthlete" id="top">
                    <h3 class="light fontSize20">{{ index+1 }}</h3>
                    <router-link class="link" :to="{ name: 'athlete', params:{id: athlete.id}  }">
                      <img :src="athlete.athleteThumbnail" style="width: 52px; border-radius: 7px;">
                    </router-link>
                    <router-link class="link" :to="{ name: 'athlete', params:{id: athlete.id}  }">
                      <p class="blue light fontSize16">{{ athlete.athleteName }}</p>
                    </router-link>
                    <p class="red light fontSize20">{{ athlete.pontuation }}</p>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { useEventStore } from "@/stores/event"
import { useAthleteStore } from "@/stores/athlete"
import { useTeamStore } from "@/stores/team"

export default {
    data() {
        return {
            eventsStore: useEventStore(),
            athleteStore: useAthleteStore(),
            teamStore: useTeamStore(),
            eventsDelayed: [],
            athlete: "",
            athletes: "",
            seconds: 0,
            totalPontuation: 0,
            currentAthleteName: "",
            currentAthleteTeam: "",
            currentAthleteThumbnail: "",
            currentAthleteID: 0,
            top5AthletesArray: [],
            top3TeamsArray: [],
            currentAthlete: ""
        }
    },

    created() {
      try {
        this.athleteStore.fetchAthletes()
        this.eventsStore.fetchEvents()
        this.teamStore.fetchTeams()

        let currentAthleteIndex = 0
        let currentEventIndex = 0
        let interval = ""

        const displayEvent = () => {
          this.currentAthlete = this.eventsStore.getEvents[currentAthleteIndex]
          if (this.currentAthlete) {
            let athleteFind = this.athleteStore.getAthlete(this.currentAthlete.idAthlete)
            const currentEvent = this.currentAthlete.events[currentEventIndex]
            if (currentEvent) {
              this.eventsDelayed.push(currentEvent)
              this.seconds = currentEvent.seconds
              this.totalPontuation += currentEvent.pontuation
              currentEventIndex++
              this.currentAthleteName = athleteFind.name
              this.currentAthleteTeam = athleteFind.teamAcronym
              this.currentAthleteThumbnail = athleteFind.thumbnailPath
              this.currentAthleteID = athleteFind.id
              
            } else {
              currentEventIndex = 0;
              this.top3Teams()
              this.top5Athletes()
              currentAthleteIndex++;
              this.eventsDelayed = []; 
              this.totalPontuation = 0; 
              displayEvent(); 
            }
          } else {
            clearInterval(interval);
          }
        };
        displayEvent();
        interval = setInterval(displayEvent, 5000);
      } catch (error) {
        alert("ERROR: " + error.message);
      }
    },

    methods: {
        top3Teams() {
          let team = this.teamStore.getTeam(this.currentAthleteTeam)
          let findTeamIndex = this.top3TeamsArray.findIndex((team) => team.teamAcronym == this.currentAthleteTeam)
          if(findTeamIndex != -1){
            let pontuation = +this.top3TeamsArray[findTeamIndex].teamPontuation + this.totalPontuation
            let teamReplace =  {teamName: team.name, teamAcronym: team.acronym, teamThumbnail: team.picture, teamPontuation: pontuation}
            this.top3TeamsArray.splice(findTeamIndex, 1, teamReplace)
          }else{
            this.top3TeamsArray.push({teamName: team.name, teamAcronym: team.acronym, teamThumbnail: team.picture, teamPontuation: this.totalPontuation})
          }
        },

        top5Athletes(){
          this.top5AthletesArray.push({athleteName: this.currentAthleteName, athleteThumbnail: this.currentAthleteThumbnail, pontuation: this.totalPontuation, id: this.currentAthleteID})
        }
    },

    computed: {
      sortPontuationAthlete() {
        const sortedPontuationArray = this.top5AthletesArray.sort((a, b) => {
          if(a.pontuation > b.pontuation) return -1
          if(a.pontuation == b.pontuation) return 0
          if(a.pontuation < b.pontuation) return 1
        })

        return sortedPontuationArray.slice(0, 5)
      },

      sortPontuationTeam(){
        const sortedPontuationArray = this.top3TeamsArray.sort((a, b) => {
          if(a.teamPontuation > b.teamPontuation) return -1
          if(a.teamPontuation == b.teamPontuation) return 0
          if(a.teamPontuation < b.teamPontuation) return 1
        })
        return sortedPontuationArray.slice(0, 3)
      },

    },
}
</script>

<style lang="css" scoped>
  @font-face {
      font-family: Saphile;
      src: url(../assets/Saphile/Saphile-Regular.otf);
  }

  @font-face {
      font-family: Lexend Deca Regular;
      src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
  }

  @font-face {
      font-family: Lexend Deca Light;
      src: url(../assets/Lexend_Deca/LexendDeca-Light.ttf);
  }

  #body{
    font-family: Lexend Deca Regular !important;
    padding: 2rem;
    margin-left: 6em;
  }

  #noAthleteRoutine{
    border: 1px solid #ED2E2F;
    border-radius: 15px;
    height: 84%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #noTop3{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
  }

  #noTop5{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* position: relative;
    overflow: hidden; */
  }

  #noAthlete{
    color: #ED2E2F;
    text-align: center;
  }

  .gridEvents {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      margin: 0.5em 0;
  }

  .movementPicture {
      width: 3em;
      margin-left: 4em;
  }

  #athleteInfo{
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 2em 4em;
    font-family: Lexend Deca Regular;
    column-gap: 1em;
  }

  #thumbnail{
    width: 7em;
    border-radius: 7px;
  }

  #athleteRoutine{
    border: 1px solid #ED2E2F;
    border-radius: 15px;
    height: 84%;
  }

  h1{
      font-family: Saphile;
  }

  .fontSize20{
    font-size: 20px;
  }

  .fontSize16{
    font-size: 16px;
  }

  .fontSize13{
    font-size: 13px;
  }

  #top3Teams{
    border-radius: 15px;
    position: relative;
    overflow: hidden;
  }

  #top3Teams h2, #top5Athletes h2{
    margin: 0.5em 1.4em;
  }

  h2, .regular{
    font-family: Lexend Deca Regular;
  }

  #top5Athletes, #noTop5{
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    min-height: 40em;
  }

  #noTop5 div{
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 25%;
  }

  #dashboard{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    min-height: 40em;
  }

  #tops{
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 2em;
    min-height: 40em;
  }

  .background3 {
    height: 100%;
    position: absolute;
    z-index: -1; 
  }

  .background5 {
    height: 80%;
    position: absolute;
    z-index: -1; 
  }

  .left5{
    height: 50%;
    top: 25%;
  }

  .left5, .left3 {
    left: 0;
  }

  .right5, .right3 {
    right: 0;
    width: 20em;
  }

  #teste {
    position: absolute;
    z-index: 1; 
  }

  #top{
    display: grid;
    grid-template-columns: 0.1fr 0.1fr 4fr 2fr;
    column-gap: 2em;
    z-index: 2;
    background-color: #FCF3F3;
    margin: 2em;
    border-radius: 15px;
    height: 3.25em;
    align-items: center;
  }

  #top5Athletes div h3{
    margin: 0 2em;
    color: #ED2E2F50;
  }

  #top3Teams div h3{
    margin: 0 2em;
    color: #4857A050;
  }

  #header{
    display: grid;
    text-align: center;
    grid-template-columns: 2fr 1fr 1fr;
  }

  #live{
    min-height: 66%;
  }

  .light{
    font-family: Lexend Deca Light;
  }
  #nameMovement{
    text-align: left;
    margin-left: 4em;
  }

  .seconds, .pontuation{
    text-align: center;
  }

  .blue{
    color: #4857A0;
  }

  .red{
    color: #ED2E2F;
  }

  #totalGrid{
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-right: 1em;
  }

  #total{
    background-color: #ED2E2F20;
    border-radius: 10px;
  }

  #total p{
    margin: 0.5em;
    font-size: 20px;
    text-align: center;
  }

  .link{
    text-decoration: none;
  }
</style>
