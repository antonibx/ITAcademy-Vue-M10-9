<template>
  <div class="container ">
    <img alt="Vue logo" src="../assets/logo.png" class="m-5">
    <div class="row d-flex justify-content-around">
      <Llista msg="Usuaris visitats" :llista="$store.state.usuarisVisitats" class="bg-primary" style="width:45%" />
      <Llista msg="Fotos visitades" :llista="$store.state.fotosVisitades" class="bg-warning" style="width:45%" />
    </div>
  </div>
</template>

<script>
import Llista from '@/components/Llista.vue'
export default {
  name: 'Home',
  components: {
    Llista
  },
  data() {
    return {
    }
  }
}
</script>
