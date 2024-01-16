<script>
import { VCalendar } from 'vuetify/labs/VCalendar'

import { useDate } from 'vuetify'

const today = new Date()

  export default {
    components: {
      VCalendar,
    },
    data: () => ({
      focus: '',
      events: [],
      colors: ['#4857a0', '#f16a64', '#ed2e2f'],
      names: ['Individuals', 'Teams', 'Teams', 'Individuals'],
    }),
    mounted () {
      const adapter = useDate()
      this.fetchEvents({ start: adapter.startOfDay(adapter.startOfMonth(new Date())), end: adapter.endOfDay(adapter.endOfMonth(new Date())) })
    },
    methods: {
      getEventColor (event) {
        return event.color
      },
      fetchEvents ({ start, end }) {
        const events = [{
        title: 'Main Competition',
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0),
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0),
        color: '#4857a0',
      }]

        const min = start
        const max = end
        const eventCount = 4
        let idNames = 0

        for (let i = 0; i < eventCount; i++) {
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(min.getTime(), max.getTime())
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            title: this.names[idNames],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
          })
          idNames += 1
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>

<!-- <template>
  <main>
    <div id="content">
      <div id="information">
        <h1 class="mainTitle red saphile">Calendar</h1>
        <div>
          <div id="textInfo">
            <h3 class="text blue">Next competition:</h3>
            <p class="title blue LexendDecaMedium">1st of August 2024 | 14h </p>
            <p class="text blue">93200 Saint-Denis, France</p>
          </div>
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83966.95397172855!2d2.247342149929991!3d48.87789969440399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665da9e08e561%3A0x65455f9e577c366!2sStade%20Olympique%20Yves%20du%20Manoir!5e0!3m2!1sen!2spt!4v1704298654812!5m2!1sen!2spt" width="800" height="350" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    
      <div id="calendar">
        <v-row >
          <v-col>
            <v-sheet >
              <v-calendar
                ref="calendar"
                color="primary"
                type="day"
                :events="events"
                id="rowCalendar"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template> -->

<template>
  <main>
    <div id="content">
      <div id="information">
        <h1 class="mainTitle red saphile">Calendar</h1>
        <div id="information2">
          <div id="textInfo">
            <h3 class="text blue">Next competition:</h3>
            <p class="title blue LexendDecaMedium">1st of August 2024 | 14h </p>
            <p class="text blue">93200 Saint-Denis, France</p>
          </div>
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83966.95397172855!2d2.247342149929991!3d48.87789969440399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665da9e08e561%3A0x65455f9e577c366!2sStade%20Olympique%20Yves%20du%20Manoir!5e0!3m2!1sen!2spt!4v1704298654812!5m2!1sen!2spt" width="800" height="350" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    
      <div id="calendar">
        <v-row >
          <v-col>
            <v-sheet >
              <v-calendar
                ref="calendar"
                color="primary"
                type="day"
                :events="events"
                id="rowCalendar"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
@font-face {
  font-family: Saphile;
  src: url('../assets/Saphile/Saphile-Regular.otf');
}

@font-face {
  font-family: LexendDecaSemiBold;
  src: url('../assets/Lexend_Deca/LexendDeca-SemiBold.ttf');
}

@font-face {
  font-family: LexendDecaBold;
  src: url('../assets/Lexend_Deca/LexendDeca-Bold.ttf');
}

@font-face {
  font-family: LexendDecaRegular;
  src: url('../assets/Lexend_Deca/LexendDeca-Regular.ttf');
}

@font-face {
  font-family: LexendDecaMedium;
  src: url('../assets/Lexend_Deca/LexendDeca-Light.ttf');
}

main{
  padding: 2rem;
  margin-left: 6em;
}

.red{
  color: #ed2e2f;
}

.blue{
  color: #4857a0;
}

.title{
  font-size: 2em;
}

.mainTitle{
  font-size: 3em;
}

.saphile{
  font-family: Saphile;
}

.LexendDecaSemiBold{
  font-family: LexendDecaSemiBold;
}

.LexendDecaBold{
  font-family: LexendDecaBold;
}

.LexendDecaMedium{
  font-family: LexendDecaMedium;
}

.text{
  font-family: LexendDecaMedium;
  font-size: 1.5em;
}

/* #textInfo{
  align-self: left;
}

#content{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 3em;
}

#information{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 6em;
}

#map{
  margin-top: 2em;
}

#calendar{
  width: 50%;
}

#rowCalendar{
  background-color: #fcf3f3;
} */

#information2{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  row-gap: 6em;
  column-gap: 6em;
  margin-bottom: 2Aem;
}


#textInfo{
  align-self: center;
}


#rowCalendar{
  background-color: #fcf3f3;
}
</style>