var checaIdade = function(idade) {
  return new Promise(function(resolve, reject) {
    if(idade >= 18) {
      resolve();
    }
     else {
      reject();
    }
  });
}

checaIdade(17)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });