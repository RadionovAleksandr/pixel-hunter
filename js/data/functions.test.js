const QUICK_ANSWER = 10;
const LONG_ANSWER = 20;

export const START_GAME = Object.freeze({
    answer: 0,
    points: 0,
    lives: 3
});


export const scoring = (gameData, userAnswers, lives) => {
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
export const numberLives = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    newGame.lives = gameData.lives;
    console.log(newGame.lives)
    userAnswers.forEach((element) => {
        if (!element.isCorrectAnswer) {
            newGame.lives -= 1;
        }
        if (newGame.lives < 0) {
            return -1
        }
    })
    return newGame.lives
}

//изменение уровня
export const changeLevel = (gameData, userAnswers) => {
    let newGame = {};
    Object.assign(newGame, gameData);
    const curentLevel = userAnswers.length;
    newGame.Level = curentLevel;
    return newGame.Level
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
