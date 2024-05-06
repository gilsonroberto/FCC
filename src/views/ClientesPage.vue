<template>
  <div class="clientes-page">
    <h1>Lista de Clientes</h1>
    <cliente-table v-if="clients.length > 0" :clients="clients" @edit-client="fillForm" @update-table="fetchClients" />
    <p v-else>Nenhum cliente encontrado.</p>
  </div>
  <div class="form-container">
    <cliente-form ref="clienteFormRef" @form-submitted="updateTable" />
  </div>
</template>

<script>
import axios from 'axios';
import ClienteForm from '@/components/ClienteForm.vue';
import ClienteTable from '@/components/ClienteTable.vue';

export default {
  name: 'ClientesPage',
  components: {
    ClienteForm,
    ClienteTable
  },
  data() {
    return {
      clients: []
    };
  },
  created() {
    this.fetchClients();
  },
  methods: {

    async fetchClients() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API}/Cliente/Listar`);
        this.clients = response.data;
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    },
    async fillForm(index, cliente) {      
      this.$refs.clienteFormRef.fillForm(index, cliente);
    }
  }
};
</script>

<style scoped>

.clientes-page {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .clientes-page {
    max-width: 768px;
    margin: 0 auto;
  }
}

@media (min-width: 1280px) {
  .clientes-page {
    max-width: 1128px;
    margin: 0 auto;
  }
}
</style>
