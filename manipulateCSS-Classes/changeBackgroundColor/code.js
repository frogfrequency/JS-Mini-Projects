function changeColor(){

    var selectedColor = document.getElementById('color-selector').value;
    document.styleSheets[0].cssRules[0].style.color=selectedColor;

}



