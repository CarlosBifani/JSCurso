//Superclass
function Conta(ag, conta, saldo){
    this.ag = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(val){
    if(this.saldo < val){
        this.verSaldo();
        console.log('Saldo insuficiente!!!');
        return;
    }
    this.saldo -= val;
    this.verSaldo();
}

Conta.prototype.depositar = function(val){
    this.saldo += val;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.ag}/${this.conta} |`+
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
}

function ContaCorrente(ag, conta, saldo, limite){
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype); //Link entre Obj
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(val){

    if(val > (this.saldo + this.limite)){
        this.verSaldo();
        console.log('Saldo insuficiente!!!');
        return;
    }
    this.saldo -= val;
    this.verSaldo();
}

const conta1 = new Conta(11, 22, 10);
//console.log(conta1);
//conta1.depositar(10);
//conta1.sacar(15);
//conta1.sacar(10);

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(100);
cc.sacar(11);