// Estruturando uma HOF

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => { // o segundo parametro é uma arrow function
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   }); //os parenteses dos parametros fecham aqui, que doidera

  //Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:

//   const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//     return Math.random() * 100;
//   }
  
//   console.log(numberGenerator);

  //exemplo do vídeo

//   const sum = (num1, num2) => num1 + num2;

//   const sub = (num1, num2) => num1 - num2;

//   const multi = (num1, num2) => num1 * num2;

//   const div = (num1, num2) => num1 / num2;

//   const calculator = (func) => func(10, 5);

//   console.log(calculator(sum));
//   console.log(calculator(sub));
//   console.log(calculator(multi));
//   console.log(calculator(div));

  const acorda = () => `Acordando!!`;
  const cafe = () => `Bora tomar café!!`;
  const dormir = () => `Partiu dormir!!`;

  // Ao chamar a função doingThings:

    const doingThings = (eita) => eita()
    
    console.log(doingThings(acorda));
    console.log(doingThings(cafe));
    console.log(doingThings(dormir));

  // Ela deve retornar o valor do respectivo parâmetro
    


