<template>
  <div id="main">
    <img src="@/assets/gymnartHomepage.png" alt="">
    <p>Women's artistic gymnastics has a rich history of challenges and impressive achievements. Athletes like Nadia Comăneci and Olga Korbut broke barriers in the 1970s and 1980s with their grace and strength, inspiring future generations. Today, gymnasts continue to captivate audiences by pushing boundaries and striving for perfection.</p>
    <h2 id="subtitle">Learn more about each modality:</h2>
    <div id="btnGrid">

<!-- PARALELS -->
      <v-dialog width="800">
          <template v-slot:activator="{ props }">
            <button v-bind="props"><img src="@/assets/paralels.png" alt=""></button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="v-card">
                  <div id="head">
                  <h1 class="modalTitle">Asymmetric Parallels</h1>
                </div>
                <v-card-text class="cardInfo">
                  <div class="info">
                    <p class="regular fontSize24">The Asymmetric Parallels are composed of two parallel bars of 2.36 meters positioned at different heights. </p>
                    <ul class="regular fontSize24">
                      <li>Highest bar: 2.36m</li>
                      <li>Lowest bar: 1.7m</li>
                      <li>Distance between the two bars: 1.3 to 1.8m</li>
                    </ul>
                  </div>
                  <div class="info">
                    <p class="regular fontSize24">To get a good score, the gymnast is obliged to:</p>
                    <ul class="regular fontSize24">
                      <li>Exchange with bar flight from top to bottom</li>
                      <li>Exchange of bars from the lower to the upper</li>
                      <li>Fly in the same bar</li>
                    </ul>

                  </div>
                </v-card-text>
                <div id="actions">
                  <v-card-actions>
                    <img src="../assets/exclamation.svg" class="iconExclamation">
                    <p class="textWarning"><b>Important!</b> These distances can vary from 10cm to more or less, depending on the height of the gymnast.</p>
                    <v-spacer></v-spacer>
                    <v-btn text="Got it!" class="btnCancel ml-auto" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </template>
        </v-dialog>

<!-- BEAM -->
        <v-dialog width="800">
          <template v-slot:activator="{ props }">
            <button v-bind="props"><img src="@/assets/beam.png" alt=""></button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="v-card">
                  <div id="head">
                  <h1 class="modalTitle">Beam</h1>
                </div>
                <v-card-text class="cardInfo">
                  <div class="info">
                    <p class="regular fontSize24">The Trave is an apparatus consisting of a wooden trave coated with leather, </p>
                    <ul class="regular fontSize24">
                      <li>with 5 meters x 10 centimeters</li>
                      <li>positioned at a height of 1.25 meters from the ground</li>
                      <li>Distance between the two bars: 1.3 to 1.8m</li>
                    </ul>
                    <p class="regular fontSize24">A presentation on the trave has a duration of up to 90s. In case of fall, the gymnast has 10s to return.</p>
                  </div>
                  <div class="info">
                    <p class="regular fontSize24">To get a good score, the gymnast is obliged to:</p>
                    <ul class="regular fontSize24">
                      <li>Connect at least two different gymnastics elements</li>
                      <li>Turn</li>
                      <li>Do an acrobatic sequence with at least 2 flying elements, one being a flip</li>
                      <li>Acrobatic elements for different directions</li>
                    </ul>

                  </div>
                </v-card-text>
                <div class="actionsWithNoWarning">
                  <v-card-actions>
                    <v-btn text="Got it!" class="btnCancel" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </template>
        </v-dialog>

<!-- SOLO -->
<v-dialog width="800">
          <template v-slot:activator="{ props }">
            <button v-bind="props"><img src="@/assets/solo.png" alt=""></button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="v-card">
                  <div id="head">
                  <h1 class="modalTitle">Solo</h1>
                </div>
                <v-card-text class="cardInfo">
                  <div class="info">
                    <p class="regular fontSize24">  On the ground test, gymnasts perform swings, jumps and acrobatic movements. Gymnastics can not exceed the limit of the mattress, which has the form of

a square with 12 meters of side and that is made of elastic material that dampens impacts and helps in the impulse of the jumps. The test has between 70 and 90 seconds. In addition, in the women's test there is a background music.</p>
                  </div>
                  <div class="info">
                    <p class="regular fontSize24">To get a good score, the gymnast is obliged to:</p>
                    <ul class="regular fontSize24">
                      <li>Perform two different dance passes</li>
                      <li>Do double flips</li>
                      <li>Do flips with rotation (minimum 360 degrees)</li>
                      <li>Flips back and forth</li>
                    </ul>

                  </div>
                </v-card-text>
                <div id="actions">
                  <v-card-actions>
                    <img src="../assets/exclamation.svg" class="iconExclamation">
                    <p class="textWarning"><b>Important!</b> The score depends on the degree of difficulty, art, required elements and overall quality. In case of failures or falls, deductions are made at the end points.</p>
                    <v-spacer></v-spacer>
                    <v-btn text="Got it!" class="btnCancel ml-auto" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </template>
        </v-dialog>

<!-- VAULT -->
<v-dialog width="800">
          <template v-slot:activator="{ props }">
            <button v-bind="props"><img src="@/assets/vault.png" alt=""></button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="v-card">
                  <div id="head">
                  <h1 class="modalTitle">Vault</h1>
                </div>
                <v-card-text class="cardInfo">
                  <div class="info">
                    <p class="regular fontSize24">The Jump machine consists of a slightly inclined table 1.2 meters long and 95 centimeters wide. The table is positioned a 1.25 meters from the ground. After performing an approximation race, to gain speed, the gymnast must gain momentum on the trampoline and then touch the table with both hands simultaneously. When making a push movement, the gymnast moves away from the table and realises the jump which can contain single or multiple rotations around the body axes. The jumps are divided into 5 groups.</p> 
                  </div>
                  <div class="info">
                    <p class="regular fontSize24">To get a good score, the gymnast is obliged to:</p>
                    <ul class="regular fontSize24">
                      <li>Do an acrobaticmovement in the air</li>
                      <li>Land in a controlled manner, with their feet together, without additional steps, and demonstrating stability</li>
                      <li>Achieve a good height during the jump and distance from the machine</li>
                      <li>Land as close as possible to the area marked on the landing mattress</li>
                    </ul>

                  </div>
                </v-card-text>
                <div class="actionsWithNoWarning">
                  <v-card-actions>
                    <v-btn text="Got it!" class="btnCancel" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </template>
        </v-dialog>
      
    </div>
    
  </div>
</template>

<script>
import { useTeamStore } from '../stores/team';
import { useAthleteStore } from '../stores/athlete';

export default {
  data() {
    return {
      teamStore: useTeamStore(),
      athleteStore: useAthleteStore(),
    };
  },
    created () {
    this.athleteStore.fetchAthletes();
    this.teamStore.fetchTeams()
  },
  }
</script>

<style lang="css" scoped>
@import '../assets/modals.css';

@font-face {
    font-family: Lexend Deca Regular;
    src: url(@/assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: Lexend Deca Light;
    src: url(@/assets/Lexend_Deca/LexendDeca-Light.ttf);
}

@font-face {
  font-family: Saphile;
  src: url(@/assets/Saphile/Saphile-Regular.otf);
}
    
#main:not(#subtitle){
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  margin-left: 6em;
}

#main p{
  margin: 2em 3em 4em 3em;
  text-align: left;
  font-size: 16px;
  color: #4857a0;
  font-family: Lexend Deca Regular;
}

#btnGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 4em;
  row-gap: 2em;
}

#subtitle{
  color: #ed2e2f;
  margin-left: 2em;
  margin-bottom: 1em;
  font-family: Saphile;
  text-align: left;
  align-self: self-start;
}

.cardInfo{
display: flex;
flex-direction: row;
flex-wrap: nowrap;
column-gap: 3em;
}

ul{
  margin-left: 3em;
}

.info{
  width: 23em;
}
</style>