import axios from 'axios';
export default class EditorasApi {
  async buscarTodosOsEditoras() {
    const response = await axios.get('https://bookshelf-gobetti.herokuapp.com/editoras');
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(`https://bookshelf-gobetti.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post('https://bookshelf-gobetti.herokuapp.com/editoras', editora);
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`https://bookshelf-gobetti.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://bookshelf-gobetti.herokuapp.com/editoras/${editora.id}`,
      editora,
    );
    return response.data;
  }
}