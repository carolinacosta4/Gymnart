<template>
  <body>
    <div class="parentContainer">
      <h1 class="red mainTitle">Quizzes</h1>
      <p class="blue extraLight fontSize24 marginTop38">Participate in our quiz and win your own olympic
        medal!</p>
      <div class="container">
        <div class="paralels box">
          <div class="imageHover marginBottom26" @mouseover="showOverlay" @mouseout="hideOverlay">
            <img @click="selQuizz(1)" src="@/assets/paralels.png" alt="">
            <img @click="selQuizz(1)" src="@/assets/Play Icon.svg" class="hover-image" alt="">
          </div>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column marginLeft18">
              <p class="blue medium fontSize24">Assymetric Parallels</p>
              <p class="blue thin fontSize20">7 questions</p>
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
              <p class="blue medium fontSize24">Beam</p>
              <p class="blue thin fontSize20">5 questions</p>
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
              <p class="blue medium fontSize24">Solo</p>
              <p class="blue thin fontSize20">5 questions</p>
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
              <p class="blue medium fontSize24">Vault</p>
              <p class="blue thin fontSize20">8 questions</p>
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

.mainTitle{
  font-size: 3em;
}

.marginTop38 {
  margin-top: 30px;
  margin-bottom: 2em;
}

.marginBottom26 {
  margin-bottom: 26px;
}

.marginLeft18 {
  margin-left: 18px;
}

.marginRight18 {
  margin-right: 18px;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.box {
  width: 28rem;
  box-sizing: border-box;
  margin-bottom: 40px;
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
  z-index: 10;
  cursor: pointer;
}

.imageHover::before {
  content: "";
  position: absolute;
  border-radius: 21px;
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

.fontSize20 {
  font-size: 20px;
}

.fontSize24 {
  font-size: 24px;
}

h1 {
  font-family: Saphile;
  font-size: 36px;
}

.blue {
  color: #4857a0
}

.thin {
  font-family: Lexend Deca ExtraLight;
}

.extraLight {
  font-family: Lexend Deca ExtraLight;
}

.medium {
  font-family: Lexend Deca Medium;
}

body {
  background-color: #FCF3F3;
  font-family: Lexend Deca Regular;
  padding: 2rem;
  margin-left: 6em;
}

.red {
  color: #ED2E2F;
}

.green {
  color: #2FA11C;
}

.yellow {
  color: #DC9E42;
}
</style>
