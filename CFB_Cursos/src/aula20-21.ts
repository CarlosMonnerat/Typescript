// HERANÇA

class Conta {
    numero: number;
    titular: string;
    
    constructor(numero: number, titular: string) {
        this.numero = numero;
        this.titular = titular;
    };
};

//Classes filhas da Classe Conta
class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, numero: number, titular: string) {
        super(numero, titular);           // 'super' repassa os parâmetros para a Classe Pai
        this.cpf = cpf;
    };
};

class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number, numero: number, titular: string) {
        super(numero, titular);
        this.cnpj = cnpj;
    };
}

const conta1 = new ContaPF(1111111, 123456789, "Carlos");
const conta2 = new ContaPJ(2222222, 987654321, "CFBCursos");


console.log(conta1.titular);
console.log(conta2.titular);