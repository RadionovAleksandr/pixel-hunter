const main = document.querySelector(`#main`);

const showScreen = (e) => {
    console.log(e)
    main.innerHTML = ``;
    main.appendChild(e);
};

// const makeElement = console.log(`makeElement`)

export { showScreen };

// const main = document.querySelector(`#main`);

// const makeElement = (tagName, className, template) => {
//     let domElement = document.createElement(tagName);
//     let classNames = className.split(' ');
//     classNames.forEach(function(classNamesItem) {
//         domElement.classList.add(classNamesItem)
//         domElement.innerHTML = template;
//     });
//     return domElement
// }

// const showScreen = (head, section) => {
//     main.innerHTML = ``;
//     main.appendChild(head);
//     main.appendChild(section);
// };

// export {
//     makeElement,
//     showScreen,
// };
