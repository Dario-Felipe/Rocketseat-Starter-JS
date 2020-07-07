//Valor padrão  -> Resumo by dariofelipe
function soma(a = 0, b = 2) {
  return a + b; //Pode-se atribuir valores padrões para seus parâmetros
}

console.log(`O resultado da soma será: ${soma(1)}`); //Essa função retornará o valor 3, pois o valor de 'A' será 1 e o...
//valor padrão de 'B' será 2.
//     ------> Transformando para arrow function <------

const soma_arrow = (a = 0, b = 2) => a + b;

console.log(`O resultado da soma será: ${soma_arrow(1)}\n\n`); //Aqui se utiliza o conceito de arrow function e de um código mais limpo.
//Desestruturação

const usuario = {
  nome: "Dário",
  idade: "19",
  endereco: {
    //Aqui se tem um objeto, há formas de chama-lo, são algumas:
    rua: "Rua D",
    numero: "106"
  }
}; // 1º Forma - Sem desestruturação

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.endereco.rua);
console.log("\n\n"); //2º Forma - Com desestruturação

const {
  nome,
  idade,
  endereco: {
    rua
  }
} = usuario;
console.log(nome);
console.log(idade);
console.log(rua);
console.log("\n\n"); //3º Forma - Com desestruturação e função

function mostrar({
  nome,
  idade,
  endereco: {
    rua
  }
}) {
  return nome, idade, rua;
}

console.log(nome, idade, rua);
