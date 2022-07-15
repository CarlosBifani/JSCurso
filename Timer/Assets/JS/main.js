const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let time;

iniciar.addEventListener('click', function(event){
    time = setInterval(function(){
        timer.innerHTML = MostraHora();
    }, 1000);
});

pausar.addEventListener('click', function(event){
    clearInterval(time);
});

zerar.addEventListener('click', function(event){
    clearInterval(time);
    timer.innerHTML = '00:00:00'
});

function MostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

