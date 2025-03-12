//P.O.O Classes - Método Construtor

class Computador {
    nome: string = "Computador 1";
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;

    constructor(n: string){
        this.nome = n;          //'this' se refere à classe 'Computador'
        console.log("Novo computador criado");
    }
};

//Instanciar
const comp1 = new Computador("Rapidão");
const comp2 = new Computador("Carão");
const comp3 = new Computador("gamer");


console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);