"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Resumo Rest e Spread by @dariofelipe
// REST --> Resto
// Rest em Objetos
var pessoa = {
  // Criando um objeto
  nome: "Darinho",
  idade: "19",
  Linguagem: "Javascript"
};

var nome = pessoa.nome,
    resto = _objectWithoutProperties(pessoa, ["nome"]); // Desestruturando, colocando em varíaveis 'nome',


console.log(nome); // o 'resto' é o REST, onde irá pegar todo o resto que não foi

console.log(resto); // pedido.

console.log("\n\n"); // Rest em Array

var array = [1, 2, 3, 4, 5]; // Criando array

var a = array[0],
    b = array[1],
    c = array.slice(2); // Desestruturando para variáveis e atribuindo o 'c' como o REST
// ou RESTO

console.log(a); // 1

console.log(b); // 2

console.log(c); // 3, 4, 5

console.log("\n\n"); // Rest em Funções

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  // Criando função soma, 'Params' é onde
  return params.reduce(function (total, next) {
    return total + next;
  }); // ficaria os parâmetros, mas ele pegará
} // todos que forem passados para ele.


console.log(soma(4, 4, 8, 9, 6)); // Soma realizada pelo reduce, já que o params é um array.

console.log("\n\n"); // SPREAD --> Propagar ou repassar informações.
// Spread em Array

var array1 = [1, 2, 3]; // Criando array 1

var array2 = [4, 5, 6]; // Criando array 2

var array3 = [].concat(array1, array2); // Unindo 'array 1' e 'array 2' num 'array3'

console.log(array3);
console.log("\n\n"); // Spread em Objetos

var usuario1 = {
  // Criando 'Objeto 1'
  nome: "Dário",
  idade: "19",
  Linguagem: "JavaScript"
};
console.log(usuario1);

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: "Felipe"
}); // Criando 'Objeto 2' e atribuindo todas a informações


console.log(usuario2); // do 'Objeto 1' e mudando o nome.
