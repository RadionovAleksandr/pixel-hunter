import {
    makeElement
} from "./utils";
import backBtnTemplate from "./back-btn-template";
import * as data from './data/game-data';

const head = () => {
    const headerTemplate = makeElement(`header`, `header`, `
    ${backBtnTemplate}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${data.gamePlay.getLivesTemplate()}
  ${data.gamePlay.getLivesMissTemplate()}
  </div>`);
    return headerTemplate
}

export default head;
