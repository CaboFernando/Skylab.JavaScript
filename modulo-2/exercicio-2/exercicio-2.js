var btnElement = document.querySelector('button.btn');
let count = 1;

btnElement.onclick = function () {
    let boxElement = document.createElement("div");
    boxElement.className = "box";
    boxElement.id = "box-" + count;
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.marginTop = '50px';
    boxElement.style.backgroundColor = '#f00';

    boxElement.addEventListener("mouseover", () => {
        let newColor = getRandomColor();

        boxElement.style.backgroundColor = newColor;
    });


    document.getElementById('app').appendChild(boxElement);
    count++;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}