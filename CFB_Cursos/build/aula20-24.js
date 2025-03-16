"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    ;
    saldo() {
        return this.saldoConta;
    }
    ;
    deposito(valor) {
        this.saldoConta += valor;
    }
    ;
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
    info() {
        console.log(`Tipo...: Pessoa Física`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log(`--------------------------`);
    }
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
    info() {
        console.log(`Tipo...: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log(`--------------------------`);
    }
}
const conta1 = new ContaPF(1111111, "Carlos");
const conta2 = new ContaPJ(2222222, "CFBCursos");
console.log(conta1.saldo());
