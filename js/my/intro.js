import {
    makeElement,
    showScreen
} from './utils.js';
import greeting from './greeting.js';

const moduleContent = makeElement('section', 'intro', `
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
`, `intro`);

const asterisk = intro.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => showScreen(greeting));

export default moduleContent;