<template>
    <body>
      <div id="quizDiv">
        <h1 class="red">Quizz - {{ quizzesStore.quizzes[quizzesStore.quizz - 1].name }}</h1>
        <p class="black light fontSize26 marginTop25"> {{ quizzesStore.quizzes[quizzesStore.quizz - 1].numQuestions }} questions</p>
        <p :class="changeDifficultyColor(quizzesStore.quizzes[quizzesStore.quizz - 1].difficulty)">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].difficulty }}</p>
        <div v-if="!quizzesStore.quizzes[quizzesStore.quizz - 1].showOnFinish">
          <p class="black regular fontSize24 marginLeft50 marginTop38 marginBottom41">{{ quizzesStore.quizzes[quizzesStore.quizz -
            1].questions[quizzesStore.curQuestion].id }}. {{ quizzesStore.quizzes[quizzesStore.quizz- 1].questions[quizzesStore.curQuestion].question }}</p>
          <img class="imgQuestion marginLeft160 marginBottom48" :src="quizzesStore.quizzes[quizzesStore.quizz - 1].questions[quizzesStore.curQuestion].image"
            alt="">
  
          <div :class="optionBg('A')" @click="selOption('A')">
            <div class="d-flex align-center">
              <p class="bold red marginLeft91 fontSize30">A)</p>
              <p class="black light fontSize24 marginLeft36">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].questions[quizzesStore.curQuestion].answers[0].answer
              }}</p>
            </div>
          </div>
          <div :class="optionBg('B')" @click="selOption('B')">
            <div class="d-flex align-center">
              <p class="bold red marginLeft91 fontSize30">B)</p>
              <p class="black light fontSize24 marginLeft36">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].questions[quizzesStore.curQuestion].answers[1].answer
              }}</p>
            </div>
          </div>
          <div :class="optionBg('C')" @click="selOption('C')">
            <div class="d-flex align-center">
              <p class="bold red marginLeft91 fontSize30">C)</p>
              <p class="black light fontSize24 marginLeft36">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].questions[quizzesStore.curQuestion].answers[2].answer
              }}</p>
            </div>
          </div>
          <div :class="optionBg('D')" @click="selOption('D')">
            <div class="d-flex align-center">
              <p class="bold red marginLeft91 fontSize30">D)</p>
              <p class="black light fontSize24 marginLeft36">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].questions[quizzesStore.curQuestion].answers[3].answer
              }}</p>
            </div>
          </div>
          <div id="btnsBottom" class="d-flex justify-space-between marginTop25">
            <div id="btnsNavigation" class="d-flex">
              <button @click="selQuestion(numButton)" v-for="numButton in quizzesStore.quizzes[quizzesStore.quizz - 1].numQuestions" :key="numButton"
                :class="changeBtnColor(numButton - 1)">
                {{ numButton }}
              </button>
            </div>
            <button @click="submitAnswers(quizzesStore.quizz - 1)"
              class="btnRedFill medium fontSize22 align-self-center marginRight78">Finish</button>
          </div>
  
        </div>
        <div v-if="quizzesStore.quizzes[quizzesStore.quizz - 1].showOnFinish && quizzesStore.quizzes[quizzesStore.quizz - 1].medalAwarded">
          <h1 class="d-flex justify-center red fontSize48 marginTop47 marginBottom85">Congratulations! {{ userStore.getUserLogged.name
          }}</h1>
          <div class="d-flex justify-center marginBottom85">
            <p class="red bold fontSize96 marginRight78">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].lastScore }}%</p>
            <img src="@/assets/goldMedal.svg" alt="">
          </div>
          <p class="d-flex justify-center black fontSize26 light">You got {{ quizzesStore.quizzes[quizzesStore.quizz - 1].lastScore }}% right and won a</p>
          <p class="d-flex justify-center gold fontSize26 light">GOLDEN MEDAL</p>
          <p class="d-flex justify-center black fontSize20 light">Go to your user page to see what changed!</p>
          <div class="d-flex justify-center marginTop69">
            <button @click="tryAgain(this.quizzesStore.quizz)" class="btnRedFill marginRight27 medium fontSize22">Try Again</button>
            <button @click="back" class="btnRedFill medium fontSize22">Back</button>
          </div>
        </div>
        <div v-if="quizzesStore.quizzes[quizzesStore.quizz - 1].showOnFinish && !quizzesStore.quizzes[quizzesStore.quizz - 1].medalAwarded">
          <h1 class="d-flex justify-center red fontSize48 marginTop47 marginBottom85">Bad News, {{ userStore.getUserLogged.name }}! </h1>
          <div class="d-flex justify-center marginBottom85">
            <p class="red bold fontSize96 marginRight78">{{ quizzesStore.quizzes[quizzesStore.quizz - 1].lastScore }}%</p>
            <img src="@/assets/sad-face 1.svg" alt="">
          </div>
          <p class="d-flex justify-center black fontSize26 light">You only got {{ quizzesStore.quizzes[quizzesStore.quizz - 1].lastScore }}% of the
            questions right, try
            again to win a
            medal!
          </p>
          <div class="d-flex justify-center marginTop106">
            <button @click="tryAgain(this.quizzesStore.quizz)" class="btnRedFill marginRight27 medium fontSize22">Try Again</button>
            <button @click="back" class="btnRedFill medium fontSize22">Back</button>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  import { useQuizzesStore } from '../stores/quizzes';
  import { useUserStore } from '../stores/users';
  
  export default {
    data() {
      return {
        quizzesStore: useQuizzesStore(),
        userStore: useUserStore(),
      };
    },
    methods: {
      selQuestion(question) {
        this.quizzesStore.curQuestion = question - 1
      },
      changeBtnColor(numButton) {
        if (numButton == this.quizzesStore.curQuestion) {
          return "btnSelQuestionsFilled d-flex justify-center align-items-center"
        } else {
          return "btnSelQuestions d-flex justify-center align-items-center"
        }
      },
      changeDifficultyColor(difficulty) {
        if (difficulty == "Easy") {
          return "green medium fontSize24 marginTop19"
        } else if (difficulty == "Medium") {
          return "yellow medium fontSize24 marginTop19"
        } else if (difficulty == "Hard") {
          return "red medium fontSize24 marginTop19"
        }
      },
      selOption(option) {
        this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].questions[this.quizzesStore.curQuestion].selectedOption = option
      },
      optionBg(option) {
        if (this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].questions[this.quizzesStore.curQuestion].selectedOption == option) {
          return "bgSelOption"
        } else {
          return "optionHover bgUnSelOption"
        }
      },
      submitAnswers(quizz) {
        let correctAnswers = 0;
        for (let i = 0; i < this.quizzesStore.quizzes[quizz].numQuestions; i++) {
          if (this.quizzesStore.quizzes[quizz].questions[i].selectedOption == this.quizzesStore.quizzes[quizz].questions[i].correctAnswer) {
            correctAnswers++;
          }
        }
        this.quizzesStore.quizzes[quizz].lastScore = Math.round(correctAnswers / this.quizzesStore.quizzes[quizz].numQuestions * 100);
  
        if (correctAnswers >= this.quizzesStore.quizzes[quizz].passingScore) {
          this.quizzesStore.quizzes[quizz].medalAwarded = true;
          try{
            this.userStore.addMedal(this.quizzesStore.quizzes[quizz].medal)
          }catch(error){
            console.log(error);
          }
        } else {
          this.quizzesStore.quizzes[quizz].medalAwarded = false;
        }
        this.checkBestScore()
        this.quizzesStore.quizzes[quizz].showOnFinish = true;
      },
      checkBestScore() {
        if (this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].lastScore > this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].bestScore) {
          this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].bestScore = this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].lastScore;
        }
      },
      tryAgain(curQuizz) {
        this.quizzesStore.quizzes[curQuizz - 1].showOnFinish = false;
        this.resetOptions()
        this.quizzesStore.curQuestion = 0;
      },
      back() {
        this.resetOptions()
        this.quizzesStore.curQuestion = 0;
        this.$router.push('/quiz');
      },
      resetOptions() {
        for (let i = 0; i < this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].numQuestions; i++) {
          this.quizzesStore.quizzes[this.quizzesStore.quizz - 1].questions[i].selectedOption = "";
        }
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
    font-family: Lexend Deca Light;
    src: url(@/assets/Lexend_Deca/LexendDeca-Light.ttf);
  }
  
  @font-face {
    font-family: Lexend Deca Bold;
    src: url(@/assets/Lexend_Deca/LexendDeca-Bold.ttf);
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
  
  .marginLeft91 {
    margin-left: 91px;
  }
  
  .marginLeft160 {
    margin-left: 160px;
  }
  
  .marginLeft50 {
    margin-left: 50px;
  }
  
  .marginLeft36 {
    margin-left: 36px;
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
  
  .hovered {
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
  
  .fontSize26 {
    font-size: 26px;
  }
  
  h1 {
    font-family: Saphile;
    font-size: 36px;
  }
  
  .black {
    color: black
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
    margin-left: 6em;
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
  
  .red {
    color: #ED2E2F;
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
  