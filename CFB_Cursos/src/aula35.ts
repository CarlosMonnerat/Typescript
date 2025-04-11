//DESESTRUTURAÇÃO

let av = [10,20,30,40];

//Sem desestruturação:
// let a, b, c, dd;
//     a = av[0];
//     b = av[1];
//     c = av[2];
//     dd = av[3];


//Usando a desestruturação:
let [a, b, c, dd] = av;

console.log(a);
console.log(b);
console.log(c);
console.log(dd);
console.log("---------------");

//Variações:
let [e, f, g, h] = [50, 60, 70, 80];
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log("---------------");

let [i, j, k, l] = ["vermelho", "amarelo", "azul", "verde"];
console.log(i);
console.log(j);
console.log(k);
console.log(l);
