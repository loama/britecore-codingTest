<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" class="logo">
      <div class="filters">
        <input class="search" type="text" v-model="searchQuery" placeholder="filter...">
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
    height: 80px
    background: #0575E6
    box-shadow: 0 1px 3px #888

    .logo
      height: 20px
      margin-top: 8px
      margin-left: 16px
      -webkit-filter: drop-shadow(0 1px 3px #D0D0D0)
      filter: drop-shadow(0 1px 3px #D0D0D0)

    .filters
      width: 100vw
      height: 24px
      text-align: right
      margin-bottom: 32px

      input.search
        outline: none
        border-radius: 2px
        box-shadow: inset 0 1px 3px #D0D0D0
        border: none
        height: 24px
        padding: 8px
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
