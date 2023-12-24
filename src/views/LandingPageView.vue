<script setup>
</script>

<template>
  <div id="bgContainer">
    <div id="nav" class="padding4">
      <img id="iconGymnart" src="../assets/landingPageIcons/titulo gymnart-11.svg" alt="GYMNART icon">
      <RouterLink :to="{ name: 'login' }" id="btnLoginNav"> <u>Log in</u></RouterLink>
    </div>

    <div id="masterMoves" class="padding4">
      <h1 class="title white">Master the Moves:</h1>
      <h2 class="subtitle white">Your Gymnastics Dashboard awaits!</h2>
      <p class="text white">Find out more about the scores, medals, movements and statistics of your favourites athletes and teams.</p>
      <button @click="this.$router.push('/login')" class="white" id="btnCreateAccountMaster">Create account</button>
    </div>
    <img id="beigeWavesLeftBottom" src="../assets/backgrounds/beigeWavesLeftBottom.svg" alt="">

    <div id="imgsDashboard" class="beigeBG">
      <img src="../assets/backgrounds/leftTop5.png" alt="">
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
.subtitle{
  font-family: LexendDecaThin;
  font-size: 2.8em;
}

.text{
  font-family: LexendDecaThin;
  font-size: 1.8em;
  max-width: 31em;
  text-align: center;
  margin-top: 2em;
}

.beigeBG{
  background-color: #f8e2d6;
}

.padding4{
  padding: 4em;
}
/* ___________ */

#bgContainer {
	background: #4857a0;
	font-family: LexendDecaRegular;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#iconGymnart{
  width: 12em;
}

#btnLoginNav{
  color: #fcf3f3;
  font-family: LexendDecaThin;
  font-size: 1.5em;
}

/* __________ */

#masterMoves{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
  margin-bottom: -1em;
}

.title{
  font-family: Saphile;
  font-size: 6em;
  color: #fcf3f3;
}

#btnCreateAccountMaster{
  font-family: LexendDecaThin;
  font-size: 1.5em;
  border: 1px solid;
  border-radius: 13px;
  width: 10em;
  height: 2em;
  margin-top: 1em;
}

#beigeWavesLeftBottom{
  max-width: 30em;
  margin-bottom: -2em;
  align-self: baseline;
  margin-top: -10em;
}

/* _____________ */

#imgsDashboard{
  width: 100%;
  height: 40em;
  border-radius: 2em;
}

</style>
