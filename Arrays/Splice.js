const nomes = ['Maria', 'Carlos', 'Andrea','Ze', 'Pipokinha', 'Manu'];

//nomes.splice(indice, n. el_delete, el1, el2...);
//pop:
//const removidos = nomes.splice(5,1); //remove ultimo
//removidos = nomes.splice(-1, 1);
//removidos = nomes.splice(0, Number.MAX_VALUE) //maior num possivel
//console.log(nomes, removidos);
//add:
//const adicionados = nomes.splice(3, 0, 'Luiz');
//console.log(nomes, adicionados);
//add/remove:
//const addRemove = nomes.splice(3, 2, 'Luiz', 'Otavio'); 
//console.log(nomes, addRemove);

//pop:
//const removidos = nomes.splice(-1,1);

//shift:
//const removidos = nomes.splice(0, 1);
//console.log(nomes, removidos);

//push:
//const pushed = nomes.splice(nomes.length,0,'Luiz');
//console.log(nomes, pushed);

//unshift:
const unshifted= nomes.splice(0,0,'Luiz');
console.log(nomes, unshifted);