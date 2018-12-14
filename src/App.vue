<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" class="logo">

      <vue-rangedate-picker @selected="onDateSelected" i18n="EN" />
      </vue-rangedate-picker>
      <div class="filters">
        <input class="search" type="text" v-model="searchQuery" placeholder="search...">
      </div>
    </div>

    <Payments :search="searchQuery" :dateRange="selectedDate"/>

    <footer>
      <a href="https://github.com/loama/britecore-codingTest" target="_blank">
        <img src="./assets/github-color.png" class="logo">
      </a>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRangedatePicker from 'vue-rangedate-picker'
import Payments from './components/Payments.vue'

Vue.use(VueRangedatePicker)

export default {
  name: 'app',
  components: {
    Payments,
    VueRangedatePicker
  },
  data () {
    return {
      searchQuery: '',
      selectedDate: null
    }
  },
  methods: {
    onDateSelected: function (daterange) {
      let start = new Date(daterange.start)
      start.setDate(start.getDate() - 1)

      let end
      if (daterange.end !== null) {
        end = new Date(daterange.end)
      } else {
        end = null
      }

      this.selectedDate = {
        start: start,
        end: end
      }
    }
  }
}
</script>

<style lang="sass">
  .noHighlight
    user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    -webkit-touch-callout: none
    -o-user-select: none
    -moz-user-select: none

  span.highlighted
    background-color: yellow

  body, html
    margin: 0
    padding: 0
    background: #FBFBFD

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: left
    color: #2c3e50

  #navbar
    position: fixed
    top: 0
    z-index: 10
    width: 100vw
    height: 48px
    background: #FFFFFF
    border-bottom: 1px solid #E0E0E0

    .logo
      height: 20px
      margin-top: 14px
      margin-left: 16px
      display: inline-block

    .calendar-root
      position: absolute
      top: 0
      right: 208px

      .input-date
        height: 36px
        line-height: 40px
        width: 220px
        border: none
        border-left: 1px solid #E0E0E0

      .calendar
        right: 0
        z-index: 10

    input.search
      position: absolute
      top: 0
      right: 0
      height: 48px
      outline: none
      border: none
      border-left: 1px solid #E0E0E0
      height: 32px
      padding: 8px
      width: 192px
      font-size: 14px

  footer
    height: 50px
    width: 100vw
    text-align: center

    img
      height: 48px
      margin-bottom: 16px
      -webkit-filter: grayscale(100%)
      filter: grayscale(100%)
      opacity: 0.2
      cursor: pointer
      transition: all 0.3s

      &:hover
        -webkit-filter: none
        filter: none
        opacity: 1

</style>
