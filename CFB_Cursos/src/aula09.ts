//ENUM

enum dias{
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
};

// console.log(dias.domingo);
// console.log(dias['domingo']);
// console.log(dias[1]);

const d = new Date();
// console.log(d.getDate());
// console.log(dias[d.getDay()]);

enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
};

console.log(cores.branco);
console.log(cores['azul']);