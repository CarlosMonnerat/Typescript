// Interface e Funções
interface curso {
    titulo: string;
    des: string;
    numAula: number;
    maxAlunos ?: number;    //'?' Parrâmetro opcional
    inicarCurso ?(teste: string): void;
 };

 

 let curso_4: curso;
 let curso_5: curso;
 let curso_6: curso;


 curso_4 = { titulo: "TypeScript", des: "Curso de Typescript para iniciantes", numAula: 100, maxAlunos: 50, inicarCurso(t: string){}};
 curso_5 = { titulo: "JavaScript", des: "Curso de Javascript puro", numAula: 200, maxAlunos: 80 };
 curso_6 = { titulo: "C++", des: "Curso de C++ Avançado", numAula: 70 };

 console.log(curso_4);
 console.log(curso_5);
 console.log(curso_6);
