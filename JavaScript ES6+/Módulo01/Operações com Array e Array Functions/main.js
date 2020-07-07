            //Operações com Array - Resumo by @dariofelipe

  //Criação de Array.
let array = [1, 3, 8, 12, 6];

  //Função 'Map': percorrer array.
let newArray = array.map(function (item) {    //Recebe o 'item' do array como parâmetro.
  return item * 2;                           //Como exemplo, fiz uma multiplicação x2 para cada item.
});
console.log(`O array x2 é: ${newArray}`);

  //Função 'Reduce': Reduz array em uma coisa só.
let soma = array.reduce(function (total, next) {   //Total é o parâmetro que vai "Totalizar o array".
  return total + next;                            //Next é o próximo item do array.
});
console.log(`A soma dos itens do array é: ${soma}`);  //Como por exemplo: uma soma entre os itens.

  //Função 'Filter': Filtra algo no Array.
let par = array.filter(function(item) {          //Recebe o 'item' do array como parâmetro.
  return item % 2 == 0;                         //Exemplo: Checar quais itens do array são pares
}); 
console.log(`São itens pares no array: ${par}`);

  //Função 'Find': Procura algo no array.
let acharNumero = array.find(function(item){   //Recebe o 'item' do array como parâmetro.
  return item == 8;                           //Exemplo: Vendo se existe algum item com valor 8.
}); 
console.log(`Número ${acharNumero} foi achado`)    //Econtrando o número 8.

              //Arrow Function e Função anônima
  //Criação de novo array
const array_func = [2, 4, 6, 8, 10];

  //Variável que recebe array
let array_arrow = array_func.map(item => item * 2); //Mesmo código que o map acima, mas utilizando o...
  //Recebe o 'item' do array como parâmetro e...   //conceito de arrow function.
 //retona o mesmo.                                //O 'array_arrow' recebe o array e utiliza o 'Map'... 
                                                 //para multiplicar seus itens por dois.
console.log(`\nNovo array x2 é: ${array_arrow}`)

  //Criando Objeto com array function
const pessoa = () => ({                     //Variável 'pessoa'recebe uma função anônima que contem...
  nome: "Dário",                           //um objeto,
  idade: "19",                            
  Linguagem: "JavaScript"                 
});                                         
console.log(pessoa());

  //Criando variável com função
const teste = () => {
  return "teste";              //Variável 'pessoa'recebe uma função anônima que contem...
}                             //uma função, não é muito recomendado, já que poderia...
console.log(teste());        //apenas criar uma função do modo tradicional. Ex:
                            //  function pessoa() { 
                           //      return 'teste'; 
                          //    }