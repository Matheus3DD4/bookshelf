<script>
import LivrosApi from "@/api/livros.js";
const livrosApi = new LivrosApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2> Gerenciamento de Livros </h2>
      </div>
      <div class="form-input">
        <input
          id="inp" 
          type="text" 
          v-model="livro.nome"
          @keyup.enter="salvar"  
          placeholder="Nome..." 
        />
        <input 
          id="inp" 
          type="text" 
          v-model="livro.isbn"
          @keyup.enter="salvar"  
          placeholder="ISBN..." 
        />
        <input 
          id="inp" 
          type="text" 
          v-model="livro.quantidade"
          @keyup.enter="salvar"  
          placeholder="Quantidade..." 
        />
        <input 
          id="inp" 
          type="text" 
          v-model="livro.preco"
          @keyup.enter="salvar"  
          placeholder="Preço..." 
        />
        <button id="button-29" role="button" @click="salvar"> SALVAR </button>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Livro </th>
              <th> ISBN </th>
              <th> Quantidade </th>
              <th> Preço </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td class="ide">{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td> {{ livro.isbn }}</td>
              <td> {{ livro.quantidade }} </td>
              <td> {{ livro.preco }} </td>
              <td class="acao">
                <button @click="editar(livro)"> Editar </button>
                <button @click="excluir(livro)"> Excluir </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
