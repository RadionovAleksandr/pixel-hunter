import {
    makeElement,
    showScreen
} from './utils.js';
import header from './header';
import greeting from './greeting';
import {
    game3ContentSection
} from "./game-3";

const game2ContentSection = makeElement(`section`, `game`, `
<p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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


const radioButton = game2ContentSection.querySelectorAll(`.game__answer`);

console.log(radioButton)

radioButton.forEach((element) => {
    console.log(`foreache3`)
    element.addEventListener(`click`, () => {
        console.log(element.checked)
            // if (element.checked) {
        showScreen(header, game3ContentSection)
            // }
    })
});

const buttonBack = header.querySelector(`.back`);
buttonBack.addEventListener(`click`, () => {
    main.innerHTML = ``;
    main.appendChild(greeting);
});

export {
    game2ContentSection
};