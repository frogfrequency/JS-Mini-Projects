// when hovering over the generated fields. only the ones that havent been changed
// by the separate styling (bg-color yellow) do work. why?
function createDivWithOnClickFunction() {
    for (i=0; i<10; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'super-class';
        newDiv.id = 'i';
        if (i%2 === 0){
            newDiv.style.backgroundColor = 'yellow';
        }
        var container = document.getElementById('container');
        container.appendChild(newDiv);
    }
}