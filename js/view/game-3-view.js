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
<section class="game">
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
</section>`
  }

  bind() {
    const button = this.element.querySelectorAll('.game__option');
    button.forEach((element, index) => {
      element.addEventListener(`click`, () => {
        if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
          data.gamePlay.pushAnswer(stateGame, index, stateGame.answers, element)

          this.showGame1();
          // data.gamePlay.showGameScreen(stateGame, data.START_GAME, game1, game2, game3);
        } else {
          this.showStats();
        }
      })
    })
    data.gamePlay.statResultCheck(this.element);
  }

  // statResultCheck() {
  //   // console.log(stateGame.answers)
  //   if (data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1 === 0) {
  //     return
  //   } else {
  //     stateGame.answers.forEach((element, index) => {
  //       const statsResult = this.element.querySelectorAll('.stats__result');
  //       if (!element.isCorrectAnswer) {
  //         statsResult[index].classList.add(`stats__result--wrong`)
  //       } else {
  //         statsResult[index].classList.add(`stats__result--correct`)
  //       }
  //     })
  //   }
  // }

  onButtonBackClick() {}
  showGame1() {}
  showStats() {}
}
