import axios from 'axios';                // Importando Axios. Obs: yarn add axios

class Api {                                 // Criando classe apara abrigar metodo de busca utilizando
  static async getUserInfo(username) {     // async e await. 
    try {                                 // try e catch para tratamento de erros.
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (err) {
      console.log("Erro na Api");
    }
  }
}
Api.getUserInfo('Dario-Felipe');              // Chamando função para pesquisar utilizando API.
Api.getUserInfo('Dario-Felipedadaw');        // Erro proposital para teste do catch