<template>
  <form @submit.prevent="submitForm" class="cliente-form">
    <h2>Cliente</h2>
    <div class="input-row" :style="{ 'justify-content': mobile ? 'space-between' : 'space-evenly' }">
      <div class="input-container" :style="{ width: mobile ? 'calc(45% - 10px)' : 'calc(60% - 10px)' }">
        <label for="nome">*Nome:</label>
        <input type="text" id="nome" v-model="cliente.nome" @input="validateName" placeholder="Nome" required>
      </div>
      <div class="input-container" :style="{ width: mobile ? 'calc(45% - 10px)' : 'calc(25% - 10px)' }">
        <label for="cpf">*CPF:</label>
        <input type="text" id="cpf" v-model="cliente.cpf" @input="validateCPF" placeholder="CPF" required maxlength="14">
        <span v-if="cpfInvalid" class="error-tooltip">{{ cpfInvalid }}</span>
      </div>
    </div>
    <div class="input-row" :style="{ 'justify-content': mobile ? 'space-between' : 'space-evenly' }">
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(20% - 10px)' 
        }"
      >
        <label for="rg">RG:</label>
        <input type="text" id="rg" v-model="cliente.rg" @input="validateRG" placeholder="RG" maxlength="12">
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 5px)' : 'calc(20% - 10px)' 
        }"
      >
        <label for="dataExpedicao">Data de Expedição:</label>
        <input type="date" id="dataExpedicao" v-model="cliente.dataExpedicao">
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? '45%' : 'calc(20% - 10px)' 
        }"
      >
        <label for="orgaoExpedicao">Órgão de Expedição:</label>
        <input type="text" id="orgaoExpedicao" v-model="cliente.orgaoExpedicao" @input="validateOrgaoExpedidor" placeholder="Órgão de Expedição" maxlength="4">
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(5% - 10px)' 
        }"
      >
        <label for="uf">UF:</label>
        <input type="text" id="uf" v-model="cliente.uf" placeholder="UF" @input="validateUF" maxlength="2">
      </div>
    </div>
    <div class="input-row" :style="{ 'justify-content': mobile ? 'space-between' : 'space-evenly' }">
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? '48%' : 'calc(20% - 10px)' 
        }"
      >
        <label for="dataNascimento">*Data de Nascimento:</label>
        <input type="date" id="dataNascimento" v-model="cliente.dataNascimento" required>
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(40% - 10px)' : 'calc(20% - 10px)' 
        }"
      >
        <label for="sexo">Sexo:</label>
        <select v-model="cliente.sexo" id="sexo">
          <option disabled selected value="">Selecione uma opção</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Não Informar">Não Informar</option>
        </select>
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(20% - 10px)' 
        }"
      >        
        <label for="estadoCivil">Estado Civil:</label>
        <select v-model="cliente.estadoCivil" id="estadoCivil">
          <option disabled selected value="">Selecione uma opção</option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Separado">Separado</option>
          <option value="Divorciado">Divorciado</option>
          <option value="Viúvo">Viúvo</option>
          <option value="Amasiado">Amasiado</option>
        </select>
      </div>
    </div>
    <h2>Endereço Cliente</h2>
    <div class="input-row" :style="{ 'justify-content': mobile ? 'space-between' : 'space-evenly' }">
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(30% - 10px)' : 'calc(15% - 10px)' 
        }"
      >
        <label for="cep">CEP:</label>
        <input type="text" id="cep" v-model="endereco.cep" @input="validateCep" placeholder="CEP" maxlength="9">
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(60% - 10px)' : 'calc(60% - 10px)' 
        }"
      >
        <label for="logradouro">Logradouro:</label>
        <input type="text" id="logradouro" v-model="endereco.logradouro" placeholder="Logradouro">
      </div>
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(15% - 10px)' 
        }"
      >
        <label for="numero">Número:</label>
        <input type="text" id="numero" v-model="endereco.numero" @input="validateNumber" placeholder="Número">
      </div>
    </div>
    <div class="input-row" :style="{ 'justify-content': mobile ? 'space-between' : 'space-evenly' }">
      
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(30% - 10px)' 
        }"
      >
        <label for="complemento">Complemento:</label>
        <input type="text" id="complemento" v-model="endereco.complemento" placeholder="Complemento">
      </div>
      
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(30% - 5px)' 
        }"
      >
        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" v-model="endereco.bairro" placeholder="Bairro">
      </div>
      
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(15% - 5px)' 
        }"
      >
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" v-model="endereco.cidade" placeholder="Cidade">
      </div>
      
      <div 
        class="input-container" 
        :style="{ 
          width: mobile ? 'calc(45% - 10px)' : 'calc(5% - 5px)' 
        }"
      >
        <label for="ufEndereco">UF:</label>
        <input type="text" id="ufEndereco" v-model="endereco.uf" @input="validateUfEnd" placeholder="UF" maxlength="2">
      </div>
    </div>    
    <div class="button-container">
      <button type="submit" class="save-button">Salvar</button>
      <button type="button" class="clear-button" @click="resetForm">Limpar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios"
import { emitter } from './eventBus';
import { 
  validateName, 
  validateRG,
  validateOrgaoExpedidor,
  validateUF,
  validateUfEnd,
  validateCep,
  validateNumber,
  validateCPF,
  formatedCPF
} from '@/utils/validations'

export default {
  data() {
    return {
      cliente: {},
      endereco: {},
      mobile: false,
      cpfInvalid: ''
    };
  },
  mounted() {
    this.checkWindowWidth();
    window.addEventListener('resize', this.checkWindowWidth);
  },
  methods: {

    validateName() {
      this.cliente.nome = validateName(this.cliente.nome);
    },

    validateRG() {
      this.cliente.rg = validateRG(this.cliente.rg);
    },

    validateOrgaoExpedidor() {
      this.cliente.orgaoExpedicao = validateOrgaoExpedidor(this.cliente.orgaoExpedicao);
    },

    validateUF() {
      this.cliente.uf = validateUF(this.cliente.uf);
    },

    validateUfEnd() {
      this.endereco.uf = validateUfEnd(this.endereco.uf);
    },

    validateCep() {
      this.endereco.cep = validateCep(this.endereco.cep);
    },

    validateNumber() {
      this.endereco.number = validateNumber(this.endereco.number);
    },

    checkWindowWidth() {
      this.mobile = window.innerWidth < 768;
    },

    validateCPF() {
      let cpfIsValid = validateCPF(this.cliente.cpf)

      if (cpfIsValid) {
        this.cpfInvalid = '';
      } else {
        this.cpfInvalid = 'CPF inválido';
      }      

      this.cliente.cpf = formatedCPF(this.cliente.cpf);
    },

    async submitForm() {

      const clienteData = {
        clienteId: this.editing ? this.cliente.clienteId : 0,
        cpf: this.cliente.cpf.replace(/\D/g, ''),
        nome: this.cliente.nome,
        rg: this.cliente.rg.replace(/\D/g, ''),
        dataExpedicao: this.formatDate(this.cliente.dataExpedicao),
        orgaoExpedicao: this.cliente.orgaoExpedicao,
        uf: this.cliente.uf,
        dataNascimento: this.formatDate(this.cliente.dataNascimento),
        sexo: this.cliente.sexo,
        estadoCivil: this.cliente.estadoCivil,
        endereco: {
          enderecoId: this.editing ? this.cliente.endereco.enderecoId : 0,
          cep: this.endereco.cep.replace(/\D/g, ''),
          logradouro: this.endereco.logradouro,
          numero: this.endereco.numero,
          complemento: this.endereco.complemento,
          bairro: this.endereco.bairro,
          cidade: this.endereco.cidade,
          uf: this.endereco.uf
        }
      };

      try {
        let response;
        if (this.editing) {
          response = await axios.put(`${process.env.VUE_APP_API}/Cliente/Alterar`, clienteData);
        } else {
          response = await axios.post(`${process.env.VUE_APP_API}/Cliente/Adicionar`, clienteData);
        }
        console.log('Resposta do servidor:', response.data);
        emitter.emit('cliente-atualizado');
        this.resetForm();
      } catch (error) {
        console.error('Erro ao enviar dados para o servidor:', error);
      }
    },
    resetForm() {
      this.cliente = {};
      this.endereco = {};
      this.editing = false;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    },
    fillForm(cliente) {
      this.cliente = { ...cliente };
      this.endereco = { ...cliente.endereco };
      this.cliente.dataExpedicao = this.formatDate(cliente.dataExpedicao);
      this.cliente.dataNascimento = this.formatDate(cliente.dataNascimento);
      this.editing = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkWindowWidth);
  }
};
</script>

<style scoped>

.cliente-form {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .cliente-form  {
    max-width: 768px;
    margin: 0 auto;
  }
}

@media (min-width: 1280px) {
  .cliente-form  {
    max-width: 1120px;
    margin: 0 auto;
  }
}

.input-row {
  display: flex;
  flex-wrap: wrap;
}

.input-container {
  width: 100%;
  margin-bottom: 15px;
}

.input-container label {
  display: block;
  margin-bottom: 5px;
}

.input-container input[type="text"],
.input-container input[type="date"],
.input-container select {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-container select {
  background-color: #fff
}

@media (min-width: 768px) {
  .input-container input[type="text"],
  .input-container input[type="date"] {
    max-width: 750px;
    margin: 0 auto;
  }
}

@media (min-width: 1280px) {
  .input-container input[type="text"],
  .input-container input[type="date"]   {
    max-width: 1120px;
    margin: 0 auto;
  }
}

button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.save-button {
  background-color: #008040;
}

.save-button:hover {
  background-color: #02a051;
}

.clear-button {
  background-color: #a90637;
}

.clear-button:hover {
  background-color: #dc3545;
}

.save-button,
.clear-button {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.save-button:last-child,
.clear-button:last-child {
  margin-right: 0;
}
</style>

