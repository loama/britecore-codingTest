import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '../main'

Vue.use(Vuex)

const state = {
  message: 'abc',
  payments: []
}

const mutations = {
  updatePayments (state) {
    let payments = []
    db.collection('payments').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // doc.id, '=>', doc.data()
          payments.push(doc.data())
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    state.payments = payments  
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
