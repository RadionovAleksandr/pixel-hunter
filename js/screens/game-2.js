import { showScreen } from '../utils';
import game3 from "./game-3";
import game1 from "./game-1";
import stats from "./stats";
import greeting from './greeting';
import Intro from '../view/game-2-view';
import * as data from '../reducers';

export default () => {
    const intro = new Intro();
    intro.onButtonBackClick = () => {
        showScreen(greeting().element)
    };
    intro.showGame3 = () => {
        data.gamePlay.showGameScreen(game1, intro, game3)
    }
    intro.showStats = () => {
        showScreen(stats())
    }
    return intro;
}
