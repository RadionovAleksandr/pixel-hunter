import { showScreen } from '../utils';
// import stateGame from '../data/state';
import game3 from "./game-3";
// import { statsSection } from "./stats";
// import * as data from '../reducers';
// import statsTemplate from '../stats-template';
import greeting from './greeting';
import Intro from '../view/game-2-view';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };

    intro.showGame3 = () => {
        showScreen(game3().element)
    }
    intro.statResultCheck()
        // отрисовываем статистику
    intro.showStats = () => {
        console.log(`показываю статистику`)
    }
    return intro;
}
