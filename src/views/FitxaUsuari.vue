<template>
  <div class="container mt-5">
    <p class="lead">Usuari {{usuari.id}}</p>
    <h1><router-link to="/usuaris" style="text-decoration: none">☚</router-link> {{usuari.name}}</h1>
    <table class="table table-striped table-success">
        <tbody>
            <tr>
                <th>Id</th>
                <td>{{usuari.id}}</td>
            </tr>
            <tr>
                <th>Nom</th>
                <td>{{UsuariMajus}}</td>
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
                <td>
                    <b>Carrer:</b> {{direccio.street}} <br>
                    <b>Habitació:</b> {{direccio.suite}} <br>        
                    <b>Ciutat:</b> {{direccio.city}} <br>
                    <b>Codi postal:</b> {{direccio.zipcode}} <br>
                    <b>Coordenades:</b> ({{geo.lat}}, {{geo.lng}})
                </td>
            </tr>
            <tr>
                <th>Mòbil</th>
                <td>{{usuari.phone}}</td>
            </tr>
            <tr>
                <th>Web</th>
                <td><a :href="web">{{usuari.website}}</a></td>
            </tr>
            <tr>
                <th>Companyia</th>
                <td>
                    <b>Nom:</b> {{companyia.name}} <br>
                    <b>Eslògan:</b> "{{companyia.catchPhrase}}"<br>
                    <b>BS:</b> {{companyia.bs}}
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Usuari',
    props: {
        prova: Object
    },
    data() {
        return {
            usuari: {},
            direccio: {},
            geo: {},
            companyia: {},
            web: ''
        }
    },
    mounted() {
        this.inicialitza();
        console.log("Query: "+this.$route.query.element);
        console.log("Prop: "+this.prova);
        this.$store.commit('visita', {dada: this.usuari, tipus: "user", procedencia: "MOUNTED"});
    },
    computed: {
      UsuariMajus() {
          console.log()
        if (this.usuari.name!=undefined) {
            return (this.usuari.name).toUpperCase()
        } else {
            return (this.usuari.name)
        }
      }
    },
    methods: {
        inicialitza() {
            this.usuari = this.$store.state.usuaris[this.$route.params.id-1];
            this.direccio = this.usuari.address;
            this.geo = this.usuari.address.geo;
            this.companyia = this.usuari.company;
            this.web = "http://"+this.usuari.website
        }
    }
}
</script>

<style scoped>
    td {text-align: left;}
</style>