alert("Bem vindo!!!");

function Calculadora(){
    const display = document.querySelector('.display');

    this.clearDisplay = () => {
        display.value = '';
    };
    this.deleteCharacter = () => {
        display.value = display.value.slice(0, -1);
    };
    this.inicia = () => {
        console.log('oi');
        this.clickBotoes();
        this.pressEnter();
    };
    this.pressEnter = () => {
        display.addEventListener('keypress', e => {
            if (e.keyCode === 13){
                this.realizaConta();
            }
        });
    };
    this.realizaConta = () => {
        let conta = display.value;

        try{
            conta = eval(conta);
            console.log(conta);

            if (!conta) { //conta inválida
                alert('Conta Inválida');
                return;    
            }
            
            display.value = conta;

        }catch(e) {
            alert('Conta Inválida');
            return;
        }
    };
    this.clickBotoes = () => {
        //this -> calculadora
        //document.addEventListener('click', function(e){
        document.addEventListener('click', e => {
        const e1 = e.target;
        //console.log(this); //-> this passa a ser document 

        if (e1.classList.contains('btn-num')){
            this.btnParaDisplay(e1.innerText);
           
        }
        if (e1.classList.contains('btn-clear')){
            this.clearDisplay();
           
        }
        if (e1.classList.contains('btn-del')){
            this.deleteCharacter();
           
        }
        if (e1.classList.contains('btn-eq')){
            this.realizaConta();
           
        }
        });//.bind(this)); //volta a usar o this do objeto calculadora
    };

    this.btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus();
    };
};//fc construtora => molde

const calc = new Calculadora();
calc.inicia();

