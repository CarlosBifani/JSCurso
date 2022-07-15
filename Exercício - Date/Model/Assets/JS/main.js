alert("Bem vindo!!!");

function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let data = new Date();

    function recebeEventoForm (evento) {
        evento.preventDefault();
        data = formataData(data);
        resultado.innerHTML += `<p>${data}`;
    }
        
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
    }
        
    function formataData(data){
        let diaSemanastr = data.getDay();
        const dia = zeroAEsquerda(data.getDate());
        const Mes = zeroAEsquerda(data.getMonth() + 1);
        const Ano = zeroAEsquerda(data.getFullYear());
        const Hora = zeroAEsquerda(data.getHours());
        const Minutos = zeroAEsquerda(data.getMinutes());
        const Segundos = zeroAEsquerda(data.getSeconds());
        
        switch (diaSemanastr){

            case 0: diaSemanastr = 'Domingo';
                break;
            case 1: diaSemanastr = 'Segunda';
                break;
            case 2: diaSemanastr = 'Terça';
                break;
            case 3: diaSemanastr = 'Quarta';
                break;
            case 4: diaSemanastr = 'Quinta';
                break;
            case 5: diaSemanastr = 'Sexta';
                break;
            case 6: diaSemanastr = 'Sábado';
                break;
            default: diaSemanastr = 'Erro!';
                break;
        }

       monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")

        return `${diaSemanastr},${dia} de ${monName [data.getMonth()]} de ${Ano}, ${Hora}:${Minutos}:${Segundos}`;
    }

    //resultado.innerHTML += `<p>${data}`;
    console.log(data);

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();