<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <FooterCliente />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterCliente from '@/components/FooterCliente.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterCliente
  }
};
</script>

