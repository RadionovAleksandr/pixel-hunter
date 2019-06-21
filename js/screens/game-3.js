import {
    makeElement,
    showScreen
} from '../utils';
import header from '../header-template';
import greeting from './greeting';
import {
    statsSection
} from "./stats";
import {
    game1
} from "./game-1";
import * as data from '../data/game-data';
import { START_GAME, scoring, getLives, getLevel, calculateAnswerTime } from '../data/functions.test';


const game3 = () => {
    // console.log(data.gamePlay.answers)
    // console.log(`уровень игры` + getLevel(START_GAME, data.gamePlay.answers))
    const game3ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].question}</p>
<form class="game__content  game__content--triple">
<div class="game__option">
  <img src="${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].answers[0].imageUrl}" alt="Option 1" width="304" height="455">
</div>
<div class="game__option  game__option--selected">
  <img src="${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].answers[1].imageUrl}" alt="Option 2" width="304" height="455">
</div>
<div class="game__option">
  <img src="${data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers)-1].answers[2].imageUrl}" alt="Option 3" width="304" height="455">
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
            if (data.gamePlay.conditionСheck(data.START_GAME, data.answers)) {
                if (`paint` === data.game.screens[data.gamePlay.getLevel(START_GAME, data.answers) - 1].answers[index].type) {
                    userAnswer.push({ isCorrectAnswer: true, time: 15 })
                } else {
                    userAnswer.push({ isCorrectAnswer: false, time: 15 })
                }
                data.answers.push(userAnswer);
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
        })
    })

    const buttonBack = header().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(greeting);
    });

    return game3ContentSection
}

export {
    game3
};
