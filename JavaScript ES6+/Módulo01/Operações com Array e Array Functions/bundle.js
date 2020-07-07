"use strict";

//Operações com Array - Resumo by @dariofelipe
//Criação de Array.
var array = [1, 3, 8, 12, 6]; //Função 'Map': percorrer array.

var newArray = array.map(function (item) {
  //Recebe o 'item' do array como parâmetro.
  return item * 2; //Como exemplo, fiz uma multiplicação x2 para cada item.
});
console.log("O array x2 \xE9: ".concat(newArray)); //Função 'Reduce': Reduz array em uma coisa só.

var soma = array.reduce(function (total, next) {
  //Total é o parâmetro que vai "Totalizar o array".
  return total + next; //Next é o próximo item do array.
});
console.log("A soma dos itens do array \xE9: ".concat(soma)); //Como por exemplo: uma soma entre os itens.
//Função 'Filter': Filtra algo no Array.

var par = array.filter(function (item) {
  //Recebe o 'item' do array como parâmetro.
  return item % 2 == 0; //Exemplo: Checar quais itens do array são pares
});
console.log("S\xE3o itens pares no array: ".concat(par)); //Função 'Find': Procura algo no array.

var acharNumero = array.find(function (item) {
  //Recebe o 'item' do array como parâmetro.
  return item == 8; //Exemplo: Vendo se existe algum item com valor 8.
});
console.log("N\xFAmero ".concat(acharNumero, " foi achado")); //Econtrando o número 8.
//Arrow Function e Função anônima
//Criação de novo array

var array_func = [2, 4, 6, 8, 10]; //Variável que recebe array

var array_arrow = array_func.map(function (item) {
  return item * 2;
}); //Mesmo código que o map acima, mas utilizando o...
//Recebe o 'item' do array como parâmetro e...   //conceito de arrow function.
//retona o mesmo.                                //O 'array_arrow' recebe o array e utiliza o 'Map'... 
//para multiplicar seus itens por dois.

console.log("\nNovo array x2 \xE9: ".concat(array_arrow)); //Criando Objeto com array function

var pessoa = function pessoa() {
  return {
    //Variável 'pessoa'recebe uma função anônima que contem...
    nome: "Dário",
    //um objeto,
    idade: "19",
    Linguagem: "JavaScript"
  };
};

console.log(pessoa()); //Criando variável com função

var teste = function teste() {
  return "teste"; //Variável 'pessoa'recebe uma função anônima que contem...
}; //uma função, não é muito recomendado, já que poderia...


console.log(teste()); //apenas criar uma função do modo tradicional. Ex:
//  function pessoa() { 
//      return 'teste'; 
//    }
