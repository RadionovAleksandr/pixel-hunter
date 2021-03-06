import {
    makeElement,
    showScreen
} from '../utils.js';
import stateGame from '../data/state';
import header from '../header-template';
import greeting from './greeting';
import { game1 } from "./game-1";
import { game3 } from "./game-3";
import { statsSection } from "./stats";
import * as data from '../reducers';


const game2 = () => {
        const game2ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.gamePlay.getQuestionTemplate(stateGame)}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="705" height="455">
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
    </ul>`);

    const radioButton = game2ContentSection.querySelectorAll(`.game__answer>input`);

    const statResultCheck = () => {
      debugger
      console.log(stateGame.answers[data.gamePlay.getLevel(data.START_GAME, stateGame.answers) -1])
      console.log(stateGame.answers)
      console.log(data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1)
      // console.log(stateGame.answers)
      if (data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1 === 0) {
        return
      } else {
        stateGame.answers.forEach( (element, index) => {
          const statsResult = game2ContentSection.querySelectorAll('.stats__result');
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

    radioButton.forEach((element) => {
        element.addEventListener(`click`, () => {
            if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
                if (element.checked) {
                    data.gamePlay.pushAnswer(stateGame, 0, stateGame.answers, element)
                }
                data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
            } else {
                showScreen(header(), statsSection);
            }
        })
    });

    const buttonBack = header().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(greeting);
    });
    console.log(stateGame)
    return game2ContentSection
}

export {
    game2
};
