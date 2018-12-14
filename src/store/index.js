import Vue from 'vue'
import Vuex from 'vuex'

// import { db } from '../main'

Vue.use(Vuex)

const state = {
  message: 'abc',
  payments: []
}

function numberToMonthName(n) {
  let monthName
  switch (n) {
    case '01':
      monthName = 'January'
      break
    case '02':
      monthName = 'February'
      break
    case '03':
      monthName = 'March'
      break
    case '04':
      monthName = 'April'
      break
    case '05':
      monthName = 'May'
      break
    case '06':
      monthName = 'June'
      break
    case '07':
      monthName = 'July'
      break
    case '08':
      monthName = 'August'
      break
    case '09':
      monthName = 'September'
      break
    case '10':
      monthName = 'October'
      break
    case '11':
      monthName = 'November'
      break
    case '12':
      monthName = 'December'
  }
  return monthName
}

const mutations = {
  addPayment (state, payment) {

    payment.floatAmount = parseFloat(payment.amount).toFixed(2)
    payment.amount = payment.floatAmount.toString()

    payment.month = numberToMonthName(payment.date.split('-')[1]).substring(0, 3)
    payment.year = payment.date.split('-')[0]
    payment.day = payment.date.split('-')[2].split('T')[0]

    if (payment.day.charAt(0) === '0') {
      payment.day = payment.day.substring(1)
    }

    let time = payment.date.split('T')[1].split(':')

    if (time[0].charAt(0) === '0') {
      time[0] = time[0].substring(1)
    }

    payment.hour = time[0] + ':' + time[1]

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
