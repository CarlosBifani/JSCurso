const produto = { nome: 'Caneca', preco: 18 };
//const outro = produto; -> copia e altera pr original

const outro = { ...produto, material: 'porcelana'}; //copia sem alterar original

outro.nome = 'Carlos';

console.log(produto);
console.log(outro);

//Ou:

const outro2 = Object.assign({}, produto, { material: 'porcelana' });
console.log(outro2);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));//Retorna property desc do Objeto
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer coisa'
});

produto.nome = 'oi'; //nao altera prop nome
console.log(produto.nome);

console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let entry of Object.entries(produto)){
    console.log(entry);
}