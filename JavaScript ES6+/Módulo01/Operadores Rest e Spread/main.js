    // Resumo Rest e Spread by @dariofelipe

    // REST --> Resto

// Rest em Objetos
const pessoa = {                          // Criando um objeto
    nome: "Darinho",
    idade: "19",
    Linguagem: "Javascript"
};
const {nome, ...resto} = pessoa;        // Desestruturando, colocando em varíaveis 'nome',
console.log(nome);                     // o 'resto' é o REST, onde irá pegar todo o resto que não foi
console.log(resto);                   // pedido.

console.log("\n\n");

        // Rest em Array
const array = [1, 2, 3, 4, 5];       // Criando array
const [a, b, ...c] = array;        // Desestruturando para variáveis e atribuindo o 'c' como o REST
                                   // ou RESTO
console.log(a);             // 1
console.log(b);            // 2
console.log(c);           // 3, 4, 5

console.log("\n\n");

        // Rest em Funções
function soma(...params) {                                // Criando função soma, 'Params' é onde
    return params.reduce((total, next) => total + next); // ficaria os parâmetros, mas ele pegará
}                                                       // todos que forem passados para ele.
console.log(soma(4, 4, 8, 9, 6));     // Soma realizada pelo reduce, já que o params é um array.

console.log("\n\n");

        // SPREAD --> Propagar ou repassar informações.

    // Spread em Array
const array1 = [1, 2, 3];                     // Criando array 1
const array2 = [4, 5, 6];                    // Criando array 2

const array3 = [...array1, ...array2];      // Unindo 'array 1' e 'array 2' num 'array3'
console.log(array3);

console.log("\n\n");

        // Spread em Objetos
const usuario1 = {                     // Criando 'Objeto 1'
    nome: "Dário",
    idade: "19",
    Linguagem: "JavaScript"
};
console.log(usuario1);

const usuario2 = {...usuario1, nome: "Felipe"}; // Criando 'Objeto 2' e atribuindo todas a informações
console.log(usuario2);                         // do 'Objeto 1' e mudando o nome.