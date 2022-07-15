const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Bifani'
};
//console.log(pessoa.nome);
//console.log(pessoa['nome']);
const pessoa2 = new Object();
pessoa2.nome = 'Carlos';
pessoa2.sobrenome = 'Bifani';
pessoa2.idade = 30;
pessoa2.falarNome = function(){
    console.log(`${this.nome} esta falando Oi!!!`);
};
pessoa2.getDataNasc = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa2.getDataNasc());
pessoa2.falarNome();

for (let chave in pessoa2){
//    console.log(chave);
}

const chave = 'nome';
//console.log(pessoa[chave]);

const p1 = new Object();
Object.assign(p1, pessoa);
console.log(p1.nome);

delete(p1.nome);
console.log(p1);

//Criando moldes:
//Factory functions - Constructor functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p2 = criaPessoa('Carlos', 'Bifani');
console.log(p2.nomeCompleto());

//Construtora:
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this); trava objeto
}
// new atrela o obj ao this e retorna o this
const p3 = new Pessoa('Carlos', 'Bifani');
console.log(p3);

Object.freeze(p1); //Trava valor do objeto