function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        }
    };//métodos nao seraoacoplados a cada obj estarao no proto
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
       // nome,
       // sobrenome,
        /*
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        }
        */
}



const p1 = criaPessoa('Carlos', 'Bifani');
p1.falar();

//Ou:
const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }
};
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }
};
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
};
const pessoaPrototype2 = {...falar};
const pessoaPrototype3 = Object.assign({}, falar, comer, beber);

function criaPessoa2(nome, sobrenome){
    return Object.create(pessoaPrototype3, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p2 = criaPessoa2('Andrea', 'Bifani');
console.log(p2);
p2.falar();
