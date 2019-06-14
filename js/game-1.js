import {
    makeElement,
    showScreen
} from './utils';
import greeting from './greeting';
import header from './header';
import {
    game2ContentSection
} from "./game-2";

const gameContentSection = makeElement(`section`, `game`, `
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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

const radioButtonLeftBox = gameContentSection.querySelectorAll(`input[name=question1]`);
const radioButtonRightBox = gameContentSection.querySelectorAll(`input[name=question2]`);
let isRadioButtonLeftBox = false;
let isRadioButtonRightBox = false;

const compareChecked = () => {
    if (isRadioButtonLeftBox && isRadioButtonRightBox) {
        showScreen(header, game2ContentSection);
    }
}

const buttonBack = header.querySelector(`.back`);
buttonBack.addEventListener(`click`, () => {
    main.innerHTML = ``;
    main.appendChild(greeting);
});

radioButtonRightBox.forEach((element) => {
    console.log('forEach')
    element.addEventListener(`click`, () => {
        if (element.checked) {
            isRadioButtonRightBox = true;
        }
        compareChecked();
    });
});

radioButtonLeftBox.forEach((element) => {
    console.log('forEach')
    element.addEventListener(`click`, () => {
        if (element.checked) {
            isRadioButtonLeftBox = true;
        }
        compareChecked();
    });
});

export {
    gameContentSection
};