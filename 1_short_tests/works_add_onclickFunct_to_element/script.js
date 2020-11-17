function createDivWithOnClickFunction() {
    for (i=0; i<5; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'super-class';
        newDiv.id = 'i';
        var container = document.getElementById('container');
        container.appendChild(newDiv);

        // this is the version with .onclick

        newDiv.onclick = function(){console.log('this logFunction is triggered by .onclick')};
    }
}

function createDivWithOnClickFunction2() {
    for (i=0; i<5; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'super-class2';
        newDiv.id = 'i';
        var container = document.getElementById('container');
        container.appendChild(newDiv);

        // this is the version with addEventlistener

        newDiv.addEventListener("click", myScript);
    }
}

function myScript() {
    console.log('this logFunction is triggered by Eventlistener');

}


