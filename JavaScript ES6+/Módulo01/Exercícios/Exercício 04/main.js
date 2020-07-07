// Quarta Questão

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

// A) -

const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);


//B) - 
const usuario = { 
  nome: "Diego", 
  idade: 23, 
  empresa: 'Rocketseat' 
};

const mostraInfo = ( (nome, idade) => (`${nome} tem ${idade} anos.`) )
console.log(mostraInfo(usuario.nome, usuario.idade));