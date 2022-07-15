const num = [5, 10, 50, 80, 1, 3, 5, 6, 7, 11, 15];
let total = 0;

num.forEach((valor, index, array) => {
    //console.log(valor, index, array);
    total += valor;
});
console.log(total);