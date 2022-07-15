/*
0 <-> 11 = Bom dia!!!
12 <-> 17 = Boa tarde!!!
17 <-> 23 = Boa noite!!!
*/
/*
const hora = 20;

if (hora >=0 && hora <= 11) {
    console.log('Bom dia!!!');
}else if (hora >=12 && hora <= 17){
    console.log('Boa tarde!!!');
}else if (hora >=18 && hora <= 23){
    console.log('Boa noite!!!');
}else {
    console.log('Erro!');
}

//switch

const data = new Date('1981-04-09');
const diaSemana= data.getDay();
console.log(diaSemana);
let diaSemanastr;
diaSemanastr = diaSemana;

switch (diaSemanastr){

    case 0: diaSemanastr = 'Domingo';
        break;
    case 1: diaSemanastr = 'Segunda';
        break;
    case 2: diaSemanastr = 'Terça';
        break;
    case 3: diaSemanastr = 'Quarta';
        break;
    case 4: diaSemanastr = 'Quinta';
        break;
    case 5: diaSemanastr = 'Sexta';
        break;
    case 6: diaSemanastr = 'Sábado';
        break;
    default: diaSemanastr = 'Erro!';
        break;
}
console.log(diaSemanastr);

for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}


for (let i = 20; i >= 10; i -= 10){
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++){
    const par = i%2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maca', 'Pera', 'Uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`fruta: ${frutas[i]}`);
}

for (let index in frutas) {
    console.log(frutas[index]);
}
*/
/*
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Bifani',
    endereco: [
        'Alameda', 'Gregório'
    ]
};

for (let j in pessoa) {
   // console.log(pessoa[j]);
  //  console.log(pessoa.nome);
    console.log(j, pessoa[j]);
}

const nomes = ['Carlos Bifani', 'Andrea Malheiros'];

for(let valor of nomes){
    console.log(valor);
}

nomes.forEach(function(value, index, array) {
    console.log(value, index, array);
});

//For clássico - arrays, strings
//For in - strings, arrays, objetos
//For of - iteráveis, arrays, strings
*/
/*
let i = 0;
const nome = 'Carlos';

while (i <= 10) {
    console.log(i);
    i++;
}

i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}*/
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

//verfica 1o a condicao
while (rand != 10) {
    rand = random(min, max);
    console.log(rand);
}
rand = random(min, max);
//1o executa o cód e depois verifica a condicao
do {
    rand = random(min, max);
    console.log(rand);
} while(rand != 10);
