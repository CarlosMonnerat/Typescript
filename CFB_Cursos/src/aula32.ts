//NAMESPACE
namespace Veiculos{
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    abstract class Carro{
        private nome: string;
        private motor: Motores.Motor;
        private cor: string;
        constructor(nome: string, motor: Motores.Motor, cor: Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        public ligar(){
            this.motor.liga = true;
        }
        public desligar(){
            this.motor.liga = false;
        }
        get minhaCor(){
            return this.cor;
        }
        get meuNome(){
            return this.nome;
        }
        get estouLigado(){
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPotencia(){
            return this.motor.potencia;
        }
    }

    export class CarroEsportivo extends Carro{
        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(6, 300), 2);
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


