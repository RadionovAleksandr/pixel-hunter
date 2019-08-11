import backBtnTemplate from "../back-btn-template";
import AbstractView from "./AbstractView";

export default class Rules extends AbstractView {
    constructor() { //разобраться и понять
        super()
    };

    get template() {
        return `<section class="rules">
          ${ backBtnTemplate }
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
    </form>
    </section>`
    }



    bind() {
        const rulesButton = this.element.querySelector(`.rules__button`);
        const inputName = this.element.querySelector(`.rules__input`);
        inputName.addEventListener(`input`, () => {
            rulesButton.disabled = (inputName.value < 1)
        });
        rulesButton.addEventListener(`click`, (e) => {
            e.preventDefault();
            // console.log(`Слушатель на rules GO`)
            this.onButtonClick();
        });
        const buttonBack = this.element.querySelector(`.back`);
        buttonBack.addEventListener(`click`, (e) => {
            e.preventDefault();
            // console.log(`Слушатель на кнопку назад rules `)
            this.onButtonBackClick();
        });
    }
    onButtonClick() {};
    onButtonBackClick() {};
}