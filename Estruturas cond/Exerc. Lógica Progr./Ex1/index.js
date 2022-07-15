//Fc que recebe 2 num e retorna o maior deles
function RetornaMaior(x, y){

    if (x > y) {
        return x
    }
    else {
        return y
    }
}

function RetornaMaior_2(x,y){
    return x > y ? x : y;
}

const RetornaMaior_3 = (x, y) => x > y ? x : y;
console.log(RetornaMaior_3(5, 3));
