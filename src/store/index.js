import Vue from "vue";
import Vuex from "vuex";
import Api from "../apis/Api";
import Csrf from "../apis/Csrf";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    materiasFil2:[],
    materias2:[],
    materias2Est:[],
    registerMate:[],
  },
  mutations: {
    async visualizationMutation(state, data) {
      state.materiasFil2 = data;
    },
    async materiasMutation(state, data) {
      state.materias2 = data;
    },
    async materiasEstMutation(state, data) {
      state.materias2Est = data;

    },
    async registerMateria(state, data) {
      state.registerMate = data;
    }
  },
  actions: {
    async visualization({commit},date){
      await Csrf.getCookie();
      const data2 = await Api.post("/datasMateriaEstDoc", date);
      const dataF = data2.data;
      console.log("Este es el data");
      console.log(dataF);
      commit('visualizationMutation', dataF)
    },
    async showMaterias23 ({commit},data){
      await Csrf.getCookie();
      const data2 = await Api.post("/datasMateria", data);
      const dataF = data2.data;
      this.materias = dataF;
      commit('materiasMutation', dataF)
    },
    async showMateriasEst23({commit},data){
      await Csrf.getCookie();
      console.log(data);
      const data2 = await Api.post("/datasMateriaEst", data);
      const dataF = data2.data;
      this.materiasEst = dataF;
      commit('materiasEstMutation', dataF)
      console.log(data2);
    },
    async registerMateriaEstudiante23({commit},data){
      await Csrf.getCookie();
      const data2 = await Api.post("/registerMateriaEst", data);
      commit('registerMateria',data2)
    }
    
    
    
  },
  modules: {}
});
