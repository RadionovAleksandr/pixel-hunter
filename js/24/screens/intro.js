import Intro from '../view/intro-view';
import {
    showScreen
} from '../utils';
// import greeting from './greeting';

export default () => {
    const intro = new Intro();
    intro.onButtonClick = () => console.log(`Клик по кнопке`);

    return intro;
};
