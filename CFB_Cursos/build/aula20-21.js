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
    cpf;
    constructor(cpf, numero, titular) {
        super(numero, titular);
        this.cpf = cpf;
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, numero, titular) {
        super(numero, titular);
        this.cnpj = cnpj;
    }
    ;
}
const conta1 = new ContaPF(1111111, 123456789, "Carlos");
const conta2 = new ContaPJ(2222222, 987654321, "CFBCursos");
console.log(conta1.titular);
console.log(conta2.titular);
