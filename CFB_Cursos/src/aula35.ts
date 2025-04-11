//DESESTRUTURAÇÃO

let av = [10,20,30,40];

//Sem desestruturação:
// let aa, bb, cc, dd;
//     aa = av[0];
//     bb = av[1];
//     cc = av[2];
//     dd = av[3];


//Usando a desestruturação:
let [aa, bb, cc, dd] = av;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
