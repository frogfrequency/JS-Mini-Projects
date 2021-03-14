// 201103 15:26: the full functionality of this "event" is currently
// not completely understood

function getCoordinates(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("output").innerHTML = coor;
}
