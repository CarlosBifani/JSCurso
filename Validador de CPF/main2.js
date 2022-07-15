//It works like a charm!!!

cpf = '220.289.488-84';

cpfClear = cpf.replaceAll('.','').replace('-','');
//console.log(cpfClear);
let j = 10;
let ac = 0;

for (i=0; i<cpfClear.length - 2; i++) {
  a = cpfClear.substr(i,1) * j;
  ac = ac + a;
  j -= 1;
};
primeiroDig = 11 - (ac % 11);

if (primeiroDig === 9){
  primeiroDig = 0;
}
j = 11;
ac = 0;
for (i=0; i<cpfClear.length - 1; i++) {
  a = cpfClear.substr(i,1) * j;
  ac = ac + a;
  j -= 1;
}
segundoDig = 11 - (ac % 11);
if (segundoDig === 9){
  segundoDig = 0;
}

resultado = String(primeiroDig)+String(segundoDig);

if (cpfClear.substr(0,9)+resultado === cpfClear){
  console.log('Resultado Ok');
  }
else{
  console.log('Resultado NOk');
}
