function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
const p1 = new Produto('Gen', 11);

//Sobrescrevendo o método:
Camiseta.prototype.aumento = function(percent){
    this.preco = (1 + percent) * this.preco;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const c1 = new Camiseta('Regata', 10, 'Branca');
const caneca1 = new Caneca('M1', 10, 'Plast', 3);
c1.aumento(0.5);
caneca1.aumento(0.5);
caneca1.estoque = 10;
console.log(c1);
console.log(p1);
console.log(caneca1);
console.log(caneca1.estoque);