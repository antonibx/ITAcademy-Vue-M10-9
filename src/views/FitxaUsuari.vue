<template>
  <div>
    <h1>Usuari {{usuari.id}}: {{usuari.name}}</h1>
    <table class="table table-striped table-info">
        <tbody>
            <tr>
                <th>Nom</th>
                <td>{{usuari.name}}</td>
            </tr>
            <tr>
                <th>Usuari</th>
                <td>{{usuari.username}}</td>
            </tr>
            <tr>
                <th>Correu</th>
                <td>{{usuari.email}}</td>
            </tr>
            <tr>
                <th>Direcció</th>
                <td>{{usuari.address}}</td>
            </tr>
            <tr>
                <th>Mòbil</th>
                <td>{{usuari.phone}}</td>
            </tr>
            <tr>
                <th>Web</th>
                <td>{{usuari.website}}</td>
            </tr>
            <tr>
                <th>Companyia</th>
                <td>{{usuari.company}}</td>
            </tr>
        </tbody>
    </table>
    <router-link to="/usuaris" class="btn btn-primary mb-3">Torna</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Usuari',
    data() {
        return {
            usuari: {},
            url: 'http://jsonplaceholder.typicode.com/users'
        }
    },
    mounted() {
        let vue = this;
        axios.get(vue.url)
             .then(function(response){
                vue.usuari = response.data[vue.$route.params.id-1];
             });
    }
}

</script>