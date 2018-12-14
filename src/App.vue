<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" class="logo">
      <div class="filters">
        <input class="search" type="text" v-model="searchQuery" placeholder="search...">
      </div>
    </div>

    <Payments :search="searchQuery"/>

    <footer>
      <a href="https://github.com/loama/britecore-codingTest" target="_blank">
        <img src="./assets/github-color.png" class="logo">
      </a>
    </footer>
  </div>
</template>

<script>
import Payments from './components/Payments.vue'

export default {
  name: 'app',
  components: {
    Payments
  },
  data () {
    return {
      searchQuery: ''
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
    z-index: 1
    width: 100vw
    height: 48px
    background: #FFFFFF
    border-bottom: 1px solid #E0E0E0

    .logo
      height: 20px
      margin-top: 14px
      margin-left: 16px
      display: inline-block

    .filters
      position: absolute
      top: 0
      right: 0
      height: 48px

      input.search
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
