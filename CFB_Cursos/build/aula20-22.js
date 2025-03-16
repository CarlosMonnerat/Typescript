"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}`);
    }
    ;
}
const conta1 = new ContaPF(1111111, "Carlos");
