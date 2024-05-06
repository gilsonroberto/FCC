<template>
  <div class="nav-menu">
    <div class="logo-container">
      <img class="logo" src="https://www.fcc.org.br/fcc/wp-content/uploads/2018/08/fcc_HORIZONTAL_nova_duaslinhas.png" alt="FCC Logo">
    </div>
    <div class="mobile-menu" @click="showMenu">
      <i class="fa fa-bars"></i>
    </div>
    <div class="nav-items" :class="{ 'show-menu': showMobileMenu }" v-if="isClientPage">
      <ul class="nav-list">
        <li>Pag1</li>
        <li>Pag2</li>
        <li>Pag3</li>
      </ul>
    </div>
    <div class="user-info" v-if="isClientPage">
      <a href="#" @click="logout">Sair</a>
    </div>
  </div>
</template>

<script>
import { logout } from '../services/auth';

export default {
  data() {
    return {
      showMobileMenu: false,
      username: '',
      isClientPage: false
    };
  },
  mounted() {
    this.isClientPage = this.$route.path === '/clientes';
  },
  watch: {
    '$route'(to) {
      this.isClientPage = to.path === '/clientes';
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    
    logout() {
      logout();
      this.isAuthenticated = false;
      this.username = '';
      this.$router.push('/');
    },
  }
};
</script>

<style scoped>
.nav-menu {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: -70px;
}

.logo {
  height: 40px;
  width: auto;
}

.nav-items {
  display: flex;
  align-items: center;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-list li {
  color: #a90637;
  font-weight: 500;
  padding: 0 10px;
}

.mobile-menu {
  display: none;
}

.user-info a {
  text-decoration: none;
  color: #a90637;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .nav-items {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1;
  }

  .mobile-menu {
    display: block;
    cursor: pointer;
    margin-left: -50px
  }

  .show-menu .nav-items {
    display: flex;
    flex-direction: column;
  }

  .mobile-menu {
    display: block;
    cursor: pointer;
  }
}
</style>
