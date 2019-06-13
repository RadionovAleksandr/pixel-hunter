export const createDomElement = (tagName, className, template) => {
    let domElement = document.createElement(tagName);
    let classNames = className.split(' ');
    classNames.forEach(function(classNamesItem) {
        domElement.classList.add(classNamesItem)
        domElement.innerHTML(template)
    });
    return domElement
}
