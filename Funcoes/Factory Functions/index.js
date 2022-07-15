function criaPessoa(nome, sobrenome, h, w){
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala: function(assunto){ //métodos
          //     return `${nome} está ${assunto}`;
          return `${this.nome} está ${assunto}`;//this é o p1 => p1.nome
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        altura: h,
        peso: w,
        // IMC(){
        //Getter
        get IMC(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Carlos', 'Bifani', 1.8, 83);
const p2 = criaPessoa('Andrea', 'Bifani', 1.50, 51);
//console.log(p1.IMC());
//console.log(p2.IMC());
console.log(p2.fala('falando sobre JS'));
//usando get imc passa a ser atributo
console.log(p1.IMC);
p1.nomeCompleto = 'Carlos Bifani'
console.log(p1.nomeCompleto);
console.log(p1.nome);