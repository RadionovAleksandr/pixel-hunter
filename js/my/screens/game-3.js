import {
    makeElement,
    showScreen
} from '../utils';
import header from '../header-template';
import greeting from './greeting';
import stateGame from '../data/state';
import { statsSection } from "./stats";
import { game2 } from "./game-2";
import { game1 } from "./game-1";
import * as data from '../reducers';



const game3 = () => {
        const game3ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.gamePlay.getQuestionTemplate(stateGame)}</p>
<form class="game__content  game__content--triple">
<div class="game__option">
  <img src="${data.gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="304" height="455">
</div>
<div class="game__option  game__option--selected">
  <img src="${data.gamePlay.getImageTemplate(stateGame, 1)}" alt="Option 2" width="304" height="455">
</div>
<div class="game__option">
  <img src="${data.gamePlay.getImageTemplate(stateGame, 2)}" alt="Option 3" width="304" height="455">
</div>
</form>
<ul class="stats">
${new Array(10)
  .fill(`<li class="stats__result stats__result--unknown">`)
  .join(``)}
</ul>
</section>`);


    const button = game3ContentSection.querySelectorAll('.game__option');
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
          const statsResult = game3ContentSection.querySelectorAll('.stats__result');
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
    button.forEach((element, index) => {
        element.addEventListener(`click`, () => {
            if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
                data.gamePlay.pushAnswer(stateGame, index, stateGame.answers, element)

                data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
            } else {
                showScreen(header(), statsSection);
            }
        })
    })

    const buttonBack = header().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(greeting);
    });
    console.log(stateGame)
    return game3ContentSection
}

export {
    game3
};
