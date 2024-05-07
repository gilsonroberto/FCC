<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Cliente ID</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>RG</th>
          <th>Data de Nascimento</th>
          <th>Sexo</th>
          <th>Estado Civil</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clients" :key="cliente.clienteId">
          <td>{{ cliente.clienteId }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.cpf }}</td>
          <td>{{ cliente.rg }}</td>
          <td>{{ formatDate(cliente.dataNascimento) }}</td>
          <td>{{ cliente.sexo }}</td>
          <td>{{ cliente.estadoCivil }}</td>
          <td>            
            <div class="actions-container">
              <span style="color: green; cursor: pointer;">
                <i class="fas fa-pencil-alt" :class="{ 'green-icon': cliente.editing }" @click="editClient(cliente)"></i>
              </span>
              <span style="color: red; cursor: pointer;">
                <i class="fas fa-trash-alt" :class="{ 'red-icon': cliente.deleting }" @click="deleteClient(cliente.clienteId)"></i>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { emitter } from './eventBus';

export default {
  name: 'ClientesPage',
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
        this.clients = response.data.map(cliente => ({
          ...cliente,
          editing: false,
          deleting: false
        }));
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    },

    editClient(index, cliente) {      
      this.$emit('edit-client', index, cliente);
    },

    async deleteClient(clientId) {
      console.log('Excluir cliente com ID:', clientId);

      try {
        await axios.delete(`${process.env.VUE_APP_API}/Cliente/Excluir/${clientId}`);
        
        this.clients = this.clients.filter(cliente => cliente.clienteId !== clientId);
        this.fetchClients();
      } catch (error) {
        console.error('Erro ao excluir cliente:', error);
      }
    },
    
    formatDate(date) {      
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = new Date(date).toLocaleDateString(undefined, options);
      return formattedDate;
    },
    handleClienteAtualizado() {
      this.fetchClients();
    },
  },
  mounted() {
    emitter.on('cliente-atualizado', this.handleClienteAtualizado);
  },
  
  beforeUnmount() {
    emitter.off('cliente-atualizado', this.handleClienteAtualizado);
  }
};
</script>

<style scoped>

.table-container {
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
  max-width: 100%; /* Define a largura máxima do contêiner */
}

table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #ddd;
}

.actions-container {
  display: flex;
  justify-content: center;
}

i {
  margin-right: 16px; 
}

</style>
