//IIFE -> Immediately invoked function expression
//fc anonima
(function() {
    const nome = 'Carlos';
    console.log(nome);
}// nao faz parte do escopo global
)();

const nome = 'Bifani'; //escopo global
console.log(nome);

(function(idade, peso, altura) {
    console.log(idade, peso, altura);
}// chama os parametros imediatamente
)(41,83,1.80);