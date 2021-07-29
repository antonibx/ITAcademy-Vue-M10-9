<template>
  <div>
    <Header class="header" />
    <router-view class="animate__animated animate__zoomIn pagina" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }, mounted() {
    this.$store.dispatch('obtenirUsuaris');
    this.$store.dispatch('obtenirFotos');
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.v-fade-enter-active {
  transition: all 3s ease;
}
.v-fade-leave-active {
  transition: all 8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.v-fade-enter, .v-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.pagina {
  margin-bottom: 100px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}
</style>
