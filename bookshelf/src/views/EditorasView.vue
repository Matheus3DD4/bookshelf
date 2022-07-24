<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodosOsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodosOsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodosOsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
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
          v-model="editora.description"
          @keyup.enter="salvar"  
          placeholder="Editora..." 
        />
        <input 
          id="si" 
          type="url" 
          v-model="editora.site"
          @keyup.enter="salvar"  
          placeholder="Site..." 
        />
        <button id="botao" @click="salvar"> Salvar </button>
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
              <td>{{ editora.description }}</td>
              <td>{{ editora.site }}</td>
              <td class="acao">
                <button @click="editar(editora)"> Editar </button>
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

#botao {
  margin-left: 15px;
  width: 10%;
}

#botao {
  margin-left: 15px;
  width: 10%;
}

#si {
  width: 25%;
  margin-left: 2px;
  margin-bottom: 20px ;
}

#ed {
  width: 22%;
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
