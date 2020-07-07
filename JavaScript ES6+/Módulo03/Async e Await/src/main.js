// Async e Await

const minhaPromise = () => new Promise( (resolve, reject) => {          
    setTimeout( () => { resolve("OK!") }, 2000);                    // Criando Promise e setando para
});                                                                // para depois de 2 segundos ela ser
                                                                  // executada quando chamada.
const executar = async () => {
    console.log(await minhaPromise());                          // Fazendo a arrow function que será 
}                                                              // assincrona e chamará a promise. 
executar();         // Chamando a arrow function
                   // que chamará a função com a promise.