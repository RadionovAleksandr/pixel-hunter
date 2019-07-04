export default class AbstractView {

    get template() {}
    get element() {
        // debugger
        if (this._element) {
            return this._element;
        }
        this._element = this.render();
        this.bind(this._element);
        return this._element;
    }
    render() {
        const div = document.createElement(`div`);
        div.innerHTML = this.template.trim();
        return div;
    }
    bind() {}
}
