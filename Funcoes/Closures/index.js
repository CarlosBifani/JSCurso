//Closure: define o escopo léxico da fç
function retornaFuncao(nome) {
    //const nome = 'Carlos';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Carlos');
const funcao2 = retornaFuncao('Bifani');
console.log(funcao());
console.log(funcao2());