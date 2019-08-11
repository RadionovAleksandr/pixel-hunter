    import Intro from '../view/intro-view';
    import { showScreen } from '../utils';
    import greeteng from './greeting';

    export default () => {
        const intro = new Intro();
        intro.onButtonClick = () => showScreen(greeteng().element);
        return intro;
    }
    // showScreen(greeteng().element);
