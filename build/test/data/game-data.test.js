'use strict';

var chai = require('chai');

const QUICK_ANSWER = 10;
const LONG_ANSWER = 20;

const START_GAME = Object.freeze({
    answer: 0,
    points: 0,
    lives: 3
});


const scoring = (gameData, userAnswers, lives) => {
    // за каждый правильный ответ + 100 очков, если он быстрый + 50 если медленный -50 если не быстрый не медленный, ничего.
    // за каждую жизнб +50 очков
    // за количество ответов меньшее 10  ноль очков
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
            newGame.points += 100;
        }
        if (element.time > LONG_ANSWER) {
            newGame.points -= 50;
        }
    });
    newGame.lives = lives;
    let livesPoints = newGame.lives * 50;
    newGame.points += livesPoints;

    return newGame.points
};

// подсчет количества жизней
const numberLives = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    newGame.lives = gameData.lives;
    console.log(newGame.lives);
    userAnswers.forEach((element) => {
        if (!element.isCorrectAnswer) {
            newGame.lives -= 1;
        }
        if (newGame.lives < 0) {
            return -1
        }
    });
    return newGame.lives
};

//изменение уровня
const changeLevel = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    const curentLevel = userAnswers.length;
    newGame.Level = curentLevel;
    return newGame.Level
};

const calculateAnswerTime = (clickTime) => {
    if (clickTime < 0) {
        return -1
    }
    const startTime = new Date().getTime();
    const FinishTime = startTime + (clickTime * 1000);
    const timer = FinishTime - startTime;
    return timer / 1000
};

const userNineAnswers = [
    { isCorrectAnswer: true, time: 12 },
    { isCorrectAnswer: true, time: 18 },
    { isCorrectAnswer: true, time: 10 },
    { isCorrectAnswer: true, time: 19 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 20 },
    { isCorrectAnswer: true, time: 12 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 17 }
];

const userAnswersSlowlyZeroLives = [
    { isCorrectAnswer: false, time: 21 },
    { isCorrectAnswer: false, time: 21 },
    { isCorrectAnswer: false, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 },
    { isCorrectAnswer: true, time: 21 }
];

const userAnswersQuicklyTwoLives = [
    { isCorrectAnswer: false, time: 1 },
    { isCorrectAnswer: true, time: 1 },
    { isCorrectAnswer: true, time: 1 },
    { isCorrectAnswer: true, time: 1 },
    { isCorrectAnswer: true, time: 2 },
    { isCorrectAnswer: true, time: 2 },
    { isCorrectAnswer: true, time: 2 },
    { isCorrectAnswer: true, time: 2 },
    { isCorrectAnswer: true, time: 2 },
    { isCorrectAnswer: true, time: 2 }
];

const userAnswersMediumThreeLives = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

const userAnswersMediumOneLives = [
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

const userAnswersMediumMinuseTwoLives = [
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: false, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

const userThreeLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

const userFifeLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

const userEightLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

// describe(`Array`, () => {
//     describe(`#indexOf()`, () => {
//         it(`should return -1 when the value is not present`, () => {
//             assert.equal(-1, [1, 2, 3].indexOf(4));
//         });
//     });
// });


describe(`Статистика игры`, () => {
    describe(`Подсчет очков игрока`, () => {
        it(`Ответил меньше, чем на 10 вопросов`, () => {
            chai.assert.equal(scoring(START_GAME, userNineAnswers, 3), -1);
        });
        it(`Ответил на все вопросы не быстро и не медленно`, () => {
            chai.assert.equal(scoring(START_GAME, userAnswersMediumThreeLives, 3), 1150);
        });
        it(`Ответил на все вопросы быстро и сохранил две жизни`, () => {
            chai.assert.equal(scoring(START_GAME, userAnswersQuicklyTwoLives, 2), 2000);
            console.log(`количеств жизней ` + START_GAME.lives);
        });
        it(`Ответил на все вопросы медленно и не осталось жизней`, () => {
            chai.assert.equal(scoring(START_GAME, userAnswersSlowlyZeroLives, 0), 200);
        });
    });
    describe(`Остаток жизней`, () => {
        it(`Осталось три жизни`, () => {
            chai.assert.equal(numberLives(START_GAME, userAnswersMediumThreeLives), 3);
        });
        it(`Осталось две жизни`, () => {
            chai.assert.equal(numberLives(START_GAME, userAnswersQuicklyTwoLives), 2);
        });
        it(`Осталось одна жизнь`, () => {
            chai.assert.equal(numberLives(START_GAME, userAnswersMediumOneLives), 1);
        });
        it(`Осталось ноль жизней`, () => {
            chai.assert.equal(numberLives(START_GAME, userAnswersSlowlyZeroLives), 0);
        });
        it(`Осталось минус две жизни`, () => {
            chai.assert.equal(numberLives(START_GAME, userAnswersMediumMinuseTwoLives), -2);

        });
    });
    describe(`Уровень игрока`, () => {
        it(`Игрок на третьем уровне`, () => {
            chai.assert.equal(changeLevel(START_GAME, userThreeLevel), 3);
        });
        it(`Игрок на пятом уровне`, () => {
            chai.assert.equal(changeLevel(START_GAME, userFifeLevel), 5);
        });
        it(`Игрок на шестом уровне`, () => {
            chai.assert.equal(changeLevel(START_GAME, userEightLevel), 8);
        });
    });
    describe(`Потрачено времени на вопрос`, () => {
        it(`Ответ получен за 12 секунд`, () => {
            chai.assert.equal(calculateAnswerTime(12), 12);
        });
        it(`Ответ получен за 23 секунды`, () => {
            chai.assert.equal(calculateAnswerTime(23), 23);
        });
        it(`Ответ получен за -123 секунды`, () => {
            chai.assert.equal(calculateAnswerTime(-123), -1);
        });
        it(`Ответ получен за 0 секунд`, () => {
            chai.assert.equal(calculateAnswerTime(0), 0);
        });
    });
});
