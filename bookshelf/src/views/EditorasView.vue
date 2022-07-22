<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2> Gerenciamento de Editoras </h2>
      </div>
      <div class="form-input">
        <input
          id="ed" 
          type="text" 
          v-model="novo_editora" 
          placeholder="Editora..." 
        />
        <input 
          id="si" 
          type="url" 
          v-model="novo_site" 
          placeholder="Site..." 
        />
        <button @click="salvar"> Salvar </button>
      </div>
      <div class="list-editoras">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Editora </th>
              <th> Site </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td class="ide">{{ editora.id }}</td>
              <td>{{ editora.editoras }}</td>
              <td>{{ editora.site }}</td>
              <td class="acao">
                <button> Editar </button>
                <button @click="excluir(editora)"> Excluir </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>

#si {
  width: 30%;
  margin-left: 2px;
  margin-bottom: 20px ;
}

#ed {
  width: 30%;
  margin-right: 2px;
}

.ide {
  width: 25%;
}

.acao {
  width: 20%;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input button {
  margin-left: 2px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: #0064bb;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.list-editoras {
  display: flex;
  justify-content: center;
}

.list-editoras table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
