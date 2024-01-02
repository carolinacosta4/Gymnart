<template>
  <body>
    <div class="parentContainer">
      <h1 class="red">Quizzes</h1>
      <p class="black extraLight fontSize24 marginTop38 marginBottom85">Participate in our quiz and win your own olympic
        medal!</p>
      <div class="container">
        <div class="paralels box">
          <div class="imageHover marginBottom26" @mouseover="showOverlay" @mouseout="hideOverlay">
            <img @click="selQuizz(1)" src="@/assets/paralels.png" alt="">
            <img @click="selQuizz(1)" src="@/assets/Play Icon.svg" class="hover-image" alt="">
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column marginLeft18">
              <p class="black medium fontSize24">Assymetric Parallels</p>
              <p class="black thin fontSize20">7 questions</p>
            </div>
            <p class="red medium fontSize24 marginRight18">Hard</p>
          </div>
        </div>
        <div class="beam box">
          <div class="imageHover marginBottom26" @mouseover="showOverlay" @mouseout="hideOverlay">
            <img @click="selQuizz(2)" src="@/assets/beam.png" alt="">
            <img @click="selQuizz(2)" src="@/assets/Play Icon.svg" class="hover-image" alt="">
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column marginLeft18">
              <p class="black medium fontSize24">Beam</p>
              <p class="black thin fontSize20">5 questions</p>
            </div>
            <p class="yellow medium fontSize24 marginRight18">Medium</p>
          </div>
        </div>
        <div class="solo box">
          <div class="imageHover marginBottom26" @mouseover="showOverlay" @mouseout="hideOverlay">
            <img @click="selQuizz(3)" src="@/assets/solo.png" alt="">
            <img @click="selQuizz(3)" src="@/assets/Play Icon.svg" class="hover-image" alt="">
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column marginLeft18">
              <p class="black medium fontSize24">Solo</p>
              <p class="black thin fontSize20">5 questions</p>
            </div>
            <p class="green medium fontSize24 marginRight18">Easy</p>
          </div>
        </div>
        <div class="vault box">
          <div class="imageHover marginBottom26" @mouseover="showOverlay" @mouseout="hideOverlay">
            <img @click="selQuizz(4)" src="@/assets/vault.png" alt="">
            <img @click="selQuizz(4)" src="@/assets/Play Icon.svg" class="hover-image" alt="">
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column marginLeft18">
              <p class="black medium fontSize24">Vault</p>
              <p class="black thin fontSize20">8 questions</p>
            </div>
            <p class="red medium fontSize24">Hard</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { useQuizzesStore } from '../stores/quizzes';

export default {
  data() {
    return {
      quizzesStore: useQuizzesStore(),
    };
  },
  methods: {
    selQuizz(curQuizz) {
      this.quizzesStore.quizz = curQuizz;
      this.$router.push('/quizSelected');
    },
    showOverlay(event) {
      const container = event.currentTarget;
      container.classList.add('hovered');
    },
    hideOverlay(event) {
      const container = event.currentTarget;
      container.classList.remove('hovered');
    },
  },
};

</script>

<style lang="css" scoped>
@font-face {
  font-family: Saphile;
  src: url(@/assets/Saphile/Saphile-Regular.otf);
}

@font-face {
  font-family: Lexend Deca Regular;
  src: url(@/assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
  font-family: Lexend Deca Medium;
  src: url(@/assets/Lexend_Deca/LexendDeca-Medium.ttf);
}

@font-face {
  font-family: Lexend Deca ExtraLight;
  src: url(@/assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
}

@font-face {
  font-family: Lexend Deca Thin;
  src: url(@/assets/Lexend_Deca/LexendDeca-Thin.ttf);
}

@font-face {
  font-family: Lexend Deca Light;
  src: url(@/assets/Lexend_Deca/LexendDeca-Light.ttf);
}

@font-face {
  font-family: Lexend Deca Bold;
  src: url(@/assets/Lexend_Deca/LexendDeca-Bold.ttf);
}

.parentContainer{
  margin-left: 225px;
}

.marginTop38 {
  margin-top: 38px;
}

.marginTop69 {
  margin-top: 69px;
}

.marginTop25 {
  margin-top: 25px;
}

.marginTop47 {
  margin-top: 47px;
}

.marginTop19 {
  margin-top: 19px;
}

.marginTop106 {
  margin-top: 106px;
}

.marginBottom85 {
  margin-bottom: 85px;
}

.marginBottom48 {
  margin-bottom: 48px;
}

.marginBottom41 {
  margin-bottom: 41px;
}

.marginBottom26 {
  margin-bottom: 26px;
}

.marginLeft91 {
  margin-left: 91px;
}

.marginLeft160 {
  margin-left: 160px;
}

.marginLeft50 {
  margin-left: 50px;
}

.marginLeft18 {
  margin-left: 18px;
}

.marginLeft36 {
  margin-left: 36px;
}

.marginRight18 {
  margin-right: 18px;
}

.marginRight27 {
  margin-right: 27px;
}

.marginRight78 {
  margin-right: 78px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.box {
  width: auto;
  margin-bottom: 64px;
  margin-right: 86px;
  box-sizing: border-box;
}

.imageHover {
  position: relative;
  overflow: hidden;
}

.hover-image {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.imageHover::before {
  content: "";
  position: absolute;
  border-radius: 21px;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 223px;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  background-color: rgba(72, 87, 160, 0.6);
  cursor: pointer;
}

.hovered .hover-image {
  opacity: 1;
}

.hovered::before {
  opacity: 1;
}

.imgQuestion {
  width: 670px;
  height: 315px;
}

.fontSize48 {
  font-size: 48px;
}

.fontSize30 {
  font-size: 30px;
}

.fontSize96 {
  font-size: 96px;
}

.fontSize20 {
  font-size: 20px;
}

.fontSize22 {
  font-size: 22px;
}

.fontSize24 {
  font-size: 24px;
}

.fontSize28 {
  font-size: 28px;
}

.fontSize26 {
  font-size: 26px;
}

.fontSize13 {
  font-size: 13px;
}

h1 {
  font-family: Saphile;
  font-size: 36px;
}

.black {
  color: black
}

.thin {
  font-family: Lexend Deca Thin;
}

.extraLight {
  font-family: Lexend Deca ExtraLight;
}

.light {
  font-family: Lexend Deca Light;
}

.medium {
  font-family: Lexend Deca Medium;
}

.bold {
  font-family: Lexend Deca Bold;
}

body {
  background-color: #FCF3F3;
  font-family: Lexend Deca Regular;
  padding: 2rem;
}

.btnSelQuestionsFilled {
  color: #FCF3F3;
  font-size: 28px;
  border-radius: 5px;
  margin: 23px;
  width: 44px;
  height: 44px;
  border: 2px solid #4857A0;
  background-color: #4857A0;
}

.btnSelQuestions {
  font-size: 28px;
  color: #4857A0;
  border-radius: 5px;
  margin: 23px;
  border: 2px solid #4857A0;
  width: 44px;
  height: 44px;
}

.btnSelQuestions:hover {
  color: #FCF3F3;
  background-color: #4857A0;
}

.btnRedFill {
  background-color: #F16A64;
  color: #FCF3F3;
  border-radius: 5px;
  width: 130px;
  height: 44px;
}

.btnRedFill:hover {
  background-color: #ED2E2F;
}

.bgBlue {
  background-color: #4857A0;
}

.bgLightRed {
  background-color: #F16A64;
}

.blue {
  color: #4857A0;
}

.red {
  color: #ED2E2F;
}

.snow {
  color: #FCF3F3;
}

.green {
  color: #2FA11C;
}

.yellow {
  color: #DC9E42;
}

.gold {
  color: #C09525;
}

.lightRed {
  color: #F16A64;
}

.bgSelOption {
  background: rgba(72, 87, 160, 0.1);
  border-radius: 21px;
  width: 909px;
  height: 54px;
}

.optionHover:hover {
  background: rgba(72, 87, 160, 0.1);
  border-radius: 21px;
}

.bgUnSelOption {
  background-color: #FCF3F3;
  width: 909px;
  height: 54px;
}
</style>
