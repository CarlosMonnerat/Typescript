// TYPE ASSERTION
let valor_1: number;
let valor_2: string;
let valor_3: unknown;

valor_3 = 10;

//Type Assertion - Permite associar uma variável do tipo qualquer à um outo tipo de variável
valor_1 = <number>valor_3;
valor_2 = <string>valor_3;

console.log(typeof(valor_3));
console.log(valor_3);

console.log(typeof(valor_1));
console.log(valor_1);

console.log(typeof(valor_2));
console.log(valor_2);