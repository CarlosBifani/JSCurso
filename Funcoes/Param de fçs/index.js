//arguments => array que sustenta param enviados
function funcao() {
    console.log(arguments[0]);
    let total = 0;
    for(let arg of arguments) {
        total += arg;
    }
    console.log(total);
};
funcao('Valor', 1, 2, 3); //Nao retorna erro armazena em 'arguments'!!!

funcao(1, 2, 3);

function soma(a,b) {
    b = b || 0
    console.log(a + b);
};
soma(2);

//Or:
function soma2(a,b=2) {
    console.log(a + b);
};
soma2(2);
soma2(2,10);//b=2 valor default se náo for passado param

function soma3(a,b=2, c=4) {
    console.log(a + b + c);
};

soma3(2,undefined,20);

function id({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
};
id({ nome: 'Carlos', sobrenome: 'Bifani' , idade: 42 })

function id2([ vl1, vl2, vl3 ]) { //desest. por array
    console.log(vl1, vl2, vl3);
};
id2(['Carlos', 'Bifani', 42]);

function conta(operador, acumulador, num) {
    console.log(operador, acumulador, num);
}
conta('+', 0, [1, 2, 3, 4, 5, 6]);

//Or:

function conta2(operador, acumulador, ...num) { //rest operator - sempre ultimo
    for (let numero of num) {
        if (operador === '+')
        acumulador += numero;
        //...
    }
    console.log(acumulador);
}
conta2('+', 0, 1, 2, 3, 4, 5, 6);

const conta3 = (operador, acumulador, ...num) => {
    console.log(arguments); // nao tem argumentos em arrow funct
}
conta3('+', 0, 1, 2, 3, 4, 5, 6);

const conta4 = (...args) => { //rest argument funciona
    console.log(args); // argumentos em arrow funct com rest operator
}
conta4('+', 0, 1, 2, 3, 4, 5, 6);