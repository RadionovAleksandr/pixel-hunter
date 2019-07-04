import { assert } from 'chai';
import { START_GAME, scoring, numberLives, changeLevel, calculateAnswerTime } from './functions.test';
import * as data from './game-data';

describe(`Статистика игры`, () => {
    describe(`Подсчет очков игрока`, () => {
        it(`Ответил меньше, чем на 10 вопросов`, () => {
            assert.equal(scoring(START_GAME, data.userNineAnswers, 3), -1)
        });
        it(`Ответил на все вопросы не быстро и не медленно`, () => {
            assert.equal(scoring(START_GAME, data.userAnswersMediumThreeLives, 3), 1150)
        });
        it(`Ответил на все вопросы быстро и сохранил две жизни`, () => {
            assert.equal(scoring(START_GAME, data.userAnswersQuicklyTwoLives, 2), 2000)
            console.log(`количеств жизней ` + START_GAME.lives);
        });
        it(`Ответил на все вопросы медленно и не осталось жизней`, () => {
            assert.equal(scoring(START_GAME, data.userAnswersSlowlyZeroLives, 0), 200)
        });
    });
    describe(`Остаток жизней`, () => {
        it(`Осталось три жизни`, () => {
            assert.equal(numberLives(START_GAME, data.userAnswersMediumThreeLives), 3)
        });
        it(`Осталось две жизни`, () => {
            assert.equal(numberLives(START_GAME, data.userAnswersQuicklyTwoLives), 2)
        });
        it(`Осталось одна жизнь`, () => {
            assert.equal(numberLives(START_GAME, data.userAnswersMediumOneLives), 1)
        });
        it(`Осталось ноль жизней`, () => {
            assert.equal(numberLives(START_GAME, data.userAnswersSlowlyZeroLives), 0)
        });
        it(`Осталось минус две жизни`, () => {
            assert.equal(numberLives(START_GAME, data.userAnswersMediumMinuseTwoLives), -2)

        });
    });
    describe(`Уровень игрока`, () => {
        it(`Игрок на третьем уровне`, () => {
            assert.equal(changeLevel(START_GAME, data.userThreeLevel), 3)
        });
        it(`Игрок на пятом уровне`, () => {
            assert.equal(changeLevel(START_GAME, data.userFifeLevel), 5)
        });
        it(`Игрок на шестом уровне`, () => {
            assert.equal(changeLevel(START_GAME, data.userEightLevel), 8)
        });
    });
    describe(`Потрачено времени на вопрос`, () => {
        it(`Ответ получен за 12 секунд`, () => {
            assert.equal(calculateAnswerTime(12), 12)
        });
        it(`Ответ получен за 23 секунды`, () => {
            assert.equal(calculateAnswerTime(23), 23)
        });
        it(`Ответ получен за -123 секунды`, () => {
            assert.equal(calculateAnswerTime(-123), -1)
        });
        it(`Ответ получен за 0 секунд`, () => {
            assert.equal(calculateAnswerTime(0), 0)
        });
    });
});
