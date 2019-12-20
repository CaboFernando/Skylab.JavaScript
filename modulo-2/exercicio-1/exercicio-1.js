
var btnElement = document.querySelector('#btn');

mostra = () => {
    let boxElement = document.createElement("div");
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#f00';

    boxElement.classList.add('box');

    document.body.appendChild(boxElement);
};