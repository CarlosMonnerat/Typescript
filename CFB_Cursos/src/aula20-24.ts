// HERANÇA
    //Public: Acessado de qualquer lugar
    //Private: Acessado somente na sua própria classe
    //Protected: Acessado somente na sua própria classe e nas classes filhas

class Conta {
    protected numero: number;
    protected titular: string;
    private saldoConta: number;
    
    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    };

    private gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000)+1;
    };

    protected info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    };

    public saldo(): number {
        return this.saldoConta;
    };

    protected deposito(valor: number) {
        this.saldoConta += valor;
    };

    protected saque(valor: number) {
        if(valor >= this.saldoConta){
            this.saldoConta -= valor;
        }else{
            console.log(`Saldo insuficiente`);
        }       
    };
};

//Classes filhas da Classe Conta
class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string) {
        super(titular);           // 'super' faz referência ao constructor da classe pai. Repassa os parâmetros para a Classe Pai
        this.cpf = cpf;
    };
    info(){
        console.log(`Tipo...: Pessoa Física`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log(`--------------------------`);
    }
};

class ContaPJ extends Conta {
    cnpj: number;
    constructor(cnpj: number,titular: string) {
        super(titular);
        this.cnpj = cnpj;
    };
    info(){
        console.log(`Tipo...: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log(`--------------------------`);
    }
}

const conta1 = new ContaPF(1111111,"Carlos");
const conta2 = new ContaPJ(2222222,"CFBCursos");

console.log(conta1.saldo());

// conta1.info();
// conta2.info();
