// HERANÇA

class Conta {
    numero: number;
    titular: string;
    
    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    };

    gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000)+1;
    };
};

//Classes filhas da Classe Conta
class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string) {
        super(titular);           // 'super' repassa os parâmetros para a Classe Pai
        this.cpf = cpf;
    };
};

class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number,titular: string) {
        super(titular);
        this.cnpj = cnpj;
    };
}

const conta1 = new ContaPF(1111111,"Carlos");
const conta2 = new ContaPJ(2222222,"CFBCursos");


console.log(conta1.titular);
console.log(conta1.numero);
console.log(conta2.titular);
console.log(conta2.numero);