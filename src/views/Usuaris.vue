<template>
  <div class="container mt-5">
    <h1><router-link to="/" style="text-decoration: none">☚</router-link> Usuaris</h1>
    
    <div v-for="(user, index) in llistausuaris" :key="index" class="mx-auto">
        <div>
            <router-link :to="{name: 'Usuari', params: {id: user.id} }">
                <a href="#" class="list-group-item list-group-item-action list-group-item-success">{{user.id}}. {{user.name}}</a>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Usuaris',
    data() {
        return {
            llistausuaris: []
        }
    },
    mounted() {
        this.llistausuaris = this.$store.state.usuaris;
    }
}

</script>