// mostraAlerta = () => {
//     alert('Botão foi clicador');
// };


// var inputElement;
// inputElement = document.getElementById('nome');
// inputElement = document.getElementsByTagName('input')[0];
// inputElement = document.getElementsByClassName('nome')[0];
// inputElement = document.querySelector('div#app input');
// inputElement = document.querySelector('input[name=nome]');
// inputElement = document.querySelectorAll('input');
// console.log(inputElement);

var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');
btnElement.onClick = mostra = () => {
    alert(inputElement.value);
};

