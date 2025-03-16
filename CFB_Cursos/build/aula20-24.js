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
        if (valor <= this.saldoConta) {
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
    ;
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
            console.log(`Depósito realizado com sucesso`);
        }
    }
    ;
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
            console.log(`Saque realizado com sucesso`);
        }
    }
    ;
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
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
            console.log(`Depósito realizado com sucesso`);
        }
    }
    ;
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
            console.log(`Saque realizado com sucesso`);
        }
    }
    ;
}
const conta1 = new ContaPF(1111111, "Carlos");
const conta2 = new ContaPJ(2222222, "CFBCursos");
conta2.deposito(2000);
console.log(conta2.saldo());
console.log("---------------");
conta2.saque(500);
console.log(conta2.saldo());
