;
import greeting from './greeting';
import stats from "./stats";
import game2 from "./game-2";
import game1 from "./game-1";
import Intro from '../view/game-3-view';
import { showScreen } from '../utils';
import * as data from '../reducers';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };
    intro.showGame1 = () => {
        data.gamePlay.showGameScreen(game1, game2, intro)
    };

    // отрисовываем статистику
    intro.showStats = () => {
        showScreen(stats())
    }
    return intro;
}
