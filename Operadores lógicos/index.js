/*
Operadores de comparaçao:
>, >=, <, <=,
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

//console.log(10>5);

let num1 = 10; //number
let num2 = 10; //number
//const comp = num1 == num2; //nao e uma opçao
let comp = num1 === num2;
//console.log(comp); 

num1 = 10;
num2 = 30;

comp = num1 !== num2;
//console.log(comp);

//*************************************

/*
Operadores:
&& = AND
|| = OR
! = NOT
*/

const user = 'Carlos';
const password = '123456';

const sign_in = user === 'Carlos' && password === '123456';
//console.log(sign_in);

//console.log(!true);

//console.log('Carlos' && 0 && 'Andrea'); // retorna 0 (false)
//console.log('Carlos' && 1 && 'Andrea'); // retorna último elemento

/*
FALSY VALUES:
0, null, undefined, NaN
*/

//console.log('Carlos' && NaN && 'Andrea') // retorna NaN

function falaOi () {
    return 'Oi';
}

let vaiExecutar;
vaiExecutar = 'Ok'; //vai retornar Oi da fç.

console.log(vaiExecutar && falaOi());

console.log(0 || 'Carlos' || 'Andrea'); // retorna o primeiro verdadeiro

const corUsuario = 'red';
const corPadrao = corUsuario || 'preto'; // Se cor Usuario null retorna preto caso contrario retorna corUsuario

console.log(corPadrao);

