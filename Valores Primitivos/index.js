/*
Primitivos (imutaveis) - string, number, bool,
undefined, null (bigint, symbol)
*/
let nome = 'Carlos';
nome[0] = 'K';
console.log(nome[0]);

/*
Ref mutavel - array, object, function
*/
let a = [1,2,3];
let b = a; //apontam para o mesmo local na mem
console.log(a, b);

a.push(4);
console.log(b);

//caso queira copiar sem referenciar:
b = [...a];
a.push(5);
console.log(a,b)

//Outro exemplo:
const pessoa1 = {
    nome:'Carlos',
    idade:40
};
const pessoa2 = pessoa1;
console.log(pessoa2);