(function () {
  'use strict';

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

  // debugger
  // console.log(data.gamePlay.getLives());

  const head = () => {
          const headerTemplate = makeElement(`header`, `header`, `
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${new Array(3 - gamePlay.getLives(START_GAME, answers))  //количество потраченных жизней
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
    .join(``)}
  ${new Array(gamePlay.getLives(START_GAME, answers))  //количество сохраненных жизней
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>`);
    return headerTemplate
  };

  // import { game1 } from "../screens/game-1";


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
  let game;

  let gamePlay = {
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
              });
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

      // открытие нужного слайда
      showGameScreen(gameData, answers) {
          debugger
          if (game.screens[this.getLevel(gameData, answers) - 1].type === `two-foto`) {
              return showScreen(head(), game1(data));
          }
          if (game.screens[this.getLevel(gameData, answers) - 1].type === `one-foto`) {
              return showScreen(head(), game2(data));
          }
          if (game.screens[this.getLevel(gameData, answers) - 1].type === `three-foto`) {
              return showScreen(head(), game3(data));
          }
      },
  };


  gamePlay.resetGame();

  const START_GAME$1 = Object.freeze({
      answer: 0,
      points: 0,
      lives: 3
  });

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

  const showScreen = (head, section) => {
      main$1.innerHTML = ``;
      main$1.appendChild(head);
      main$1.appendChild(section);
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
      // console.log(data.gamePlay.answers)
      // console.log(`уровень игры` + getLevel(START_GAME, data.gamePlay.answers))
      const game3ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].question}</p>
<form class="game__content  game__content--triple">
<div class="game__option">
  <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[0].imageUrl}" alt="Option 1" width="304" height="455">
</div>
<div class="game__option  game__option--selected">
  <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[1].imageUrl}" alt="Option 2" width="304" height="455">
</div>
<div class="game__option">
  <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[2].imageUrl}" alt="Option 3" width="304" height="455">
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

      let userAnswer = [];
      const button = game3ContentSection.querySelectorAll('.game__option');
      button.forEach((element, index) => {
          element.addEventListener(`click`, () => {
              if (gamePlay.conditionСheck(START_GAME, answers)) {
                  if (`paint` === game.screens[gamePlay.getLevel(START_GAME$1, answers) - 1].answers[index].type) {
                      userAnswer.push({ isCorrectAnswer: true, time: 15 });
                  } else {
                      userAnswer.push({ isCorrectAnswer: false, time: 15 });
                  }
                  answers.push(userAnswer);
                  //не получилось вынести программу из game-data.js ругается ролап
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `two-foto`) {
                      return showScreen(head(), game1$1());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `one-foto`) {
                      return showScreen(head(), game2());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `three-foto`) {
                      return showScreen(head(), game3$1());
                  }            } else {
                  showScreen(head(), statsSection);
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
      const game2ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[0].imageUrl}" alt="Option 1" width="705" height="455">
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

      let userAnswer = [];
      const radioButton = game2ContentSection.querySelectorAll(`.game__answer>input`);
      radioButton.forEach((element) => {
          element.addEventListener(`click`, () => {
              if (gamePlay.conditionСheck(START_GAME, answers)) {
                  if (element.checked) {
                      if (element.value === game.screens[gamePlay.getLevel(START_GAME$1, answers) - 1].answers[0].type) {
                          userAnswer.push({ isCorrectAnswer: true, time: 15 });
                      } else {
                          userAnswer.push({ isCorrectAnswer: false, time: 15 });
                      }
                      answers.push(userAnswer);
                  }
                  //не получилось вынести программу из game-data.js ругается ролап
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `two-foto`) {
                      return showScreen(head(), game1());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `one-foto`) {
                      return showScreen(head(), game2$1());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `three-foto`) {
                      return showScreen(head(), game3$1());
                  }            } else {
                  showScreen(head(), statsSection);
              }
          });
      });

      const buttonBack = head().querySelector(`.back`);
      buttonBack.addEventListener(`click`, () => {
          main.innerHTML = ``;
          main.appendChild(moduleContent);
      });

      return game2ContentSection
  };

  const game1$1 = () => {
      // debugger
      // console.log(game.screens);
      // console.log(data.game.screens)
      // console.log(data.answers)
      const gameContentSection = makeElement(`section`, `game`, `
<p class="game__task">${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].question}</p>
<form class="game__content">
  <div class="game__option">
    <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[0].imageUrl}" alt="Option 1" width="468" height="458">
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
    <img src="${game.screens[gamePlay.getLevel(START_GAME$1, answers)-1].answers[1].imageUrl}" alt="Option 2" width="468" height="458">
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

      let userAnswer = [];

      const radioButtonLeftBox = gameContentSection.querySelectorAll(`input[name=question1]`);
      const radioButtonRightBox = gameContentSection.querySelectorAll(`input[name=question2]`);
      let isRadioButtonLeftBox = false;
      let isRadioButtonRightBox = false;

      const compareChecked = () => {
          console.log(isRadioButtonLeftBox && isRadioButtonRightBox);
          console.log(isRadioButtonLeftBox);
          console.log(isRadioButtonRightBox);
          if (isRadioButtonLeftBox && isRadioButtonRightBox) {
              answers.push(userAnswer);
              console.log(gamePlay.conditionСheck(START_GAME, answers));
              if (gamePlay.conditionСheck(START_GAME, answers)) {

                  //не получилось вынести программу из game-data.js ругается ролап
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `two-foto`) {
                      return showScreen(head(), game1$1());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `one-foto`) {
                      return showScreen(head(), game2$1());
                  }
                  if (game.screens[gamePlay.getLevel(START_GAME, answers) - 1].type === `three-foto`) {
                      return showScreen(head(), game3());
                  }            } else {
                  showScreen(head(), statsSection);
              }
          }
      };

      const buttonBack = head().querySelector(`.back`);
      buttonBack.addEventListener(`click`, () => {
          main.innerHTML = ``;
          main.appendChild(moduleContent);
      });

      radioButtonRightBox.forEach((element) => {
          element.addEventListener(`click`, () => {
              if (element.checked) {
                  isRadioButtonRightBox = true;
              }
              console.log(game.screens[gamePlay.getLevel(START_GAME$1, answers) - 1].answers);
              if (element.value === game.screens[gamePlay.getLevel(START_GAME$1, answers) - 1].answers[1].type) {
                  userAnswer.push({ isCorrectAnswer: true, time: 15 });
              } else {
                  userAnswer.push({ isCorrectAnswer: false, time: 15 });
              }
              compareChecked();
          });
      });

      radioButtonLeftBox.forEach((element) => {
          element.addEventListener(`click`, () => {
              if (element.checked) {
                  isRadioButtonLeftBox = true;
              }
              if (element.value === game.screens[gamePlay.getLevel(START_GAME$1, answers) - 1].answers[0].type) {
                  userAnswer.push({ isCorrectAnswer: true, time: 15 });
              } else {
                  userAnswer.push({ isCorrectAnswer: false, time: 15 });
              }
              compareChecked();

          });
      });
      return gameContentSection
  };


  // так написал один из студентов академии!!!

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
      showScreen(head(), game1$1());
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
      showScreen(rulesHeader, rulesSection);
  });

  const intro = makeElement('section', 'intro', `
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
`, `intro`);

  const asterisk = intro.querySelector(`.intro__asterisk`);
  const introHeader = makeElement(`header`, `header`, ``);
  const greetingHeader = makeElement(`header`, `header`, ``);

  asterisk.addEventListener(`click`, () => showScreen(greetingHeader, moduleContent));

  showScreen(introHeader, intro);

}());

//# sourceMappingURL=main.js.map
