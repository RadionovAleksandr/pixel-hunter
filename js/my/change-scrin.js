const mainNode = document.querySelector(`#main`);

const showScreen = (element) => {
    mainNode.innerHTML = ``;
    mainNode.appendChild(element);
};

export { showScreen };



// import greetingScreen from './greeting.js';
// const IntroButton = document.querySelector('.intro__asterisk');
// IntroButton.addEventListener('click', () => {
//     showScreen(greetingScreen);
//     const greetingContinue = document.querySelector('.greeting__continue>span');
//     greetingContinue.classList.remove('visually-hidden');
// })