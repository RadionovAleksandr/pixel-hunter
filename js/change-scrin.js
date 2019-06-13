const mainNode = document.querySelector(`#main`);
const body = document.querySelector(`body`);
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

let currentScreenNumber = 1;

const showScreen = (screenNumber) => {

    if (screenNumber < 0 || screenNumber > screensList.length - 1) {
        return;
    }

    mainNode.innerHTML = ``;
    currentScreenNumber = screenNumber;
    let currentTemplate = screensList[screenNumber]
        .content
        .cloneNode(true);
    mainNode.appendChild(currentTemplate);
};

showScreen(currentScreenNumber);

const arrowsButtons = document.querySelectorAll('arrows__btn');
const arrowsWrap = document.createElement('div');




document.body.appendChild(arrowsWrap);

const arrowButtons = document.querySelectorAll('.arrows__btn');

element.addEventListener(`click`, () => {
    showScreen(currentScreenNumber - 1);
});

element.addEventListener('click', () => {
    showScreen(currentScreenNumber + 1);
});

const onClickArrow = (event) => {
    console.log('повесил слушатель')
    if (event.keyCode === KEY_LEFT) {
        showScreen(currentScreenNumber - 1);

    } else if (event.keyCode === KEY_RIGHT) {
        showScreen(currentScreenNumber + 1);
    }
}

document.addEventListener(`keydown`, onClickArrow);
