<template>
  <div class="bg-dark rounded-pill m-3 pl-5 pr-5">
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <img src="https://www.legislaturaneuquen.gob.ar/imagenes/lupa.png" style=" height: 20px; margin-right: -30px; z-index: 2" alt="">
      <div class="dropdown" @mouseover="veure" @mouseout="veure">
        <input class="form-control mr-sm-2 text-center" type="text" placeholder="usuari" aria-label="Busca" v-model.trim="$store.state.cerca" @keyup="novaCerca">
        <div id="myDropdown" class="dropdown-content"> <!-- v-if="$store.state.cerca!=''" -->
          <div v-for="(element, index) in $store.state.resultats" :key="index">
            <router-link :to="{name: 'Usuari', params: {id: element.id}, props: {prova: element}, query: {element: element} }">{{element.name}}</router-link>
          </div>
          <div v-if="(($store.state.resultats).length==0)&&($store.state.cerca!='')" class="container alert alert-danger mt-3">No hi ha usuaris disponibles</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Cerca',
  data () {
    return {
    }
  },
  methods: {
    veure() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    novaCerca() {
      this.$store.dispatch('cercaUsuaris');
    }
  }
}
</script>


<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #e5d59d}

.show {display:block;}
</style>