<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" class="logo">
    </div>

    <Payments msg="This is the wowow branch"/>
  </div>
</template>

<script>
import Payments from './components/Payments.vue'

export default {
  name: 'app',
  components: {
    Payments
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
    position: absolute

    .logo
      height: 20px
      margin-top: 8px
      margin-left: 16px
      -webkit-filter: drop-shadow(0 1px 3px #D0D0D0)
      filter: drop-shadow(0 1px 3px #D0D0D0)
</style>
