const main = document.querySelector(`#main`);

const showScreen = (e) => {
    // debugger
    // console.log(e)
    main.innerHTML = ``;
    main.appendChild(e);
};

export { showScreen };