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

}

const conta1 = new ContaPF(123456789, "Carlos");


//console.log(conta1);