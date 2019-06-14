import {
    makeElement,
    showScreen
} from './utils';
import greeting from './greeting';

const moduleContent = makeElement('section', 'intro', `
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
`, `intro`);

const asterisk = moduleContent.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => showScreen(greeting));

export default moduleContent;