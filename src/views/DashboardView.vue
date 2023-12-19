<template>
    <h1>Dashboard</h1>
    <div id="dashboard">
        <div v-if="eventsDelayed.length == 0" id="athleteRoutine">
            <p>NO ATHLETE LIVE</p>
        </div>
        <div v-else id="athleteRoutine">
            <div id="athleteInfo">
                <img :src="currentAthleteThumbnail" id="thumbnail">
                <div>
                    <h2>{{ currentAthleteName }}</h2>
                    <h2>({{ currentAthleteTeam }})</h2>
                    <h3>{{ seconds }}s</h3>
                </div>
            </div>
            <div id="header">
                <span></span>
                <p style="color: #4857A0;" class="light">Seconds</p>
                <p style="color: #ED2E2F;" class="light">Pontuation</p>
            </div>
            <div id="live">
                <div v-for="ev in eventsDelayed" :key="ev.id">
                    <p class="light" id="nameMovement">{{ ev.nameMovement }}</p>
                    <div class="gridEvents">
                        <img :src="ev.movementPicture" class="movementPicture">
                        <p id="movement">{{ ev.movement }}</p>
                        <p style="color: #4857A0;" class="seconds">{{ ev.seconds }}</p>
                        <p style="color: #ED2E2F;" class="pontuation">{{ ev.pontuation }}</p>
                    </div>
                </div>
            </div>
            <div id="totalGrid">
                <span></span>
                <div id="total">
                    <p style="color: #ED2E2F;">Total: {{ totalPontuation }}</p>
                </div>
            </div>
        </div>
        <div id="tops">
            <div id="top3Teams">
                <img src="@/assets/backgrounds/leftTop3.png" class="background3 left3">
                <img src="@/assets/backgrounds/rightTop3.png" class="background3 right3">
                <h2>Top 3 Teams</h2>
                <div v-for="index in 3" id="top">
                    <h3>{{ index }}</h3>
                    <img src="">
                    <p>United States of America</p>
                    <p>70</p>
                </div>
            </div>
            <div id="top5Athletes">
                <img src="@/assets/backgrounds/leftTop5.png" class="background5 left5">
                <img src="@/assets/backgrounds/rightTop5.png" class="background5 right5">
                <h2>Top 5 Athletes</h2>
                <div v-for="index in 5" id="top">
                    <h3>{{ index }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useEventStore } from "@/stores/event"
import { useAthleteStore } from "@/stores/athlete"

export default {
    data() {
        return {
            eventsStore: useEventStore(),
            athleteStore: useAthleteStore(),
            eventsDelayed: [],
            athlete: "",
            athletes: "",
            seconds: 0,
            totalPontuation: 0,
            currentAthleteName: "",
            currentAthleteTeam: "",
            currentAthleteThumbnail: ""
        }
    },

    created() {
      try {
        this.athleteStore.fetchAthlete()
        this.eventsStore.fetchEvents()

        let currentAthleteIndex = 0
        let currentEventIndex = 0

        const displayNextEvent = () => {
          const currentAthlete = this.eventsStore.getEvents[currentAthleteIndex]
          if (currentAthlete) {
            const currentEvent = currentAthlete.events[currentEventIndex]
            if (currentEvent) {
              this.eventsDelayed.push(currentEvent)
              this.seconds = currentEvent.seconds
              this.totalPontuation += currentEvent.pontuation
              currentEventIndex++
                this.currentAthleteName = currentAthlete.athleteName
                this.currentAthleteTeam = currentAthlete.athleteTeam
                this.currentAthleteThumbnail = currentAthlete.thumbnailPath
            } else {
              currentEventIndex = 0;
              setTimeout(() => {
                currentAthleteIndex++;
                this.eventsDelayed = []; 
                this.totalPontuation = 0; 
                displayNextEvent(); 
              }, 1000);
            }
          } else {
            clearInterval(setInterval(displayNextEvent, 5000));
          }
        };
        displayNextEvent();
        setInterval(displayNextEvent, 5000);
      } catch (error) {
        alert("ERROR: " + error.message);
      }
    },



    methods: {
        top3Team() {
            
        }
    },
}
</script>

<style lang="css">
    @font-face {
        font-family: Saphile;
        src: url(@/assets/Saphile/Saphile-Regular.otf);
    }

    @font-face {
        font-family: Lexend Deca Regular;
        src: url(@/assets/Lexend_Deca/LexendDeca-Regular.ttf);
    }

    @font-face {
        font-family: Lexend Deca Light;
        src: url(@/assets/Lexend_Deca/LexendDeca-Light.ttf);
    }

    body{
        font-family: Lexend Deca Regular;
        background-color: #FCF3F3;
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
        color: #ED2E2F;
    }

    h2{
        color: #ED2E2F;
    }

    h3{
        color: #4857A0;
    }

    #top3Teams{
        border-radius: 15px;
        position: relative;
        overflow: hidden;
    }

    #top3Teams h2, #top5Athletes h2{
        margin: 0.5em 1.4em;
    }

    #top5Athletes{
        border-radius: 15px;
        position: relative;
        overflow: hidden;
    }

    #dashboard{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2em;
    }

    #tops{
        display: grid;
        grid-template-rows: 1fr 2fr;
        row-gap: 2em;
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
    grid-template-columns: 1fr 0.5fr 3fr 2fr;
    z-index: 2;
    background-color: #FCF3F3;
    margin: 2em;
    border-radius: 15px;
    height: 3.25em;
    align-items: center;
  }

  #top h3{
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
    font-size: 13px;
  }
  #nameMovement{
    text-align: left;
    margin-left: 4.5em;
  }

  .seconds, .pontuation{
    text-align: center;
  }

  #totalGrid{
    display: grid;
    grid-template-columns: 3fr 2fr;
    margin-right: 1em;
  }

  #total{
    background-color: #ED2E2F20;
    border-radius: 10px;
  }

  #total p{
    margin: 1em;
  }
</style>
