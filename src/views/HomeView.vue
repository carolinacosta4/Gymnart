<template>
  <div id="main">
    <img src="@/assets/gymnartHomepage.png" alt="">
    <p>Women's artistic gymnastics has a rich history of challenges and impressive achievements. Athletes like Nadia Comăneci and Olga Korbut broke barriers in the 1970s and 1980s with their grace and strength, inspiring future generations. Today, gymnasts continue to captivate audiences by pushing boundaries and striving for perfection.</p>
    <h2 id="subtitle">Learn more about each modality:</h2>
    <div id="btnGrid">
      <v-dialog width="800">
          <template v-slot:activator="{ props }">
            <button v-bind="props"><img src="@/assets/paralels.png" alt=""></button>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="head">
                <h1 class="modalTitle">Asymmetric Parallels</h1>
              </div>
              <v-card-text class="cardInfo">
                <div class="infoLeft">
                  <p class="regular fontSize24">The Asymmetric Parallels are composed of two parallel bars of 2.36 meters positioned at different heights. </p>
                  <ul class="regular fontSize24">
                    <li>Highest bar: 2.36m</li>
                    <li>Lowest bar: 1.7m</li>
                    <li>Distance between the two bars: 1.3 to 1.8m</li>
                  </ul>
                </div>
                <div class="infoRight">
                  <p class="regular fontSize24">To get a good score, the gymnast is obliged to:</p>
                  <ul class="regular fontSize24">
                    <li>Exchange with bar flight from top to bottom</li>
                    <li>Exchange of bars from the lower to the upper</li>
                    <li>Fly in the same bar</li>
                  </ul>

                </div>
              </v-card-text>
              <v-card-actions>
                  <v-img src="../assets/exclamation.svg"></v-img>
                  <p><b>Important!</b> These distances can vary from 10cm to more or less, depending on the height of the gymnast.</p>
                <v-spacer></v-spacer>
                <v-btn text="Got it!" class="btnCancel" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      <button><img src="@/assets/beam.png" alt=""></button>
      <button><img src="@/assets/solo.png" alt=""></button>
      <button><img src="@/assets/vault.png" alt=""></button>
    </div>
    
  </div>
</template>

<script>
  export default {

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
    
#main{
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
}

ul{
  margin-left: 3em;
}
</style>