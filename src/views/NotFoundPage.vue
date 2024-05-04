<template>
  <div class="not-found-container">
    <h2><span style="color: #a90637;">&#x1F6AB;</span> 404</h2>
    <router-link v-if="isAuthenticated" to="/clientes" class="inicio-link">Inicio</router-link>
    <router-link v-else to="/login" class="inicio-link">Inicio</router-link>
  </div>
</template>

<script>
import { isAuthenticated } from '../services/auth';

export default {
  name: 'NotFoundPage',
  computed: {
    isAuthenticated() {
      return isAuthenticated();
    }
  }
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  font-size: 24px;
  text-align: center;
}

.not-found-container h2 {
  color: #a90637;
  line-height: 1;
  font-size: 75px;
}

.not-found-container h2 span {
  color: #a90637;
}

.inicio-link {
  margin-top: 5px;
  color: #a84762;
  text-decoration: none;
  cursor: pointer;
}

.inicio-link:hover {
  text-decoration: underline;
}
</style>
