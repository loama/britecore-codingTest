import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '../main'

Vue.use(Vuex)

const state = {
  message: 'abc',
  payments: []
}

const mutations = {
  addPayment (state, payment) {
    state.payments.push(payment)
  }
}

const actions = {
  newMessage (state, message) {
    state.message = message
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
