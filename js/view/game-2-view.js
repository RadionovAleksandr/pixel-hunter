import AbstractView from "./AbstractView";
import stateGame from '../data/state';
import header from '../header-template';
import * as data from '../reducers';

export default class Intro extends AbstractView {
    constructor() { //разобраться и понять
        super()
    };
    get template() {
            return `
${header()}
        <section class="game"
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
    </ul>
    </section>`
    }

    bind() {
      const radioButton = this.element.querySelectorAll(`.game__answer>input`);
      radioButton.forEach((element) => {
        element.addEventListener(`click`, () => {
            if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
                if (element.checked) {
                    data.gamePlay.pushAnswer(stateGame, 0, stateGame.answers, element)
                }
                this.showGame3();
                // data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
            } else {
                this.showStats();
            }
        })
    });

    data.gamePlay.statResultCheck(this.element)
    }

    // statResultCheck() {
    //   if (data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1 === 0) {
    //     return
    //   } else {
    //     stateGame.answers.forEach( (element, index) => {
    //       const statsResult = this.element.querySelectorAll('.stats__result');
    //      if (!element.isCorrectAnswer) {

    //       statsResult[index].classList.add(`stats__result--wrong`)
    //      } else {
    //       statsResult[index].classList.add(`stats__result--correct`)
    //      }
    //     })
    //   }
    //   return
    // }

    onButtonBackClick() {}
    // statResultCheck()
    showStats() {}
    showGame3() {}
}
