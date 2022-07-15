/*
let a = 'A';
let b = 'B';
let c = 'C';

//const num = [1, 2, 3];
//[a, b, c] = num; // desestruturação
const letras = [b, c, a];
[a,b,c] = letras;
console.log(a, b, c);
*/
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const priNum = num[0]; // metodo normal
//console.log(num[0]);

//Atribuiçao desest.:
const[priNum, secNum] = num;
console.log(priNum, secNum);

// ou: ... rest, ... spread
const[primNum, segNum, ,...resto] = num;
console.log(resto);

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(numeros[1][2]);
//const [,[,,seis]] = numeros;
const [[,,,],[,,seis],[,,,]] = numeros;
console.log(seis);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);