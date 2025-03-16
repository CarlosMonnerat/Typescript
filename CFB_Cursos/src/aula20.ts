// HERANÇA

class Conta {
    numero: number;
    titular: string;
    
    constructor(numero: number, titular: string){
        this.numero = numero;
        this.titular = titular;
    };
};

//Herança
class ContaPF extends Conta {

};

class ContaPJ extends Conta {

}

const conta1 = new ContaPF(123456789, "Carlos");
const conta2 = new ContaPJ(987654321, "CFBCursos");


console.log(conta1.titular);
console.log(conta2.titular);