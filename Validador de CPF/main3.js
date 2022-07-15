validaCPF = (cpf) => {
    cpfClear = cpf.replaceAll('.','').replace('-','');
    valida(cpfClear, 10, 2);
    resultado = String(digCalculado)
    valida(cpfClear, 11, 1);
    resultado += String(digCalculado);

    if (cpfClear.substr(0,9)+resultado === cpfClear){
        console.log('Resultado Ok');
        }
      else{
        console.log('Resultado NOk');
      }
}

valida = (cpf, j, k) => {
    let ac = 0;
    for (i=0; i<cpf.length - k; i++) {
        a = cpf.substr(i,1) * j;
        ac = ac + a;
        j -= 1;
      };

      digCalculado = 11 - (ac % 11);
      
      if (digCalculado === 9){
        digCalculado = 0;
      }
      return digCalculado;
}

validaCPF('220.289.488-84');
