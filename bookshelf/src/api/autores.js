import axios from 'axios';
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get('https://bookshelf-gobetti.herokuapp.com/autores');
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://bookshelf-gobetti.herokuapp.com/autores${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post('https://bookshelf-gobetti.herokuapp.com/autores', autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://bookshelf-gobetti.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://bookshelf-gobetti.herokuapp.com/autores${autor.id}`,
      autor,
    );
    return response.data;
  }
}