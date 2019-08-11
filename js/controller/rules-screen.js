import Rules from '../view/rules-view';
import Router from "../router/application-router";

export default class RulesScreen {
    get element() {
        const rules = new Rules();
        rules.onButtonClick = () => Router.showGame();
        rules.onButtonBackClick = () => Router.showGreeting();
        return rules.element;
    };
}