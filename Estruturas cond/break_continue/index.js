const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numeros) {

    if (num === 2) {
        continue; //pula pra proxima parte do cód
    }

    if (num === 7){
        break; //sai do laco de repetição
    }

    console.log(num);
}