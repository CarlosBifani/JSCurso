//Escopo Léxico:

const nome = 'Carlos';

function falaNome() {
    console.log(nome);
}
falaNome('Carlos');

function usaFalaNome() {
    const nome = 'Carlos';
    falaNome();
}
usaFalaNome();