class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comento`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Carlos', 'Bifani');
const p2 = new Pessoa('Andrea', 'Bifani');
const p3 = new Pessoa('Enzo', 'Bifani');
const p4 = new Pessoa('Rafaella', 'Bifani');

//Equivale:
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const pe1 = new Pessoa2('Carlos', 'Bifani');

console.log(p1.falar());
console.log(pe1.falar());