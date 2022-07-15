//Declaracao de fc (function hoisting)
/*
function helloWorld(){
    console.log('Hello world!!!');
}

helloWorld();
*/
//Or:
/*
helloWorld();

function helloWorld(){
    console.log('Hello world!!!');
}
*/
//First-class obj (Obj de 1a classe)
const souUmDado = function() {
    console.log('Sou um dado');
};
//souUmDado();//variavel passa a ser uma fç.

function execFunction(funcao) {
    funcao();
}
execFunction(souUmDado);

//Arrow function

const arrowFunction = () => {
    console.log('Sou uma funcao');
}
arrowFunction();

//Dentro de um obj
const obj = {
    falar: function() {
        console.log('Estou falando')
    }
};
obj.falar();

//Ou:

const obj2 = {
    falar () {
        console.log('Estou falando')
    }
};
obj2.falar();