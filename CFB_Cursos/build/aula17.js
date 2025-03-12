"use strict";
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(n) {
        this.nome = n;
        console.log("Novo computador criado");
    }
}
;
const comp1 = new Computador("Rapidão");
const comp2 = new Computador("Carão");
const comp3 = new Computador("gamer");
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
