//return
//termina fç
function soma(a, b) {
    return a+b;
}

console.log(soma(5, 2));

function criaPessoa(nome, sobrenome){
    return { nome, sobrenome };
}
const p1 = criaPessoa('Carlos', 'Bifani');
console.log(p1);
const p2 = {
    nome: 'Carlos',
    sobrenome: 'Bifani'
};
console.log(p2);

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo('mundo!'));

//Utilidade:
function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadruplica(n){
    return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
//...

function criaMultiplicador(multiplicador){
    return function (n)  {
        return n * multiplicador;
    };
}
const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadruplica1 = criaMultiplicador(4);

console.log(duplica1(2));
console.log(triplica1(2));
console.log(quadruplica1(2));