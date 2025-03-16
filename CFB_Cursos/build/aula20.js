"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    ;
}
;
class ContaPF extends Conta {
}
const conta1 = new ContaPF(123456789, "Carlos");
