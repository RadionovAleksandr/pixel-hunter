import {
    makeElement,
    showScreen
} from '../utils.js';
import greeting from './greeting';
import head from '../header-template';
import backBtnTemplate from "../back-btn-template";
import {
    game1
} from "./game-1";

const rulesHeader = makeElement(`header`, `header`, `${ backBtnTemplate }`)
const rulesSection = makeElement(`section`, `rules`, `
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`);

const rulesButton = rulesSection.querySelector(`.rules__button`);
const inputName = rulesSection.querySelector(`.rules__input`);


rulesButton.addEventListener('click', () => {
    showScreen(head(), game1());
})

const buttonBack = rulesHeader.querySelector(`.back`);
buttonBack.addEventListener(`click`, () => {
    main.innerHTML = ``;
    main.appendChild(greeting);
});

inputName.addEventListener(`input`, () => {
    rulesButton.disabled = (inputName.value < 1);
});

export {
    rulesSection,
    rulesHeader
};
