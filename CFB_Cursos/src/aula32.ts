//NAMESPACE
namespace Veiculos{
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    export abstract class Carro{
        nome: string;
        motor: Motores.Motor;
        cor: Cores;
        constructor(nome: string, motor: Motores.Motor, cor: Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = cor;
        }
    }
};

namespace Motores{
    class Turbo{
        private pot: number;
        constructor(pot: number){
            this.pot = pot;
        }
        get potencia (){
            return this.pot;
        }
    }
    export class Motor{
        private ligado: boolean;
        private cilindros: number;
        private pot: number;
        constructor(cilindros: number, pot: number, turbo ?: Turbo){
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado: boolean){
            this.ligado = ligado;
        }
        get liga(){
            return this.ligado;
        }
        get potencia(){
            return this.pot;
        }
    }
};

