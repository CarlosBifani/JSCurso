const num = [5, 10, 50, 80, 1, 3, 5, 6, 7, 11, 15];
//const numEmDobro = num.map(function(valor, index, array) {
   // console.log(valor, index, array);
//   return valor*2;
//});

const numEmDobro = num.map((valor, index, array) => {
    return valor*2;
});

//console.log(numEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 40 },
    { nome: 'Andrea', idade: 50 },
    { nome: 'Beatriz', idade: 55 }
];
//Retornar apenas uma string com o nome da pessoa
//Remova apenas a chave nome
//adicione uma chave id

const pessoasMapped = pessoas.map(valor => valor.nome);
//console.log(pessoasMapped);

const nomes = pessoas.map(objeto => objeto.nome) 
console.log(nomes);
const idades = pessoas.map(objeto => objeto.idade);
console.log(idades);
//retornando "idades"no array:
const idadesMap = pessoas.map(objeto => ({ idade: objeto.idade }));
console.log(idadesMap);

const comIDs = pessoas.map((objeto, index) => {
 //   objeto.id = index;
    const newObj = {...objeto}; //spread do objeto
    newObj.id = index;
    return newObj;
});
console.log(comIDs);
