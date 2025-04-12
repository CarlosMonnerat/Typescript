"use strict";
let av = [10, 20, 30, 40];
let [a, b, c, dd] = av;
console.log(a);
console.log(b);
console.log(c);
console.log(dd);
console.log("---------------");
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
const obj = {
    cor1: "preto",
    cor2: "rosa",
    cor3: "roxo",
    cor4: "branco"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1, nu2 = 0, nu3 = 0] = [10];
