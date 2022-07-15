// div 3 Fizz
// div 5 Buzz
// div 3 e 5 FizzBuzz
// n div 3 e 5 retorna proprio n
// checar se n é um n

function ChecarParanaues(x){

    if (x%3 == 0 && x%5 == 0) {
        console.log('FizzBuzz');
    }else if (x%3 == 0) {
        console.log('Fizz');
    }else if (x%5 == 0) {
        console.log('Buzz');
    }else if (isNaN(x)){
        console.log('Não número');
    }else console.log(x);
}
const num = '16';
ChecarParanaues(num);