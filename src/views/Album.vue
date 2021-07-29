<template>
  <div class="container my-5">
    <h1><router-link to="/fotos" style="text-decoration: none">☚</router-link> Album {{album}}</h1>
    <div class="album mb-5">
        <div class="row">
            <div v-for="(foto, index) in llistafotos" :key="index" class="col-3 p-4">
                <div class="card bg-dark text-white shadow-sm mb-4 border border-black" style="height: 95%">
                    <p class="text-warning mt-3">Foto {{foto.id}}</p>
                    <img class="card-img-top mx-auto border border-muted" style="max-width: 150px"  :src="foto.thumbnailUrl">
                    <div class="card-body d-inline-flex flex-column justify-content-between">
                        <p class="card-text">{{foto.title}}</p>
                        <router-link :to="{name: 'Foto', params: {id: foto.id} }" class="btn btn-sm btn-outline-warning">Més</router-link>
                    </div>
                </div>
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
            llistafotos: [],
            album: ''
        }
    },
    mounted() {
        let vue = this;
        this.album = vue.$route.params.num; 
        this.$store.state.fotos.forEach(foto => { 
            if(foto.albumId==vue.album) {
                vue.llistafotos.push(foto)
            }});
    }
}

</script>