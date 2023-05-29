// // Suponha que temos uma lista com marcas de carros:

// let cars = ['Saab', 'Volvo', 'BMW'];

// // Anteriormente para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria:

// let cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars[0]); // Saab
// console.log(cars[1]); // Volvo
// console.log(cars[2]); // BMW

// // Mas, agora que conhecemos o for, podemos melhorar o código para algo como:

// let cars = ["Saab", "Volvo", "BMW"];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }

// // Os dois códigos geram o mesmo resultado, mas o segundo é muito mais adequado. 
// // Pense que, em vez de 3 carros, essa lista possuísse 1000. No primeiro código, teriamos que escrever 1000 linhas!

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index +=1){
    console.log(groceryList[index]);
}