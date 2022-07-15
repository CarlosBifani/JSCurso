//Filter, map, reduce

const num = [5, 10, 50, 80, 1, 3, 5, 6, 7, 11, 15];
const numFilters = num.filter(callbackFilter);

function callbackFilter(value, index, array){
 /*   if (value>10){ //True embute valor no novo array
        return true;
    } else {
        return false;
    }*/
    return value > 10; //retorna Boolean
}
//console.log(numFilters);

//Ou destaa forma:

const numFilters2 = num.filter(function(valor){
    return valor > 10;
});

//console.log(numFilters2);

// Com arrow function

const numFilters3 = num.filter((valor) => {
    return valor > 10;
});
//console.log(numFilters3);

//Deixando a fc moderna:

const numFilters4 = num.filter(valor => valor > 10);
//console.log(numFilters4);

//const numFilters5 = num.filter((valor, index, array) => {
//    console.log(valor, index, array);
//    return valor > 10;
//});

//array cada indice é um objeto:

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 40 },
    { nome: 'Andrea', idade: 50 },
    { nome: 'Beatriz', idade: 55 }
];
//checar nomes com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter((objeto) => {
    return objeto.nome.length >= 5;
});
//console.log(pessoasNomeGrande);

const pessoasIdadeGrande = pessoas.filter((objeto) => {
    if(objeto.idade > 50){
        return objeto.nome;
    };
});
//console.log(pessoasIdadeGrande);

//checar nomes que terminam com 'a'

const nomesTerminadosA = pessoas.filter((objeto) => {
    const nome = objeto.nome.toString();
        if (nome.substring(nome.length,nome.length-1) === 'a'){
            return objeto.nome;
        }
});
console.log(nomesTerminadosA);

//Ou:

const nomeTerminacomA = pessoas.filter ((objeto) => {
    return objeto.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminacomA);