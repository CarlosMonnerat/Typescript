//P.O.O Classes - Método Construtor

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
};

//Instanciar
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);


console.log(comp1);
console.log(comp2);
console.log(comp3);