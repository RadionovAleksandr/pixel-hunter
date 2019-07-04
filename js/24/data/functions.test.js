import { gameScreens } from "./game-data";

const QUICK_ANSWER = 10;
const LONG_ANSWER = 20;


export const START_GAME = Object.freeze({
    answer: 0,
    points: 0,
    lives: 3
});


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

// подсчет количества жизней
export const getLives = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    newGame.lives = gameData.lives;
    for (let i = 0; i < userAnswers.length; i++) {
        userAnswers[i].forEach((element) => {
            if (!element.isCorrectAnswer) {
                newGame.lives -= 1;
            }
        })
    }
    return newGame.lives
}

//изменение уровня
export const getLevel = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    const curentLevel = userAnswers.length;
    newGame.Level = curentLevel;
    return newGame.Level + 1
}

export const calculateAnswerTime = (clickTime) => {
    if (clickTime < 0) {
        return -1
    }
    const startTime = new Date().getTime()
    const FinishTime = startTime + (clickTime * 1000);
    const timer = FinishTime - startTime;
    return timer / 1000
}
