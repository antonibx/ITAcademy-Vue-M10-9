<template>
  <div>
    <h1>Fotos</h1>
    <div class="row m-1">
        <div v-for="(foto, index) in llistafotos" :key="index" class="mx-auto">
            <div v-if="foto.albumId==1" class="m-1 mb-4">
                <img :src="foto.thumbnailUrl" :title="`${foto.albumId}/${foto.id}. ${foto.title}`" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Fotos',
    data() {
        return {
            llistafotos: [],
            url: 'http://jsonplaceholder.typicode.com/photos'
        }
    },
    mounted() {
        let vue = this;
        axios.get(vue.url)
             .then(function(response){
                vue.llistafotos = response.data
             })
    }
}

</script>