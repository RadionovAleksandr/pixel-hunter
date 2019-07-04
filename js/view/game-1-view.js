import AbstractView from "./AbstractView";
import stateGame from '../data/state';
import * as data from '../reducers';
import header from '../header-template';

export default class Intro extends AbstractView {
    constructor() { //разобраться и понять
        super()
    };
    get template() {
            return `
${header()}
<section class="game">
  <p class="game__task">${data.gamePlay.getQuestionTemplate(stateGame)}</p>
  <form class="game__content">
    <div class="game__option">
      <img src="${data.gamePlay.getImageTemplate(stateGame, 0)}" alt="Option 1" width="468" height="458">
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
      <img src="${data.gamePlay.getImageTemplate(stateGame, 1)}" alt="Option 2" width="468" height="458">
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
  ${new Array(10)
        .fill(`<li class="stats__result stats__result--unknown">`)
        .join(``)}
  </ul>
</section>`
  }
  ;

  statResultCheck() {
    if (data.gamePlay.getLevel(data.START_GAME, stateGame.answers) - 1 === 0) {
      return
    } else {
      stateGame.answers.forEach((el, index) => {
        const statsResult = this.element.querySelectorAll('.stats__result');
        if (!el.isCorrectAnswer) {
          statsResult[index].classList.add(`stats__result--wrong`)
        } else {
          statsResult[index].classList.add(`stats__result--correct`)
        }
      })
    }
  }
  ;

  bind() {
    let userAnswer = [];
    let isRadioButtonLeftBox = false;
      let isRadioButtonRightBox = false;
    const radioButtonLeftBox = this.element.querySelectorAll(`input[name=question1]`);
    const radioButtonRightBox = this.element.querySelectorAll(`input[name=question2]`);

   const compareChecked = () => {
      if (isRadioButtonLeftBox && isRadioButtonRightBox) {
        if ((!userAnswer[0].isCorrectAnswer) || (!userAnswer[1].isCorrectAnswer)) {
          stateGame.answers.push({
            isCorrectAnswer: false,
            time: 15
          })
        } else {
          stateGame.answers.push({
            isCorrectAnswer: true,
            time: 15
          })
        }
        if (data.gamePlay.conditionСheck(data.START_GAME, stateGame.answers)) {
          this.compareChecking();
        } else {
          this.showStats();
        }
      }
    }


    radioButtonRightBox.forEach((element) => {
      element.addEventListener(`click`, () => {
        if (element.checked) {
          isRadioButtonRightBox = true;
        }
        data.gamePlay.pushAnswer(stateGame, 1, userAnswer, element);

        compareChecked();
      });
    });

    radioButtonLeftBox.forEach((element) => {
      element.addEventListener(`click`, () => {
        if (element.checked) {
          isRadioButtonLeftBox = true;
        }
        data.gamePlay.pushAnswer(stateGame, 0, userAnswer, element)

        compareChecked();
      });
    });

    const buttonBack = this.element.querySelector(`.back`);
    buttonBack.addEventListener(`click`, () => {
      this.onButtonBackClick();
    });
  }
  // statResultCheck()
  onButtonBackClick() {}
  compareChecking() {}
  showStats() {}

}
