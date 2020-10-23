// 201023: todo - understand the "this"(located inside eventlistener) better ... how 
// it works and can be used etc.

function generateEmptyPixels() {
    const inputSize = document.getElementById("size").value + 'px';
    const container = document.getElementById('container');
    container.style.width = inputSize;
    container.style.height = inputSize;

    let containerWidth = window.getComputedStyle(container).getPropertyValue('width');
    containerWidth = Number.parseInt(containerWidth.slice(0,-2));
    const pixelAmount = containerWidth*containerWidth / 100 ;
    for (i=0; i<pixelAmount; i++) {
        const newDiv = document.createElement('div');
            newDiv.style.backgroundColor = 'rgba(165, 253, 0, 0.164)';;
            newDiv.style.width = '10px';
            newDiv.style.height = '10px';
            newDiv.style.display = 'inline-block';
            newDiv.addEventListener("click", function() {
                let penColor = document.getElementById('pen-color-selector').value;
                this.style.backgroundColor = penColor;
            });
        container.appendChild(newDiv);
    }
}