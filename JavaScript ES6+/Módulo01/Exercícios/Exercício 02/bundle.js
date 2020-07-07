// Segunda questão:
const usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //A) - 

const idades = usuarios.map(item => item.idade);
console.log(idades); //B) - 

const filtro = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade > 18);
console.log(filtro); //C) - 

const achar = usuarios.find(item => item.empresa == 'Google');
console.log(achar); //D) - 

usuarios.map(item => item.idade = item.idade * 2);
console.log(usuarios);
const filtrar = usuarios.filter(item => item.idade < 50);
console.log(filtrar);
