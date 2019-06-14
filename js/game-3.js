import {
    makeElement,
    showScreen
} from './utils';
import header from './header';
import greeting from './greeting';
import {
    statsSection
} from "./stats";


const game3ContentSection = makeElement(`section`, `game`, `
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
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

const button = game3ContentSection.querySelectorAll('.game__option');

button.forEach((element) => {
    element.addEventListener(`click`, () => {
        showScreen(header, statsSection);
    })
})

const buttonBack = header.querySelector(`.back`);
buttonBack.addEventListener(`click`, () => {
    main.innerHTML = ``;
    main.appendChild(greeting);
});

export {
    game3ContentSection
};