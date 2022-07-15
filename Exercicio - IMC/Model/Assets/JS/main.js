alert("Bem vindo!!!");

function meuEscopo () {
    //Utilizando classe form
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    /*
    form.onsubmit = function(evento) {
        alert(1);
        evento.preventDefault();
    };
*/
function recebeEventoForm (evento) {
    evento.preventDefault();
    const peso = form.querySelector('#input-teste-1');
    const peso_val = parseFloat(peso.value.replace(',', '.'));
    const altura = form.querySelector('#input-teste-2');
    const altura_val = parseFloat(altura.value.replace(',','.'));
    const resultado_val = Math.round(peso_val/(altura_val*altura_val));
    console.log(resultado_val);
    

        if (resultado_val < 18.5) {
           resultado.innerHTML = `<p>${resultado_val}`;
           resultado.innerHTML += `<p>Abaixo do peso`;
        }
        else if(resultado_val >=18.5 && resultado_val <24.9){
            resultado.innerHTML = `<p>${resultado_val}`;
            resultado.innerHTML += `<p>Peso normal`;
        }
        else if(resultado_val >=24.9 && resultado_val <29.9){
            resultado.innerHTML = `<p>${resultado_val}`;
            resultado.innerHTML += `<p>Sobrepeso`;
        }
        else if(resultado_val >=29.9 && resultado_val <34.9){
            resultado.innerHTML = `<p>${resultado_val}`;
            resultado.innerHTML += `<p>Ob grau 1`;
        }
        else if(resultado_val >=34.9 && resultado_val <39.9){
            resultado.innerHTML = `<p>${resultado_val}`;
            resultado.innerHTML += `<p>Ob grau 2`;
        }
        else if(resultado_val >=40){
            resultado.innerHTML = `<p>${resultado_val}`;
            resultado.innerHTML += `<p>Ob grau 3`;
        }

        else if (isNaN(resultado_val)){
            resultado.innerHTML = `<p>Entre com peso ou altura válidos`;
        }

        else {
            resultado.innerHTML = `<p>Entre com peso ou altura válidos`;
        }

}

form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();