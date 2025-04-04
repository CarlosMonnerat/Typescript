//NAMESPACE
namespace Veiculos{
    export class Carro{
        nome: string;
        constructor(nome: string){
            this.nome = nome;
        }
    };
};

namespace Motores{
    class Motor{
        pot: number;
        constructor(pot: number){
            this.pot = pot;
        }
    };
};

const carro1 = new Veiculos.Carro("Rapido");

console.log(carro1.nome);

