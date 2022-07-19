alert("Bem vindo!!!");

class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.form');
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();
        if(camposValidos && senhasValidas){
            alert('Form enviado!!!');
            this.formulario.submit();
        }
    }
    camposValidos(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for(let campo of this.formulario.querySelectorAll('.validar')){
            if(!campo.value){
                const label = campo.previousElementSibling.innerText;
                this.criaErro(campo, `Campo ${label} nao pode estar em branco`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido!!!');
            return false;
        }
        return true;
    }
    validaUsuario(campo){
        const user = campo.value;
        let valid = true;
        if(user.length < 3 || user.length > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 a 12 caract');
            valid = false;
        }
        //console.log(user.match(/[A-Z0-9]/gi));
        if(!user.match(/^[a-zA-Z0-9]+$/g)) {//|| !user.match(/([u00C0-u00ff])\w+/g)){
            this.criaErro(campo, 'Usuario precisa conter apenas letras e/ou num');
            valid = false;
        }
        return valid;
    }
    senhasValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        
        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Campos senha e rep senha precisam estar entre 6 e 12 caract');
        }
        return valid;
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();