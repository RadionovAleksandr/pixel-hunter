// import gameScreens from './data-base';
// import { game2 } from "../screens/game-2";
import { showScreen } from './utils';
import header from './header-template';
// import state from './state'
import stateGame from './data/state';


export const START_GAME = Object.freeze({
    points: 0,
    lives: 3,
    level: 0
});

const QUICK_ANSWER = 10;
const LONG_ANSWER = 20;

export const scoring = (gameData, userAnswers, lives) => {
        if (userAnswers.length < 10) {
            return -1
        }
        let newGame = {};
        Object.assign(newGame, gameData);
        userAnswers.forEach((element) => {
            if (element.isCorrectAnswer) {
                newGame.points += 100;
            }
            if (element.time <= QUICK_ANSWER) {
                newGame.points += 100
            }
            if (element.time > LONG_ANSWER) {
                newGame.points -= 50;
            }
        });
        newGame.lives = lives;
        let livesPoints = newGame.lives * 50;
        newGame.points += livesPoints;

        return newGame.points
    }
    // таймер
export const calculateAnswerTime = (clickTime) => {
    if (clickTime < 0) {
        return -1
    }
    const startTime = new Date().getTime()
    const FinishTime = startTime + (clickTime * 1000);
    const timer = FinishTime - startTime;
    return timer / 1000
}

export let gamePlay = {

    getLives() {
        // debugger
        // let newGame = {};
        // Object.assign(newGame, gameData);
        // newGame.lives = gameData.lives;
        // for (let i = 0; i < userAnswers.length; i++) {
        //     console.log(userAnswers[i])
        //     userAnswers[i].forEach((element) => {
        //         if (!element.isCorrectAnswer) {
        //             newGame.lives -= 1;
        //         }
        //     })
        // }
        // return newGame.lives

        let newGame = {};
        Object.assign(newGame, START_GAME);
        newGame.lives = START_GAME.lives;
        stateGame.answers.forEach((element) => {
            if (!element.isCorrectAnswer) {
                newGame.lives -= 1;
            }
        })
        console.log(newGame.lives)
        return newGame.lives
    },

    getLivesTemplate() {
        return new Array(this.getLives()) //количество потраченных жизней
            .fill(`<img src="img/heart__full.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
            .join(``);
    },

    getLivesMissTemplate() {
        new Array(3 - this.getLives()) //количество сохраненных жизней
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`)
            .join(``)
    },

    getLevel(gameData, userAnswers) {
        let newGame = {};
        Object.assign(newGame, gameData);
        let curentLevel
        console.log(userAnswers.length)
        if (userAnswers.length === undefined) {
            curentLevel = 0
        } else {
            curentLevel = userAnswers.length
        }
        newGame.level = curentLevel;
        return newGame.level + 1
    },

    conditionСheck(gameData, userAnswers) {
        if (this.getLevel(gameData, userAnswers) <= 10 && (this.getLives(gameData, userAnswers)) > 0) {
            return true
        }
    },

    getStatsTemplate(state) {
        new Array(10)
            .fill(`< li class = "stats__result stats__result--unknown">`)
            .join(``);
        // if (!state[this.getLevel(START_GAME, state) - 1].isCorrectAnswer) {
        //     const statsResult = document.querySelectorAll('stats__result');
        //     statsResult[this.getLevel(START_GAME, state) - 1].classList.add(`stats__result--wrong`)
        // }
    },

    PropertyAnswertemplate() {
        const statsResult = document.querySelectorAll(`stats__result`);
        if (!stateGame.answers[getLevel(START_GAME, stateGame.answers) - 1].isCorrectAnswer) {
            statsResult[getLevel(START_GAME, stateGame.answers) - 1]
        }
        //     `< li class = "stats__result stats__result--wrong" > < /li> <
        //         li class = "stats__result stats__result--slow" > < /li> <
        //         li class = "stats__result stats__result--fast" > < /li> <
        //         li class = "stats__result stats__result--correct" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>
        //         <li class = "stats__result stats__result--unknown" > < /li>`
    },
    getQuestionTemplate(state) {
        return state.screens[this.getLevel(START_GAME, state.answers) - 1].question
    },

    getImageTemplate(state, index) {
        return state.screens[this.getLevel(START_GAME, state.answers) - 1].answers[index].imageUrl
    },

    pushAnswer(state, index, arrAnswer, element) {
        if (state.screens[this.getLevel(START_GAME, state.answers) - 1].type === `three-foto`) {
            if (`paint` === state.screens[this.getLevel(START_GAME, state.answers) - 1].answers[index].type) {
                arrAnswer.push({
                    isCorrectAnswer: true,
                    time: 15
                })
            } else {
                arrAnswer.push({
                    isCorrectAnswer: false,
                    time: 15
                })
            }
        } else {
            if (element.value === state.screens[this.getLevel(START_GAME, state.answers) - 1].answers[index].type) {
                arrAnswer.push({
                    isCorrectAnswer: true,
                    time: 15
                })
            } else {
                arrAnswer.push({
                    isCorrectAnswer: false,
                    time: 15
                })
            }
        }
    },

    // открытие нужного слайда
    showGameScreen(state, gameData, screen1, screen2, screen3) {
        // debugger
        if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `two-foto`) {
            return showScreen(header(), screen1());
        }
        if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `one-foto`) {
            return showScreen(header(), screen2());
        }
        if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `three-foto`) {
            return showScreen(header(), screen3());
        }
    },

    statResultCheck(el) {
        if (this.getLevel(START_GAME, stateGame.answers) - 1 === 0) {
            return
        } else {
            stateGame.answers.forEach((element, index) => {
                const statsResult = el.querySelectorAll('.stats__result');
                if (!element.isCorrectAnswer) {

                    statsResult[index].classList.add(`stats__result--wrong`)
                } else {
                    statsResult[index].classList.add(`stats__result--correct`)
                }
            })
        }
    }
};
// console.log(gamePlay.getLivesTemplate())

// let stateGame
// gamePlay.resetGame(stateGame, gameScreens);

// console.log(stateGame)
// gamePlay.resetGame();


export const userNineAnswers = [{
        isCorrectAnswer: true,
        time: 12
    },
    {
        isCorrectAnswer: true,
        time: 18
    },
    {
        isCorrectAnswer: true,
        time: 10
    },
    {
        isCorrectAnswer: true,
        time: 19
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 20
    },
    {
        isCorrectAnswer: true,
        time: 12
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 17
    }
];

export const userAnswersSlowlyZeroLives = [{
        isCorrectAnswer: false,
        time: 21
    },
    {
        isCorrectAnswer: false,
        time: 21
    },
    {
        isCorrectAnswer: false,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    },
    {
        isCorrectAnswer: true,
        time: 21
    }
];

export const userAnswersQuicklyTwoLives = [{
        isCorrectAnswer: false,
        time: 1
    },
    {
        isCorrectAnswer: true,
        time: 1
    },
    {
        isCorrectAnswer: true,
        time: 1
    },
    {
        isCorrectAnswer: true,
        time: 1
    },
    {
        isCorrectAnswer: true,
        time: 2
    },
    {
        isCorrectAnswer: true,
        time: 2
    },
    {
        isCorrectAnswer: true,
        time: 2
    },
    {
        isCorrectAnswer: true,
        time: 2
    },
    {
        isCorrectAnswer: true,
        time: 2
    },
    {
        isCorrectAnswer: true,
        time: 2
    }
];

export const userAnswersMediumOneLives = [{
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    }
];

export const userAnswersMediumMinuseTwoLives = [{
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: false,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    }
];

export const userThreeLevel = [{
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    }
];

export const userFifeLevel = [{
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    }
];

export const userEightLevel = [{
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    },
    {
        isCorrectAnswer: true,
        time: 15
    }
];
