;
// import header from '../header-template';
import greeting from './greeting';
// import stateGame from '../data/state';
// import { statsSection } from "./stats";
import game2 from "./game-2";
import game1 from "./game-1";
import * as data from '../reducers';
import Intro from '../view/game-3-view';
import { showScreen } from '../utils';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };
    intro.showGame1 = () => {
        showScreen(game1().element)
    };

    intro.statResultCheck()
        // отрисовываем статистику
    intro.showStats = () => {
        console.log(`показываю статистику`)
    }
    return intro;
}
