"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
}
;
const c1 = new Computador();
const c2 = new Computador();
const c3 = new Computador();
c1.nome = "Rapidão";
c2.nome = "Carão";
c3.nome = "Gamer";
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
