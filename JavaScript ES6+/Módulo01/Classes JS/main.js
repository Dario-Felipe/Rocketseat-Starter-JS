class List {
    constructor() {
        this.todos = [];
    }

    add(data) {
        this.todos.push(data);
        console.log(this.todos);
    }
}

class todoList extends List {
    constructor() {
        super();
        this.usuario = "Darinho";
    }

    mostrarUser() {
        console.log(this.usuario);
    }
}

let MinhaLista = new todoList();

MinhaLista.add("Olá mundo");
MinhaLista.mostrarUser();
