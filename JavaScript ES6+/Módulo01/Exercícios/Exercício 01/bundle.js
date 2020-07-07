class usuario {
  constructor() {
    this.login = "";
    this.senha = "";
  }

  isAdmin() {
    return false;
  }

}

class admin extends usuario {
  constructor() {
    super();
  }

  isAdmin() {
    return true;
  }

}

const user = new usuario('email@teste.com', 'senha123');
const adm = new admin('email2@teste.com', 'senha123');
console.log(user.isAdmin()); // false

console.log(adm.isAdmin()); // true
