<template>
  
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
      <picture>
        <source  type="image/webp" srcset="../assets/landingPageIcons/DashboardPage.webp 1142w, ../assets/landingPageIcons/DashboardPage-1000.webp 1000w, ../assets/landingPageIcons/DashboardPage-720.webp 720w, ../assets/landingPageIcons/DashboardPage-360.webp 360w" sizes="50w" style="width: 50vw; height: 100%" >
        <source  type="image/jpeg" srcset="../assets/landingPageIcons/DashboardPage.jpg 1142w, ../assets/landingPageIcons/DashboardPage-1000.jpg 1000w, ../assets/landingPageIcons/DashboardPage-720.jpg 720w, ../assets/landingPageIcons/DashboardPage-360.jpg 360w" sizes="50w" style="width: 50vw; height: 100%" >
        <img id="imgDashFrames1" class="shadow" src="../assets/landingPageIcons/DashboardPage-360.webp" sizes="50w" style="width: 50vw; height: 100%">
      </picture>
      
      <picture>
        <source  type="image/webp" srcset="../assets/landingPageIcons/AthletePage.webp 1142w, ../assets/landingPageIcons/AthletePage-1000.webp 1000w, ../assets/landingPageIcons/AthletePage-650.webp 650w, ../assets/landingPageIcons/AthletePage-325.webp 325w" sizes="30w" style="width: 30vw; height: 100%" >
        <source  type="image/jpeg" srcset="../assets/landingPageIcons/AthletePage.jpg 1142w, ../assets/landingPageIcons/AthletePage-1000.jpg 1000w, ../assets/landingPageIcons/AthletePage-650.jpg 650w, ../assets/landingPageIcons/AthletePage-325.jpg 325w" sizes="30w" style="width: 30vw; height: 100%" >
        <img id="imgDashFrames2" class="shadow" src="../assets/landingPageIcons/AthletePage-325.webp" sizes="30w" style="width: 30vw; height: 100%">
      </picture>

      <div id="divImg3">
        <picture>
        <source  type="image/webp" srcset="../assets/landingPageIcons/SearchPage.webp 1142w, ../assets/landingPageIcons/SearchPage-1000.webp 1000w, ../assets/landingPageIcons/SearchPage-650.webp 650w, ../assets/landingPageIcons/SearchPage-325.webp 325w" sizes="25w" style="width: 25vw; height: 100%" >
        <source  type="image/jpeg" srcset="../assets/landingPageIcons/SearchPage.jpg 1142w, ../assets/landingPageIcons/SearchPage-1000.jpg 1000w, ../assets/landingPageIcons/SearchPage-650.jpg 650w, ../assets/landingPageIcons/SearchPage-325.jpg 325w" sizes="25w" style="width: 25vw; height: 100%" >
        <img id="imgDashFrames3" class="shadow" src="../assets/landingPageIcons/SearchPage-325.webp" sizes="25w" style="width: 25vw; height: 100%">
      </picture>
        <p id="fakeDataTxt">* Fake data</p>
      </div>
      
      <div id="whyGymnart">
        <div id="whyGymnartText">
          <p class="text blue">Why GYMNART?</p>
          <h2 class="blue h2Saphile" >We keep you updated about <br> the latest statistics and scores</h2>
        </div>
        <picture >
          <source type="image/webp" srcset="../assets/landingPageIcons/top3Teams.webp" style="width: 100%; height: 100%">
          <source type="image/jpeg" srcset="../assets/landingPageIcons/top3Teams.jpg" style="width: 100%; height: 100%" >
          <img id="top3teams" class="shadow" src="../assets/landingPageIcons/top3Teams.webp" style="width: 100%; height: 100%">
        </picture>
      </div>
      <img src="../assets/backgrounds/redWavesRigthBottom.svg" alt="" id="redWavesRigthBottom" >
    </div>
    </div>
    

    <div id="divFeatures" class="blueBG">
      <h2 class="h2Saphile white" id="featuresTitle">Simple but effective features</h2>
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
</template>

<style  lang="css" scoped>
@font-face {
    font-family: LexendDecaBold;
    src: url(../assets/Lexend_Deca/LexendDeca-Bold.ttf);
    font-display: swap;
}

@font-face {
    font-family: LexendDecaRegular;
    src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
    font-display: swap;
}

@font-face {
    font-family: LexendDecaThin;
    src: url(../assets/Lexend_Deca/LexendDeca-Light.ttf);
    font-display: swap;
}

@font-face {
    font-family: Saphile;
    src: url(../assets/Saphile/Saphile-Regular.otf);
    font-display: swap;
}

#app{
  padding: 0 !important;
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
  font-size: 2.5em;
}

.textMain{
  font-family: LexendDecaThin;
  font-size: 1.5em;
  max-width: 31em;
  text-align: center;
  margin-top: 1em;
}

.text{
  font-family: LexendDecaRegular;
  font-size: 1.5em;
  max-width: 31em;
  text-align: left;
  margin-top: 1em;
}

.h2Saphile{
  font-family: Saphile;
  font-size: 3em;
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
}

#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #4857a0;
  margin-bottom: -1em;
  width: 100vw;
  align-items: center;
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
  margin-top: -0.5em;
  text-decoration: none;
}

/* ____ MAIN PAGE MASTER THE MOVES ______ */

#masterMoves{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #4857a0;
  width: 100vw;
}

#btnCreateAccountMaster{
  font-family: LexendDecaThin;
  font-size: 1.4em;
  border: 1px solid;
  border-radius: 0.5em;
  width: 10em;
  height: 2em;
  margin-top: 1em;
}

#beigeWavesLeftBottom{
  position: relative;
  max-width: 30em;
  margin-bottom: -8em;
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
  position: relative;
  z-index: 0;
  margin-top: 5em;
  height: 100%;
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
  margin-left: -50em;
  border-radius: 1.5em;
  width: 30vw;
  height: 100%;
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
  height: 100%;
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
  border-radius: 2em;
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
  width: 100vw;
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
  font-size: 1.5em;
  margin-bottom: -1em;
}

/* ______ KEEP TRACK OF FAVOURITES ______ */

#keepTrack{
  background-color: #fcf3f3;
  width: 70vw;
  border-top-right-radius: 1.5em;
  border-bottom-right-radius: 1.5em;
  margin-top: 15em;
  /* column-gap: 7em; */
  display: flex;
  flex-direction: row;
  text-align: left;
  padding-left: 10em;
  align-items: center;
}

#btnCreateAccountKeep{
  font-family: LexendDecaThin;
  font-size: 1.5em;
  color: #fcf3f3;
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

#featuresTitle{
  margin-right: 2em;
}
</style>
