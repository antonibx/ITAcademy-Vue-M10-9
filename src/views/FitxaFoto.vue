<template>
  <div class="container mt-5">
    <p class="lead">Foto {{foto.id}}</p>
    <h1><router-link :to="{name: 'Album', params: {num: foto.albumId} }" style="text-decoration: none">☚</router-link> {{foto.title}}</h1>
    <table class="table table-striped table-warning">
        <tbody>
            <tr>
                <th>Album Id</th>
                <td>{{foto.albumId}}</td>
            </tr>
            <tr>
                <th>Foto Id</th>
                <td>{{foto.id}}</td>
            </tr>
            <tr>
                <th>Títol</th>
                <td>{{foto.title}}</td>
            </tr>
            <tr>
                <th>URL</th>
                <td><a :href="web">{{foto.url}}</a></td>
            </tr>
            <tr>
                <th>Thumbnail</th>
                <td><img :src="foto.thumbnailUrl" class="border border-dark"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Foto',
    data() {
        return {
            foto: {},
            web: ''
        }
    },
    beforeMount() {
        this.foto = this.$store.state.fotos[this.$route.params.id-1];
        this.web = this.foto.url;
        this.$store.commit('visita', {dada: this.foto, tipus: "photo"});
    }
}

</script>

<style scoped>
    td {
        text-align: left;
    }
</style>