function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco; // this -> publico
   // this.estoque = estoque; 
    let estoquePriv = estoque    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        //value: estoque, //valor
        //writable: false, //-> nao varia estoque
        configurable: true, //chave reconfigurável
        get: function() {
            return estoquePriv;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
            throw new TypeError('Error!!!');
            }
            estoquePriv = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 'a'; //Erro!!!
p1.estoque = 5;
console.log(p1.estoque);

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('camiseta');
p2.nome = 'Tipo1';
console.log(p2.nome);
