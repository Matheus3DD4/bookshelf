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
        <h2>Gerenciamento de Editoras</h2>
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
        <button id="button-save" role="button" @click="salvar">SALVAR</button>
      </div>
      <div class="list-editoras">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Editora</th>
              <th>Site</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td class="ide">{{ editora.id }}</td>
              <td>{{ editora.description }}</td>
              <td>{{ editora.site }}</td>
              <td class="acao">
                <button id="button-ee" @click="editar(editora)">Editar</button>
                <button id="button-ee" @click="excluir(editora)">
                  Excluir
                </button>
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
  width: 25%;
  margin-left: 2px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.867);
}

#ed {
  width: 22%;
  margin-right: 2px;
  background-color: rgba(255, 255, 255, 0.867);
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
