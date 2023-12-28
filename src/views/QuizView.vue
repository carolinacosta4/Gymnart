<template>
  <body>
    <div v-if="quizz == 0">
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
    <div id="quizzDiv" v-if="quizz != 0">
      <h1 class="red">Quizz - {{ quizzes[quizz - 1].name }}</h1>
      <p class="black light fontSize26 marginTop25"> {{ quizzes[quizz - 1].numQuestions }} questions</p>
      <p :class="changeDifficultyColor(quizzes[quizz - 1].difficulty)">{{ quizzes[quizz - 1].difficulty }}</p>
      <div v-if="!quizzes[quizz - 1].showOnFinish">
        <p class="black regular fontSize24 marginLeft50 marginTop38 marginBottom41">{{ quizzes[quizz -
          1].questions[curQuestion].id }}. {{ quizzes[quizz
    - 1].questions[curQuestion].question }}</p>
        <img class="imgQuestion marginLeft160 marginBottom48" :src="quizzes[quizz - 1].questions[curQuestion].image"
          alt="">

        <div :class="optionBg('A')" @click="selOption('A')">
          <div class="d-flex align-center">
            <p class="bold red marginLeft91 fontSize30">A)</p>
            <p class="black light fontSize24 marginLeft36">{{ quizzes[quizz - 1].questions[curQuestion].answers[0].answer
            }}</p>
          </div>
        </div>
        <div :class="optionBg('B')" @click="selOption('B')">
          <div class="d-flex align-center">
            <p class="bold red marginLeft91 fontSize30">B)</p>
            <p class="black light fontSize24 marginLeft36">{{ quizzes[quizz - 1].questions[curQuestion].answers[1].answer
            }}</p>
          </div>
        </div>
        <div :class="optionBg('C')" @click="selOption('C')">
          <div class="d-flex align-center">
            <p class="bold red marginLeft91 fontSize30">C)</p>
            <p class="black light fontSize24 marginLeft36">{{ quizzes[quizz - 1].questions[curQuestion].answers[2].answer
            }}</p>
          </div>
        </div>
        <div :class="optionBg('D')" @click="selOption('D')">
          <div class="d-flex align-center">
            <p class="bold red marginLeft91 fontSize30">D)</p>
            <p class="black light fontSize24 marginLeft36">{{ quizzes[quizz - 1].questions[curQuestion].answers[3].answer
            }}</p>
          </div>
        </div>
        <div id="btnsBottom" class="d-flex justify-space-between marginTop25">
          <div id="btnsNavigation" class="d-flex">
            <button @click="selQuestion(numButton)" v-for="numButton in quizzes[quizz - 1].numQuestions" :key="numButton"
              :class="changeBtnColor(numButton - 1)">
              {{ numButton }}
            </button>
          </div>
          <button @click="submitAnswers(quizz - 1)"
            class="btnRedFill medium fontSize22 align-self-center marginRight78">Finish</button>
        </div>

      </div>
      <div v-if="quizzes[quizz - 1].showOnFinish && quizzes[quizz - 1].medalAwarded">
        <h1 class="d-flex justify-center red fontSize48 marginTop47 marginBottom85">Congratulations! {{ store.getUser.name
        }}</h1>
        <div class="d-flex justify-center marginBottom85">
          <p class="red bold fontSize96 marginRight78">{{ quizzes[quizz - 1].lastScore }}%</p>
          <img src="@/assets/Gold Medal.svg" alt="">
        </div>
        <p class="d-flex justify-center black fontSize26 light">You got {{ quizzes[quizz - 1].lastScore }}% right and won
          a</p>
        <p class="d-flex justify-center gold fontSize26 light">GOLDEN MEDAL</p>
        <p class="d-flex justify-center black fontSize20 light">Go to your user page to see what changed!</p>
        <div class="d-flex justify-center marginTop69">
          <button @click="tryAgain(this.quizz)" class="btnRedFill marginRight27 medium fontSize22">Try Again</button>
          <button @click="back" class="btnRedFill medium fontSize22">Back</button>
        </div>
      </div>
      <div v-if="quizzes[quizz - 1].showOnFinish && !quizzes[quizz - 1].medalAwarded">
        <h1 class="d-flex justify-center red fontSize48 marginTop47 marginBottom85">Bad News!</h1>
        <div class="d-flex justify-center marginBottom85">
          <p class="red bold fontSize96 marginRight78">{{ quizzes[quizz - 1].lastScore }}%</p>
          <img src="@/assets/sad-face 1.svg" alt="">
        </div>
        <p class="d-flex justify-center black fontSize26 light">You only got {{ quizzes[quizz - 1].lastScore }}% of the
          questions right, try
          again to win a
          medal!
        </p>
        <div class="d-flex justify-center marginTop106">
          <button @click="tryAgain(this.quizz)" class="btnRedFill marginRight27 medium fontSize22">Try Again</button>
          <button @click="back" class="btnRedFill medium fontSize22">Back</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { useUserStore } from '@/stores/users';

export default {
  data() {
    return {
      store: useUserStore(),
      quizz: 0,
      curQuestion: 0,
      quizzes: [
        {
          id: 1,
          name: 'Assymetric Paralels',
          difficulty: 'Hard',
          numQuestions: 7,
          passingScore: 4,
          bestScore: 0,
          lastScore: 0,
          medalAwarded: false,
          showOnFinish: false,
          questions: [
            {
              id: 1,
              image: "/src/assets/paralels.png",
              question: "What is the standard height of the uneven bars in women's Olympic artistic gymnastics?",
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "1.80 meters",
                },
                {
                  answer: "2.50 meters",
                },
                {
                  answer: "2.40 meters",
                },
                {
                  answer: "1.50 meters",
                }
              ]
            },
            {
              id: 2,
              image: "/src/assets/paralels.png",
              question: 'Who was the first gymnast to perform the "Tkachev" release move on the uneven bars in international competitions?',
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "Nadia Comăneci",
                },
                {
                  answer: "Olga Korbut",
                },
                {
                  answer: "Svetlana Khorkina",
                },
                {
                  answer: "Simone Biles",
                }
              ]
            },
            {
              id: 3,
              image: "/src/assets/paralels.png",
              question: 'What is the name of the move where the gymnast transitions directly from the high bar to the low bar without interruption?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Van Leeuwen transition",
                },
                {
                  answer: "Jaeger transition",
                },
                {
                  answer: "Pak transition",
                },
                {
                  answer: "Pak transition",
                }
              ]
            },
            {
              id: 4,
              image: "/src/assets/paralels.png",
              question: 'How many times can gymnasts switch from the low bar to the high bar in a single series of movements on the uneven bars?',
              selectedOption: "",
              correctAnswer: "A",
              answers: [
                {
                  answer: "Once",
                },
                {
                  answer: "Twice",
                },
                {
                  answer: "Three times",
                },
                {
                  answer: "There is no limit",
                }
              ]
            },
            {
              id: 5,
              image: "/src/assets/paralels.png",
              question: "Who holds the record for the highest score ever achieved on the uneven bars in a women's Olympic final?",
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "Aliya Mustafina",
                },
                {
                  answer: "Simone Biles",
                },
                {
                  answer: "Gabby Douglas",
                },
                {
                  answer: "Viktoria Komova",
                }
              ]
            },
            {
              id: 6,
              image: "/src/assets/paralels.png",
              question: "What is the maximum deduction a gymnast can receive for falling or touching the ground with any part of her body between the two bars during a routine on the uneven bars in Olympic artistic gymnastics?",
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "0.3 points",
                },
                {
                  answer: "0.5 points",
                },
                {
                  answer: "0.8 points",
                },
                {
                  answer: "1.0 points",
                }
              ]
            },
            {
              id: 7,
              image: "/src/assets/paralels.png",
              question: "Which element on the uneven bars requires the gymnast to perform a full twist and catch the high bar with their hands in a backward-facing grip?",
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "Maloney",
                },
                {
                  answer: "Ricna ",
                },
                {
                  answer: "Tkachev ",
                },
                {
                  answer: "Shaposhnikova",
                }
              ]
            },

          ]
        },
        {
          id: 2,
          name: 'Beam',
          difficulty: 'Medium',
          numQuestions: 5,
          passingScore: 3,
          bestScore: 0,
          lastScore: 0,
          medalAwarded: false,
          showOnFinish: false,
          questions: [
            {
              id: 1,
              image: "/src/assets/paralels.png",
              question: "What is the width of the balance beam used in Olympic female artistic gymnastics?",
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "5 centimeters",
                },
                {
                  answer: "7 centimeters",
                },
                {
                  answer: "10 centimeters",
                },
                {
                  answer: "12 centimeters",
                }
              ]
            },
            {
              id: 2,
              image: "/src/assets/paralels.png",
              question: 'Which gymnast won the gold medal in the balance beam event at the 2020 Tokyo Olympics?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Simone Biles",
                },
                {
                  answer: "Sunisa Lee",
                },
                {
                  answer: "Angelina Melnikova",
                },
                {
                  answer: "Guan Chenchen",
                }
              ]
            },
            {
              id: 3,
              image: "/src/assets/paralels.png",
              question: 'What is the name of the element where a gymnast jumps backward onto the beam, splits her legs in a straddle position, and then lands on both feet simultaneously?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Back handspring",
                },
                {
                  answer: "Switch leap",
                },
                {
                  answer: "Front aerial",
                },
                {
                  answer: "Wolf jump",
                }
              ]
            },
            {
              id: 4,
              image: "/src/assets/paralels.png",
              question: 'In artistic gymnastics, what is the deduction if a gymnast falls off the balance beam during her routine in the Olympics?',
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "0.1 point",
                },
                {
                  answer: "0.3 points",
                },
                {
                  answer: "0.5 points",
                },
                {
                  answer: "1.0 point",
                }
              ]
            },
            {
              id: 5,
              image: "/src/assets/paralels.png",
              question: 'Which gymnast is known for her groundbreaking "side aerial" element performed on the balance beam?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Aliya Mustafina",
                },
                {
                  answer: "Gabby Douglas",
                },
                {
                  answer: "Larisa Iordache",
                },
                {
                  answer: "Shawn Johnson ",
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Solo',
          difficulty: 'Easy',
          numQuestions: 5,
          passingScore: 3,
          bestScore: 0,
          lastScore: 0,
          medalAwarded: false,
          showOnFinish: false,
          questions: [
            {
              id: 1,
              image: "/src/assets/paralels.png",
              question: "What is the maximum time limit for a gymnast's solo routine in Olympic artistic gymnastics?",
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "1 minute",
                },
                {
                  answer: "1 minute and 30 seconds",
                },
                {
                  answer: "2 minutes",
                },
                {
                  answer: "2 minutes and 30 seconds",
                }
              ]
            },
            {
              id: 2,
              image: "/src/assets/paralels.png",
              question: 'What is the name of the floor exercise area in artistic gymnastics where the gymnast performs their solo routine?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Podium",
                },
                {
                  answer: "Stage",
                },
                {
                  answer: "Mat",
                },
                {
                  answer: "Floor",
                }
              ]
            },
            {
              id: 3,
              image: "/src/assets/paralels.png",
              question: "How many events are there in the women's artistic gymnastics individual all-around competition?",
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "2 events",
                },
                {
                  answer: "3 events",
                },
                {
                  answer: "4 events",
                },
                {
                  answer: "5 events",
                }
              ]
            },
            {
              id: 4,
              image: "/src/assets/paralels.png",
              question: 'What is the maximum score a gymnast can achieve for a perfect routine in the solo presentation of artistic gymnastics?',
              selectedOption: "",
              correctAnswer: "A",
              answers: [
                {
                  answer: "10 points",
                },
                {
                  answer: "20 points",
                },
                {
                  answer: "30 points",
                },
                {
                  answer: "40 points",
                }
              ]
            },
            {
              id: 5,
              image: "/src/assets/paralels.png",
              question: 'In Olympic artistic gymnastics, which apparatus is specifically dedicated to the solo routine on the floor?',
              selectedOption: "",
              correctAnswer: "D",
              answers: [
                {
                  answer: "Vault",
                },
                {
                  answer: "Balance Beam",
                },
                {
                  answer: "Uneven Bars",
                },
                {
                  answer: "Floor Exercise ",
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: 'Vault',
          difficulty: 'Hard',
          numQuestions: 8,
          passingScore: 5,
          bestScore: 0,
          lastScore: 0,
          medalAwarded: false,
          showOnFinish: false,
          questions: [
            {
              id: 1,
              image: "/src/assets/paralels.png",
              question: "What is the maximum number of vaults a gymnast performs in the vault final at the Olympic Games?",
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "1",
                },
                {
                  answer: "2",
                },
                {
                  answer: "3",
                },
                {
                  answer: "4",
                }
              ]
            },
            {
              id: 2,
              image: "/src/assets/paralels.png",
              question: 'Who was the first female gymnast to perform the Yurchenko double pike vault in an international competition at the Olympic Games?',
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "Simone Biles",
                },
                {
                  answer: "Cheng Fei",
                },
                {
                  answer: "McKayla Maroney",
                },
                {
                  answer: "Dipa Karmakar",
                }
              ]
            },
            {
              id: 3,
              image: "/src/assets/paralels.png",
              question: "Which vault consists of a roundoff onto the springboard, followed by a back handspring onto the vaulting table, and finishing with a flip off the table?",
              selectedOption: "",
              correctAnswer: "A",
              answers: [
                {
                  answer: "Yurchenko",
                },
                {
                  answer: "Tsukahara",
                },
                {
                  answer: "Cheng",
                },
                {
                  answer: "Amanar",
                }
              ]
            },
            {
              id: 4,
              image: "/src/assets/paralels.png",
              question: 'What is the height of the vaulting table used in Olympic female artistic gymnastics?',
              selectedOption: "",
              correctAnswer: "C",
              answers: [
                {
                  answer: "90 centimeters",
                },
                {
                  answer: "1 meter",
                },
                {
                  answer: "1.10 meters",
                },
                {
                  answer: "1.20 meters",
                }
              ]
            },
            {
              id: 5,
              image: "/src/assets/paralels.png",
              question: 'In the 2020 Tokyo Olympics, which gymnast won the gold medal in the vault event?',
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "Simone Biles",
                },
                {
                  answer: "Jade Carey",
                },
                {
                  answer: "Rebeca Andrade",
                },
                {
                  answer: "Oksana Chusovitina",
                }
              ]
            },
            {
              id: 6,
              image: "/src/assets/paralels.png",
              question: 'Which gymnast popularized the "Produnova" vault, a difficult front handspring double front somersault?',
              selectedOption: "",
              correctAnswer: "A",
              answers: [
                {
                  answer: "McKayla Maroney",
                },
                {
                  answer: "Dipa Karmakar",
                },
                {
                  answer: "Oksana Chusovitina",
                },
                {
                  answer: "Hong Un-jong",
                }
              ]
            },
            {
              id: 7,
              image: "/src/assets/paralels.png",
              question: 'What is the name of the deduction given if a gymnast steps out of the landing zone on the vault in an Olympic competition?',
              selectedOption: "",
              correctAnswer: "A",
              answers: [
                {
                  answer: "Out-of-bounds penalty",
                },
                {
                  answer: "Execution deduction",
                },
                {
                  answer: "Deduction for form",
                },
                {
                  answer: "Landing deduction",
                }
              ]
            },
            {
              id: 8,
              image: "/src/assets/paralels.png",
              question: "How many judges score a gymnast's vault in an Olympic competition?",
              selectedOption: "",
              correctAnswer: "B",
              answers: [
                {
                  answer: "2 judges",
                },
                {
                  answer: "3 judges",
                },
                {
                  answer: "4 judges",
                },
                {
                  answer: "5 judges",
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    selQuizz(curQuizz) {
      this.quizz = curQuizz;
    },
    selQuestion(question) {
      this.curQuestion = question - 1
    },
    changeBtnColor(numButton) {
      if (numButton == this.curQuestion) {
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
      this.quizzes[this.quizz - 1].questions[this.curQuestion].selectedOption = option
    },
    optionBg(option) {
      if (this.quizzes[this.quizz - 1].questions[this.curQuestion].selectedOption == option) {
        return "bgSelOption"
      } else {
        return "optionHover bgUnSelOption"
      }
    },
    submitAnswers(quizz) {
      let correctAnswers = 0;
      const store = useUserStore()
      for (let i = 0; i < this.quizzes[quizz].numQuestions; i++) {
        if (this.quizzes[quizz].questions[i].selectedOption == this.quizzes[quizz].questions[i].correctAnswer) {
          correctAnswers++;
        }
      }
      this.quizzes[quizz].lastScore = Math.round(correctAnswers / this.quizzes[quizz].numQuestions * 100);
      if (correctAnswers >= this.quizzes[quizz].passingScore) {
        this.quizzes[quizz].medalAwarded = true;
        store.addMedal(this.quizzes[quizz].name)
      } else {
        this.quizzes[quizz].medalAwarded = false;
      }
      this.checkBestScore()
      this.quizzes[quizz].showOnFinish = true;
    },
    checkBestScore() {
      if (this.quizzes[this.quizz - 1].lastScore > this.quizzes[this.quizz - 1].bestScore) {
        this.quizzes[this.quizz - 1].bestScore = this.quizzes[this.quizz - 1].lastScore;
      }
    },
    tryAgain(curQuizz) {
      this.quizzes[curQuizz - 1].showOnFinish = false;
      this.resetOptions()
      this.quizz = curQuizz;
      this.curQuestion = 0;
    },
    back() {
      this.resetOptions()
      this.quizz = 0;
      this.curQuestion = 0;
    },
    resetOptions() {
      for (let i = 0; i < this.quizzes[this.quizz - 1].numQuestions; i++) {
        this.quizzes[this.quizz - 1].questions[i].selectedOption = "";
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
