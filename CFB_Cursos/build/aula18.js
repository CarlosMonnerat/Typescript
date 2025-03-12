"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, r, c) {
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado}`);
        console.log("------------------------");
    }
}
;
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
comp1.info();
comp2.info();
comp3.info();
