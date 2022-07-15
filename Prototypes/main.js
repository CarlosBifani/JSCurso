function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => {
   //     return this.nome + ' ' + this.sobrenome;
   // }
}

//Pessoa.prototype === pessoa1.__proto__

//Ordem:
//pessoa1 --> Pessoa.prototype --> Object.prototype

Pessoa.prototype.Teste = 'Hello World!!!';
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Carlos', 'Bifani');
const pessoa2 = new Pessoa('Andrea', 'Bifani');
const data = new Date();

console.log(pessoa1);
console.log(data);

console.log(pessoa1.Teste);
console.log(pessoa1.nomeCompleto());
//_proto_ pai todos os obj vao herdar