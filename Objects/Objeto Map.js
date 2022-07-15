const pessoas = [
    { id:3, nome: 'Carlos' },
    { id:2, nome: 'Andrea' },
    { id:1, nome: 'Olivia' },
];

const novasPessoas = {};

for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas); //Ordem de saída é crescente

 const novasPessoas2 = new Map();
 for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas2.set(id, { ...pessoa });
}

//console.log(novasPessoas2);

novasPessoas2.delete(1);

//console.log(novasPessoas2.get(2));

for (const pessoa of novasPessoas2){
    console.log(pessoa);
}