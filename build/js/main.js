(function () {
    'use strict';

    const main = document.querySelector(`#main`);

    const showScreen = (e) => {
        console.log(e);
        main.innerHTML = ``;
        main.appendChild(e);
    };

    // const main = document.querySelector(`#main`);

    // const makeElement = (tagName, className, template) => {
    //     let domElement = document.createElement(tagName);
    //     let classNames = className.split(' ');
    //     classNames.forEach(function(classNamesItem) {
    //         domElement.classList.add(classNamesItem)
    //         domElement.innerHTML = template;
    //     });
    //     return domElement
    // }

    // const showScreen = (head, section) => {
    //     main.innerHTML = ``;
    //     main.appendChild(head);
    //     main.appendChild(section);
    // };

    // export {
    //     makeElement,
    //     showScreen,
    // };

    class AbstractView {

        get template() {}
        get element() {
            // debugger
            if (this._element) {
                return this._element;
            }
            this._element = this.render();
            this.bind(this._element);
            return this._element;
        }
        render() {
            const div = document.createElement(`div`);
            div.innerHTML = this.template.trim();
            return div;
        }
        bind() {}
    }

    class Intro extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };

        get template() {
            return `
        <section class="intro">
            <button class="intro__asterisk asterisk" type="button">
            <span class="visually-hidden">Продолжить</span>*</button>
            <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </section>`
        };

        bind() {
            const asterisk = this.element.querySelector(`.intro__asterisk`);
            asterisk.addEventListener(`click`, (e) => {
                e.preventDefault();
                this.onButtonClick();
            });
        }
        onButtonClick() {}; //разобраться и понять причину вызоваы
    }











    // import {
    //   makeElement,
    //   showScreen
    // } from '../utils';
    // import greeting from './greeting';

    // const intro = makeElement('section', 'intro', `
    // <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    // <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    // `, `intro`);

    // const asterisk = intro.querySelector(`.intro__asterisk`);
    // const introHeader = makeElement(`header`, `header`, ``)
    // const greetingHeader = makeElement(`header`, `header`, ``)

    // asterisk.addEventListener(`click`, () => showScreen(greetingHeader, greeting));

    // export {
    //   intro,
    //   introHeader
    // };

    class Intro$1 extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };

        get template() {
            return `<section class="greeting central--blur">
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
</button>
<section>`
        }

        bind() {
            const asterisk = this.element.querySelector(`.greeting__continue`);
            asterisk.addEventListener(`click`, (e) => {
                e.preventDefault();
                // console.log(`Слушатель на greeteng`)
                this.onButtonClick();
            });
        }
        onButtonClick() {};
    }

    const backBtnTemplate = `<button class="back">
<span class="visually-hidden">Вернуться к началу</span>
<svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
  <use xlink:href="img/sprite.svg#arrow-left"></use>
</svg>
<svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
  <use xlink:href="img/sprite.svg#logo-small"></use>
</svg>
</button>`;

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

    // import * as data from './game-data';

    const START_GAME = Object.freeze({
        points: 0,
        lives: 3
    });

    let game;

    const resetGame = (state, dataScreens) => {
        state = Object.assign({}, START_GAME, { answers: [] });
        state.screens = dataScreens;
        return state
    };

    let stateGame = resetGame(game, gameScreens);

    // console.log(data.gamePlay.getLivesTemplate(data.START_GAME, stateGame.answers))
    // console.log(new Array(data.gamePlay.getLives(data.START_GAME, stateGame.answers))
    //     .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
    //     .join(``))
    const head = () => {
        const headerTemplate =
            `<header class="header">
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${gamePlay.getLivesTemplate()}
  ${gamePlay.getLivesMissTemplate()}
  </div>
  </header>`;
        return headerTemplate
    };

    // import gameScreens from './data-base';


    const START_GAME$1 = Object.freeze({
        points: 0,
        lives: 3,
        level: 0
    });

    let gamePlay = {

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
            Object.assign(newGame, START_GAME$1);
            newGame.lives = START_GAME$1.lives;
            stateGame.answers.forEach((element) => {
                if (!element.isCorrectAnswer) {
                    newGame.lives -= 1;
                }
            });
            console.log(newGame.lives);
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
                .join(``);
        },

        getLevel(gameData, userAnswers) {
            let newGame = {};
            Object.assign(newGame, gameData);
            let curentLevel;
            console.log(userAnswers.length);
            if (userAnswers.length === undefined) {
                curentLevel = 0;
            } else {
                curentLevel = userAnswers.length;
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
            if (!stateGame.answers[getLevel(START_GAME$1, stateGame.answers) - 1].isCorrectAnswer) {
                statsResult[getLevel(START_GAME$1, stateGame.answers) - 1];
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
            return state.screens[this.getLevel(START_GAME$1, state.answers) - 1].question
        },

        getImageTemplate(state, index) {
            return state.screens[this.getLevel(START_GAME$1, state.answers) - 1].answers[index].imageUrl
        },

        pushAnswer(state, index, arrAnswer, element) {
            if (state.screens[this.getLevel(START_GAME$1, state.answers) - 1].type === `three-foto`) {
                if (`paint` === state.screens[this.getLevel(START_GAME$1, state.answers) - 1].answers[index].type) {
                    arrAnswer.push({
                        isCorrectAnswer: true,
                        time: 15
                    });
                } else {
                    arrAnswer.push({
                        isCorrectAnswer: false,
                        time: 15
                    });
                }
            } else {
                if (element.value === state.screens[this.getLevel(START_GAME$1, state.answers) - 1].answers[index].type) {
                    arrAnswer.push({
                        isCorrectAnswer: true,
                        time: 15
                    });
                } else {
                    arrAnswer.push({
                        isCorrectAnswer: false,
                        time: 15
                    });
                }
            }
        },

        // открытие нужного слайда
        showGameScreen(state, gameData, screen1, screen2, screen3) {
            // debugger
            if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `two-foto`) {
                return showScreen(head(), screen1());
            }
            if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `one-foto`) {
                return showScreen(head(), screen2());
            }
            if (state.screens[this.getLevel(gameData, state.answers) - 1].type === `three-foto`) {
                return showScreen(head(), screen3());
            }
        },

        statResultCheck(el) {
            if (this.getLevel(START_GAME$1, stateGame.answers) - 1 === 0) {
                return
            } else {
                stateGame.answers.forEach((element, index) => {
                    const statsResult = el.querySelectorAll('.stats__result');
                    if (!element.isCorrectAnswer) {

                        statsResult[index].classList.add(`stats__result--wrong`);
                    } else {
                        statsResult[index].classList.add(`stats__result--correct`);
                    }
                });
            }
        }
    };

    class Intro$2 extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };
        get template() {
                return `
${head()}
<section class="game">
<p class="game__task">${gamePlay.getQuestionTemplate(stateGame)}</p>
<form class="game__content  game__content--triple">
<div class="game__option">
  <img src="${gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="304" height="455">
</div>
<div class="game__option  game__option--selected">
  <img src="${gamePlay.getImageTemplate(stateGame, 1)}" alt="Option 2" width="304" height="455">
</div>
<div class="game__option">
  <img src="${gamePlay.getImageTemplate(stateGame, 2)}" alt="Option 3" width="304" height="455">
</div>
</form>
<ul class="stats">
${new Array(10)
        .fill(`<li class="stats__result stats__result--unknown">`)
        .join(``)}
</ul>
</section>`
      }

      bind() {
        const button = this.element.querySelectorAll('.game__option');
        button.forEach((element, index) => {
          element.addEventListener(`click`, () => {
            if (gamePlay.conditionСheck(START_GAME$1, stateGame.answers)) {
              gamePlay.pushAnswer(stateGame, index, stateGame.answers, element);
              this.showGame1();
              // data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
            } else {
              this.showStats();
            }
          });
        });
      }

      statResultCheck() {
        // console.log(stateGame.answers)
        if (gamePlay.getLevel(START_GAME$1, stateGame.answers) - 1 === 0) {
          return
        } else {
          stateGame.answers.forEach((element, index) => {
            const statsResult = this.element.querySelectorAll('.stats__result');
            if (!element.isCorrectAnswer) {
              statsResult[index].classList.add(`stats__result--wrong`);
            } else {
              statsResult[index].classList.add(`stats__result--correct`);
            }
          });
        }
      }

      onButtonBackClick() {}
      showGame1() {}
      showStats() {}
    }

    var game3 = () => {
        const intro = new Intro$2();
        intro.onButtonBackClick = () => {
            showScreen(greeting().element);
        };
        intro.showGame1 = () => {
            showScreen(game1().element);
        };

        intro.statResultCheck();
            // отрисовываем статистику
        intro.showStats = () => {
            console.log(`показываю статистику`);
        };
        return intro;
    };

    class Intro$3 extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };
        get template() {
                return `
${head()}
        <section class="game"
<p class="game__task">${gamePlay.getQuestionTemplate(stateGame)}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="705" height="455">
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
    ${new Array(10)
      .fill(`<li class="stats__result stats__result--unknown">`)
      .join(``)}
    </ul>
    </section>`
        }

        bind() {
          const radioButton = this.element.querySelectorAll(`.game__answer>input`);
          radioButton.forEach((element) => {
            element.addEventListener(`click`, () => {
                if (gamePlay.conditionСheck(START_GAME$1, stateGame.answers)) {
                    if (element.checked) {
                        gamePlay.pushAnswer(stateGame, 0, stateGame.answers, element);
                    }
                    this.showGame3();
                    // data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
                } else {
                    this.showStats();
                }
            });
        });
        }

        statResultCheck() {
          if (gamePlay.getLevel(START_GAME$1, stateGame.answers) - 1 === 0) {
            return
          } else {
            stateGame.answers.forEach( (element, index) => {
              const statsResult = this.element.querySelectorAll('.stats__result');
             if (!element.isCorrectAnswer) {

              statsResult[index].classList.add(`stats__result--wrong`);
             } else {
              statsResult[index].classList.add(`stats__result--correct`);
             }
            });
          }
          return
        }

        onButtonBackClick() {}
        // statResultCheck()
        showStats() {}
        showGame3() {}
    }

    var game2 = () => {
        const intro = new Intro$3();
        intro.onButtonBackClick = () => {
            showScreen(greeting().element);
        };

        intro.showGame3 = () => {
            showScreen(game3().element);
        };
        intro.statResultCheck();
            // отрисовываем статистику
        intro.showStats = () => {
            console.log(`показываю статистику`);
        };
        return intro;
    };

    class Intro$4 extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };
        get template() {
                return `
${head()}
<section class="game">
  <p class="game__task">${gamePlay.getQuestionTemplate(stateGame)}</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="468" height="458">
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
      <img src="${gamePlay.getImageTemplate(stateGame, 1)}" alt="Option 2" width="468" height="458">
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
  ${new Array(10)
        .fill(`<li class="stats__result stats__result--unknown">`)
        .join(``)}
  </ul>
</section>`
      }
      ;

      statResultCheck() {
        if (gamePlay.getLevel(START_GAME$1, stateGame.answers) - 1 === 0) {
          return
        } else {
          stateGame.answers.forEach((el, index) => {
            const statsResult = this.element.querySelectorAll('.stats__result');
            if (!el.isCorrectAnswer) {
              statsResult[index].classList.add(`stats__result--wrong`);
            } else {
              statsResult[index].classList.add(`stats__result--correct`);
            }
          });
        }
      }
      ;

      bind() {
        let userAnswer = [];
        let isRadioButtonLeftBox = false;
          let isRadioButtonRightBox = false;
        const radioButtonLeftBox = this.element.querySelectorAll(`input[name=question1]`);
        const radioButtonRightBox = this.element.querySelectorAll(`input[name=question2]`);

       const compareChecked = () => {
          if (isRadioButtonLeftBox && isRadioButtonRightBox) {
            if ((!userAnswer[0].isCorrectAnswer) || (!userAnswer[1].isCorrectAnswer)) {
              stateGame.answers.push({
                isCorrectAnswer: false,
                time: 15
              });
            } else {
              stateGame.answers.push({
                isCorrectAnswer: true,
                time: 15
              });
            }
            if (gamePlay.conditionСheck(START_GAME$1, stateGame.answers)) {
              this.compareChecking();
            } else {
              this.showStats();
            }
          }
        };


        radioButtonRightBox.forEach((element) => {
          element.addEventListener(`click`, () => {
            if (element.checked) {
              isRadioButtonRightBox = true;
            }
            gamePlay.pushAnswer(stateGame, 1, userAnswer, element);

            compareChecked();
          });
        });

        radioButtonLeftBox.forEach((element) => {
          element.addEventListener(`click`, () => {
            if (element.checked) {
              isRadioButtonLeftBox = true;
            }
            gamePlay.pushAnswer(stateGame, 0, userAnswer, element);

            compareChecked();
          });
        });

        const buttonBack = this.element.querySelector(`.back`);
        buttonBack.addEventListener(`click`, () => {
          this.onButtonBackClick();
        });
      }
      // statResultCheck()
      onButtonBackClick() {}
      compareChecking() {}
      showStats() {}

    }

    var game1 = () => {
        const intro = new Intro$4();
        intro.onButtonBackClick = () => {
            showScreen(greeting().element);
        };
        intro.compareChecking = () => {
            showScreen(game2().element);
        };

        intro.statResultCheck();
            // отрисовываем статистику
        intro.showStats = () => {
            console.log(`показываю статистику`);
        };
        return intro;
    };

    // data.showGameScreen(state, gameData, screen1, screen2, screen3)

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

    class Intro$5 extends AbstractView {
        constructor() { //разобраться и понять
            super();
        };

        get template() {
            return `<section class="rules">
          ${ backBtnTemplate }
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
    </form>
    </section>`
        }



        bind() {
            const rulesButton = this.element.querySelector(`.rules__button`);
            const inputName = this.element.querySelector(`.rules__input`);
            inputName.addEventListener(`input`, () => {
                rulesButton.disabled = (inputName.value < 1);
            });
            rulesButton.addEventListener(`click`, (e) => {
                e.preventDefault();
                // console.log(`Слушатель на rules GO`)
                this.onButtonClick();
            });
            const buttonBack = this.element.querySelector(`.back`);
            buttonBack.addEventListener(`click`, (e) => {
                e.preventDefault();
                // console.log(`Слушатель на кнопку назад rules `)
                this.onButtonBackClick();
            });
        }
        onButtonClick() {};
        onButtonBackClick() {};
    }

    var rules = () => {
        const intro = new Intro$5();
        intro.onButtonClick = () => showScreen(game1().element);
        intro.onButtonBackClick = () => showScreen(greeting().element);
        return intro;
    };

    var greeting = () => {
        const intro = new Intro$1();
        intro.onButtonClick = () => showScreen(rules().element);
        return intro;
    };

    // showScreen(rules().element);

    var intro = () => {
            const intro = new Intro();
            intro.onButtonClick = () => showScreen(greeting().element);
            return intro;
        };
        // showScreen(greeteng().element);

    console.log(intro());
    console.log(intro().template);
    console.log(intro().element);
    console.log(intro().render());

    showScreen(intro().element);

}());

//# sourceMappingURL=main.js.map
