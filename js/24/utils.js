const main = document.querySelector(`#main`);

const makeElement = (element) => {
    const div = document.createElement(`div`);
    div.innerHTML = element.trim();
    return div;
};

const showScreen = (e) => {
    main.innerHTML = ``;
    main.appendChild(e);
};

export {
    makeElement,
    showScreen
};