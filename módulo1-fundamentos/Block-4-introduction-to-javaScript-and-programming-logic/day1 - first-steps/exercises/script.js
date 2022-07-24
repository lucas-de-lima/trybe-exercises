// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, 
// definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const num1 = 17;
const num2 = 23;

console.log('a soma dos valores é:', num1+num2);
console.log('a subtração dos valores é:', num1-num2);
console.log('a multiplicação dos valores é:', num1*num2);
console.log('a divisão dos valores é:', num1/num2);
console.log('a módulo dos valores é:', num1%num2);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const primeiroNum = 50;
const segundoNum = 80;

if (primeiroNum > segundoNum) {
    console.log('O primeiro numero é maior!');
} else{
    console.log('O segundo numero é maior');
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valor1 = 100;
const valor2 = 180;
const valor3 = 220;

switch (valor1){
    case (valor1 > valor2 && valor1 > valor3):
        console.log('O primeiro valor é o maio!')
    case (valor2 > valor1 && valor2 > valor3):
        console.log('O segundo valor é o maio!')
    case (valor3 > valor1 && valor3 > valor2):
        console.log('O terceiro valor é o maio!')

        default:('Nenhum valor ganhou :(');
        break;
}

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo,
//  e caso não seja nem positivo e nem negativo retorne "zero".

let paran = 25;

if (paran == (25)){
    console.log('positive');
} else{
    console.log('negative');
}


// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let lado1 = 0;
let lado2 = 60;
let lado3 = 70;
let soma = (lado1 + lado2 + lado3);

// switch (soma){
//     case (soma == 180):
//         console.log('A soma dos angulos é 180');
//     case (soma !== 180):
//         console.log('A soma dos angulos não é 180');
//         default: ('Todos os lados devem ser números válidos');
// }

// preciso voltar nesse código

if (soma = 180){
    console.log(true);
}else if (soma < 180 || soma > 180) {
    console.log(false)
} else {
    console.log('Os angulos devem ser números válidos')
}

