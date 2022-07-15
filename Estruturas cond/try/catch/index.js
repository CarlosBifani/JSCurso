
function soma(x, y){
    if (typeof x !== 'number'|| 
        typeof y !== 'number') {
        //    throw new Error('nao numeros');
        throw('nao numeros');
    }
    return x + y;
}

try{
console.log(soma(1,'oi'));
}catch(e){
   console.log(e);
}


