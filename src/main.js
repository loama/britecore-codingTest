import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: "AIzaSyAIPCPJk6vX9aW7GV9X23hXMyfP4xK4fsI",
  authDomain: "britecore-codingtest.firebaseapp.com",
  databaseURL: "https://britecore-codingtest.firebaseio.com",
  projectId: "britecore-codingtest",
  // storageBucket: "britecore-codingtest.appspot.com",
  // messagingSenderId: "46220338168"
})

const settings = {
  timestampsInSnapshots: true
}
firebase.firestore().settings(settings)

export const db = firebase.firestore()

Vue.config.productionTip = false

store.commit('updatePayments')

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
