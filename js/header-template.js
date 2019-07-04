import backBtnTemplate from "./back-btn-template";
import * as data from './reducers';
import stateGame from './data/state';

// console.log(data.gamePlay.getLivesTemplate(data.START_GAME, stateGame.answers))
// console.log(new Array(data.gamePlay.getLives(data.START_GAME, stateGame.answers))
//     .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
//     .join(``))
const head = () => {
    const headerTemplate =
        `<header class="header">
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${data.gamePlay.getLivesTemplate()}
  ${data.gamePlay.getLivesMissTemplate()}
  </div>
  </header>`
    return headerTemplate
}

export default head;
