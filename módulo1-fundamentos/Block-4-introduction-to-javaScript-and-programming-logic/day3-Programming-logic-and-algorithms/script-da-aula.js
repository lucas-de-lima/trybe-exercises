// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.
/*
let num = 50;
let soma = 0;

for (let index = 0; index <= num; index +=1) {
    soma += index
}
console.log("A soma de 1 a 50 é: ", soma); 
*/
let quant = 0;
let num = 150;
for (let index = 2; index <= num; index +=1){
    if (index % 3 == 0) {
        quant += 1
    }
}
console.log(quant);