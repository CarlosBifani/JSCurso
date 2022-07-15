const num = [5, 10, 50, 80, 1, 3, 5, 6, 7, 11, 15];
const total = num.reduce((acumulador, valor, index, array) => {
    acumulador += valor;
    return acumulador;
}, 0);//valor inicial do acumulador
console.log(total); //soma dos elementos reduziu array a um unico el

//Retorn valor par
const ePar = num.reduce((acumulador, valor, index, array) => {
    if(valor % 2 === 0)
        acumulador.push(valor); 
    return acumulador;
}, []); //acumulador inicial é um array vazio

console.log(ePar);

//Retorna array com dobro
const numDobro = num.reduce((acumulador, valor, index, array) => {
    acumulador.push(valor*2);
    return acumulador;
}, []);

console.log(numDobro);

const pessoas = [
    { nome: 'Luiz', idade: 25 },
    { nome: 'Carlos', idade: 40 },
    { nome: 'Andrea', idade: 50 },
    { nome: 'Beatriz', idade: 75 }
];

pessoaMaisVelha = pessoas.reduce((acumulador, valor, index, array) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);

//Ou:
for (i=0; i<=pessoas.length - 1; i++){
   // console.log(i);
    for (j=0; j<=pessoas.length - 1; j++){
    //    console.log(j);
        if (pessoas[j].idade > pessoas[i].idade){
            aux = pessoas[j];
        }
    }
}

//console.log(parseInt(pessoas[0].idade));
console.log(aux);
