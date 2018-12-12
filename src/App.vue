<template>
  <div id="app">
    <Blank msg="This is the develop branch"/>
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
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
