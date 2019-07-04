import game1 from "./game-1";
import greeting from './greeting';
import Intro from '../view/rules-view';
import { showScreen } from '../utils';

export default () => {
    const intro = new Intro();
    intro.onButtonClick = () => showScreen(game1().element);
    intro.onButtonBackClick = () => showScreen(greeting().element)
    return intro;
}
