import {
    makeElement,
    showScreen
} from '../utils';
import greeting from './greeting';

const intro = makeElement('section', 'intro', `
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
`, `intro`);

const asterisk = intro.querySelector(`.intro__asterisk`);
const introHeader = makeElement(`header`, `header`, ``)
const greetingHeader = makeElement(`header`, `header`, ``)

asterisk.addEventListener(`click`, () => showScreen(greetingHeader, greeting));

export {
    intro,
    introHeader
};
