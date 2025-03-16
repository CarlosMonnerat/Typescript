// HERANÇA

class Conta {
    protected numero: number;
    protected titular: string;
    
    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    };

    private gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000)+1;
    };

    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log(`--------------------------`);
    }
};

//Classes filhas da Classe Conta
class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string) {
        super(titular);           // 'super' faz referência ao constructor da classe pai. Repassa os parâmetros para a Classe Pai
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`); //'titular' pode ser acessada pela classe filha por ser do tipo 'protected'
        
    };
};

class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number,titular: string) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}`); 
    };
}

const conta1 = new ContaPF(1111111,"Carlos");
const conta2 = new ContaPJ(2222222,"CFBCursos");

// conta1.info();
// conta2.info();
