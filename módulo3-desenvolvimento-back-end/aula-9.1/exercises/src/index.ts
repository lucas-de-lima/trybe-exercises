import Student from "./exercicio-02";

const personOne = new Student('202001011', 'Maria da Silva');

personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());