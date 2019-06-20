(function () {
    'use strict';

    const START_GAME = Object.freeze({
        answer: 0,
        points: 0,
        lives: 3
    });

    const gameScreens = [{
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

    const answers = [];

    let gamePlay = {
        resetGame() {
            gamePlay = Object.assign({}, START_GAME, { answers: [] });
            gamePlay.gameScreens = gameScreens;
        },
        changeGameLevel() {
            gamePlay.level += 1;
        },
        addAnswer(result, time) {
            gamePlay.answers.push([result, time]);
        },
        checkGameOver(data) {
            const lives = checkLives(data);
            const level = data.level;
            if (level === 10 || lives < 0) {
                return showScreen(stats(data));
            }
            return this.showScreenWithData(data);
        },
        showScreenWithData(data) {
            if (data.gameScreens[data.level].type === `two-of-two`) {
                return showScreen(game1(data));
            }
            if (data.gameScreens[data.level].type === `tinder-like`) {
                return showScreen(game2(data));
            }
            if (data.gameScreens[data.level].type === `one-of-three`) {
                return showScreen(game3(data));
            }
            return ``;
        },
    };

    gamePlay.resetGame();
    // gamePlay.changeGameLevel();
    console.log(gamePlay);
    console.log(gamePlay.answers.length);

    // export {
    //     gameState
    // };



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

    var data = /*#__PURE__*/Object.freeze({
        START_GAME: START_GAME,
        gameScreens: gameScreens,
        answers: answers,
        get gamePlay () { return gamePlay; },
        userNineAnswers: userNineAnswers,
        userAnswersSlowlyZeroLives: userAnswersSlowlyZeroLives,
        userAnswersQuicklyTwoLives: userAnswersQuicklyTwoLives,
        userAnswersMediumOneLives: userAnswersMediumOneLives,
        userAnswersMediumMinuseTwoLives: userAnswersMediumMinuseTwoLives,
        userThreeLevel: userThreeLevel,
        userFifeLevel: userFifeLevel,
        userEightLevel: userEightLevel
    });

    const START_GAME$1 = Object.freeze({
        answer: 0,
        points: 0,
        lives: 3
    });

    // подсчет количества жизней
    const getLives = (gameData, userAnswers) => {
        let newGame = {};
        Object.assign(newGame, gameData);
        newGame.lives = gameData.lives;
        for (let i = 0; i < userAnswers.length; i++) {
            userAnswers[i].forEach((element) => {
                if (!element.isCorrectAnswer) {
                    newGame.lives -= 1;
                }
            });
        }
        return newGame.lives
    };

    //изменение уровня
    const getLevel = (gameData, userAnswers) => {
        let newGame = {};
        Object.assign(newGame, gameData);
        const curentLevel = userAnswers.length;
        newGame.Level = curentLevel;
        return newGame.Level + 1
    };

    const main$1 = document.querySelector(`#main`);

    const makeElement = (tagName, className, template) => {
        let domElement = document.createElement(tagName);
        let classNames = className.split(' ');
        classNames.forEach(function(classNamesItem) {
            domElement.classList.add(classNamesItem);
            domElement.innerHTML = template;
        });
        return domElement
    };

    const showScreen$1 = (head, section) => {
        main$1.innerHTML = ``;
        main$1.appendChild(head);
        main$1.appendChild(section);
    };

    // const backBtnTemplate = makeElement(`button`, `back`, `
    //     <span class="visually-hidden">Вернуться к началу</span>
    //     <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    //       <use xlink:href="img/sprite.svg#arrow-left"></use>
    //     </svg>
    //     <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    //       <use xlink:href="img/sprite.svg#logo-small"></use>
    //     </svg>`);

    const backBtnTemplate = `<button class="back">
<span class="visually-hidden">Вернуться к началу</span>
<svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
  <use xlink:href="img/sprite.svg#arrow-left"></use>
</svg>
<svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
  <use xlink:href="img/sprite.svg#logo-small"></use>
</svg>
</button>`;

    const head = () => {
            const headerTemplate = makeElement(`header`, `header`, `
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${new Array(3 - getLives(START_GAME$1, answers))  //количество потраченных жизней
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
    .join(``)}
  ${new Array(getLives(START_GAME$1, answers))  //количество сохраненных жизней
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>`);
      return headerTemplate
    };

    const statsSection = makeElement(`section`, `result`,
        `<h2 class="result__title">Победа!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1 <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>`
    );

    const buttonBack = head().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(moduleContent);
    });

    const game3$1 = () => {
        console.log(answers);
        console.log(`уровень игры` + getLevel(START_GAME$1, answers));
        const game3ContentSection = makeElement(`section`, `game`, `
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
<div class="game__option">
  <img src="${gameScreens[getLevel(START_GAME$1, answers) -1].answers[0].imageUrl}" alt="Option 1" width="304" height="455">
</div>
<div class="game__option  game__option--selected">
  <img src="${gameScreens[getLevel(START_GAME$1, answers)-1].answers[1].imageUrl}" alt="Option 2" width="304" height="455">
</div>
<div class="game__option">
  <img src="${gameScreens[getLevel(START_GAME$1, answers)-1].answers[2].imageUrl}" alt="Option 3" width="304" height="455">
</div>
</form>
<ul class="stats">
<li class="stats__result stats__result--wrong"></li>
<li class="stats__result stats__result--slow"></li>
<li class="stats__result stats__result--fast"></li>
<li class="stats__result stats__result--correct"></li>
<li class="stats__result stats__result--wrong"></li>
<li class="stats__result stats__result--unknown"></li>
<li class="stats__result stats__result--slow"></li>
<li class="stats__result stats__result--unknown"></li>
<li class="stats__result stats__result--fast"></li>
<li class="stats__result stats__result--unknown"></li>
</ul>
</section>`);

        let userlevel = [];
        console.log(`уровень игры` + getLevel(START_GAME$1, answers));
        console.log(`жизней осталось` + getLives(START_GAME$1, answers));
        // console.log(`проверка выполения условия на отображения статистики ` + getLives(START_GAME, data.userAnswersMediumThreeLives) >= 0)
        console.log(answers);
        const button = game3ContentSection.querySelectorAll('.game__option');
        button.forEach((element, index) => {
            console.log(gameScreens[getLevel(START_GAME$1, answers) - 1].answers[index].type);
            element.addEventListener(`click`, () => {

                if (getLevel(START_GAME$1, answers) <= 10 && (getLives(START_GAME$1, answers) > 0)) {
                    if (`paint` == gameScreens[getLevel(START_GAME$1, answers) - 1].answers[index].type) {
                        userlevel.push({ isCorrectAnswer: true, time: 15 });
                    } else {
                        userlevel.push({ isCorrectAnswer: false, time: 15 });
                    }
                    answers.push(userlevel);
                    showScreen$1(head(), game1$1());
                } else {
                    showScreen$1(head(), statsSection);
                }
            });
        });

        const buttonBack = head().querySelector(`.back`);
        buttonBack.addEventListener(`click`, () => {
            main.innerHTML = ``;
            main.appendChild(moduleContent);
        });

        return game3ContentSection
    };

    const game2$1 = () => {
        console.log(gameScreens[getLevel(START_GAME$1, answers) - 1]);
        const game2ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${gameScreens[1].question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${gameScreens[getLevel(START_GAME$1, answers)-1].answers[0].imageUrl}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>`);

        let userlevel = [];
        console.log(`уровень игры` + getLevel(START_GAME$1, answers));
        const radioButton = game2ContentSection.querySelectorAll(`.game__answer>input`);

        radioButton.forEach((element, index) => {
            console.log(`жизней осталось` + getLives(START_GAME$1, answers));


            element.addEventListener(`click`, () => {
                if (getLevel(START_GAME$1, answers) <= 10 && (getLives(START_GAME$1, answers) > 0)) {
                    if (element.checked) {

                        if (element.value === gameScreens[getLevel(START_GAME$1, answers) - 1].answers[0].type) {
                            userlevel.push({ isCorrectAnswer: true, time: 15 });
                        } else {
                            userlevel.push({ isCorrectAnswer: false, time: 15 });
                        }
                        answers.push(userlevel);
                    }
                    showScreen$1(head(), game3$1());
                } else {
                    showScreen$1(head(), statsSection);
                }
            });
        });
        console.log(answers);

        const buttonBack = head().querySelector(`.back`);
        buttonBack.addEventListener(`click`, () => {
            main.innerHTML = ``;
            main.appendChild(moduleContent);
        });

        return game2ContentSection
    };

    const game1$1 = () => {
        debugger
        console.log(undefined);
        console.log(gamePlay.answers);
        const gameContentSection = makeElement(`section`, `game`, `
<p class="game__task">${gameScreens[getLevel(START_GAME$1, gamePlay.answers)-1].question}</p>
<form class="game__content">
  <div class="game__option">
    <img src="${gameScreens[getLevel(START_GAME$1, gamePlay.answers)-1].gamePlay.answers[0].imageUrl}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="${gameScreens[getLevel(START_GAME$1, gamePlay.answers)-1].gamePlay.answers[1].imageUrl}" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="visually-hidden" name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="visually-hidden" name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<ul class="stats">
  <li class="stats__result stats__result--wrong"></li>
  <li class="stats__result stats__result--slow"></li>
  <li class="stats__result stats__result--fast"></li>
  <li class="stats__result stats__result--correct"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
</ul>`);

        let userlevel = [];

        const radioButtonLeftBox = gameContentSection.querySelectorAll(`input[name=question1]`);
        const radioButtonRightBox = gameContentSection.querySelectorAll(`input[name=question2]`);
        let isRadioButtonLeftBox = false;
        let isRadioButtonRightBox = false;
        // console.log(`жизней осталось` + getLives(START_GAME, data.answers));
        // console.log(`проверка выполения условия` + (getLevel(START_GAME, data.userAnswersMediumThreeLives) <= 10 && (getLives(START_GAME, data.userAnswersMediumThreeLives) > 0)))
        // console.log(`проверка выполения условия на отображения статистики ` + getLives(START_GAME, data.userAnswersMediumThreeLives) > 0)
        const compareChecked = () => {
            if (isRadioButtonLeftBox && isRadioButtonRightBox) {
                answers.push(userlevel);
                console.log(answers);

                if (getLevel(START_GAME$1, answers) <= 10 && (getLives(START_GAME$1, answers) > 0)) {
                    showScreen$1(head(), game2$1());
                } else {
                    showScreen$1(head(), statsSection);
                }
                console.log(getLevel(START_GAME$1, answers));
            }
        };

        const buttonBack = head().querySelector(`.back`);
        buttonBack.addEventListener(`click`, () => {
            main.innerHTML = ``;
            main.appendChild(moduleContent);
        });

        console.log(`уровень игры` + getLevel(START_GAME$1, answers));

        radioButtonRightBox.forEach((element, index) => {

            element.addEventListener(`click`, () => {

                if (element.checked) {
                    isRadioButtonRightBox = true;
                }
                // console.log(index)
                // console.log(`праввая группа кнопок` + data.gameScreens[getLevel(START_GAME, data.userAnswersMediumThreeLives) - 1].answers[1].type)
                // console.log(`значение картинки` + element.value)
                if (element.value === gameScreens[getLevel(START_GAME$1, answers) - 1].answers[1].type) {

                    userlevel.push({ isCorrectAnswer: true, time: 15 });
                } else {
                    userlevel.push({ isCorrectAnswer: false, time: 15 });
                }
                compareChecked();
            });
        });

        radioButtonLeftBox.forEach((element, index) => {
            element.addEventListener(`click`, () => {
                if (element.checked) {
                    isRadioButtonLeftBox = true;
                }
                // console.log(index)
                // console.log(`значение индекса элемента базы` + (getLevel(START_GAME, data.userAnswersMediumThreeLives) - 1))
                // console.log(`значение из базы данных` + data.gameScreens[getLevel(START_GAME, data.userAnswersMediumThreeLives) - 1].answers[0].type)
                // console.log(`значение картинки` + element.value)
                // console.log(`значение првоерки` + (element.value === data.gameScreens[getLevel(START_GAME, data.userAnswersMediumThreeLives) - 1].answers[index].type))
                if (element.value === gameScreens[getLevel(START_GAME$1, answers) - 1].answers[0].type) {
                    userlevel.push({ isCorrectAnswer: true, time: 15 });
                } else {
                    userlevel.push({ isCorrectAnswer: false, time: 15 });
                }
                compareChecked();

            });
        });
        return gameContentSection
    };

    // // новая ф-ия
    // const game1 = (data) => {
    //     const gameTask = `<p class="game__task">${data.gameScreens[data.level].question}</p>`;
    //     const game1Html = `
    //     ${headerTemplate(data)}
    //     <section class="game">
    //     ${gameTask}
    //       <form class="game__content">
    //         <div class="game__option">
    //           <img src="${data.gameScreens[data.level].answers[0].image.url}" alt="Option 1" width="468" height="458">
    //           <label class="game__answer game__answer--photo">
    //             <input class="visually-hidden" name="question1" type="radio" value="photo">
    //             <span>Фото</span>
    //           </label>
    //           <label class="game__answer game__answer--paint">
    //             <input class="visually-hidden" name="question1" type="radio" value="paint">
    //             <span>Рисунок</span>
    //           </label>
    //         </div>
    //         <div class="game__option">
    //           <img src="${data.gameScreens[data.level].answers[1].image.url}" alt="Option 2" width="468" height="458">
    //           <label class="game__answer  game__answer--photo">
    //             <input class="visually-hidden" name="question2" type="radio" value="photo">
    //             <span>Фото</span>
    //           </label>
    //           <label class="game__answer  game__answer--paint">
    //             <input class="visually-hidden" name="question2" type="radio" value="paint">
    //             <span>Рисунок</span>
    //           </label>
    //         </div>
    //       </form>
    //     </section>`;

    //     const game1El = makeElement(game1Html);
    //     const leftRadioGroup = [...game1El.querySelectorAll(`input[name=question1]`)];
    //     const rightRadioGroup = [...game1El.querySelectorAll(`input[name=question2]`)];
    //     const backBtn = game1El.querySelector(`.back`);
    //     const gameSection = game1El.querySelector(`.game`);
    //     let isLeftPictureSelected = false;
    //     let isRightPictureSelected = false;

    //     gameSection.appendChild(statsTemplate(data));

    //     const compareChecked = () => {
    //         if (isLeftPictureSelected && isRightPictureSelected) {
    //             gameState.addAnswer(true, 1500);
    //             gameState.checkLivesCount(data);
    //             gameState.changeGameLevel();
    //             gameState.checkGameOver(data);
    //         }
    //     };

    //     leftRadioGroup.map((el) => {
    //         el.addEventListener(`click`, () => {
    //             if (el.checked) {
    //                 isLeftPictureSelected = true;
    //             }
    //             compareChecked();
    //         });
    //     });

    //     rightRadioGroup.forEach((el) => {
    //         el.addEventListener(`click`, () => {
    //             if (el.checked) {
    //                 isRightPictureSelected = true;
    //             }
    //             compareChecked();
    //         });
    //     });

    //     backBtn.addEventListener(`click`, () => showScreen(greeting()));

    //     return game1El;
    // };

    // export default game1;

    const rulesHeader = makeElement(`header`, `header`, `${ backBtnTemplate }`);
    const rulesSection = makeElement(`section`, `rules`, `
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`);

    const rulesButton = rulesSection.querySelector(`.rules__button`);
    const inputName = rulesSection.querySelector(`.rules__input`);


    rulesButton.addEventListener('click', () => {
        showScreen$1(head(), game1$1());
    });

    const buttonBack$1 = rulesHeader.querySelector(`.back`);
    buttonBack$1.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(moduleContent);
    });

    inputName.addEventListener(`input`, () => {
        rulesButton.disabled = (inputName.value < 1);
    });

    const moduleContent = makeElement(`section`, `greeting central--blur`, `
<img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
<div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*</div>
<div class="greeting__challenge">
  <h3 class="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
  <p class="greeting__challenge-text">Правила игры просты:</p>
  <ul class="greeting__challenge-list">
    <li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
    <li>Задача кажется тривиальной, но не думай, что все так просто.</li>
    <li>Фотореализм обманчив и коварен.</li>
    <li>Помни, главное — смотреть очень внимательно.</li>
  </ul>
</div>
<button class="greeting__continue" type="button">
  <span class="visually-hidden">Продолжить</span>
  <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-right"></use>
  </svg>
</button>`);

    const greetingContinue = moduleContent.querySelector(`.greeting__continue`);
    greetingContinue.addEventListener('click', () => {
        showScreen$1(rulesHeader, rulesSection);
    });

    const intro = makeElement('section', 'intro', `
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
`, `intro`);

    const asterisk = intro.querySelector(`.intro__asterisk`);
    const introHeader = makeElement(`header`, `header`, ``);
    const greetingHeader = makeElement(`header`, `header`, ``);

    asterisk.addEventListener(`click`, () => showScreen$1(greetingHeader, moduleContent));

    showScreen$1(introHeader, intro);

}());

//# sourceMappingURL=main.js.map
