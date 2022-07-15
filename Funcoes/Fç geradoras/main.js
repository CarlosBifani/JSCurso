console.log('Geradora1:');
function* geradora1(){
    //stuffs
    yield 'Valor 1'; //yield retorna valor dependendo de cada chamada da fç
    //stuffs
    yield 'Valor 2';
    //stuffs
    yield 'Valor 3';
}
const g1 = geradora1();
//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);
for (let valor of g1) {
    console.log(valor);
}

console.log('Geradora2:');
function* geradora2() {
    let i = 0
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('Geradora3:');
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
console.log('Geradora4:');
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}
console.log('Geradora5:');

function* geradora5() {
    yield function() {
        console.log('vim do Y1');
    };
    //stuffs
    return function() {
        console.log('vim do Return');
    }
    yield function() {
        console.log('Vim do Y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
//adicionando return para execuçao