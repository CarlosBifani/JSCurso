class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} ja ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} ja desligado`);
            return;
        }
        this.ligado = false;
    }
}
const d1 = new Dispositivo('TV');
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);

class Smartphone extends Dispositivo{
    constructor(nome, cor){
        super(nome); //Herança do pai
        this.cor = cor;
    }
}

const s1 = new Smartphone('iPhone', 'Preto');
console.log(s1);