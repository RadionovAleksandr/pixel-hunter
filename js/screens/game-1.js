import {
    makeElement,
    showScreen
} from '../utils';
import greeting from './greeting';
import header from '../header-template';
import { game2 } from "./game-2";
import {
    statsSection
} from "./stats";
import * as data from '../data/game-data';
import { START_GAME, scoring, getLives, getLevel, calculateAnswerTime } from '../data/functions.test';

const game1 = () => {
    // debugger
    // console.log(game.screens);
    // console.log(data.game.screens)
    // console.log(data.answers)
    const gameContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].question}</p>
<form class="game__content">
  <div class="game__option">
    <img src="${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].answers[0].imageUrl}" alt="Option 1" width="468" height="458">
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
    <img src="${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].answers[1].imageUrl}" alt="Option 2" width="468" height="458">
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
        console.log(isRadioButtonLeftBox && isRadioButtonRightBox)
        console.log(isRadioButtonLeftBox)
        console.log(isRadioButtonRightBox)
        if (isRadioButtonLeftBox && isRadioButtonRightBox) {
            data.answers.push(userAnswer);
            console.log(data.gamePlay.conditionСheck(data.START_GAME, data.answers))
            if (data.gamePlay.conditionСheck(data.START_GAME, data.answers)) {

                //не получилось вынести программу из game-data.js ругается ролап
                if (data.game.screens[data.gamePlay.getLevel(data.START_GAME, data.answers) - 1].type === `two-foto`) {
                    return showScreen(header(), game1());
                }
                if (data.game.screens[data.gamePlay.getLevel(data.START_GAME, data.answers) - 1].type === `one-foto`) {
                    return showScreen(header(), game2());
                }
                if (data.game.screens[data.gamePlay.getLevel(data.START_GAME, data.answers) - 1].type === `three-foto`) {
                    return showScreen(header(), game3());
                };
            } else {
                showScreen(header(), statsSection);
            }
        }
    }

    const buttonBack = header().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(greeting);
    });

    radioButtonRightBox.forEach((element) => {
        element.addEventListener(`click`, () => {
            if (element.checked) {
                isRadioButtonRightBox = true;
            }
            console.log(data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers) - 1].answers)
            if (element.value === data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers) - 1].answers[1].type) {
                userAnswer.push({ isCorrectAnswer: true, time: 15 })
            } else {
                userAnswer.push({ isCorrectAnswer: false, time: 15 })
            }
            compareChecked();
        });
    });

    radioButtonLeftBox.forEach((element) => {
        element.addEventListener(`click`, () => {
            if (element.checked) {
                isRadioButtonLeftBox = true;
            }
            if (element.value === data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers) - 1].answers[0].type) {
                userAnswer.push({ isCorrectAnswer: true, time: 15 })
            } else {
                userAnswer.push({ isCorrectAnswer: false, time: 15 })
            }
            compareChecked();

        });
    });
    return gameContentSection
}

export {
    game1
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
