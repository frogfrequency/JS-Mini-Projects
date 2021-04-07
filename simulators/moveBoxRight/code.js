console.log("hello");

const field = document.getElementById('gameField');

const char = document.getElementById('character');

field.style.backgroundColor='yellow'; 

char.style.backgroundColor='black';



function moveRight() {
    char.style.left=parseInt(window.getComputedStyle(character).getPropertyValue("left")) + 1 + 'px';


}



setInterval(moveRight, 50)


