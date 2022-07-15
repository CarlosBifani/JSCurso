const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Bifani',
    endereco: {
        rua: 'Al Gregorio',
        numero: 80
    }
};

console.log(pessoa.nome);

//Atribuiçao via desestruturacao
const { nome, sobrenome, endereco: {rua, numero} } = pessoa;
console.log (nome, sobrenome, rua);