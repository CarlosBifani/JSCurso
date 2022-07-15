//Retorne a soma do dobro de todos pares
const num = [5, 10, 50, 80, 1, 3, 5, 6, 7, 11, 15];
const numPar = num.filter((valor) => {
    return valor%2 === 0;
}).map((valor) => {
    return valor * 2;
}).reduce((ac, valor) => {
    ac += valor;
    return ac;
}, 0);
console.log(numPar);


//Ou ainda:
const numP = num
.filter(valor => valor%2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => {
    return ac+valor;
}, 0);
console.log(numP);