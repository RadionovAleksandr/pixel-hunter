import {
    makeElement,
    showScreen
} from '../utils.js';
import header from '../header-template';
import greeting from './greeting';
import {
    game3
} from "./game-3";
import {
    statsSection
} from "./stats";
import * as data from '../data/game-data';
import { START_GAME, scoring, getLives, getLevel, calculateAnswerTime } from '../data/functions.test';


const game2 = () => {
    console.log(data.gameScreens[getLevel(START_GAME, data.answers) - 1])
    const game2ContentSection = makeElement(`section`, `game`, `
<p class="game__task">${data.gameScreens[1].question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.gameScreens[getLevel(START_GAME, data.answers)-1].answers[0].imageUrl}" alt="Option 1" width="705" height="455">
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
    console.log(`уровень игры` + getLevel(START_GAME, data.answers))
    const radioButton = game2ContentSection.querySelectorAll(`.game__answer>input`);

    radioButton.forEach((element, index) => {
        console.log(`жизней осталось` + getLives(START_GAME, data.answers));


        element.addEventListener(`click`, () => {
            if (getLevel(START_GAME, data.answers) <= 10 && (getLives(START_GAME, data.answers) > 0)) {
                if (element.checked) {

                    if (element.value === data.gameScreens[getLevel(START_GAME, data.answers) - 1].answers[0].type) {
                        userlevel.push({ isCorrectAnswer: true, time: 15 });
                    } else {
                        userlevel.push({ isCorrectAnswer: false, time: 15 });
                    }
                    data.answers.push(userlevel);
                }
                showScreen(header(), game3())
            } else {
                showScreen(header(), statsSection);
            }
        })
    });
    console.log(data.answers);

    const buttonBack = header().querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
        main.innerHTML = ``;
        main.appendChild(greeting);
    });

    return game2ContentSection
}

export {
    game2
};
