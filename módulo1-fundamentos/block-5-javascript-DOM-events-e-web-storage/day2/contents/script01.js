// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.

console.log(document.getElementById('elementoOndeVoceEsta'));
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'red');

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // criando variavel que contém o elemento buscado
let novoParagrafo = document.createElement('p'); // criando variavel que contem o novo elemento criado (paragrafo <p></p>)
primeiroFilhoDoFilho.appendChild(novoParagrafo); // adicionou o novo elemento (paragrafo <p></p>)
document.getElementById('primeiroFilhoDoFilho').firstElementChild.innerHTML = 'Um texto aqui'; // buscou o novo paragrafo criado e adicionou o texto

console.log(document.getElementById('primeiroFilho').parentElement);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling.nextElementSibling.nextElementSibling);
console.log(document.getElementById('pai').children[2]);

// parte 2

// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

let buscaEle = document.getElementById('pai'); //busca elemento pai em uma variavel
let adEle = document.createElement('section'); // cria novo elemento em uma variavel
buscaEle.appendChild(adEle); //insere novo elemento no elemento pai

let buscaEle2 = document.getElementById('elementoOndeVoceEsta'); //busca elemento elementoOndeVoceEsta em uma variavel
let adEle2 = document.createElement('div');// cria novo elemento em uma variavel
buscaEle2.appendChild(adEle2);//insere novo elemento no elemento pai elementoOndeVoceEsta

let buscaEle3 = document.getElementById('primeiroFilhoDoFilho'); //busca elemento primeiroFilhoDoFilho em uma variavel
let adEle3 = document.createElement('div');// cria novo elemento em uma variavel
buscaEle3.appendChild(adEle3);//insere novo elemento no elemento pai primeiroFilhoDoFilho

// let buscaEle4 = document.getElementById('primeiroFilhoDoFilho')
console.log(document.getElementById('primeiroFilhoDoFilho'));

let coisaDoida = (document.getElementsByTagName('div'));
console.log(coisaDoida[1].parentElement.parentElement.childNodes[5]);