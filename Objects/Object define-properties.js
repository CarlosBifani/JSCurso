//defineProperty - Properties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco; // this -> publico
   // this.estoque = estoque; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //-> nao varia estoque
        configurable: true //chave reconfigurável
    });                    //false nao permite apagar chave
    Object.defineProperties(this,{
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: true, //-> nao varia estoque
            configurable: true 
        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: true, //-> nao varia estoque
            configurable: true 
        }
    });

    //Object.defineProperty(this, 'estoque', {
    //    enumerable: true, //mostra a chave
    //    value: estoque, //valor
    //    writable: true, //-> nao varia estoque
    //    configurable: true //chave reconfigurável
    //});
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 10;
console.log(Object.keys(p1));