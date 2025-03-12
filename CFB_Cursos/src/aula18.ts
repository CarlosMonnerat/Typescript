//P.O.O - Métodos de classes

class Computador {
    nome: string;
    ram: number;
    cpu: number;
    ligado: boolean;

    constructor(n: string, r: number, c: number){
        this.nome = n;          //'this' se refere à classe 'Computador'
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }

    info(): void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("------------------------");
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }
};

//Instanciar
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

comp1.ligar();
comp3.ligar();
comp1.desligar();

comp1.info();
comp2.info();
comp3.info();