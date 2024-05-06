<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Acessar</button>
      <span v-if="loginError" class="error-tooltip">{{ loginError }}</span>
    </form>
  </div>
</template>

<script>
import { isAuthenticated, login } from '../services/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      loginError: ''
    };
  },
  created() {

if (isAuthenticated()) {

      this.$router.push('/clientes');
    }
  },
  methods: {
    async login() {

      const success = await login(this.username, this.password);

      if (success) {
        
        this.$router.push('/clientes');
      } else {
        
        this.loginError = 'Usuário ou senha incorretos';
      }
    }
  }
};
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
  }

  .login-form {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
  }

  input[type="text"],
  input[type="password"],
  button {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    margin-top: 15px;
    background-color: #a90637;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #dc3545;
  }

  .error-tooltip {
    display: block;
    margin-top: 10px;
    color: #dc3545;
  }
</style>
