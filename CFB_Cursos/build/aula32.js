"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    Veiculos.Carro = Carro;
    ;
})(Veiculos || (Veiculos = {}));
;
var Motores;
(function (Motores) {
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    ;
})(Motores || (Motores = {}));
;
const carro1 = new Veiculos.Carro("Rapido");
console.log(carro1.nome);
