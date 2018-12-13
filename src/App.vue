<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" class="logo">
    </div>

    <Blank msg="This is the wowow branch"/>
  </div>
</template>

<script>
import Blank from './components/Blank.vue'

export default {
  name: 'app',
  components: {
    Blank
  }
}
</script>

<style lang="sass">
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
    left: 0
    height: 56px
    width: 100vw
    background: #FFFFFF
    border-bottom: 1px solid #E0E0E0

    .logo
      height: 20px
      margin-top: 18px
      margin-left: 16px
</style>
