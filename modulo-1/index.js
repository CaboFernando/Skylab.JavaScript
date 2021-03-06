// JavaScript

/*Variáveis*/
var nome = 'Carlos';
var idade = 24;
var peso = 85;
var humano = false;

var seres = ['Carlos', 'Ciclano'];

var ser = {
    nome = 'Carlos',
    idade = 24,
    peso = 85,
    humano = false
};

console.log(ser);

/*Operações matemáticas*/
var x = 10, y = 5;
var resultado = x + y;
console.log(resultado);


/*Funções*/
function soma(numero1, numero2) {
    return numero1 + numero2;
};

console.log(soma(1, 2));

/*Condicionais*/
function retornaSexo1(sexo) {
    if (sexo === 'M')
        return 'Masculino'
    if (sexo === 'F')
        return 'Feminino'
    else
        return 'Não Definido'
};
console.log(retornaSexo1('M'));

function retornaSexo2(sexo) {
    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Não Definido';
    };
};
console.log(retornaSexo2('F'));

/*Operadores lógicos*/
var sexo = 'M', idade = 24, masculino = sexo === 'M';
if (sexo === 'M' && idade >= 24) {
    console.log('AND');
}
if (sexo === 'M' || idade >= 24) {
    console.log('OR');
}
if (sexo != 'F') {
    console.log('NOT');
}

console.log(masculino);

/*Operadores ternários*/
var sexo = 'M';
var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

console.log(retorno);

/*Loops*/
for (var i = 0; i <= 100; i++) {
    console.log(i);
}

var j = 0;
while (j <= 100) {
    console.log(j);
    j++
}

/*Interval e rimeout*/

function exibeAlgo() {
    console.log('Alo mundo!');
}

setInterval(exibeAlgo, 1000);
setTimeout(exibeAlgo, 5000);