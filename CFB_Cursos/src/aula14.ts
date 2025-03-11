// Arrow Function

// Funções tradicionais são elevadas, o que significa que pode ser chamada antes de ser criada
teste();

function teste (): void {
    console.log("Função 1: Tudo certo!");
};

//Já as Arrow Functions não não são elevadas, por tanto NÃO podem ser chamadas antes de serem criadas
 const teste2 = () => {
    console.log("Função 2: Tudo certo também!");
};

teste2();