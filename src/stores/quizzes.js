import { defineStore } from 'pinia'

export const useQuizzesStore = defineStore('quiz', {

    state: () => ({
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
                medal: "src/assets/goldMedal.svg",
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
                                answer: "Shaposhnikova transition",
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
                medal: "src/assets/silverMedal.svg",
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
                medal: "src/assets/bronzeMedal.svg",
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
                medal: "src/assets/goldMedal.svg",
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
    })
})
