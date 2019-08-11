import Intro from '../view/greeting-view';
import { showScreen } from '../utils';
import rules from './rules';

export default () => {
    const intro = new Intro();
    intro.onButtonClick = () => showScreen(rules().element);
    return intro;
}

// showScreen(rules().element);
