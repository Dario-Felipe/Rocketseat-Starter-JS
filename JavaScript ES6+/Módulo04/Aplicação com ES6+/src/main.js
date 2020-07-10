import api from './api';

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.setAttribute('id', 'loading');
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      this.listEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;
    if (repoInput.length === 0)
      return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);
      const { name, description, owner: { avatar_url }, html_url } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
      this.render();
    } catch (error) {
      alert("Repositório não existe!");
    }
    this.setLoading(false);
    this.inputEl.value = '';
  }

  render() {
    this.listEl.innerHTML = '';
    this.repositories.forEach(item => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', item.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(item.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(item.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', item.html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();