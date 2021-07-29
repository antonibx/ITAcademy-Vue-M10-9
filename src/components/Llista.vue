<template>
  <div class="card p-4 border border-dark my-2" style="overflow-x: auto">
    <h1>{{ msg }}</h1>
    <table v-if="msg=='Usuaris visitats'" class="table table-striped table-dark">
      <thead class="table table-striped table-warning">
        <tr class="text-dark">
          <th>ID</th>
          <th>Nom</th>
          <th>Visites</th>
        </tr>
      </thead>
      <tbody v-for="(element, index) in llista" :key="index">
          <tr>
            <td >{{element[0].id}}</td>
            <td >{{element[0].name}}</td>
            <td>{{element[1]}}</td>
          </tr>
      </tbody>
    </table>

    <table v-else class="table table-striped table-dark">
      <thead class="table table-striped table-warning">
        <tr class="text-dark">
          <th>Album</th>
          <th>ID</th>
          <th>Titol</th>
          <th>Visites</th>
        </tr>
      </thead>
      <tbody v-for="(element, index) in llista" :key="index">
          <tr>
            <td>{{element[0].albumId}}</td>
            <td>{{element[0].id}}</td>
            <td>{{element[0].title}}</td>
            <td>{{element[1]}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Llista',
  props: {
    msg: String,
    llista: Array
  }
}
</script>
