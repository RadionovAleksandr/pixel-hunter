// import { game1 } from "../screens/game-1";
// import { game2 } from "../screens/game-2";
// import { game3 } from "../screens/game-3";
import {
    showScreen
} from '../utils';
import header from '../header-template';


export const START_GAME = Object.freeze({
    points: 0,
    lives: 3
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

export const gameScreens = [{
        type: `two-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
            imageUrl: 'https://i.imgur.com/DiHM5Zb.jpg',
            type: `paint`
        }, {
            imageUrl: `https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg`,
            type: `photo`
        }]
    }, {
        type: `one-foto`,
        question: `Угадай, фото или рисунок?`,
        answers: [{
            imageUrl: 'https://theobriensabroad.com/wp-content/uploads/2017/11/27-4.jpg',
            type: `photo`
        }]
    },
    {
        type: `three-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
                imageUrl: 'http://mirfactov.com/wp-content/uploads/7718-620x410.jpg',
                type: `paint`
            }, {
                imageUrl: 'https://habrastorage.org/getpro/habr/post_images/a78/291/807/a7829180746c99c987384e4b2b6df7b8.png',
                type: `photo`
            },
            {
                imageUrl: 'https://i.pinimg.com/564x/b9/50/49/b9504909abb1bafc993879f6736f8cd7.jpg',
                type: `photo`
            }
        ]
    },
    {
        type: `two-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
            imageUrl: 'https://k42.kn3.net/CF42609C8.jpg',
            type: `paint`
        }, {
            imageUrl: 'https://k42.kn3.net/D2F0370D6.jpg',
            type: `paint`
        }]
    },
    {
        type: `one-foto`,
        question: `Угадай, фото или рисунок?`,
        answers: [{
            imageUrl: 'https://st.depositphotos.com/3000005/4007/i/950/depositphotos_40075087-stock-photo-snow-covered-tree.jpg',
            type: `photo`
        }]
    },
    {
        type: `three-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
                imageUrl: 'https://raw.githubusercontent.com/sumanbogati/images/master/jstutorial/bandwidth-test.jpg',
                type: `photo`
            }, {
                imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/1859-Martinique.web.jpg/394px-1859-Martinique.web.jpg`,
                type: `photo`
            },
            {
                imageUrl: `http://i.imgur.com/DKR1HtB.jpg`,
                type: `paint`
            }
        ]
    },
    {
        type: `two-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
            imageUrl: 'http://mirfactov.com/wp-content/uploads/21854-620x801.jpg',
            type: `paint`
        }, {
            imageUrl: 'https://www.biletik.aero/upload/medialibrary/645/645fc33b514115ef5f8a59091fc3f155.JPG',
            type: `photo`
        }]
    }, {
        type: `one-foto`,
        question: `Угадай, фото или рисунок?`,
        answers: [{
            imageUrl: 'http://i.imgur.com/1KegWPz.jpg',
            type: `paint`
        }]
    },
    {
        type: `three-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
                imageUrl: 'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1547628916',
                type: `photo`
            }, {
                imageUrl: 'https://www.corkenglishcollege.ie/media/b255c98b-a128-461d-9171-b4c999f0c553/Events/FOTA-Wildlife-Park_jpg',
                type: `photo`
            },
            {
                imageUrl: `http://mirfactov.com/wp-content/uploads/8596-620x475.jpg`,
                type: `paint`
            }
        ]
    },
    {
        type: `two-foto`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [{
            imageUrl: 'https://k42.kn3.net/CF42609C8.jpg',
            type: `paint`
        }, {
            imageUrl: 'https://cameralabs.org/media/k2/items/cache/3cb06e4cb464be7a87ae9907c7d62b4b_L.jpg',
            type: `photo`
        }]
    }
];

export const answers = [];
export let game;

export let gamePlay = {
    resetGame() {
        game = Object.assign({}, START_GAME, { answers: [] });
        game.screens = gameScreens;
    },

    getLives(gameData, userAnswers) {
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
    },

    getLevel(gameData, userAnswers) {
        let newGame = {};
        Object.assign(newGame, gameData);
        const curentLevel = userAnswers.length;
        newGame.Level = curentLevel;
        return newGame.Level + 1
    },

    conditionСheck(gameData, userAnswers) {
        if (this.getLevel(gameData, userAnswers) <= 10 && (this.getLives(gameData, userAnswers)) > 0) {
            return true
        }
    },
    getLivesTemplate() {
        new Array(3 - this.getLives(START_GAME, answers)) //количество потраченных жизней
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
            .join(``)
    },

    getLivesMissTemplate() {
        new Array(this.getLives(START_GAME, answers)) //количество сохраненных жизней
            .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
            .join(``)
    },

    // открытие нужного слайда
    showGameScreen(gameData, answers) {
        debugger
        if (game.screens[this.getLevel(gameData, answers) - 1].type === `two-foto`) {
            return showScreen(header(), game1(data));
        }
        if (game.screens[this.getLevel(gameData, answers) - 1].type === `one-foto`) {
            return showScreen(header(), game2(data));
        }
        if (game.screens[this.getLevel(gameData, answers) - 1].type === `three-foto`) {
            return showScreen(header(), game3(data));
        }
    },
};


gamePlay.resetGame();


export const userNineAnswers = [
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

export const userAnswersSlowlyZeroLives = [
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

export const userAnswersQuicklyTwoLives = [
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

export const userAnswersMediumOneLives = [
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

export const userAnswersMediumMinuseTwoLives = [
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

export const userThreeLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

export const userFifeLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];

export const userEightLevel = [
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 },
    { isCorrectAnswer: true, time: 15 }
];
