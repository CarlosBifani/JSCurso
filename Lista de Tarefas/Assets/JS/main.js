const inputTarefa = document.querySelector('.criar-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    //console.log(e);
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        clearInput();
    }
});

function clearInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textInput){
    const li = criaLi();
    li.innerText =  textInput;
    tarefas.appendChild(li);
    clearInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return;
    //console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
    clearInput();
});

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar'); -> cria classlist
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar-esta-tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma em JSON em string
   // console.log(tarefasJSON);
   localStorage.setItem('tarefas', tarefasJSON);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')){
       // console.log(el.parentElement);
       el.parentElement.remove();
       salvarTarefas();
    }
})

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //volta a ser array objeto JS

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();
