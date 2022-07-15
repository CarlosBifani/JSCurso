function MostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function Interval(){
    console.log(MostraHora());
}
//setInterval(Interval, 1000);
/*
setInterval(function(){
    console.log(MostraHora());
}, 1000);
*/
const timer = setInterval(function(){
    console.log(MostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);