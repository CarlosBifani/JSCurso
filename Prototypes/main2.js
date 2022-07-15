//new Object --> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__:Object.prototype
};
const objB = {
    chaveB: 'B'
    //__proto__:objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

////////////////////////////////
//Fcs Construtoras/////

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percent){
    this.preco = (1 - percent) * this.preco;
};

Produto.prototype.aumento = function(percent){
    this.preco = (1 + percent) * this.preco;
};

const p1 = new Produto('Camiseta', 50);
//p1.aumento(0.5);
p1.desconto(0.5);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(0.5);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    tamanho : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

//p3.preco = 100;
p3.aumento(0.5);

console.log(p3);