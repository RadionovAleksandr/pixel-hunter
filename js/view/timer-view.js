import AbstractView from './AbstractView';

export default class Timer extends AbstractView {
    constructor(time) { // разобраться и понять
        super();
        this.time = time;
    }

    get template() {
        return `<div class="game__timer">${this.time}</div>`;
    }
}