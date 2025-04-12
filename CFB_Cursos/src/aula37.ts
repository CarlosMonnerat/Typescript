//STATIC DE POO
// com 'static' é possível acessar um membro da classe diretamente, e não por uma instância da classe
import { Globais } from "./Globais";

//const g1 = new Globais(); Não é necessário instanciar 

console.log(Globais.teste);

Globais.teste = 10;

console.log(Globais.teste);
