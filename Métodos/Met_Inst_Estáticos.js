class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Instância
    aumentarVolume(){
        this.volume += 2;
    }
    //Instância
    diminuirVolume(){
        this.volume -= 2;
    }
    //Método estático
    static trocaPilha(){
        console.log('Pilhas Trocadas!!!');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//Nao utiliza new - nao tem acesso aos outros metodos volume..
ControleRemoto.trocaPilha();