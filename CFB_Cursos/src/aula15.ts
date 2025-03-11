// Parâmetros REST com SPREAD

function fsoma (...n: number[]): number { //Podemos passar quantos valores quisermos sem a necessidade de deplaclar na função
    let s: number = 0;
    // n.forEach((en) => {
    //     s += en;
    // })
// Usando For Off
    for(let en of n){
        s += en;
    }
    return s;
};

console.log(fsoma(10, 20, 30, 40, 100)); 