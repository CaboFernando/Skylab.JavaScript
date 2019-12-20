mostraAlerta = () => {
    alert('Botão foi clicador');
};


var inputElement;
inputElement = document.getElementById('nome');
inputElement = document.getElementsByTagName('input')[0];
inputElement = document.getElementsByClassName('nome')[0];
inputElement = document.querySelector('div#app input');
inputElement = document.querySelector('input[name=nome]');
inputElement = document.querySelectorAll('input');
console.log(inputElement);

var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');
btnElement.onClick = mostra = () => {
    alert(inputElement.value);
};


var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://skylab.rocketseat.com.br/');
linkElement.setAttribute('title', 'Site da Skylab');

var textELement = document.createTextNode('Acessar site da Skylab');
linkElement.appendChild(textELement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

var inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement);

var boxElement = document.querySelector('.box');

boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = '#f00';
