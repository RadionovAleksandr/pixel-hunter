const main = document.querySelector(`#main`);

const makeElement = (tagName, className, template) => {
    let domElement = document.createElement(tagName);
    let classNames = className.split(' ');
    classNames.forEach(function(classNamesItem) {
        domElement.classList.add(classNamesItem)
        domElement.innerHTML = template;
    });
    return domElement
}

const showScreen = (e) => {
    main.innerHTML = ``;
    main.appendChild(e);
};

export {
    makeElement,
    showScreen
};