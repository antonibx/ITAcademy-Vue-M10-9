<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/fotos">Fotos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usuaris">Usuaris</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Busca">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
    </form>
  </div>
</nav>
    <!--nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/fotos">Fotos</router-link> |
      <router-link to="/usuaris">Usuaris</router-link>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" placeholder="Busca">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
      </form>
    </nav-->
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
