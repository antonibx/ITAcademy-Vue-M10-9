<template>
  <div class="container mt-5">
    <h1><router-link to="/" style="text-decoration: none">☚</router-link> Galeria</h1>
    <div class="album pt-4">
        <p>Escull l'àlbum que vols veure:</p>
        <div class="row">
            <div v-for="index in 100" :key="index" class="p-2 col">
                    <router-link :to="{name: 'Album', params: {num: index} }" class="btn btn-warning">{{index}}</router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Galeria',
    data() {
        return {
            llistafotos: []
        }
    },
    mounted() {
        this.llistafotos = this.$store.state.fotos;
    }
}

</script>