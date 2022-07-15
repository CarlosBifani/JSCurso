alert("Bem vindo!!!");

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnclear: document.querySelector('.btn-clear'),
        btndel: document.querySelector('.btn-del'),
        btneq: document.querySelector('.btn-eq'),

        clearDisplay(){
            this.display.value = '';
        },
        
        deleteCharacter(){
            this.display.value = this.display.value.slice(0, -1);
        },

        inicia(){
            this.clickBotoes(); //this usa para chamadas internas do obj.
        },

        realizaConta(){
            let conta = this.display.value;
            console.log(conta);

            try{
                conta = eval(conta);

                if (!conta) { //conta inválida
                    alert('Conta Inválida');
                    return;    
                }

                this.display.value = conta;

            }catch(e) {
                alert('Conta Inválida');
                return;
            }
        },

        clickBotoes(){
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
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
// arrow functions trava o this em quem chamou o objeto
const calculadora = criaCalculadora();
calculadora.inicia();