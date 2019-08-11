import { showScreen } from '../utils';
import game2 from "./game-2";
import game3 from "./game-3";
import stats from "./stats";
import greeting from './greeting';
import Intro from '../view/game-1-view';
import * as data from '../reducers';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };
    intro.compareChecking = () => {
        data.gamePlay.showGameScreen(intro, game2, game3)
    };

    // отрисовываем статистику
    intro.showStats = () => {
        showScreen(stats())
    }
    return intro;
}
