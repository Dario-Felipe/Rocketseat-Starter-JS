// Terceira Questão
//A) - 
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10)); //B) -

const usuario = {
  nome: "Diego",
  idade: 23
};

const mostrarIdade = usuario => usuario.idade;

console.log(mostrarIdade(usuario)); //C) - 

let nome = "Diego";
let idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => (nome, idade);

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //D) - 

const promise = (resolve, reject) => resolve;

console.log(promise);
