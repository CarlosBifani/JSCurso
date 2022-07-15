const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
  //  console.log(elementos[i].tag);
  let { tag, texto } = elementos[i];
  let element = document.createElement(tag);
//element.innerHTML = texto;
//element.innerText = texto; 
  let textCreated = document.createTextNode(texto); //Nó de texto
  element.appendChild(textCreated);
  div.appendChild(element);
}

container.appendChild(div);