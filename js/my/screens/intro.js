    import Intro from '../view/intro-view';
    // import { showScreen } from '../utils';
    // import greeteng from './greeting';

    export default () => {
        const intro = new Intro();
        intro.onButtonClick = () => console.log(`клик по кнопке загрузки греетинг`); //откуда element
        return intro;
    }
    console.log(intro);
    // showScreen(greeteng().element);
