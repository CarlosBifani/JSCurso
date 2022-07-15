//Modo paisagem retorna True

function ePaisagem(largura, altura){

    if (largura > altura){
        return true;
    }else{
        return false;
    }
}
const quadro = ePaisagem(5, 3);

console.log(quadro);