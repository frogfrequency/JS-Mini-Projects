// default values taken from chameleon class
const defaultColor = 'black';
const defaultBgColor = 'lightgrey';

function changeColor() {
    // get chosen values for color and bg-color
    const selectedColor = document.getElementById('color-selector').value;
    const selectedBgColor = document.getElementById('bg-color-selector').value;

    // get all elements with the chameleon class applied
    // getElementsByClassName returns HTMLCollectionOf<Element> so we use Array.from
    // to convert it to an array, so we can use array methods on the const chameleonElements
    const chameleonElements = Array.from(document.getElementsByClassName('chameleon'));

    // change the color and bg-color of the elements
    //
    // we use bracket notation here to access the properties "color" and "background-color"
    // because we would not be able to access element.style.background-color => the dash in
    // "background-color" prevents us from accessing it this way. Javascript interprets this
    // as a subtraction: "element.style.background - color" and this does not work.
    //
    // To learn more about bracket notation and other ways to access object properties, read
    // more about it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    chameleonElements.forEach(element => {
        element.style["color"] = selectedColor;
        element.style["background-color"] = selectedBgColor;
    });
}

function reset() {
    const chameleonElements = Array.from(document.getElementsByClassName('chameleon'));
    chameleonElements.forEach(element => {
        element.style["color"] = defaultColor;
        element.style["background-color"] = defaultBgColor;
    });
}



