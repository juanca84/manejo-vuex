import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex desde cero desde un estado.',
    nombre: 'Juan Carlos',
    apellido: 'Condori Machicado',
    amigos:[],
    amigo: null 
  },
  mutations: {
    addAmigo(state){
      state.amigos = [state.amigo,...state.amigos]
    }
  },
  actions: {
    addAmigoAction(context) {
      context.commit('addAmigo');
    }
  },
  modules: {
  },
  getters: {
    mensaje (state) {
      return state.msg;
    },
    nombreCompleto (state) {
      return `${state.nombre} ${state.apellido}`
    }
  }
})
