//const data = new Date(0); //01/01/1970 - Timestamp do Unix (marco zero)
/*const tresHoras = 60*60*3*1000;// (milisegundos)
const umDia = 60*60*24*1000;
const data = new Date(0 + tresHoras - umDia);
console.log(data.toString());
*/
//const data = new Date(2019, 03, 20, 15, 14, 27, 500);
//console.log(data); // Mês 03 -> Abril, ...
//const data = new Date('2019-04-20T20:20:59.100');
/*const data = new Date(1652130641074); // em ms
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da sema', data.getDay());
console.log(Date.now());
*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    let diaSemanastr = data.getDay();
    const dia = zeroAEsquerda(data.getDate());
    const Mes = zeroAEsquerda(data.getMonth() + 1);
    const Ano = zeroAEsquerda(data.getFullYear());
    const Hora = zeroAEsquerda(data.getHours());
    const Minutos = zeroAEsquerda(data.getMinutes());
    const Segundos = zeroAEsquerda(data.getSeconds());

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
    return `${diaSemanastr}/${Mes}/${Ano}/${Hora}:${Minutos}:${Segundos}`;
}
   
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);