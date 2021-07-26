<template>
  <div>
    <h1>Usuaris</h1>
        <div v-for="(user, index) in llistausuaris" :key="index" class="mx-auto">
            <div>
                <router-link :to="{name: 'Usuari', params: {id: user.id} }">
                    <a href="#" class="list-group-item list-group-item-action list-group-item-warning">{{user.id}}. {{user.name}}</a>
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Usuaris',
    data() {
        return {
            llistausuaris: [],
            url: 'http://jsonplaceholder.typicode.com/users'
        }
    },
    mounted() {
        let vue = this;
        axios.get(vue.url)
             .then(function(response){
                vue.llistausuaris = response.data
             })
    }
}

</script>