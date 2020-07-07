// Quinta Questão

const arr = [1, 2, 3, 4, 5, 6]

//A) - 

const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
  return params.reduce((total, next) => (total + next));
}
console.log(soma(2 + 8 + 10 + 20));

//B) - 

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: "Gabriel"};
const usuario3 = {...usuario, nome: "Lontras"};
console.log(usuario2);
console.log(usuario3);

alert("oi");