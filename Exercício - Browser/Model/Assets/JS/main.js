const paragrafo = document.querySelector('.paragrafos'); // -> pega somente o primeiro
const paragrafos = paragrafo.querySelectorAll('p'); //Seleciona todos paragrafos dentro da div.

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for (let p of paragrafos){
    //console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}