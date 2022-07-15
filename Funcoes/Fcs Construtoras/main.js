//Fc construtora -> objetos
//Fc fábrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    const id = '123'; //valido somente interno a fç.

    this.metodo = () => {
        console.log(this.nome + 'Sou um método');
    };
}//fc construtora => molde

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Carlos', 'Bifani');

console.log(p2.nome);
p2.metodo();