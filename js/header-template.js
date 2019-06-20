import {
    makeElement
} from "./utils";
import backBtnTemplate from "./back-btn-template";
import {
    START_GAME,
    getLives

} from "./data/functions.test";
import * as data from './data/game-data';

const head = () => {
        const headerTemplate = makeElement(`header`, `header`, `
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${new Array(3 - getLives(START_GAME, data.answers))  //количество потраченных жизней
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
    .join(``)}
  ${new Array(getLives(START_GAME, data.answers))  //количество сохраненных жизней
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>`);
  return headerTemplate
}

export default head;
