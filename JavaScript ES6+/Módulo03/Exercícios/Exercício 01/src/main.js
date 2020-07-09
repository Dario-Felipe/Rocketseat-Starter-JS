// Primeira Questão: 

// A) - 

let count = 1;
const delay = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve(`${count++}s`) }, 1000);
});

const umPorSegundo = async (seg) => {
  while ( count <= seg ) {
    console.log(await delay());
  }
}
umPorSegundo(3);

// B) - 

import axios from 'axios';

// Esse código abaixo está certo, mas o intuito é reaproveitar código, por isso vamos a linha 34;

// class api {
//   static async getUserFromGithub (user) {
//     try {
//       const response = await axios.get(`https://api.github.com/users/${user}`);
//       console.log(response.data);
//     } catch (err) {
//       console.log("Usuário não existe!");
//     }
//   }
// }

class api {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
    } catch (err) {
      console.log("Usuário não existe!");
    }
  }

  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    } catch (err) {
      console.log("Repositótio não existe!");
    }
  }
}

api.getUserFromGithub('Dario-Felipe');
api.getUserFromGithub('Dario-Felipegg');

// C) -

// Esse código abaixo está certo, mas o intuito é reaproveitar código, por isso vamos a linha 34;

// class api {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);
//       console.log(response);
//     } catch (err) {
//       console.log("Repositótio não existe!");
//     }
//   }
// }

api.getRepositories('Dario-Felipe/Rocketseat-Starter-JS');
api.getRepositories('Dario-Felipe/Rocketseat-Starter-JSgg');

// D) - 

// Mesma resposta da letra A.