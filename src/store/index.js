import { createStore } from 'vuex';

export default createStore({
  state: {
    num: 10,
    usuaris: [],
    fotos: [],
    usuarisVisitats: [],
    fotosVisitades: [],
    cerca: '',
    resultats: []
  },
  mutations: {
    visita(state, nouElement) {
      console.log("Visita "+nouElement.procedencia+" "+nouElement.dada.name);
      let posicio = -1;
      let llista;
      switch(nouElement.tipus){
        case "user":
          llista = state.usuarisVisitats;
          llista.forEach((element, index) => {
            if(element[0].name==nouElement.dada.name) {
              element[1]=element[1]+0.5;
              posicio = index;
            }
          });
          if (posicio ==-1){
            llista.push([nouElement.dada, 0.5]);
          }
          break;
        case "photo":
          console.log("Visita: "+nouElement.dada.title);
          llista = state.fotosVisitades;
          llista.forEach((element, index) => {
            if(element[0].title==nouElement.dada.title) {
              element[1]++;
              posicio = index;
            }
          });
          if (posicio ==-1){
            llista.push([nouElement.dada, 1]);
          }
          break;
        default:
          alert("Alguna cosa no ha anat bé");
      }
    },
    omplirUsuaris(state, usuarisAccio) {
      state.usuaris = usuarisAccio;
    },
    omplirFotos(state, fotosAccio) {
      state.fotos = fotosAccio;
    },
    omplirResultats(state, resultatsAccio) {
      state.resultats = resultatsAccio;
    }
  },
  actions: {
    obtenirUsuaris: async function ({commit}) {
      const data = await fetch('http://jsonplaceholder.typicode.com/users');
      const usuaris = await data.json();
      commit('omplirUsuaris', usuaris);
    },
    obtenirFotos: async function ({commit}) {
      const data = await fetch('http://jsonplaceholder.typicode.com/photos');
      const fotos = await data.json();
      commit('omplirFotos', fotos);
    },
    cercaUsuaris({commit}) {
      let resultats = [];
      (this.state.usuaris).forEach(element => {
        let filtreText = element.name.toLowerCase().includes(this.state.cerca);
        if (filtreText) {
          resultats.push(element);
        }
      });
      commit('omplirResultats', resultats);
    }
  },
  modules: {
  }
});
