import { makeElement, showScreen } from '../utils';
import stateGame from '../data/state';
import greeting from './greeting';
import header from '../header-template';
import { game2 } from "./game-2";
import { game3 } from "./game-3";
import { statsSection } from "./stats";
import * as data from '../reducers';
// import statsTemplate from '../stats-template';

const game1 = () => {
        debugger
        // console.log(data.answers)
        const gameContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.gamePlay.getQuestionTemplate(stateGame)}</p>
<form class="game__content">
  <div class="game__option">
    <img src="${data.gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="468" height="458">
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
    <img src="${data.gamePlay.getImageTemplate(stateGame, 1)}" alt="Option 2" width="468" height="458">
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
</ul>`);

  let userAnswer = [];
  const radioButtonLeftBox = gameContentSection.querySelectorAll(`input[name=question1]`);
  const radioButtonRightBox = gameContentSection.querySelectorAll(`input[name=question2]`);
  let isRadioButtonLeftBox = false;
  let isRadioButtonRightBox = false;


  const statResultCheck = () => {
    // debugger
    console.log(stateGame.answers[data.gamePlay.getLevel(data.START_GAME, stateGame.answers) -1])
    console.log(stateGame.answers)
    console.log(data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1)
    // console.log(stateGame.answers)
    if (data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1 === 0) {
      return
    } else {
      stateGame.answers.forEach( (element, index) => {
        const statsResult = gameContentSection.querySelectorAll('.stats__result');
       if (!element.isCorrectAnswer) {


        statsResult[index].classList.add(`stats__result--wrong`)
       } else {
        statsResult[index].classList.add(`stats__result--correct`)
       }
      })
    }
    // return
  }
  statResultCheck()

  const compareChecked = () => {

    if (isRadioButtonLeftBox && isRadioButtonRightBox) {
      if ((!userAnswer[0].isCorrectAnswer) || (!userAnswer[1].isCorrectAnswer)) {
        stateGame.answers.push({
          isCorrectAnswer: false,
          time: 15
        })
      } else {
        stateGame.answers.push({
          isCorrectAnswer: true,
          time: 15
        })
      }
      if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
        data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);

      } else {
        showScreen(header(), statsSection);
      // отрисовываем статистику
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
      data.gamePlay.pushAnswer(stateGame, 1, userAnswer, element)
      compareChecked();
    });
  });

  radioButtonLeftBox.forEach((element) => {
    element.addEventListener(`click`, () => {
      if (element.checked) {
        isRadioButtonLeftBox = true;
      }
      data.gamePlay.pushAnswer(stateGame, 0, userAnswer, element)
      compareChecked();
      console.log(stateGame)
    });
  });
  return gameContentSection
}

export { game1 };


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
