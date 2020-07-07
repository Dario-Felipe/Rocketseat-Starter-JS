
// Terceira Questão

//A) - 

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

//B) -
const usuario = { nome: 'Diego', idade: 23 };
const mostrarIdade = (usuario => usuario.idade);
mostrarIdade(usuario);
    
//C) - 

const nome = 'Diego';
const idade = 23;
const mostraUsuario = ( (nome = "Diego", idade = 18) => (nome, idade) );
mostraUsuario(nome, idade);
mostraUsuario(nome);

//D) - 

const promise = ( (resolve, reject) => resolve);