import { showScreen } from '../utils';
import game2 from "./game-2";
import game3 from "./game-3";
import stats from "./stats";
import greeting from './greeting';
import Intro from '../view/game-1-view';
import * as data from '../reducers';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };
    intro.compareChecking = () => {
        data.gamePlay.showGameScreen(intro, game2, game3)
    };

    // отрисовываем статистику
    intro.showStats = () => {
        showScreen(stats())
    }
    return intro;
}

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
