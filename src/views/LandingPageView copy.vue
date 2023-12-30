<script setup>
</script>

<template>
  <div id="bgContainer">
    <div id="nav" class="padding4">
      <img id="iconGymnart" src="../assets/landingPageIcons/titulo gymnart-11.svg" alt="GYMNART icon">
      <RouterLink :to="{ name: 'login' }" id="btnLoginNav"> Login</RouterLink>
    </div>

    <div id="masterMoves" class="padding4">
      <h1 class="title white">Master the Moves:</h1>
      <h2 class="subtitle white">Your Gymnastics Dashboard awaits!</h2>
      <p class="textMain white">Find out more about the scores, medals, movements and statistics of your favourites athletes and teams.</p>
      <button @click="this.$router.push('/login')" class="white" id="btnCreateAccountMaster">Create account</button>

      <img id="beigeWavesLeftBottom" src="../assets/backgrounds/beigeWavesLeftBottom.svg" alt="">

    <div id="imgsDashboard" class="beigeBG">
      <img id="imgDashFrames1" class="shadow" src="../assets/landingPageIcons/DashboardPage.png" alt="">
      <img id="imgDashFrames2" class="shadow" src="../assets/landingPageIcons/AthletePage.png" alt="">
      <div id="divImg3">
        <img id="imgDashFrames3" class="shadow" src="../assets/landingPageIcons/SearchPage.png" alt="">
        <p id="fakeDataTxt">* Fake data</p>
      </div>
      
      <div id="whyGymnart">
        <div id="whyGymnartText">
          <p class="text blue">Why GYMNART?</p>
          <h2 class="blue h2Saphile" >We keep you updated about <br> the latest statistics and scores</h2>
        </div>
        <img src="../assets/landingPageIcons/top3Teams.png" alt="" id="top3teams" class="shadow">
      </div>
      <img src="../assets/backgrounds/redWavesRigthBottom.svg" alt="" id="redWavesRigthBottom" >
    </div>
    </div>
    

    <div id="divFeatures" class="blueBG">
      <h2 class="h2Saphile white">Simple but effective features</h2>
      <div class="features">
        <img src="../assets/landingPageIcons/user.svg" alt="" class="icon">
        <div class="featuresDesc">
          <p class="featuresTitle white">ATHLETES</p>
          <p class="text white">Favourite the athletes you like the most, <br>see their last and current results</p>
        </div>    
      </div>
      <div class="features">
        <img src="../assets/landingPageIcons/group.svg" alt="" class="icon">
        <div class="featuresDesc">
          <p class="featuresTitle white">TEAMS</p>
          <p class="text white">Favourite the teams you like the most, <br>see their information and statiscs</p>
        </div> 
      </div>
        <div class="features">
        <img src="../assets/landingPageIcons/play.svg" alt="" class="icon">
        <div class="featuresDesc">
          <p class="featuresTitle white">IN REAL  TIME</p>
          <p class="text white">Follow for the latest scores in real time <br>using our dashboard</p>
        </div>
      </div> 
        <div class="features">
        <img src="../assets/landingPageIcons/badge.svg" alt="" class="icon">
        <div class="featuresDesc">
          <p class="featuresTitle white">GET YOUR OWN MEDALS</p>
          <p class="text white">Participate in our quizzes and earn your <br>own medals</p>
        </div>
      </div>


      <div id="keepTrack" class="padding4">
        <div>
          <p class="h2Saphile pink"> Wanna keep on track about your favourite athletes? </p>
          <button @click="this.$router.push('/login')" id="btnCreateAccountKeep">Create account</button>
        </div>
        <img src="../assets/landingPageIcons/heart.svg" id="heartIcon">
        <img src="../assets/backgrounds/redWavesRigthBottom.svg" alt="" id="redWavesRigthBottom2" >
      </div>

    </div>
  </div>
</template>

<style  lang="css" scoped>
@font-face {
    font-family: LexendDecaBold;
    src: url(../assets/Lexend_Deca/LexendDeca-Bold.ttf);
}

@font-face {
    font-family: LexendDecaRegular;
    src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: LexendDecaThin;
    src: url(../assets/Lexend_Deca/LexendDeca-Thin.ttf);
}

@font-face {
    font-family: Saphile;
    src: url(../assets/Saphile/Saphile-Regular.otf);
}

.white{
  color: #fcf3f3;
}

.blue{
  color: #4857a0;
}

.pink{
  color: #f16a64;
}

.blueBG{
  background-color: #4857a0;
}

.title{
  font-family: Saphile;
  font-size: 6em;
  color: #fcf3f3;
}
.subtitle{
  font-family: LexendDecaThin;
  font-size: 2.8em;
}

.textMain{
  font-family: LexendDecaThin;
  font-size: 1.8em;
  max-width: 31em;
  text-align: center;
  margin-top: 1em;
}

.text{
  font-family: LexendDecaRegular;
  font-size: 1.8em;
  max-width: 31em;
  text-align: left;
  margin-top: 1em;
}

.h2Saphile{
  font-family: Saphile;
  font-size: 3.5em;
}

.beigeBG{
  background-color: #f8e2d6;
}

.padding4{
  padding: 4em;
}
/* _____ NAV BAR ______ */

#bgContainer {
	background-color: #4857a0;
	font-family: LexendDecaRegular;
	width: 100vw;
	height: 100vh;
  margin-left: -18vw;
  margin-top: -5vh;
}


#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #4857a0;
}

#iconGymnart{
  width: 12em;
}

#btnLoginNav{
  color: #fcf3f3;
  font-family: LexendDecaThin;
  font-size: 1.3em;
  border: 1px solid;
  border-radius: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}

/* ____ MAIN PAGE MASTER THE MOVES ______ */

#masterMoves{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  background: #4857a0;
}

#btnCreateAccountMaster{
  font-family: LexendDecaThin;
  font-size: 1.5em;
  border: 1px solid;
  border-radius: 0.5em;
  width: 10em;
  height: 2em;
  margin-top: 1em;
}

#beigeWavesLeftBottom{
  position: relative;
  max-width: 30em;
  margin-bottom: -6em;
  margin-left: -4em;
  align-self: baseline;
  margin-top: -5em;
}

/* ______ BEIGE BG _______ */

#imgsDashboard{
  width: 100vw;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Adicione essa propriedade */
  z-index: 0;
  margin-top: 5em;
}

#imgDashFrames1{
  margin-top: -8em;
  border-radius: 1.5em;
  width: 50vw;
}

.shadow{
  height: auto;
  filter: drop-shadow(5px 5px 5px #343957)
}

#imgDashFrames2{
  margin-top: -25em;
  margin-left: -63em;
  border-radius: 1.5em;
  width: 30vw;
  
}

#divImg3{
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-top: -20em;
  margin-right: -60em;
  text-align: right;
}

#imgDashFrames3{
  border-radius: 1.5em;
  width: 25vw;
}

#fakeDataTxt{
  color: #ADAAAA;
  margin-right: 1em;
  margin-top: 0.8em;
}

/* ______ WHY GYMNART______ */
#redWavesRigthBottom{
  max-width: 30em;
  align-self: flex-end;
  margin-top: -11em;
  border-radius: 1.5em;
}

#top3teams{
  z-index: 2;
  border-radius: 1.5em;
}

#whyGymnartText{
  flex-direction: column;
}

#whyGymnart{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 5em;
  margin-top: 10em;
  align-items: center;
}

/* ______ FEATURES ______ */

#divFeatures{
  text-align: center;
  padding-top: 12em;
  padding-bottom: 10em;
}

.features{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 5em;
  margin-top: 5em;
}

.icon{
  height: auto;
  width: 5em;
}

.featuresTitle{
  text-align: left;
  font-family: LexendDecaRegular;
  font-size: 2em;
  margin-bottom: -1em;
}

/* ______ KEEP TRACK OF FAVOURITES ______ */

#keepTrack{
  background-color: #fcf3f3;
  width: 70vw;
  border-top-right-radius: 1.5em;
  border-bottom-right-radius: 1.5em;
  margin-top: 15em;
  column-gap: 7em;
  display: flex;
  flex-direction: row;
  text-align: left;
  padding-left: 10em;
  align-items: center;
}

#btnCreateAccountKeep{
  font-family: LexendDecaThin;
  font-size: 1.5em;
  color: #f8e2d6;
  background-color: #f16a64;
  border-radius: 0.5em;
  width: 10em;
  height: 2em;
  margin-top: 2em;
}

#heartIcon{
  height: auto;
  width: 10em;
}

#redWavesRigthBottom2{
  max-width: 20em;
  align-self: flex-end;
  border-radius: 1.5em;
  margin: -4em;

}


</style>
